import axios from "axios";
import {carsURL, rmURL} from "../constants";
const apiService = {
    cars:axios.create({baseURL:carsURL}),
    rm:axios.create({baseURL:rmURL})
}
export {
    apiService
}