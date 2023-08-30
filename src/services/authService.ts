import {IAuth} from "../interfaces/AuthInterface";
import {IUser} from "../interfaces/UserInterface";
import {apiService, IRes} from "./apiService";
import {urls} from "../constants";
import {ITokens} from "../interfaces/TokenInterface";
const accessTokenKey = 'access'
const refreshTokenKey = 'refresh'
export const authService = {
    register(user: IAuth): IRes<IUser> {
        return apiService.cars.post(urls.auth.register, user)
    },
    async login(user:IAuth):Promise<any>{
        const {data} = await apiService.cars.post(urls.auth.login , user)
        this.setTokens(data)
        const {data:me} = await this.me()
        return me
    },
    async refresh():Promise<void>{
        const refresh = this.getRefreshToken()
        const {data} = await apiService.cars.post(urls.auth.refresh, {refresh})
        this.setTokens(data)
    },
    me():IRes<IUser>{
        return apiService.cars.get(urls.auth.me)
    },
    setTokens({refresh, access}:ITokens):void{
        localStorage.setItem(accessTokenKey,access)
        localStorage.setItem(refreshTokenKey,refresh)
    },
    getAccessToken():string{
        return localStorage.getItem(accessTokenKey)
    },
    getRefreshToken():string{
        return localStorage.getItem(refreshTokenKey)
    },
    deleteTokens():void{
        localStorage.removeItem(accessTokenKey)
        localStorage.removeItem(refreshTokenKey)
    }
}