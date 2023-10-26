import axios from "axios";
import {baseURL} from "../constants/urls";

const axiosService = axios.create({baseURL})

axiosService.interceptors.request.use()


export {
    axiosService
}