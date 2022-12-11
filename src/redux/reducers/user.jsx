import { GET_USER } from "../actions/Users";

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

                default:
                        return state;
        }
};
