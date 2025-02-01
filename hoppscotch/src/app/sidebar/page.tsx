import React from "react";
import { Globe, Code, Radio, Settings } from "lucide-react"; // Import icons
import Link from "next/link"; // Import Link from next/link

const Sidebar = () => {
  return (
    <div className="flex h-full justify-between md:flex-col w-fit text-black mt-12 shadow-md p-1">
      <div className="flex flex-col space-y-6 w-full items-center">
        {/* REST Link */}
        <Link
          href="/rest" // Path to the REST page
          className="flex flex-col items-center w-full text-xs p-2 hover:bg-gray-100 transition-colors duration-200"
        >
          <Globe className="w-5 h-5 mb-1" />
          REST
        </Link>

        {/* GraphQL Link */}
        <Link
          href="/graphql" // Path to the GraphQL page
          className="flex flex-col items-center text-xs p-2 hover:bg-gray-100 transition-colors duration-200"
        >
          <Code className="w-5 h-5 mb-1" />
          GraphQL
        </Link>

        {/* Realtime Link */}
        <Link
          href="/realtime" // Path to the Realtime page
          className="flex flex-col items-center text-xs p-2 hover:bg-gray-100 transition-colors duration-200"
        >
          <Radio className="w-5 h-5 mb-1" />
          Realtime
        </Link>

        {/* Settings Link */}
        <Link
          href="/settings" // Path to the Settings page
          className="flex flex-col items-center text-xs p-2 hover:bg-gray-100 transition-colors duration-200"
        >
          <Settings className="w-5 h-5 mb-1" />
          Settings
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;