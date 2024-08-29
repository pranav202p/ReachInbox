/* eslint-disable no-unused-vars */
import React from 'react';
import { Link } from 'react-router-dom';
import { TbHomeFilled } from "react-icons/tb";
import { MdPersonSearch } from "react-icons/md";
import { IoMdMail } from "react-icons/io";

import { IoIosSend } from "react-icons/io";
import { BsFillInboxFill } from "react-icons/bs";
import { FaThList } from "react-icons/fa";
import { MdOutlineBarChart } from "react-icons/md";
import { useDarkMode } from '../Context/DarkModeContext';
const Sidebar = () => {
    const { isDarkMode } = useDarkMode();
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
        <Link to="#" className="flex items-center justify-center p-1 hover:bg-zinc-500 hover:text-white" >
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
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-8 w-8"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M5 12h14m-7-7v14"
            />
          </svg>
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;
