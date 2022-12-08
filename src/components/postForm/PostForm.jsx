import React, { useState } from "react";
import Filebase from 'react-file-base64'

const PostForm = () => {
       
        const [postsData, setPostsData] = useState({
                creator: "",
                tags: "",
                article: "",
                title: "",
                selectedFile: "",
        });
        const handleSubmit = (e) => {
         e.preventDefault()
                console.log(postsData);
        };
        return (
                <div >
                        <h6 variant="h6">Create a article</h6>
                        <form noValidate onSubmit={handleSubmit} >
                             
                               <input
                                        label="Creator"
                                        
                                        name="creator"
                                        value={postsData.creator}
                                        onChange={(e) => setPostsData({ ...postsData, creator: e.target.value })}
                                />
                                <input label='Title' name="title" value={postsData.title} onChange={(e) => setPostsData({ ...postsData, title: e.target.value })} />
                                <input
                                        label="Article"
                                        variant="outlined"
                                        fullWidth
                                        name="article"
                                        value={postsData.article}
                                        onChange={(e) => setPostsData({ ...postsData, article: e.target.value })}
                                />
                                
                                <input label='Tags'  name="tags" value={postsData.tags} onChange={(e) => setPostsData({ ...postsData, tags: e.target.value })} />
                               <div >
                               <Filebase
                               type='file'
                               multiple={false}
                               onDone={({base64})=>setPostsData({...postsData, selectedFile: base64})}
                               />
                               </div>
                               
                               <button  type='submit'>Create article</button>
                               <button  >Clear</button>
                        </form>
                </div>
        );
};

export default PostForm;
