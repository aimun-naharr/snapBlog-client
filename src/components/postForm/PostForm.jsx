import React, { useEffect, useState } from "react";
import Filebase from "react-file-base64";

import { useDispatch, useSelector } from "react-redux";
import { createPost, getPosts, updatedPostData } from "../../redux/middlewares/posts";
import { ImCross } from "react-icons/im";
import { removeCurrentId } from "../../redux/actionCreator/posts";

const PostForm = ({ openPostModal, openUpdateModal, setOpenPostModal, setOpenUpdateModal, currentId }) => {
        const posts = useSelector((state) => state.posts.posts);
        const currentPost = posts.find((post) => post._id === currentId);

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
        useEffect(() => {
                if (currentPost) {
                        setPostsData(currentPost);
                }
        }, [currentPost]);
        const user = JSON.parse(localStorage.getItem("user"))?.user;
        const name = user?.firstName.concat(" ", user?.lastName);

        const handleSubmit = (e) => {
                e.preventDefault();
                const { article, title}=postsData
                if(article.length==0 || title.length==0){
                        return 
                }
                if (!currentId) {
                        dispatch(createPost({ ...postsData, name }));
                        setOpenPostModal(false);
                } else {
                        dispatch(updatedPostData(postsData, currentId));
                        setOpenUpdateModal(false);
                }
                // dispatch(getPosts());
                // handleClear()
        };
        const handleClose = () => {
                if (currentId) {
                        setOpenUpdateModal(false);
                        dispatch(removeCurrentId());
                } else {
                        setOpenPostModal(false);
                }
        };
        return (
                <>
                        {(openPostModal || openUpdateModal) && (
                                <div className=" bg-zinc-200 fixed z-50 inset-0 opacity-95 w-screen overflow-hidden">
                                        
                                        {user ? (
                                                <>
                                                        {" "}
                                                        <div className="h-screen flex justify-center items-center ">
                                                       
                                                                <div className="bg-white opacity-100 px-8 py-8 rounded relative">
                                                                <ImCross onClick={handleClose} className="absolute font-sans text-xs right-4 top-4 cursor-pointer" />
                                                                        <h6 className="text-xl capitialize text-center mb-4 font-medium">{currentId ? "Update" : "Share"} your stories✨</h6>
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
                                                                                        onChange={(e) => setPostsData({ ...postsData, tags: e.target.value.toLocaleLowerCase() })}
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
                                                                                        <Filebase
                                                                                                type="file"
                                                                                                multiple={false}
                                                                                                onDone={({ base64 }) => setPostsData({ ...postsData, selectedFile: base64 })}
                                                                                        />
                                                                                </div>

                                                                                <div className="grid grid-cols-12 gap-2">
                                                                                        <button className="border border-black py-2 col-span-8 rounded bg-black text-white" type="submit">
                                                                                                {currentId ? "Update" : "Publish"}
                                                                                        </button>
                                                                                        <button className="  py-2 border border-black col-span-4 rounded" onClick={handleClear}>
                                                                                                Clear
                                                                                        </button>
                                                                                </div>
                                                                        </form>
                                                                </div>
                                                        </div>
                                                </>
                                        ) : (
                                                <p className="h-screen flex justify-center items-center bg-white text-2xl">Please create a account to share your amazing stories</p>
                                        )}
                                </div>
                        )}
                </>
        );
};

export default PostForm;
