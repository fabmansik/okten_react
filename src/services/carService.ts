import {apiService, IRes} from "./apiService";
import {urls} from "../constants";
import {ICar} from "../interfaces/CarInterface";
import {IPagination} from "../interfaces/PaginationInterface";
const carService = {
    getAll:(opt?:string|void): IRes<IPagination<ICar>> =>apiService.cars.get(urls.cars.base(opt)),
    create:(data:ICar)=>apiService.cars.post(urls.cars.base(), data),
    update:(id:number, data:ICar)=>apiService.cars.put(urls.cars.byId(id), data),
    delete:(id:number)=>apiService.cars.delete(urls.cars.byId(id)),
}

export {
    carService
}