import React from 'react';
import { Mail, Send ,MailOpen} from 'lucide-react';
import { useDarkMode } from '../Context/DarkModeContext';
const LeadDetails = () => {
    const { isDarkMode, toggleDarkMode } = useDarkMode();
  return (
    <div className={`bg-gray-800 text-white p-4 rounded-lg max-w-sm  ${isDarkMode ?  'bg-white text-black  border-slate-300':'bg-zinc-800 text-white  border-gray-700' }`}>
      <div className="mb-10">
        <h2 className="text-lg font-bold mb-6 bg-gray-700 p-2 pl-4 rounded-lg">Lead Details</h2>
        <div className="space-y-7">
          <DetailItem label="Name" value="Orlando" />
          <DetailItem label="Contact No" value="+54-9062827869" />
          <DetailItem label="Email ID" value="orlando@gmail.com" />
          <DetailItem label="Linkedin" value="linkedin.com/in/timvadde/" />
          <DetailItem label="Company Name" value="Reachinbox" />
        </div>
      </div>
      
      <div>
        <h2 className="text-lg font-bold  mb-2 bg-gray-700 p-2 pl-4 rounded-lg">Activities</h2>
        <div className="text-sm  mt-10 mb-4">
          <div className="font-bold text-lg mt-4">Campaign Name</div>
          <div className="flex space-x-4 mt-4 text-gray-400">
            <span>3 Steps</span>
            <div className=" left-9  h-5 top-58 bottom-0 w-px bg-gray-600"></div>
            <span>5 Days in Sequence</span>
          </div>
        </div>
        <div className="space-y-10 mt-3 relative">
          <div className="absolute left-5 top-0 bottom-0 w-px bg-gray-600"></div>
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
  <div className="flex items-start relative z-10 mb-4">
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