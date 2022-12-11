import { ADD_POST, LOAD_POSTS, UPDATE_POST } from "../actions/posts";

export const loadPosts = (posts) => {
        return {
                type: LOAD_POSTS,
                payload: posts,
        };
};

export const addPost = (newPost) => {
        return {
                type: ADD_POST,
                payload: newPost,
        };
};
export const updatePostData = (updatedPost) => {
        return {
                type: UPDATE_POST,
                payload: updatedPost,
        };
};
