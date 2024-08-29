import { baseURL } from "./baseURL"
import { commonAPI } from "./commonAPI"

//1 register user
export const registerAPI=async(users)=>{
    return await commonAPI("post",`${baseURL}/users/register`,users,"")
}
// 2 login user

export const loginAPI=async(reqBody)=>{
    return await commonAPI("post",`${baseURL}/users/login`,reqBody,"")
}

