import React from 'react';
import { menuItems } from './menuItems';
import './style.css'
import { AiOutlinePlus } from 'react-icons/ai';

const Navbar = () => {
  
   return (
      <nav className='overflow-x-auto width-[80%] md:width-[100%]'>
         <ul>
            <li className='plus-icon'>+</li>
           {
           menuItems.map((menu, index)=><li key={index}>{menu.name}</li>)
           }
         </ul>
      </nav>
   );
};

export default Navbar;