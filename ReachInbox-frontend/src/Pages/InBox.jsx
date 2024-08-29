import React from 'react';
import Sidebar from '../Components/Sidebar';
import TopBar from '../Components/Topbar';
import { useDarkMode } from '../Context/DarkModeContext';
import LeadDetails from '../Components/LeadDetails';
import InboxHeader from '../Components/Inboxheader';
import Viewmail from '../Components/Viewmail';

export default function InBox() {
    const { isDarkMode, toggleDarkMode } = useDarkMode();

    return (
        <div className={`flex h-screen ${isDarkMode ? 'bg-gray-900 text-white' : 'bg-gray-100 text-black'}`}>
            <Sidebar />
            <div className="flex-1 flex flex-col">
                <TopBar />
                <div className="flex-1 flex">
                    {/* Responsive widths */}
                    <div className="w-full sm:w-1/3 md:w-1/4 overflow-auto">
                        <InboxHeader />
                    </div>
                    <div className="w-full sm:w-2/3 md:w-2/3 overflow-auto">
                        <Viewmail />
                    </div>
                    <div className="w-full sm:w-1/3 md:w-1/4 overflow-auto">
                        <LeadDetails />
                    </div>
                </div>
            </div>
        </div>
    );
}
