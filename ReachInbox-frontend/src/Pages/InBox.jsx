// eslint-disable-next-line no-unused-vars
import React from 'react';
import Sidebar from '../Components/Sidebar';
import TopBar from '../Components/TopBar.jsx';
import { useDarkMode } from '../Context/DarkModeContext';
import LeadDetails from '../Components/LeadDetails';
import InboxHeader from '../Components/Inboxheader';
import ViewMail from '../Components/Viewmail.jsx';

export default function InBox() {
    const { isDarkMode } = useDarkMode();

    return (
        <div className={`flex h-screen ${isDarkMode ? 'bg-gray-900 text-white' : 'bg-gray-100 text-black'}`}>
            <Sidebar />
            <div className="flex-1 flex flex-col overflow-hidden">
                <TopBar />
                <div className="flex-1 flex overflow-hidden">
                    {/* Responsive widths */}
                    <div className="w-full sm:w-1/3 md:w-1/4 flex flex-col overflow-hidden">
                        <InboxHeader />
                    </div>
                    <div className="w-full sm:w-2/3 md:w-2/3  flex flex-col overflow-hidden">
                        <ViewMail />
                    </div>
                    <div className=" sm:block sm:w-1/3 md:w-1/4  flex flex-col overflow-hidden">
                        <LeadDetails />
                    </div>
                </div>
            </div>
        </div>
    );
}