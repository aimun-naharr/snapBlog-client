import { GET_USER, LOG_OUT } from "../actions/Users";

const initialState = {
        user: {},
        isLoading: false,
        isError: false,
        error: ''
};

export const userReducer = (state = initialState, action) => {
        console.log(action.type)
        switch (action.type) {
                case GET_USER:
                        localStorage.setItem('user', JSON.stringify({...action.payload}))
                        return {
                                ...state,
                                user: action.payload,
                               isLoading:false,
                               isError: false,
                               error:''
                        };
                case 'REGISTER':
                        localStorage.setItem('user', JSON.stringify({...action.payload}))
                        return {
                                ...state,
                                user: action.payload,
                               isLoading:false,
                               isError: false,
                               error:''
                        };
                        case 'PENDING':
                                return {
                                        ...state, isLoading: true, isError: false,
                                }
                        case 'REJECTED':
                                return {
                                        ...state, isLoading: false, isError: true, error: action.payload
                                }
                case LOG_OUT:
                        localStorage.removeItem('user')
                        return {
                                ...state,
                                user: {},
                        };

                default:
                        return state;
        }
};
