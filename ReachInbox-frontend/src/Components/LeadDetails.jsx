import React from 'react';
import { Mail, Send ,MailOpen} from 'lucide-react';
import { useDarkMode } from '../Context/DarkModeContext';
const LeadDetails = () => {
    const { isDarkMode, toggleDarkMode } = useDarkMode();
    return (
      <div className={`h-full overflow-auto p-2 border ${isDarkMode ? 'bg-white text-black border-slate-300' : 'bg-black text-white border-gray-700'}`}>
          <div className="mb-10">
              <h2 className={`text-lg mb-6 p-2 pl-4 border rounded-lg ${isDarkMode ? 'bg-slate-100 text-black border-slate-300' : 'bg-zinc-900 text-white border-gray-700'}`}>Lead Details</h2>
              <div className="space-y-7">
                  <DetailItem label="Name" value="Orlando" />
                  <DetailItem label="Contact No" value="+54-9062827869" />
                  <DetailItem label="Email ID" value="orlando@gmail.com" />
                  <DetailItem label="Linkedin" value="linkedin.com/in/timvadde/" />
                  <DetailItem label="Company Name" value="Reachinbox" />
              </div>
          </div>
          
          <div>
              <h2 className={`text-lg mb-1 border p-1 pl-4 rounded-lg ${isDarkMode ? 'bg-slate-100 text-black border-slate-300' : 'bg-zinc-900 text-white border-gray-700'}`}>Activities</h2>
              <div className="text-sm mt-10 mb-1">
                  <div className="font-bold text-lg mt-2">Campaign Name</div>
                  <div className="flex space-x-4 mt-4 text-gray-400">
                      <span>3 Steps</span>
                      <div className="h-5 w-px bg-gray-600"></div>
                      <span>5 Days in Sequence</span>
                  </div>
              </div>
              <div className="space-y-10 mt-2 relative">
                  <div className="absolute left-5 top-0 bottom-1 w-px bg-gray-600"></div>
                  <ActivityItem step={1} status="sent" date="3rd, Feb" />
                  <ActivityItem step={2} status="opened" date="5th, Feb" />
                  <ActivityItem step={3} status="opened" date="5th, Feb" />
              </div>
          </div>
      </div>
  );
};


const DetailItem = ({ label, value }) => (
  <div className="flex justify-between">
    <span className="text-gray-400">{label}</span>
    <span>{value}</span>
  </div>
);

const ActivityItem = ({ step, status, date }) => (
  <div className="flex items-start relative z-10 ">
    <div className={`w-10 h-10 rounded-full flex  items-center justify-center mr-7 ${status === 'sent' ? 'bg-gray-600' : 'bg-gray-700'}`}>
      <Mail size={24} className="mx-auto" />
    </div>
    <div className="flex-1">
      <div className="text-sm">Step {step}: Email</div>
      <div className="text-xs text-gray-400 flex items-center mt-1">
        {status === 'sent' ? (
          <>
            <Send size={18} className="mr-1" />
            Sent {date}
          </>
        ) : (
          <>
            <MailOpen size={18} className="mr-1 text-yellow-400" />
            Opened {date}
          </>
        )}
      </div>
    </div>
  </div>
);

export default LeadDetails;