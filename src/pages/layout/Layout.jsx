import React, { useEffect } from "react";


import PostForm from "../../components/postForm/PostForm";

import { useDispatch } from "react-redux";
import { getPosts } from "../../redux/middlewares/posts";
import Navbar from "../../components/Navbar/Navbar";
import PostsContainer from "../posts/postsContainer/PostsContainer";
import { useNavigate } from "react-router-dom";
import SideBar from "../../components/SideBar";
import TopNav from "../../components/Navbar/TopNav";

const Layout = () => {
       const user=JSON.parse(localStorage.getItem('user'))
       const navigate=useNavigate()
       if(!user){
        navigate("/login");
       }
       if(user){
        navigate('/home')
       }
        const dispatch = useDispatch();
        useEffect(() => {
                dispatch(getPosts());
              
        }, [dispatch]);
        return (
                <>
                        <div className="grid grid-cols-12  max-w-7xl mx-auto gap-16 mt-16 w-screen ">
                              <div className=" col-span-12">
                              <TopNav className="col-span-12"/>
                                {/* app body */}
                                       <div className="grid grid-cols-12 col-span-12">
                                       <div className="md:col-span-8  px-4 col-span-12">
                                                        <Navbar className='w-full'/>
                                                                <PostsContainer/>
                                        </div>
                                        <div className="col-span-4 w-full">
                                                <SideBar/>
                                        </div>
                                       </div>
                              </div>
                                
                        </div>
                </>
        );
};

export default Layout;
