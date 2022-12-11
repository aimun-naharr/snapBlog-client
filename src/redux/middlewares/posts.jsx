import * as api from "../../api/index";
import { addPost, loadPosts, updatePostData } from "../actionCreator/posts";
export const getPosts = () => {
        return async (dispatch, getState) => {
                try {
                        const { data } = await api.fetchPosts();

                        if (data.length) {
                                dispatch(loadPosts(data));
                        }
                } catch (error) {
                        console.log(error.message);
                }
        };
};

export const createPost = (newPost) => {
        return async (dispatch, getState) => {
                try {
                        const { data } = await api.createPost(newPost);
                        console.log(data);
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
                        const {data}=api.updatePost(newPost, id)
                        if(data) return updatePostData(data)
                } catch (error) {
                        console.log(error)
                }
        };
};
