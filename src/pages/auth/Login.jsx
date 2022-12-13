import { TextField } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import AuthBg from "../../components/AuthBg";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { loggedInUser } from "../../redux/middlewares/user";
const initialValue = {
        email: "",
        password: "",
};

const Login = () => {
        const [formData, setFormData] = useState(initialValue);
        const [user, setUser]=useState( JSON.parse(localStorage.getItem("user")))
        const newUser=useSelector(state=>state.user.user)
       
        console.log(newUser);
        const location = useLocation();
        const navigate = useNavigate();
        let from = location.state?.from?.pathname || "/home";
        
       
        const dispatch = useDispatch();
        const handleChange = (e) => {
                setFormData({ ...formData, [e.target.name]: e.target.value });
        };
        useEffect(()=>{
                if (user) {
                        navigate(from, { replace: true });
                        setUser(user.token)
                }
        },[])
        

        const handleSubmit = async(e) => {
                e.preventDefault();
               
                dispatch(loggedInUser(formData));

                navigate('/home')
        };

        return (
                <section className="md:grid md:grid-cols-12 md:h-screen w-screen flex flex-col-reverse ">
                        <form onSubmit={handleSubmit} className="md:col-span-4 flex flex-col justify-center gap-2 place-items-start md:px-20 px-4  my-8 md:my-0 ">
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
