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
                        <div className="grid grid-cols-12  max-w-7xl mx-auto gap-16 mt-16">
                                {/* app body */}
                                        <div className="col-span-8  px-4">
                                                        <Navbar className='w-full'/>
                                                                <PostsContainer/>
                                        </div>
                                        <div className="col-span-4 w-full">
                                                <PostForm/>
                                        </div>
                                
                        </div>
                </>
        );
};

export default Layout;
