import {apiServices} from "../services/apiServices";

export const DeleteCarComponent = (car, setReload) => {

    apiServices.axiosCarDelete(car.id, setReload)

}