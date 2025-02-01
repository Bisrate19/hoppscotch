import React from "react";
import { Globe, Code, Radio, Settings } from "lucide-react"; // Import icons

const Sidebar = () => {
  return (
    <div className="flex h-full justify-between md:flex-col w-fit text-black mt-12 shadow-md p-1">
      <div className="flex flex-col space-y-6 w-full items-center">
        <a
          href="#"
          className="flex flex-col items-center w-full  text-xs p-2 hover:bg-gray-100 transition-colors duration-200"
        >
          <Globe className="w-5 h-5 mb-1" />
          REST
        </a>

        <a
          href="#"
          className="flex flex-col items-center text-xs p-2 hover:bg-gray-100 transition-colors duration-200"
        >
          <Code className="w-5 h-5 mb-1" />
          GraphQL
        </a>
        <a
          href="#"
          className="flex flex-col items-center text-xs p-2 hover:bg-gray-100 transition-colors duration-200"
        >
          <Radio className="w-5 h-5 mb-1" />
          Realtime
        </a>
        <a
          href="#"
          className="flex flex-col items-center text-xs p-2 hover:bg-gray-100 transition-colors duration-200"
        >
          <Settings className="w-5 h-5 mb-1" />
          Settings
        </a>
      </div>
    </div>
  );
};

export default Sidebar;
