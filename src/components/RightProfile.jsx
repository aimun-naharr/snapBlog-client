import React from 'react';
import { ImCross } from 'react-icons/im';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { logOut } from '../redux/actionCreator/user';
const RightProfile = ({setOpenRightProfile}) => {
        const user=JSON.parse(localStorage.getItem('user'))?.user
        const dispatch=useDispatch()
        const navigate=useNavigate()
        const handleSignOut=()=>{
                dispatch(logOut())
navigate('/login')
        }
        return (
                <div className='fixed pt-12 w-96 right-0 bg-white h-screen z-50 opacity-95  top-0 transition-all ease-in-out delay-150'>
                         <ImCross onClick={()=>setOpenRightProfile(false)} className="absolute font-sans text-xl right-4 top-8 cursor-pointer"/>
                      <div className='flex items-center flex-col mt-12'>
                        <img className='w-14 h-14 rounded-full' src={user?.img} alt="" />
                        <h1 className='font-bold font-sans'>{user?.firstName.concat(' ', user?.lastName)}</h1>
                        <p className='text-gray-400'>{user?.email}</p>
                        <div className='mt-8 flex gap-2'>
                                <button className='border-2 border-black rounded px-4 uppercase py-2 font-sans  font-medium'>Edit profile</button>
                                <button onClick={handleSignOut} className='bg-black px-4 text-white rounded uppercase border-2 border-black py-2 font-sans'>Sign out</button>
                        </div>

                      </div>
                </div>
        );
};

export default RightProfile;