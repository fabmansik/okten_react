import axios, {AxiosError, AxiosResponse} from "axios";
import {carsURL, urls} from "../constants";
import {authService} from "./authService";
import {router} from "../index";

type IRes<DATA> = Promise<AxiosResponse<DATA>>
export const apiService = {
    cars: axios.create({baseURL: carsURL})
}

apiService.cars.interceptors.request.use(req => {
    const access = authService.getAccessToken();
    if (access) {
        req.headers.Authorization = `Bearer ${access}`
    }
    return req
})
let isRefreshing = false
let waitList:IWaitList[] = []
apiService.cars.interceptors.response.use(
    res => {
        return res
    },
    async (error: AxiosError) => {
        const originalRequest = error.config;
        if (error.response.status === 401) {
            if (!isRefreshing) {
                isRefreshing = true
                try {
                    await authService.refresh()
                    isRefreshing = false
                    afterRefresh()
                    return apiService.cars(originalRequest)
                } catch (e) {
                    authService.deleteTokens()
                    isRefreshing = false
                    router.navigate('/login?SessionExpired=true')
                    return Promise.reject(error)

                }
            }
            if (originalRequest.url === urls.auth.refresh){
                return Promise.reject(error)
            }
            return new Promise( resolve => {
                subscribeToWaitList(()=>resolve(apiService.cars(originalRequest)))
            })
        }
        return Promise.reject(error)
    }
)
type IWaitList = ()=>void
const subscribeToWaitList=(cb:IWaitList):void=>{
    waitList.push(cb)
}
const afterRefresh = ():void => {
    while (waitList.length){
        const cb = waitList.pop()
        cb()
    }
}
export type {
    IRes
}