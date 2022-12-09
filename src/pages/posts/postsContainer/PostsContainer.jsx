import React from 'react';
import { useSelector } from 'react-redux';
import Post from '../post/Post';

const PostsContainer = () => {
const posts=useSelector(state=>state.posts.posts)
console.log(posts);

   return (
      <section className='mt-10 grid grid-cols-1 gap-6'>
         {
            posts.map(post=><Post key={post._id} post={post}/>)
         }
        
      </section>
   );
};

export default PostsContainer;