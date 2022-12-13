import { LOAD_POSTS, ADD_POST, UPDATE_POST, CURRENT_ID, REMOVE_CURRENT_ID, DELETE_POST, SEARCH_TAGS } from "../actions/posts";

const initialState = {
        posts: [],
        currentId: '',
        searchByTags: ''
};

const postReducer = (state = initialState, action) => {
      
        switch (action.type) {
                case CURRENT_ID:
                        return {
                                ...state,
                                currentId: action.payload
                        };
                case REMOVE_CURRENT_ID:
                        return {
                                ...state,
                                currentId: ''
                        };
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
                                posts:[...state.posts.map(post=>post._id===action.payload._id? action.payload: post)]
                        };
                case DELETE_POST:
                        return {
                                ...state,
                                posts:[...state.posts.filter(post=>post._id !== action.payload)]
                        };

                        case SEARCH_TAGS:
                                return {
                                        ...state,
                                        searchByTags: action.payload
                                }

                default:
                        return state;
        }
};

export default postReducer;
