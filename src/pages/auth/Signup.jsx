import React from "react";
import AuthBg from "../../components/AuthBg";
import { TextField } from "@material-ui/core";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUserData } from "../../redux/middlewares/user";
import { useLocation, useNavigate, Link } from "react-router-dom";

const initialValue = {
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        confirmPassword: "",
};

const Signup = () => {
        const [formData, setFormData] = useState(initialValue);
        const [match, setMatch] = useState(false);
        const dispatch = useDispatch();
        const location = useLocation();
        const newUser = useSelector((state) => state.user);
      
        const navigate = useNavigate();
        const handleChange = (e) => {
                setFormData({ ...formData, [e.target.name]: e.target.value });
        };

        const handleSubmit = (e) => {
                e.preventDefault();
                if (formData.password !== formData.confirmPassword) {
                        setMatch(true);
                } else {
                        dispatch(getUserData(formData, navigate));
                        setMatch(false);
                }
        };

        return (
                <section className="md:grid md:grid-cols-12 md:h-screen w-screen flex flex-col-reverse ">
                        <form onSubmit={handleSubmit} className="md:col-span-4 flex flex-col justify-center gap-2 place-items-start md:px-20 px-4  my-8 md:my-0">
                                <h1 className="text-3xl font-bold font-sans uppercase">Sign Up</h1>
                                <p className="text-gray-400 font-sans mb-4">
                                        Already have an account?{" "}
                                        <Link to="/login" className="text-indigo-600 font-bold hover:underline transition:all cursor-pointer">
                                                Sign in
                                        </Link>
                                </p>
                                {
                                        newUser.error? <p className="text-center  w-full bg-red-200 py-2 mb-4 text-red-500 font-bold">{newUser.error}</p> : ''
                                }
                                {match ? <p className="text-center  w-full bg-red-200 py-2 text-red-500 font-bold">Password didn't match</p> : ""}
                                <div className="grid grid-cols-1 gap-4">
                                        <div className="grid grid-cols-2 gap-2">
                                                <TextField variant="outlined" autoFocus={true} label="First Name" fullWidth name="firstName" required onBlur={handleChange} />
                                                <TextField variant="outlined" autoFocus={true} label="Last Name" fullWidth name="lastName" required onBlur={handleChange} />
                                        </div>

                                        <TextField variant="outlined" autoFocus={true} label="Email" fullWidth name="email" type="email" required onBlur={handleChange} />

                                        <div className="grid grid-cols-1 gap-4">
                                                <TextField variant="outlined" autoFocus={true} label="Password" fullWidth name="password" type="password" required onBlur={handleChange} />
                                                <TextField
                                                        variant="outlined"
                                                        autoFocus={true}
                                                        label=" Password (Confirm)"
                                                        type="password"
                                                        fullWidth
                                                        name="confirmPassword"
                                                        required
                                                        onBlur={handleChange}
                                                />
                                        </div>

                                        <button type="submit" className="w-full rounded-full bg-indigo-500 font-sans text-white py-4 mt-4 uppercase ">
                                                {newUser.isLoading ? "Please wait...." : "Create your account"}
                                        </button>
                                </div>
                        </form>
                        <AuthBg />
                </section>
        );
};

export default Signup;
