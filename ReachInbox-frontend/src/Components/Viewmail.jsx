import React, { useState } from 'react';
import { ChevronDown, MoreHorizontal } from 'lucide-react';
import { useDarkMode } from '../Context/DarkModeContext';
import { MdReply } from "react-icons/md";
export default function Viewmailheader() {
  const { isDarkMode } = useDarkMode();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleDropdownToggle = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <div className={`flex flex-col h-screen border-l  ${isDarkMode ? 'bg-white text-black' : 'bg-black text-white border-gray-700'}`}>
      {/* Header Section */}
      <div className={`flex items-center justify-between border-b p-4 ${isDarkMode ? 'bg-white text-black border-slate-300' : 'bg-black text-white border-gray-700'}`}>
        <div className="flex flex-col">
          <span className="font-semibold">Orlando</span>
          <span className="text-sm text-gray-400">orlando@gmail.com</span>
        </div>
        <div className="flex items-center space-x-4">
          <button className={`flex items-center border px-3 py-1 rounded text-sm ${isDarkMode ? 'bg-white text-black border-slate-300' : 'bg-zinc-800 text-white border-gray-700'}`}>
            <div className="relative mr-2">
              <div className="w-5 h-5 bg-zinc-400 rounded-full"></div>
              <div className="absolute inset-1 bg-yellow-400 rounded-full"></div>
            </div>
            Meeting Completed
            <ChevronDown className="ml-2 w-4 h-4" />
          </button>
          <button className={`px-3 py-1 border rounded text-sm ${isDarkMode ? 'bg-white text-black border-slate-300' : 'bg-zinc-800 text-white border-gray-700'}`}>
            Move
          </button>
          <button className={`p-1 rounded border ${isDarkMode ? 'bg-white text-black border-slate-300' : 'bg-zinc-800 text-white border-gray-700'}`}>
            <MoreHorizontal className="w-5 h-5" />
          </button>
        </div>
      </div>

    
      <div className="flex-grow overflow-auto p-6">
       
        <div className="flex justify-center mb-4">
        
          <div className="bg-gray-800 px-4 py-1 rounded-full text-xs">
            Today
          </div>
        </div>

        
        <div className={`rounded-lg p-6 mb-8 ${isDarkMode ? 'bg-white text-black border-slate-300' : 'bg-zinc-800 text-white border-gray-700'}`}>
          <div className="flex justify-between items-start mb-2">
            <h2 className="text-lg font-semibold">New Product Launch</h2>
            <span className="text-xs text-gray-400">20 June 2022 · 9:16AM</span>
          </div>
          <p className="text-sm mb-2">
            from : <span className="text-gray-400">jeanne@icloud.com</span> cc : <span className="text-gray-400">lennon.j@mail.com</span>
          </p>
          <p className="text-sm mb-2">
            to : <span className="text-gray-400">lennon.j@mail.com</span>
          </p>
          <p className="text-sm mt-4">
            Hi &#123;FIRST_NAME&#125;,
          </p>
          <p className="text-sm mt-2">
            I would like to introduce you to SaaSgrow, a productized design service specifically tailored for saas startups. Our aim is to help you enhance the user experience and boost the visual appeal of your software products.
          </p>
        </div>

        
       
       
        <div className="border-t mt-4 border-gray-700 mb-4"></div>

       
        <div className="flex pt-14 mt-52 justify-start">
          <button className=" bg-gradient-to-r from-blue-500 via-blue-700 to-blue-800 hover:bg-blue-600 text-white py-2 pr-8 pl-5 rounded-sm text-sm">
            <div className='display flex space-x-3'>
            <MdReply size={20}  className='mt-1'/> 
            <p className='mt-1'>Reply</p>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
}
