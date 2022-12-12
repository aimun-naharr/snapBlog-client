import * as api from "../../api/index";
import { addPost, deletePostData, loadPosts, updatePostData } from "../actionCreator/posts";
export const getPosts = () => {
        return async (dispatch, getState) => {
                try {
                        const { data } = await api.fetchPosts();

                        if (data.length) {
                                dispatch(loadPosts(data));
                        }
                } catch (error) {
                        console.log(error);
                }
        };
};

export const createPost = (newPost) => {
        return async (dispatch, getState) => {
                try {
                        const { data } = await api.createPost(newPost);
                       
                        if (data) {
                                dispatch(addPost(data));
                        }
                } catch (error) {
                        console.log(error);
                }
        };
};

export const updatedPostData = (newPost, id) => {
        
        return async (dispatch, getState) => {
                try {
                        const {data}=await api.updatePost(newPost, id)
                       
                        if(data){ dispatch(updatePostData(data))}
                } catch (error) {
                        console.log(error)
                }
        };
};
export const deletedPostData = ( id) => {
       console.log(id)
        return async(dispatch, getState) => {
                try {
                        const {data}=await api.deletePost( id)
                        if(data){ dispatch(deletePostData(id))}
                } catch (error) {
                        console.log(error)
                }
        };
};
