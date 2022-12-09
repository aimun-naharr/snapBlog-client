import React from "react";
import AuthBg from "../../components/AuthBg";
import { TextField } from "@material-ui/core";
import { useState } from "react";

const initialValue={
        firstName: "",
        lastName:"",
        email:"",
        password: "",
        confirmPassword: ""
}

const Signup = () => {
        const [formData, setFormData]=useState(initialValue)
        console.log(formData)

        const handleChange=(e)=>{
                setFormData({...formData, [e.target.name]: e.target.value})
        }
        const handleSubmit=(e)=>{
                e.preventDefault()
                
        }

        return (
                <section className="grid grid-cols-12 h-screen w-screen">
                        <form onSubmit={handleSubmit}  className="col-span-4 flex flex-col justify-center gap-2 place-items-start md:px-12 ">
                                <h1 className="text-3xl font-bold font-sans uppercase">Sign Up</h1>
                                <p className="text-gray-400 font-sans mb-4">
                                        Already have an account? <span className="text-indigo-600 font-bold hover:underline transition:all cursor-pointer">Sign in</span>
                                </p>
                                <div className="grid grid-cols-1 gap-4">
                                        <div className="grid grid-cols-2 gap-2">
                                                <TextField variant="outlined" autoFocus={true} label="First Name" fullWidth name="firstName" required  onBlur={handleChange}/>
                                                <TextField variant="outlined" autoFocus={true} label="Last Name" fullWidth name="lastName" required  onBlur={handleChange}/>
                                        </div>

                                        <TextField variant="outlined" autoFocus={true} label="Email" fullWidth name="email" type="email" required  onBlur={handleChange}/>

                                        <div className="grid grid-cols-2 gap-2">
                                                <TextField variant="outlined" autoFocus={true} label="Password" fullWidth name="password" type="password" required  onBlur={handleChange}/>
                                                <TextField variant="outlined" autoFocus={true} label=" Password (Confirm)" type="password" fullWidth name="confirmPassword" required  onBlur={handleChange}/>
                                        </div>

                                        <button type='submit' className="w-full rounded-full bg-indigo-500 font-sans text-white py-4 mt-4 uppercase ">Create your account</button>
                                </div>
                        </form>
                        <AuthBg />
                </section>
        );
};

export default Signup;
