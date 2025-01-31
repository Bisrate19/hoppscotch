import { Search, Cloud, LifeBuoy } from "lucide-react"; 
import React from "react"; 

const Header: React.FC = () => {
  return (
    <header className="grid grid-cols-5 grid-rows-1 gap-2 overflow-x-auto overflow-y-hidden p-2 bg-white shadow-md fixed top-0 left-0 w-full z-10">
      {/* Left Section - Logo */}
      <div className="col-span-1 flex items-center">
        <div className="truncate max-w-[16rem] text-black font-bold text-xl">
          HOPPSCOTCH
        </div>
      </div> 

      {/* Center Section - Search and Support */}
      <div className="col-span-3 flex items-center justify-center space-x-4">
        {/* Search Button */}
        <button className="relative flex items-center justify-between space-x-4 p-2 rounded-lg bg-gray-100 shadow-sm hover:bg-gray-200 transition w-full max-w-xs">
          {/* Search Icon & Text (Left) */}
          <div className="flex items-center space-x-2">
            <Search className="w-4 h-4 text-gray-600" />
            <span className="text-gray-700">Search</span>
          </div>

          {/* Shortcut Keys (Right) */}
          <div className="flex items-center space-x-1">
            <span className="bg-gray-300 text-gray-800 px-1.5 py-0.5 text-xs rounded-md font-mono">
              Ctrl
            </span>
            <span className="bg-gray-300 text-gray-800 px-1.5 py-0.5 text-xs rounded-md font-mono">
              K
            </span>
          </div>
        </button>

        {/* Support Icon (Separate Background) */}
        <button className="p-2 rounded-lg bg-gray-100 shadow-sm hover:bg-gray-200 transition">
          <LifeBuoy className="w-5 h-5 text-gray-600" />
        </button>
      </div>

      {/* Right Section - Save My Work Space Button and Login */}
      <div className="col-span-1 flex items-center justify-end space-x-2">
        <button className="bg-green-100 text-green-500 flex items-center space-x-2 py-2 px-4 rounded-md shadow-md hover:bg-green-200 transition">
          {/* Cloud Icon */}
          <Cloud className="w-5 h-5" />
          <span className="text-xs whitespace-nowrap">Save My Work Space</span>
        </button>
        <button className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition whitespace-nowrap">
          Login
        </button>
      </div>
    </header>
  );
};

export default Header;