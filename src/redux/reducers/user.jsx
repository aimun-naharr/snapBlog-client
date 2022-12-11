import { GET_USER, LOG_OUT } from "../actions/Users";

const initialState = {
        user: {},
};

export const userReducer = (state = initialState, action) => {
        switch (action.type) {
                case GET_USER:
                        localStorage.setItem('user', JSON.stringify({...action.payload}))
                        return {
                                ...state,
                                user: action.payload,
                        };
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
