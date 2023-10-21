import $api from "@/http"
import type { IRegistrResponse } from "@/types/registrresponse.interface"
import type {IUser} from '@/types/user.interface'
import type { AxiosResponse } from "axios"
export default class Userservice {
  static Registr = async(user: IUser): Promise<AxiosResponse<IRegistrResponse>> => {
    return $api.post('/users/register')
  }
  static Login = async(user: IUser) => {
    try{
      const response = await $api.post('/users/login', user)
      return response
    }
    catch(err){
      console.log(err)
    }
  }
}
