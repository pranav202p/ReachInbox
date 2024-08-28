/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { Moon, Sun } from 'lucide-react';
import { FaAngleDown } from "react-icons/fa6";

import { useDarkMode } from '../Context/DarkModeContext';
const TopBar = () => {
    const { isDarkMode, toggleDarkMode } = useDarkMode();

  return (
    <div className={`flex items-center justify-between px-6 border py-4 ${isDarkMode ?  'bg-white text-black  border-slate-300':'bg-zinc-800 text-white  border-gray-700' }`}>
      <div className="text-lg font-semibold">Onebox</div>
      <div className="flex items-center space-x-4 ">
        <div className="relative flex items-center">
          
          <div className=" rounded-full border  flex items-center w-20  h-10 relative">
           
            <Moon
              className={`absolute left-1 text-gray-400  w-5 h-5 transition-opacity duration-300 ${isDarkMode ? 'opacity-100' : 'opacity-0'}`}
            />
           
            <Sun
              className={`absolute right-1 text-yellow-800 w-5 h-5 transition-opacity duration-300 ${isDarkMode ? 'opacity-0' : 'opacity-100'}`}
            />
            
            <button
              onClick={toggleDarkMode}
              className={`absolute top-1/2 transform -translate-y-1/2 w-8 h-8  rounded-full flex items-center justify-center transition-all duration-300 ease-in-out ${isDarkMode ? 'right-1 bg-yellow-500' : 'left-1 bg-gray-700'}`}
            >
            
            </button>
          </div>
        </div>
        <div className="flex items-center px-3 py-2 rounded-md ">
          <span className="font-medium mr-2">Tim's Workspace</span>
          <FaAngleDown />
        </div>
      </div>
    </div>
  );
};

export default TopBar;
