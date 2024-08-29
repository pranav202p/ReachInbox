import React from 'react';
import { ChevronDown, RotateCw , Search } from 'lucide-react';
import { useDarkMode } from '../Context/DarkModeContext';
const InboxHeader = () => {
  const { isDarkMode, toggleDarkMode } = useDarkMode();
  return (
    <div className={`border w-auto  p-4 space-y-3 relative ${isDarkMode ?  'bg-white text-black  border-slate-300':'bg-black text-white border border-gray-700' }`}>
      <div className="flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <span className="text-blue-400 font-semibold">All Inbox(s)</span>
          <ChevronDown className="w-4 h-4 text-blue-400" />
        </div>
        <div className={` rounded-lg border p-3 ${isDarkMode ?  'bg-white text-black border-slate-300':'bg-zinc-800  border-gray-700' }`}>
        <RotateCw className="w-5 h-5 " />
        </div>
      </div>
      <div className="text-sm font-semibold">
        25/25 
         <span className='pl-2 text-gray-400'>Inboxes selected</span>
      </div>
      <div className="relative  rounded-md  ">
        <input
          type="text"
          placeholder="Search"
          className= {`w-full  rounded-md py-2 pl-9 pr-3 text-sm text-gray-300 placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-blue-500 border ${isDarkMode ?  'bg-slate-100 border-slate-300':'bg-zinc-800  border-gray-700' }`}/>
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-500" />
      </div>
      <div className="flex justify-between items-center text-sm">
        <div className="flex items-center space-x-2">
          <span className={`text-blue-400   rounded-3xl w-8 h-6  flex items-center justify-center  ${isDarkMode ?  'bg-slate-100 ':'bg-zinc-800 '}`}>26</span>
          <span className='font-semibold'>New Replies</span>
        </div>
        <div className="flex items-center space-x-1 ">
          <span className='font-semibold'>Newest</span>
          <ChevronDown className="w-4 h-4" />
        </div>
      </div>
      

      <div className="absolute bottom-0 left-0 right-0 h-px bg-gray-700"></div>
    </div>
  );
};

export default InboxHeader;