import React from 'react';

const AuthBg = () => {
        return (
               <section className="md:col-span-8 bg-[url('https://media.istockphoto.com/id/1138395421/photo/blue-abstract-background-or-texture.jpg?b=1&s=170667a&w=0&k=20&c=3WdlXWR1b6QQpLsNxCthtD6KB2plxys2PNYjreLObSs=')] bg-cover flex items-start flex-col justify-center md:gap-8 md:px-24 w-full  py-8 md:py-0 px-8 gap-4">
                <h1 className='text-5xl text-white font-sans font-bold  opacity-100'>Welcome to <br /> our community</h1>
                <p className='text-gray-300 text-xl font-sans'>Lorem ipsum dolor sit amet consectetur adipisicing elit. cepturi nam. Doloribus, culpa exercitationem suscipit voluptatibus cumque, ex nesciunt fugiat obcaecati?</p>
                <div className='flex items-center flex-wrap'>
                        <img className='rounded-full ring-2 ring-white h-12 w-12' src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8dXNlcnN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60" alt="" />
                        <img className='rounded-full ring-2 ring-white h-12 w-12' src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8dXNlcnN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60" alt="" />
                        <img className='rounded-full ring-2 ring-white h-12 w-12' src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fHVzZXJzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" alt="" />
                        <img className='rounded-full ring-2 ring-white h-12 w-12' src="https://images.unsplash.com/flagged/photo-1573740144655-bbb6e88fb18a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fHVzZXJzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" alt="" />
                        <span className='text-gray-400 px-2 font-sans'>more than 100k people have joined us, it's your turn</span>
                </div>
               </section>
        );
};

export default AuthBg;