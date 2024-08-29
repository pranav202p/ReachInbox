import React, { useState, useEffect } from 'react';
import { ChevronDown, MoreHorizontal } from 'lucide-react';
import { useDarkMode } from '../Context/DarkModeContext';

export default function EmailList() {
  const { isDarkMode } = useDarkMode();
  const [emails, setEmails] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchEmails = async () => {
      try {
        const token = localStorage.getItem('token'); 
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

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className={`space-y-2 ${isDarkMode ? 'bg-black text-white' : 'bg-white text-black'}`}>
      {emails.map((email) => (
        <div key={email.id} className={`flex items-center justify-between border p-4 ${isDarkMode ? 'border-gray-700' : 'border-slate-300'}`}>
          <div className="flex flex-col">
            <span className="font-semibold">{email.fromEmail}</span>
            <span className="text-sm text-gray-400">{email.subject}</span>
          </div>
          <div className="flex items-center space-x-4">
            <button className={`flex items-center border px-3 py-1 rounded text-sm ${isDarkMode ? 'bg-zinc-800 border-gray-700' : 'bg-white border-slate-300'}`}>
              <div className="relative mr-2">
                <div className="w-5 h-5 bg-zinc-400 rounded-full"></div>
                <div className="absolute inset-1 bg-yellow-400 rounded-full"></div>
              </div>
              {email.isRead ? 'Read' : 'Unread'}
              <ChevronDown className="ml-2 w-4 h-4" />
            </button>
            <button className={`px-3 py-1 border rounded text-sm ${isDarkMode ? 'bg-zinc-800 border-gray-700' : 'bg-white border-slate-300'}`}>
              Move
            </button>
            <button className={`p-1 rounded border ${isDarkMode ? 'bg-zinc-800 border-gray-700' : 'bg-white border-slate-300'}`}>
              <MoreHorizontal className="w-5 h-5" />
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}