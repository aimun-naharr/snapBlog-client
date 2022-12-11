import { GET_USER } from "../actions/Users"

export const getUser=(formData)=>{
        return{
                type: GET_USER,
                payload: formData
        }
}