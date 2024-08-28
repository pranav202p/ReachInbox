/* eslint-disable no-unused-vars */
import React from 'react';
import Logo from '../assets/image.png';

import { Link } from 'react-router-dom';

import { FcGoogle } from 'react-icons/fc';

export default function Login() {
    const handleGoogleSignIn = () => {
      
        window.location.href = 'https://hiring.reachinbox.xyz/api/v1/auth/google-login?redirect_to=http://localhost:5173/home';

      };
      
  return (
    <div className="bg-black h-screen m-auto text-white flex flex-col justify-between">
      <div className="w-full h-16 flex justify-center items-center border border-slate-800">
        <img src={Logo} alt="reachinbox-logo" className="h-6" />
      </div>
      <div className="w-full flex justify-center items-center flex-1">
        <div className="w-[90%] sm:w-[460px] h-auto bg-[#111214] rounded-2xl border border-gray-700 py-6 px-6 md:px-10">
          <div className="w-full sm:w-[380px] m-auto">
            <p className="text-lg md:text-xl text-center mb-6">Create new account</p>
            <div
              className="rounded border border-gray-500 h-12 flex justify-center items-center gap-2.5 mb-12 cursor-pointer"
              onClick={handleGoogleSignIn}
            >
              <img
                src="https://static.vecteezy.com/system/resources/previews/013/760/951/non_2x/colourful-google-logo-in-dark-background-free-vector.jpg"
                alt="Google logo"
                className="bg-black rounded-full h-5 mt-0.5"
              />
              <p className="text-sm md:text-lg mt-1 text-gray-400">
                Sign Up with Google
              </p>
            </div>
            <p className="w-full sm:w-[195px] h-12 bg-gradient-to-r from-blue-500 via-blue-700 to-blue-800 rounded m-auto text-center py-2.5 mb-6 cursor-pointer">
              Create an account
            </p>
            <p className="text-sm md:text-lg text-center text-gray-500">
              Already have an account? <span className="text-gray-400">Sign In</span>
            </p>
          </div>
        </div>
      </div>
      <div className="w-full h-8 flex justify-center bg-[#111214] items-center border border-slate-800">
        <p className="h-5 text-gray-600 text-xs">©️ 2024 Reachinbox. All rights reserved.</p>
      </div>
    </div>
  );
}
