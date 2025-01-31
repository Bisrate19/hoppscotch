import { Search, Cloud, LifeBuoy, Download } from "lucide-react"; // Importing icons
import React from "react"; // Import React for TypeScript support

const Header: React.FC = () => {
  return (
    <header className="grid grid-cols-5 grid-rows-1 gap-2 overflow-x-auto overflow-y-hidden p-1 bg-white shadow-md fixed top-0 left-0 w-full z-10">
      {/* Left Section - Logo */}
      <div className="col-span-1 flex items-center">
        <div className="truncate max-w-[12rem] text-black font-bold text-lg">
          HOPPSCOTCH
        </div>
      </div>

      {/* Center Section - Search, Install App, and Support */}
      <div className="col-span-3 flex items-center justify-center space-x-3">
        {/* Search Button */}
        <button className="relative flex items-center justify-between space-x-3 p-1.5 rounded-md bg-gray-100 shadow-sm hover:bg-gray-200 transition w-full max-w-sm">
          {/* Search Icon & Text (Left) */}
          <div className="flex items-center space-x-1.5">
            <Search className="w-3.5 h-3.5 text-gray-600" />
            <span className="text-gray-700 text-sm">Search</span>
          </div>

          {/* Shortcut Keys (Right) */}
          <div className="flex items-center space-x-1">
            <span className="bg-gray-300 text-gray-800 px-1 py-0.5 text-xs rounded-md font-mono">
              Ctrl
            </span>
            <span className="bg-gray-300 text-gray-800 px-1 py-0.5 text-xs rounded-md font-mono">
              K
            </span>
          </div>
        </button>

        {/* Install App Button */}
        <button className="p-1.5 rounded-md bg-gray-100 shadow-sm hover:bg-gray-200 transition">
          <Download className="w-4 h-4 text-gray-600" />
        </button>

        {/* Support Button */}
        <button className="p-1.5 rounded-md bg-gray-100 shadow-sm hover:bg-gray-200 transition">
          <LifeBuoy className="w-4 h-4 text-gray-600" />
        </button>
      </div>

      {/* Right Section - Save My Work Space Button and Login */}
      <div className="col-span-1 flex items-center justify-end space-x-2">
        <button className="bg-green-100 text-green-500 flex items-center space-x-1.5 py-1.5 px-3 rounded-md shadow-md hover:bg-green-200 transition">
          {/* Cloud Icon */}
          <Cloud className="w-4 h-4" />
          <span className="text-xs whitespace-nowrap">Save My Work Space</span>
        </button>
        <button className="bg-blue-500 text-white py-1.5 px-3 rounded-lg hover:bg-blue-600 transition whitespace-nowrap text-sm">
          Login
        </button>
      </div>
    </header>
  );
};

export default Header;