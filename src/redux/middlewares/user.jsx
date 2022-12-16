import { logInUser, registerUser } from "../../api";
import { getUser } from "../actionCreator/user";

export const getUserData = (formData, navigate) => {
        return async (dispatch, getState) => {
                dispatch({type: 'PENDING'})
               try {
                const { data } = await registerUser(formData);
              
                if(data){
                        dispatch(getUser(data))
                        navigate('/home')
                }
               } catch(error){
                dispatch({type: 'REJECTED', payload: error.response.data.msg})
              
               }
        };
};

export const loggedInUser=(formData, navigate)=>{
        return async(dispatch, getState)=>{
                dispatch({type: 'PENDING'})
                try {
                        const {data}=await logInUser(formData)
                       
                        if(data){
                                dispatch(getUser(data))
                                navigate('/home')
                        }
                } catch (error) {
                        dispatch({type: 'REJECTED',  payload: error.response.data.msg})
                      
                }
        }
}