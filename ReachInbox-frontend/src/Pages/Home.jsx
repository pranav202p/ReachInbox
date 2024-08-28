/* eslint-disable no-unused-vars */
import React from 'react';
import Sidebar from '../Components/Sidebar';
import TopBar from '../Components/Topbar';
import Image from '../assets/image.svg';
import { useDarkMode } from '../Context/DarkModeContext';
export default function Home() {
  const { isDarkMode, toggleDarkMode } = useDarkMode();
  return (
    <div className="flex min-h-screen bg-gray-100" >
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <TopBar />
        <div className={`flex-1 flex flex-col items-center justify-center text-center text-white p-10 ${isDarkMode ?  'bg-white text-black  border-slate-300':'bg-black text-white border border-gray-700' }`}>
        <div className="relative mb-12">
          <img src={Image} alt="Description" className="mx-auto" />
        </div>
        <h1 className={`text-2xl  font-bold mb-8 ${isDarkMode ?  ' text-black  ':'text-white ' }`}>It’s the beginning of a legendary sales pipeline</h1>
        <p className="text-gray-400 w-1/5 text-lg mt-4">When you have inbound E-mails you’ll see them here</p>
      </div>
      </div>
    </div>
  )
}
