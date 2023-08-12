import {baseUrl} from "../constants/urls";
import axios from "axios";

export const apiService = axios.create({baseUrl})