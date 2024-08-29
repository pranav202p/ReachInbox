/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { TbHomeFilled } from "react-icons/tb";
import { MdPersonSearch } from "react-icons/md";
import { IoMdMail } from "react-icons/io";

import { IoIosSend } from "react-icons/io";
import { BsFillInboxFill } from "react-icons/bs";
import { FaThList } from "react-icons/fa";
import { MdOutlineBarChart } from "react-icons/md";
import { useDarkMode } from '../Context/DarkModeContext';
import {jwtDecode} from 'jwt-decode';

const Sidebar = () => {
  const [initial, setInitial] = useState('');
  const [bgColor, setBgColor] = useState('');
    const { isDarkMode } = useDarkMode();

  useEffect(() => {
    
    const token = localStorage.getItem('authToken');

    if (token) {
     
      const decodedToken = jwtDecode(token);
      console.log(decodedToken)
      const firstName = decodedToken?.user?.firstName || '';
      console.log("Nam",firstName)

      // Get the first letter of the first name
      if (firstName) {
        setInitial(firstName.charAt(0).toUpperCase());
      }

      
    }
  }, []);
  return (
    <div className={`w-20 flex flex-col items-center border py-4 ${isDarkMode ?  'bg-white text-black  border-slate-300':'bg-zinc-800 text-white border border-gray-700' }`}>
      <div className="mb-14 border">
        <img
          src="https://media.licdn.com/dms/image/D560BAQEmo1aZIhVtlQ/company-logo_200_200/0/1700158687336/reachinbox_ai_logo?e=2147483647&v=beta&t=2eGcwWsFtdBcUVJGGHkBxWHYFN86D-c5zfyr4s3DsNw"
          alt="Company Logo"
          className="h-8"
        />
      </div>
      <nav className={`space-y-10 p-3  ${isDarkMode ?  'bg-white text-gray-400 ':'bg-zinc-800 text-zinc-400   ' }`}>
        <Link to="/home" className="flex items-center justify-center p-1 hover:bg-zinc-500 hover:text-white" >
          < TbHomeFilled size={32}/>
        </Link>
        <Link to="#" className="flex items-center justify-center p-1 hover:bg-zinc-500 hover:text-white">
        <MdPersonSearch size={32}/>
        </Link>
        <Link to="#" className="flex items-center justify-center p-1 relative hover:bg-zinc-500 hover:text-white">
        <IoMdMail  size={32}/>
        </Link>
        <Link to="#" className="flex items-center justify-center p-1  hover:bg-zinc-500 hover:text-white">
        <IoIosSend size={32}/>
        </Link>
        <Link to="#" className="flex items-center justify-center p-1 hover:bg-zinc-500 hover:text-white">
        < FaThList size={24}/>
        </Link>
        <Link to="/Inbox" className="flex items-center justify-center p-1 hover:bg-zinc-500 hover:text-white">
        < BsFillInboxFill size={32}/>
        </Link>
        <Link to="#" className="flex items-center justify-center p-1 hover:bg-zinc-500 hover:text-white">
        <MdOutlineBarChart size={32}/>
        </Link>
      </nav>
      <div className="mt-auto">
        <Link to="#" className="flex items-center justify-center">
        <div
      className="w-11 h-11 flex bg-amber-900 items-center justify-center rounded-full text-white font-bold"
   
    >
      {initial}
    </div>
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;
