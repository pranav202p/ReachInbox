import React, { useState, useEffect } from 'react';
import { Send } from 'lucide-react';
import { useDarkMode } from '../Context/DarkModeContext';

export default function EmailList() {
  const { isDarkMode } = useDarkMode();
  const [emails, setEmails] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchEmails = async () => {
      try {
        const token = localStorage.getItem('authToken');
        const response = await fetch('https://hiring.reachinbox.xyz/api/v1/onebox/list', {
          headers: {
            'Authorization': `Bearer ${token}`,
          },
        });
       
        if (!response.ok) {
          throw new Error('Failed to fetch emails');
        }
        const data = await response.json();
        
        setEmails(data.data);
      } catch (err) {
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchEmails();
  }, []);

  if (isLoading) return <div className="flex-grow flex items-center justify-center">Loading...</div>;
  if (error) return <div className="flex-grow flex items-center justify-center">Error: {error}</div>;

  return (
    <div className={`flex-grow overflow-auto  ${isDarkMode ? 'bg-white text-black' : 'bg-black text-white'}`}>
      {emails.map((email) => (
        <div 
          key={email.id} 
          className={`border-b p-3 pb-2 ${isDarkMode ? 'border-slate-300' : 'border-gray-700'}`}
          style={{ maxWidth: '93%', margin: '0 auto' }} 
        >
          <div className="flex items-center justify-between  p-4 pb-0">
            <div className="flex items-center space-x-7">
              <span className="font-semibold">{email.fromEmail}</span>
              <span className="text-xs  text-gray-500">May 7</span>
            </div>
          </div>
          <div className="flex flex-col p-4 pt-2">
            <span className="text-sm text-gray-400">{email.subject}</span>
          </div>
          <div className="flex items-center space-x-2 p-2 pb-4 pt-0">
            <button className={`flex items-center px-3 py-1 rounded-full text-sm ${isDarkMode ? 'bg-slate-200 text-green-500' : 'bg-zinc-800 text-green-500'}`}>
              <span className="h-2.5 w-2.5 bg-green-500 rounded-full mr-2"></span>
              Interested
            </button>
            <button className={`flex items-center px-3 py-1  rounded-full text-sm ${isDarkMode ? 'bg-slate-200 text-gray-800' : 'bg-zinc-800 text-gray-200'}`}>
              <Send className="w-4 h-4 mr-1" />
              Campaign Name
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
