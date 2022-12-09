
import React, { useState } from "react";
import Filebase from "react-file-base64";
import { FiSearch } from "react-icons/fi";
import { useDispatch } from "react-redux";
import { createPost } from "../../redux/middlewares/posts";

const PostForm = () => {
        const dispatch = useDispatch();
        const [postsData, setPostsData] = useState({
                creator: "",
                tags: "",
                article: "",
                title: "",
                selectedFile: "",
        });
        const handleClear = () => {
                setPostsData({
                        creator: "",
                        tags: "",
                        article: "",
                        title: "",
                        selectedFile: "",
                });
        };
        const handleSubmit = (e) => {
                e.preventDefault();
                dispatch(createPost(postsData));
                handleClear();
        };

        return (
                <div className="mt-4">
                        <h6 className="text-xl capitialize text-center mb-4 font-medium">Share your stories✨</h6>
                        <form noValidate onSubmit={handleSubmit} className="flex flex-col gap-4">
                                <div className="flex border-2 items-center rounded-lg px-4 gap-2">
                                        <FiSearch />
                                        <input type="text" name="" id="" placeholder="Search" className="py-2 text-base border-none outline-none" />
                                </div>

                                <input
                                        label="Creator"
                                        type="text"
                                        name="creator"
                                        value={postsData.creator}
                                        onChange={(e) => setPostsData({ ...postsData, creator: e.target.value })}
                                        placeholder="Creator"
                                        className="px-4 text-base py-2"
                                />
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
        );
};

export default PostForm;
