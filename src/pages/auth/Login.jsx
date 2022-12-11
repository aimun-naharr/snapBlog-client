import { TextField } from "@material-ui/core";
import React, { useState } from "react";
import AuthBg from "../../components/AuthBg";
import {Link, useNavigate} from 'react-router-dom'
import { useDispatch } from "react-redux";
import { logInUser } from "../../api";
import { loggedInUser } from "../../redux/middlewares/user";
const initialValue = {
        email: "",
        password: ""
};

const Login = () => {
        const [formData, setFormData] = useState(initialValue);
        const dispatch=useDispatch()
        const handleChange = (e) => {
                setFormData({ ...formData, [e.target.name]: e.target.value });
        };
        const navigate=useNavigate()
        const user=JSON.parse(localStorage.getItem('user'))
       
        const handleSubmit = (e) => {
                e.preventDefault();
              dispatch(loggedInUser(formData))
               if(user){
                navigate("/home", {replace: true});
               }
                
        };
        return (
                <section className="grid grid-cols-12 h-screen w-screen">
                       
                        <form onSubmit={handleSubmit} className="col-span-4 flex flex-col justify-center gap-2 place-items-start md:px-12 ">
                        <h1 className="text-3xl font-bold font-sans uppercase">Sign in</h1>
                                <p className="text-gray-400 font-sans mb-4">
                                        Already have an account? <Link to='/'className="text-indigo-600 font-bold hover:underline transition:all cursor-pointer">Sign up</Link>
                                </p>
                                <div className="grid grid-cols-1 gap-4 w-full">
                                        <TextField  variant="outlined" autoFocus={true} label="Email" fullWidth name="email" type="email" required onBlur={handleChange} />
                                        <TextField variant="outlined" autoFocus={true} label="Password" fullWidth name="password" type="password" required onBlur={handleChange} />
                                        <button type="submit" className="w-full rounded-full bg-indigo-500 font-sans text-white py-4 mt-4 uppercase ">
                                               Sign In
                                        </button>
                                </div>
                        </form>
                        <AuthBg />
                </section>
        );
};

export default Login;
