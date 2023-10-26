import {IAuth} from "../interfaces/auth.interface";
import {IRes} from "../types/axiosRes.type";
import {axiosService} from "./axios.service";
import {urls} from "../constants/urls";
import {IUser} from "../interfaces/user.interface";
import {ITokens} from "../interfaces/tokens.interface";
import {AxiosResponse} from "axios";


class AuthService {
    private readonly accessToken = 'access'
    private readonly refreshToken = 'refresh'

    registerUser(user:IAuth):IRes<IUser> {
        return axiosService.post(urls.auth.register, user)
    }

    me():IRes<IUser>{
        return axiosService.get(urls.auth.me)
    }

    async login(user:IAuth):Promise<IUser> {
        const {data}:AxiosResponse<ITokens> = await axiosService.post(urls.auth.login, user)
        this.setTokens(data)
        const {data:me}:AxiosResponse<IUser> = await this.me()
        return me
    }



    setTokens({access, refresh}:ITokens):void{
        localStorage.setItem(this.accessToken, access)
        localStorage.setItem(this.refreshToken, refresh)
    }

    getAccessToken():void{
        localStorage.getItem('access')
    }

    deleteTokens():void{
        localStorage.removeItem(this.accessToken)
        localStorage.removeItem(this.refreshToken)
    }

}



export const authService = new AuthService()

