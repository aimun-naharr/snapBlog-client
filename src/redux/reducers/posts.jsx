import { LOAD_POSTS, ADD_POST, UPDATE_POST } from "../actions/posts";

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
                case UPDATE_POST:
                        return {
                                ...state,
                                posts:[...state.posts, state.posts.map(post=>post._id===action.payload._id? action.payload: post)]
                        };

                default:
                        return state;
        }
};

export default postReducer;
