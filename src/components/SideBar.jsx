import React from 'react';
import { useState } from 'react';
import PostForm from './postForm/PostForm';

const SideBar = () => {
        const [openPostModal, setOpenPostModal]=useState(false)
        const tags=['blockchain', 'dataScience', 'psychology', 'lifestyle', 'entertainment', 'webdevelopment']
        return (
                <aside className='border-l-2 h-screen flex flex-col items-start w-full  hidden  md:block px-4'>
                       <div className='py-4 border-b-2'>
                       <button className='w-full bg-black rounded-full text-white py-2 '>Get unlimited access</button>
                        <div className='flex flex-col items-start mt-4 text-start bg-cyan-200 px-8 ml-2 w-80 py-8 rounded'>
                                <h1 className='text-xl font-bold'>Writing on SnapBlog</h1>
                                <p className='text-xl'>Expert writing advice</p>
                                <p className='text-xl'>Grow your readership</p>
                                <button className='bg-black text-white px-4 py-2 rounded-full mt-4' onClick={()=>setOpenPostModal(true)}>Start writing</button>
                        </div>
                       </div>
                        <div className='mr-2 mt-8'>
                                <h1 className='text-xl mb-4'>Recommended Topics</h1>
                                <div className='flex mt-2 flex-wrap gap-2'>
                                        {
                                                tags.map(tag=><span className='bg-gray-200 text-black rounded-full px-4 py-2'>{tag}</span>)
                                        }
                                       
                                </div>
                        </div>
                        {
                          openPostModal &&   <PostForm openPostModal={openPostModal} setOpenPostModal={setOpenPostModal}/>
                        }
                </aside>
        );
};

export default SideBar;