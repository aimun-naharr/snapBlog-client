import axios from 'axios'


const API=axios.create({baseURL:"http://localhost:5000/api"})


API.interceptors.request.use((req)=>{
        if(localStorage.getItem('user')){
                req.headers.authorization=`Bearer ${JSON.parse(localStorage.getItem('user')).token}`
        }
        return req
})

// posts api
export const fetchPosts=()=>API.get('posts')
export const createPost=(newPost)=>API.post('/posts', newPost)
export  const updatePost=(formData, id)=>API.patch(`/posts/${id}`, formData)

// users
export const registerUser=(formData)=>API.post(`/auth/register`, formData)
export const logInUser=(formData)=>API.post(`/auth/login`, formData)
