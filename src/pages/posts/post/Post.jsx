import React, { useState } from "react";
import { BsBookmark } from "react-icons/bs";
import { FaBookmark } from "react-icons/fa";
import { IoIosRemoveCircleOutline } from "react-icons/io";
import { FiEdit2 } from "react-icons/fi";
import { MdDelete } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { setCurrentId } from "../../../redux/actionCreator/posts";
import PostForm from "../../../components/postForm/PostForm";
import { deletedPostData } from "../../../redux/middlewares/posts";

const Post = ({ post }) => {
        const user = JSON.parse(localStorage.getItem("user"))?.user;
        const { title, selectedFile, createdAt, article, tags, creator, _id } = post;
        const options = { year: "numeric", month: "long", day: "numeric" };
        const date = new Date(createdAt).toLocaleDateString(undefined, options);

        const dispatch = useDispatch();
        const [openUpdateModal, setOpenUpdateModal] = useState(false);

        const currentId = useSelector((state) => state.posts.currentId);

        function shorten(string, n) {
                return string.length > n ? string.substring(0, n - 1) + "..." : string;
        }

        const handleEdit = (id) => {
                dispatch(setCurrentId(id));
                setOpenUpdateModal(true);
        };

        const handleDelete =(id) => {
                dispatch(deletedPostData(id));
        };
        return (
                <article className="grid grid-cols-12 gap-8  border-b-2 pb-8 px-4 md:px-0">
                        <div className="col-span-12 ">
                                <div className="flex items-center gap-2 ">
                                        <img src={creator?.img} alt="" className="w-8 rounded-full" />
                                        <span className="font-medium">{creator?.firstName.concat(" ", creator?.lastName)}</span>
                                        <span className="text-gray-400 font-medium">{date}</span>
                                </div>
                                <div className="grid grid-cols-12  items-center  gap-4">
                                        <div className="col-span-9">
                                                <div>
                                                        <h2 className="text-2xl font-serif font-bold font-serif cursor-pointer mt-2">{title}</h2>
                                                </div>
                                                <div>
                                                        <p className="text-gray-600 text-xl">{shorten(`${article}`, 150)}</p>
                                                </div>
                                        </div>
                                        <div className="col-span-3">
                                                <img src={selectedFile} alt="" className="object-cover rounded w-32" />
                                        </div>
                                </div>
                        </div>

                        <div className=" grid grid-cols-12 col-span-9 items-center">
                                <div className="col-span-10 flex flex-start gap-2">
                                        <span className="bg-gray-200 px-3 rounded-full text-gray-600 text-sm">{tags?.map((tag) => tag)}</span>
                                        <span className="text-gray-500">because you follow blockchain</span>
                                </div>
                                <div className="flex justify-between col-span-2">
                                        <span title="save" className="cursor-pointer">
                                                <BsBookmark className="text-2xl" />
                                        </span>

                                        {user?._id === creator?._id && (
                                                <>
                                                        <span onClick={() => handleEdit(_id)} title="Edit" className="cursor-pointer">
                                                                <FiEdit2 className="text-2xl" />
                                                        </span>
                                                        <span onClick={() => handleDelete(_id)} title="Delete post" className="cursor-pointer">
                                                                <MdDelete className="text-2xl" />
                                                        </span>
                                                </>
                                        )}
                                </div>
                        </div>
                        {openUpdateModal && currentId && <PostForm setOpenUpdateModal={setOpenUpdateModal} openUpdateModal={openUpdateModal} currentId={currentId} />}
                </article>
        );
};

export default Post;
