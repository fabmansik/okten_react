import {apiService, IRes} from "./apiService";
import {urls} from "../constants";
import {ICar} from "../interfaces/CarInterface";
import {IPagination} from "../interfaces/PaginationInterface";
const carService = {
    getAll:(opt?:string|void): IRes<IPagination<ICar>> =>apiService.cars.get(urls.cars.base(opt)),
    create:(data:ICar):IRes<ICar>=>apiService.cars.post(urls.cars.base(), data),
    update:(id:number, data:ICar):IRes<ICar>=>apiService.cars.put(urls.cars.byId(id), data),
    delete:(id:number)=>apiService.cars.delete(urls.cars.byId(id)),
    addPhoto:(id:number, data:FormData):IRes<ICar>=>apiService.cars.put(urls.cars.photo(id), data)
}

export {
    carService
}