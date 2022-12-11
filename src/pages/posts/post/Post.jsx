import React from "react";
import { BsBookmark } from "react-icons/bs";
import { FaBookmark } from "react-icons/fa";
import { IoIosRemoveCircleOutline } from "react-icons/io";
import { BiDotsHorizontal } from "react-icons/bi";

const Post = ({post}) => {
       const user=JSON.parse(localStorage.getItem('user')).user
        const {name, title, selectedFile, createdAt, article, tags}=post
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        const date=new Date(createdAt).toLocaleDateString(undefined, options)
      
        function shorten(string, n) {
                return string.length > n ? string.substring(0, n-1 ) + "..." : string;
               
               }
        return (
                <article className="grid grid-cols-12 gap-8  border-b-2 pb-8">
                
                                <div className="col-span-12 ">
                                        <div className="flex items-center gap-2 ">
                                                <img src={user?.img} alt="" className="w-8 rounded-full" />
                                                <span className="font-medium">{name}</span>
                                                <span className="text-gray-400 font-medium">{date}</span>
                                        </div>
                                        <div className="grid grid-cols-12  items-center  gap-4">
                                       <div className="col-span-9">
                                       <div>
                                                <h2 className="text-2xl font-serif font-bold font-serif cursor-pointer mt-2">{title}</h2>
                                        </div>
                                        <div>
                                                <p className="text-gray-600 text-xl">
                                                      {
                                                shorten(`${article}`, 150)
                                                      }
                                                </p>
                                        </div>
                                       </div>
                                       <div className="col-span-3">
                                        <img src={selectedFile} alt="" className="object-cover rounded w-32" />
                                </div>
                                </div>
                                
                                        </div>
                        
                        <div className=" grid grid-cols-12 col-span-9 items-center">
                                <div className="col-span-10 flex flex-start gap-2">
                                        <span className="bg-gray-200 px-3 rounded-full text-gray-600 text-sm">{tags.map(tag=>tag)}</span>
                                        <span className="text-gray-500">because you follow blockchain</span>
                                </div>
                                <div className="flex justify-between col-span-2">
                                        <span  title="save" className="cursor-pointer">
                                                <BsBookmark className='text-2xl'/>
                                        </span>
                                        <span  title="not interested" className="cursor-pointer">
                                                <IoIosRemoveCircleOutline className='text-2xl'/>
                                        </span>
                                        <span  title="" className="cursor-pointer">
                                                <BiDotsHorizontal className='text-2xl'/>
                                        </span>
                                </div>
                        </div>
                </article>
        );
};

export default Post;
