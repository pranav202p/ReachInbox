import React, { useState, useEffect, useCallback } from 'react';
import { ChevronDown, MoreHorizontal, X } from 'lucide-react';
import { useDarkMode } from '../Context/DarkModeContext';
import { useThreadId } from '../Context/ThreadIdContext';
import { MdReply } from "react-icons/md";
import axios from "axios"
export default function ViewMailHeader() {
  const { isDarkMode } = useDarkMode();
  const { threadId } = useThreadId();
  const [emailData, setEmailData] = useState(null);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [showReplyBox, setShowReplyBox] = useState(false);
  const [replyContent, setReplyContent] = useState('');
  const [showDeleteConfirm, setShowDeleteConfirm] = useState(false);
 


  useEffect(() => {
    const fetchEmailData = async () => {
      try {
        const currentThreadId = threadId || 57533;
        console.log(threadId)
        const token = localStorage.getItem('authToken');
        const response = await fetch(`https://hiring.reachinbox.xyz/api/v1/onebox/messages/${currentThreadId}`, {
          headers: {
            'Authorization': `Bearer ${token}`,
          },
        });

        if (!response.ok) {
          throw new Error('Failed to fetch email data');
        }

        const data = await response.json();
        setEmailData(data.data);
      } catch (error) {
        console.error('Error fetching email data:', error);
      }
    };

    if (threadId) {
      fetchEmailData();
    }
  }, [threadId]);

  const handleDropdownToggle = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleReplyClick = () => {
    setShowReplyBox(true);
  };

  const handleCloseReplyBox = () => {
    setShowReplyBox(false);
    setReplyContent('');
  };

  const handleKeyDown = useCallback((e) => {
    if (e.key === 'r') {
      e.preventDefault();
      setShowReplyBox(true);
    } else if (e.key === 'd') {
      e.preventDefault();
      setShowDeleteConfirm(true);
    }
  }, []);

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [handleKeyDown]);


  const handleDelete = async () => {
    try {
      const token = localStorage.getItem('authToken');
      
      const response = await fetch(`https://hiring.reachinbox.xyz/api/v1/onebox/messages/${threadId}`, {
        method: 'DELETE',
        headers: {
          'Authorization': `Bearer ${token}`,
        },
      });
  
      if (!response.ok) {
        throw new Error('Failed to delete the email');
      }
  
      console.log('Message deleted');
      setShowDeleteConfirm(false);
      
      
    } catch (error) {
      console.error('Error deleting the email:', error);
     
    }
  };
  

   const handleSendReply = async () => {
    try {
      const token = localStorage.getItem('authToken'); 
      const messages = {
        content: replyContent, 
      };
  
      console.log(messages)
      console.log(threadId)
      await axios.post(`https://hiring.reachinbox.xyz/api/v1/onebox/reply/${threadId}`, messages, {
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json', 
        },
      });
  
      alert('Message sent successfully');
  
      
      handleCloseReplyBox();
  
     
      window.location.reload();
    } catch (error) {
      console.error('Error sending the reply:', error);
    
      alert('Failed to send the message');
    }
  };

  const handleCancelDelete = () => {
    setShowDeleteConfirm(false);
  };

  if (!emailData) {
    return <div className="flex-grow flex items-center justify-center">Loading emails...</div>;
  }

  return (
    <div className={`flex flex-col h-screen border-l ${isDarkMode ? 'bg-white text-black' : 'bg-black text-white border-gray-700'}`}>
      {/* Header Section */}
      <div className={`flex items-center justify-between border-b p-4 ${isDarkMode ? 'bg-white text-black border-slate-300' : 'bg-black text-white border-gray-700'}`}>
        <div className="flex flex-col">
          <span className="font-semibold">{emailData[0]?.fromName || emailData[0]?.fromEmail}</span>
          <span className="text-sm text-gray-400">{emailData[0]?.fromEmail}</span>
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

      <div className={`flex-grow overflow-auto p-5 ${isDarkMode ? 'bg-slate-100 ' : 'bg-black'}`}>
  {emailData.map((email, index) => (
    <React.Fragment key={index}>
      <div className="flex items-center mb-2">
        <div className="flex-grow border-t border-gray-700"></div>
        <div className="flex-grow-0 mx-4 text-gray-500 text-sm">
          {new Date(email.sentAt).toLocaleDateString()}
        </div>
        <div className="flex-grow border-t border-gray-700"></div>
      </div>
      
      <div className={`rounded-lg  border p-4 mb-6 ${isDarkMode ? 'bg-white text-black border-slate-300' : 'bg-zinc-900 text-white border-gray-700'}`}>
        <div className="flex justify-between items-start mb-2">
          <h2 className="text-md">{email.subject}</h2>
          <span className="text-xs text-gray-700">{new Date(email.sentAt).toLocaleString()}</span>
        </div>
        <p className="text-sm mb-2">
          from: <span className="text-gray-700">{email.fromEmail}</span>
          {email.cc && ` cc: ${email.cc}`}
        </p>
        <p className="text-sm mb-2">
          to: <span className="text-gray-400">{email.toEmail}</span>
        </p>
        <div className="text-sm mt-4" dangerouslySetInnerHTML={{ __html: email.body }} />
      </div>
    </React.Fragment>
  ))}
 


        <div className="fixed bottom-0 left-54 w-full p-4 bg-opacity-90 ">
          <div className="flex justify-start">
            <button 
              className="bg-gradient-to-r from-blue-500 via-blue-700 to-blue-800 hover:bg-blue-600 text-white py-2 pr-8 pl-5 rounded-sm text-sm"
              onClick={handleReplyClick}
            >
              <div className='flex space-x-3'>
                <MdReply size={20} className='mt-1' />
                <p className='mt-1'>Reply</p>
              </div>
            </button>
          </div>
        </div>
     

      {showReplyBox && (
        <div className="fixed inset-0 pl-10 bg-black bg-opacity-50 flex items-center justify-center">
          <div className={`w-2/4 mt-44  h-3/4 ${isDarkMode ? 'bg-white text-black' : 'bg-zinc-900 text-white'} rounded-lg p-4 flex flex-col`}>
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg font-semibold">Reply</h2>
              <button onClick={handleCloseReplyBox}>
                <X className="w-6 h-6" />
              </button>
            </div>
            <div className="mb-4">
              <p>To: {emailData[0]?.fromEmail}</p>
              <p>From: {emailData[0]?.toEmail}</p>
              <p>Subject: Re: {emailData[0]?.subject}</p>
            </div>
            <textarea
              className={`flex-grow p-2 mb-4 rounded ${isDarkMode ? 'bg-gray-100 text-black' : 'bg-zinc-800 text-white'}`}
              value={replyContent}
              onChange={(e) => setReplyContent(e.target.value)}
              placeholder="Type your reply here..."
            />
            <div className="flex justify-end">
              <button
                className="bg-blue-500 text-white px-4 py-2 rounded"
                onClick={handleSendReply}
              >
                Send
              </button>
            </div>
          </div>
        </div>
      )}

      {showDeleteConfirm && (
        <div className="fixed inset-0 flex items-center justify-center bg-neutral-700 bg-transparent-60 bg-opacity-90">
          <div className={`p-12  rounded-lg w-1/4  ${isDarkMode ? 'bg-white text-black' : 'bg-zinc-900 text-white'}`}>
            <h2 className="text-xl text-center font-semibold mb-4">Are you sure ?</h2>
            <p className="mb-8 text-center text-gray-400 ">Your message will be deleted.</p>
            <div className="flex justify-between mx-0 p-4 space-x-8">
              <button
                className="px-8 py-2 rounded bg-zinc-800 text-white"
                onClick={handleCancelDelete}
              >
                Cancel
              </button>
              <button
                className="px-8 py-2 rounded bg-gradient-to-r from-red-400 to-red-600 text-white"
                onClick={handleDelete}
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
    </div>
  );
}
