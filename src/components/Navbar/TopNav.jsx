import React, { useState } from 'react';
import { FiSearch } from "react-icons/fi";
import { FaEdit } from "react-icons/fa";
import PostForm from '../postForm/PostForm';

const TopNav = () => {
        const user=JSON.parse(localStorage.getItem('user'))?.user
        const [openPostModal, setOpenPostModal]=useState(false)
        return (
                <nav className='flex w-full  items-center justify-between px-4 mb-4'>
                        <div className='flex items-center gap-4'>
                                <h1 className='text-2xl font-medium'>Snap<span className='text-4xl font-bold'>B</span>log</h1>
                                <div className="flex border-2 items-center rounded-lg px-4 gap-2">
                                <FiSearch />
                                <input type="text" name="" id="" placeholder="Search" className="py-2 text-base border-none outline-none w-80" />
                        </div>

                        </div>
                        <div className='flex items center gap-4'>
                                <FaEdit onClick={()=>setOpenPostModal(true)} title='Write a post' className='text-3xl md:hidden cursor-pointer text-slate-700'/>
                                <span className='hidden md:block'>{user?.firstName.concat(' ', user?.lastName)}</span>
                                <img src={user?.img} alt=""  className='w-8 h-8 rounded-full ring-2 cursor-pointer'/>

                        </div>
                        {
                                <PostForm openPostModal={openPostModal} setOpenPostModal={setOpenPostModal}/>
                        }
                </nav>
        );
};

export default TopNav;