
import React, { useState } from "react";
import Filebase from "react-file-base64";

import { useDispatch } from "react-redux";
import { createPost } from "../../redux/middlewares/posts";
import { ImCross } from 'react-icons/im';

const PostForm = ({openPostModal, setOpenPostModal}) => {
        console.log(openPostModal)
        const dispatch = useDispatch();
        const [postsData, setPostsData] = useState({
               
                tags: "",
                article: "",
                title: "",
                selectedFile: "",
        });
        const handleClear = () => {
                setPostsData({
                      
                        tags: "",
                        article: "",
                        title: "",
                        selectedFile: "",
                });
        };
        const user=JSON.parse(localStorage.getItem('user'))?.user
        const name= user?.firstName.concat(' ', user?.lastName)
        
        const handleSubmit = (e) => {
                e.preventDefault();
                dispatch(createPost({...postsData, name}));
                handleClear();
                setOpenPostModal(false)
        };

        return (
               <>{
                openPostModal &&  <div className="mt-4 bg-zinc-200 fixed z-50 inset-0 opacity-95 w-screen overflow-hidden">
                        <ImCross onClick={()=>setOpenPostModal(false)} className="absolute font-sans text-2xl right-4 top-2 cursor-pointer"/>
                <div className="h-screen flex justify-center items-center">
                <div className="bg-white opacity-100 px-8 py-8 rounded">
                <h6 className="text-xl capitialize text-center mb-4 font-medium">Share your stories✨</h6>
                <form noValidate onSubmit={handleSubmit} className="flex flex-col gap-4">
                       

                       
                        <input
                                label="Title"
                                name="title"
                                value={postsData.title}
                                onChange={(e) => setPostsData({ ...postsData, title: e.target.value })}
                                placeholder="Title"
                                className="px-4 text-base py-2"
                        />
                        <input
                                label="Tags"
                                name="tags"
                                value={postsData.tags}
                                onChange={(e) => setPostsData({ ...postsData, tags: e.target.value })}
                                placeholder="Tags"
                                className="px-4 text-base py-2"
                        />
                        <textarea
                                label="Article"
                                variant="outlined"
                                fullWidth
                                name="article"
                                value={postsData.article}
                                placeholder="Your story....."
                                className="px-4 text-base py-2 min-h-28"
                                onChange={(e) => setPostsData({ ...postsData, article: e.target.value })}
                        />

                        <div>
                                <Filebase type="file" multiple={false} onDone={({ base64 }) => setPostsData({ ...postsData, selectedFile: base64 })} />
                        </div>

                        <div className="grid grid-cols-12 gap-2">
                                <button className="border border-black py-2 col-span-8 rounded bg-black text-white" type="submit">
                                        Publish
                                </button>
                                <button className="  py-2 border border-black col-span-4 rounded" onClick={handleClear}>
                                        Clear
                                </button>
                        </div>
                </form>
                </div>
                </div>
        </div>
               }
               </>
        );
};

export default PostForm;
