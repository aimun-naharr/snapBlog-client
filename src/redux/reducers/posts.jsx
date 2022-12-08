import { LOAD_POSTS } from "../actions/posts";

const initialState = {
        posts: [],
};

const postReducer = (state = initialState, action) => {
        switch (action.type) {
                case LOAD_POSTS:
                        return {
                                ...state,
                                post: [...state.posts, action.payload],
                        };

                default:
                        return state;
        }
};

export default postReducer;
