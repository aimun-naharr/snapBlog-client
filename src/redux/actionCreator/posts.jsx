import { CREATE_POST, LOAD_POSTS } from "../actions/posts"

export const loadPosts=(posts)=>{
   return {
      type: LOAD_POSTS,
      payload: posts
   }
}

export const addPost=(newPost)=>{
   return{
      type: CREATE_POST,
      payload: newPost
   }
}