import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getPosts } from '../../../redux/middlewares/posts';
import Post from '../post/Post';

const PostsContainer = () => {
const currentId=useSelector(state=>state.posts.currentId)

const posts=useSelector(state=>state.posts.posts)
// console.log(posts)
const dispatch=useDispatch()
useEffect(()=>{
dispatch(getPosts())
},[dispatch, currentId])

   return (
      <section className='mt-10 grid grid-cols-1 gap-6'>
         {
            posts.sort((a, b)=>new Date(b.createdAt)-new Date(a.createdAt)).map(post=><Post key={post._id} post={post}/>)
         }
        
      </section>
   );
};

export default PostsContainer;