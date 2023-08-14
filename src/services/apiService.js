import {baseURL} from "../constants/urls";
import axios from "axios";

export const apiService = axios.create({baseURL})