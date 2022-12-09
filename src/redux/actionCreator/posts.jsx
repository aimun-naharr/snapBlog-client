import { ADD_POST, LOAD_POSTS } from "../actions/posts"

export const loadPosts=(posts)=>{
   return {
      type: LOAD_POSTS,
      payload: posts
   }
}

export const addPost=(newPost)=>{
   return{
      type: ADD_POST,
      payload: newPost
   }
}