import { LOAD_POSTS, ADD_POST } from "../actions/posts";

const initialState = {
        posts: [],
};

const postReducer = (state = initialState, action) => {
        switch (action.type) {
                case LOAD_POSTS:
                        return {
                                ...state,
                                posts: action.payload,
                        };
                case ADD_POST:
                        return {
                                ...state,
                                posts: [...state.posts, action.payload]
                        };

                default:
                        return state;
        }
};

export default postReducer;
