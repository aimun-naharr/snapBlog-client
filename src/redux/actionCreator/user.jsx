import { GET_USER, LOG_OUT } from "../actions/Users"

export const getUser=(formData)=>{
        return{
                type: GET_USER,
                payload: formData
        }
}

export const logOut=()=>{
        return{
                type: LOG_OUT
        }
}