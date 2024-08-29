import React, { useState } from 'react';
import { ChevronDown, MoreHorizontal } from 'lucide-react';
import { useDarkMode } from '../Context/DarkModeContext';

export default function Viewmailheader() {
  const { isDarkMode, toggleDarkMode } = useDarkMode();
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const handleDropdownToggle = () => {
      setIsDropdownOpen(!isDropdownOpen);
    };
  
    return (
      <div className={`flex items-center justify-between border  p-4 ${isDarkMode ?  'bg-white text-black  border-slate-300':'bg-black text-white border border-gray-700' }`}>
      <div className="flex flex-col">
        <span className="font-semibold">Orlando</span>
        <span className="text-sm text-gray-400">orladom@gmail.com</span>
      </div>
      <div className="flex items-center space-x-4">
        <button className={`flex items-center border px-3 py-1 rounded text-sm ${isDarkMode ?  'bg-white text-black  border-slate-300':'bg-zinc-800  text-white border border-gray-700' }`}>
          <div className="relative mr-2">
            <div className="w-5 h-5 bg-zinc-400 rounded-full"></div>
            <div className="absolute inset-1 bg-yellow-400 rounded-full"></div>
          </div>
          Meeting Completed
          <ChevronDown className="ml-2 w-4 h-4" />
        </button>
        <button className={` px-3 py-1 border rounded text-sm  ${isDarkMode ?  'bg-white text-black  border-slate-300':'bg-zinc-800  text-white border border-gray-700' }`}>
          Move
        </button>
        <button className={`p-1 rounded  border  ${isDarkMode ?  'bg-white text-black  border-slate-300':'bg-zinc-800  text-white border border-gray-700' }`}>
          <MoreHorizontal className="w-5 h-5" />
        </button>
      </div>
    
    </div>
    );
  }