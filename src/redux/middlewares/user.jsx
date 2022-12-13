import { logInUser, registerUser } from "../../api";
import { getUser } from "../actionCreator/user";

export const getUserData = (formData) => {
        return async (dispatch, getState) => {
               try {
                const { data } = await registerUser(formData);
                if(data){
                        dispatch(getUser(data))
                }
               } catch (error) {
                console.log(error)
               }
        };
};

export const loggedInUser=(formData)=>{
        return async(dispatch, getState)=>{
                try {
                        const {data}=await logInUser(formData)
                       
                        if(data){
                                dispatch(getUser(data))
                        }
                } catch (error) {
                       console.log(error) 
                }
        }
}