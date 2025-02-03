"use client";
import React, { useState } from "react";
import { Globe, Code, Radio, Settings, ChevronDown, ChevronUp, Shield } from "lucide-react"; // Import icons
import Link from "next/link"; // Import Link from next/link

const Sidebar = () => {
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false); // State to control sidebar visibility
  const [isShieldTextVisible, setIsShieldTextVisible] = useState(false); // State to control shield text visibility

  // Toggle sidebar visibility
  const toggleSidebar = () => {
    setIsSidebarCollapsed((prevState) => !prevState);
  };

  // Toggle shield text visibility
  const toggleShieldText = () => {
    setIsShieldTextVisible((prevState) => !prevState);
  };

  return (
    <div className="flex h-full justify-between md:flex-col w-fit text-black mt-12 shadow-md p-1 relative">
      {/* Button to toggle sidebar collapse */}
      <button
        onClick={toggleSidebar} // Call toggle function on button click
        className="fixed bottom-0 left-1 bg-white text-black p-1 hover:bg-blue-600 transition z-20"
          
      >
        {isSidebarCollapsed ? (
          <ChevronDown className="w-5 h-5" /> // Show ChevronDown icon when collapsed
        ) : (
          <ChevronUp className="w-5 h-5" /> // Show ChevronUp icon when expanded
        )}
      </button>

      {/* New shield button */}
      <button
        onClick={toggleShieldText} // Call function to toggle shield text visibility
        className="fixed bottom-0 ml-8 left-1 bg-white- text-black p-1 hover:bg-green-600 transition z-20"
      >
        <Shield className="w-5 h-5" />
      </button>

      {/* Sidebar content */}
      <div
        className={`flex flex-col space-y-6 w-full items-center transition-all duration-300 ${
          isSidebarCollapsed ? "w-30" : "w-20"
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

      {/* Pop-up text for the shield button */}
      {isShieldTextVisible && (
        <div className="fixed bottom-0 left-2 bg-slate-50 text-black p-2 shadow-md rounded-md w-auto h-52 text-xs">
<b>Interceptor</b> <br/>
Middleware between application abd APIs 

          <div className="space-y-4">
  <label className="block">
    <input
      type="radio"
      name="option"
      value="none"
      className="mr-2"
    />
    None
  </label>
  <label className="block">
    <input
      type="radio"
      name="option"
      value="proxy"
      className="mr-2"
    />
    Proxy
  </label>
  <label className="block">
    <input
      type="radio"
      name="option"
      value="browser_extension"
      className="mr-2"
    />
    Browser extension: Not Reported
  </label>
  <label className="block">
    <input
      type="radio"
      name="option"
      value="agent"
      className="mr-2"
    />
    Agent
  </label>
</div>

        </div>
      )}
    </div>
  );
};

export default Sidebar;
