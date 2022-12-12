import { TextField } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import AuthBg from "../../components/AuthBg";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

import { loggedInUser } from "../../redux/middlewares/user";
const initialValue = {
        email: "",
        password: "",
};

const Login = () => {
        const [formData, setFormData] = useState(initialValue);
        const [user, setUser]=useState('')
        console.log(user)
        const location = useLocation();
        const navigate = useNavigate();
        let from = location.state?.from?.pathname || "/home";
        
        console.log(user)
        // if (user) {
        //         navigate(from, { replace: true });
        // }
        const getUser=async()=>{
                const user =await JSON.parse(localStorage.getItem("user"))?.token;
                setUser(user)
        }
        const dispatch = useDispatch();
        const handleChange = (e) => {
                setFormData({ ...formData, [e.target.name]: e.target.value });
        };
         if (user) {
                        navigate(from, { replace: true });
                }
        useEffect(() => {
               
                const user =JSON.parse(localStorage.getItem("user"))?.token;
                setUser(user)
        }, [user]);

        const handleSubmit = (e) => {
                e.preventDefault();
                dispatch(loggedInUser(formData));
        
        };

        return (
                <section className="grid grid-cols-12 h-screen w-screen">
                        <form onSubmit={handleSubmit} className="col-span-4 flex flex-col justify-center gap-2 place-items-start md:px-12 ">
                                <h1 className="text-3xl font-bold font-sans uppercase">Sign in</h1>
                                <p className="text-gray-400 font-sans mb-4">
                                        Already have an account?{" "}
                                        <Link to="/" className="text-indigo-600 font-bold hover:underline transition:all cursor-pointer">
                                                Sign up
                                        </Link>
                                </p>
                                <div className="grid grid-cols-1 gap-4 w-full">
                                        <TextField variant="outlined" autoFocus={true} label="Email" fullWidth name="email" type="email" required onBlur={handleChange} />
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
