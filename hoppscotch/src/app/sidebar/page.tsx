"use client";
import React, { useState } from "react";
import { Globe, Code, Radio, Settings, ChevronDown, ChevronUp } from "lucide-react"; // Import icons
import Link from "next/link"; // Import Link from next/link

const Sidebar = () => {
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false); // State to control sidebar visibility

  // Toggle sidebar visibility
  const toggleSidebar = () => {
    setIsSidebarCollapsed((prevState) => !prevState);
  };

  return (
    <div className="flex h-full justify-between md:flex-col w-fit text-black mt-12 shadow-md p-1 relative">
      {/* Button to toggle sidebar collapse */}
      <button
        onClick={toggleSidebar} // Call toggle function on button click
        className="fixed bottom-0 left-1 bg-blue-500 text-white p-1  hover:bg-blue-600 transition z-20"
      >
        {isSidebarCollapsed ? (
          <ChevronDown className="w-5 h-5" /> // Show ChevronDown icon when collapsed
        ) : (
          <ChevronUp className="w-5 h-5" /> // Show ChevronUp icon when expanded
        )}
      </button>

      {/* Sidebar content */}
      <div
        className={`flex flex-col space-y-6 w-full items-center transition-all duration-300 ${
          isSidebarCollapsed ? "w-" : "w-20"
        }`} // Adjust width based on collapse state
      >
        {/* REST Link */}
        <Link
          href="/" // Path to the REST page
          className="flex flex-col items-center w-full text-xs p-2 hover:bg-gray-100 transition-colors duration-200"
        >
          <Globe className="w-5 h-5 mb-1" />
          {!isSidebarCollapsed && <span className="text-xs">REST</span>} {/* Hide text on collapse */}
        </Link>

        {/* GraphQL Link */}
        <Link
          href="/sidebar/graphql" // Path to the GraphQL page
          className="flex flex-col items-center text-xs p-2 hover:bg-gray-100 transition-colors duration-200"
        >
          <Code className="w-5 h-5 mb-1" />
          {!isSidebarCollapsed && <span className="text-xs">GraphQL</span>}
        </Link>

        {/* Realtime Link */}
        <Link
          href="/sidebar/realtime" // Path to the Realtime page
          className="flex flex-col items-center text-xs p-2 hover:bg-gray-100 transition-colors duration-200"
        >
          <Radio className="w-5 h-5 mb-1" />
          {!isSidebarCollapsed && <span className="text-xs">Realtime</span>}
        </Link>

        {/* Settings Link */}
        <Link
          href="/sidebar/settings" // Path to the Settings page
          className="flex flex-col items-center text-xs p-2 hover:bg-gray-100 transition-colors duration-200"
        >
          <Settings className="w-5 h-5 mb-1" />
          {!isSidebarCollapsed && <span className="text-xs">Settings</span>}
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;
