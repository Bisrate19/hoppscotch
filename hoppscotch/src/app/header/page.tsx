import { Search, Cloud, LifeBuoy, Download } from "lucide-react"; // Importing icons
import React from "react"; // Import React for TypeScript support

const Header: React.FC = () => {
  return (
    <header className="grid grid-cols-5 grid-rows-1 gap-1 overflow-x-auto overflow-y-hidden p-0.5 bg-white shadow-md fixed top-0 left-0 w-full z-10">
      {/* Left Section - Logo */}
      <div className="col-span-1 flex items-center">
        <div className="truncate max-w-[10rem] text-black font-bold text-base">
          HOPPSCOTCH
        </div>
      </div>

      {/* Center Section - Search, Install App, and Support */}
      <div className="col-span-3 flex items-center justify-center space-x-2">
        {/* Search Button */}
        <button className="relative flex items-center justify-between space-x-2 p-1 rounded-sm bg-gray-100 shadow-sm hover:bg-gray-200 transition w-full max-w-xs group">
          {/* Search Icon & Text (Left) */}
          <div className="flex items-center space-x-1 overflow-hidden">
            <Search className="w-3 h-3 text-gray-600" />
            <div className="relative h-4 overflow-hidden">
              {/* Animated Text */}
              <div className="animate-text-rotate text-gray-700 text-xs whitespace-nowrap">
              <span className="text-gray-400 text-sm">Try</span>
                {/* <span className="block">Try</span> */}
                <span className="block">Share Request</span>
                <span className="block">Import Collections</span>
                <span className="block">Create Work Space</span>
              </div>
            </div>
          </div>

          {/* Shortcut Keys (Right) */}
          <div className="flex items-center space-x-0.5">
            <span className="bg-gray-300 text-gray-800 px-1 py-0.5 text-[0.65rem] rounded-sm font-mono">
              Ctrl
            </span>
            <span className="bg-gray-300 text-gray-800 px-1 py-0.5 text-[0.65rem] rounded-sm font-mono">
              K
            </span>
          </div>

          {/* Rotating Animation Around the Box */}
          <div className="absolute inset-0 rounded-sm border-2 border-transparent group-hover:border-gray-300 animate-rotate-around"></div>
        </button>

        {/* Install App Button */}
        <button className="p-1 rounded-sm bg-gray-100 shadow-sm hover:bg-gray-200 transition">
          <Download className="w-3.5 h-3.5 text-gray-600" />
        </button>

        {/* Support Button */}
        <button className="p-1 rounded-sm bg-gray-100 shadow-sm hover:bg-gray-200 transition">
          <LifeBuoy className="w-3.5 h-3.5 text-gray-600" />
        </button>
      </div>

      {/* Right Section - Save My Work Space Button and Login */}
      <div className="col-span-1 flex items-center justify-end space-x-1.5">
        <button className="bg-green-100 text-green-500 flex items-center space-x-1 py-1 px-2 rounded-sm shadow-md hover:bg-green-200 transition">
          {/* Cloud Icon */}
          <Cloud className="w-3.5 h-3.5" />
          <span className="text-[0.65rem] whitespace-nowrap">Save My Work Space</span>
        </button>
        <button className="bg-blue-500 text-white py-1 px-2 rounded-md hover:bg-blue-600 transition whitespace-nowrap text-xs">
          Login
        </button>
      </div>

      {/* CSS for Animations */}
      <style>{`
        @keyframes textRotate {
          0% {
            transform: translateY(0);
          }
          25% {
            transform: translateY(-100%);
          }
          50% {
            transform: translateY(-200%);
          }
          50% {
            transform: translateY(-300%);
          }
          50% {
            transform: translateY(0);
          }
        }

        @keyframes rotateAround {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }

        .animate-text-rotate {
          animation: textRotate 8s infinite;
        }

        .animate-text-rotate span {
          display: block;
          opacity: 0.7;
        }

        .animate-rotate-around {
          animation: rotateAround 4s linear infinite;
          pointer-events: none;
        }
      `}</style>
    </header>
  );
};

export default Header;