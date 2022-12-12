import { ADD_POST, CURRENT_ID, DELETE_POST, LOAD_POSTS, REMOVE_CURRENT_ID, UPDATE_POST } from "../actions/posts";

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
export const deletePostData = (data) => {
        console.log(data)
        return {
                type: DELETE_POST,
                payload: data
        };
};

export const setCurrentId=(id)=>{
   return{
      type: CURRENT_ID,
      payload: id
   }
}

export const removeCurrentId=()=>{
        return{
                type: REMOVE_CURRENT_ID
        }
}
