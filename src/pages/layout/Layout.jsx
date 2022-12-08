import React, { useEffect } from "react";


import PostForm from "../../components/postForm/PostForm";

import { useDispatch } from "react-redux";
import { getPosts } from "../../redux/middlewares/posts";
import Navbar from "../../components/Navbar/Navbar";
import PostsContainer from "../posts/postsContainer/PostsContainer";

const Layout = () => {
       
        const dispatch = useDispatch();
        useEffect(() => {
                dispatch(getPosts());
        }, [dispatch]);
        return (
                <>
                        <div className="grid grid-cols-12  max-w-6xl mx-auto">
                              
                                {/* app body */}
                                
                                        <div className="col-span-9">
                                                        <Navbar/>
                                                                <PostsContainer/>
                                        </div>
                                        <div className="">
                                                <PostForm/>
                                        </div>
                                
                        </div>
                </>
        );
};

export default Layout;
