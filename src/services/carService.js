import {apiService} from "./apiService";
import {urls} from "../constants/urls";

export const carService = {
    getAll:()=>apiService.get(urls.cars.base).then(res=>{return res}),
    create:(data)=>apiService.post(urls.cars.base, data),
    updateById:(id, data)=>apiService.put(urls.cars.byId(id), data),
    deleteById:(id)=>apiService.delete(urls.cars.byId(id))
}