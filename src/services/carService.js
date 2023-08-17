import {apiService} from "./apiService";
import {urls} from "../constants";
const carService = {
    getAll:()=>apiService.cars.get(urls.cars.base),
    create:(data)=>apiService.cars.post(urls.cars.base, data),
    update:(id, data)=>apiService.cars.put(urls.cars.byId(id), data),
    delete:(id)=>apiService.cars.delete(urls.cars.byId(id)),
}

export {
    carService
}