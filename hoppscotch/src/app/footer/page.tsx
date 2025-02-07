import { HelpCircle, MessageSquare, Keyboard, Layout, ArrowDownToLine, Zap } from "lucide-react";

export default function Footer() {
  return (
    <footer className="fixed bottom-0 w-full flex justify-between items-center p-2 text-sm bg-gray-100 shadow-md">
      {/* Left: Centered Footer Text */}
      <div className="flex-1 text-center"></div>

      {/* Right: Icons Only with Hover Tooltips */}
      <div className="flex space-x-4 items-center pr-4">
      <div className="flex space-x-4 items-center pr-4">
        <button className="flex items-center space-x-1 hover:text-blue-500 transition">
          <HelpCircle className="w-5 h-5" />
          <span className="text-sm">Help & feedback</span>
        </button>

       </div>

        {/* Shortcut Icon (Lightning) */}
        <div className="relative group">
          <Zap className="w-5 h-5 hover:text-blue-500 cursor-pointer transition" />
          <span className="absolute bottom-8 left-1/2 transform -translate-x-1/2 px-2 py-1 bg-black text-white text-xs rounded opacity-0 group-hover:opacity-100">
            Shortcuts
          </span>
        </div>

        {/* Horizontal Layout Icon */}
        <div className="relative group">
          <Layout className="w-5 h-5 hover:text-blue-500 cursor-pointer transition" />
          <span className="absolute bottom-8 left-1/2 transform -translate-x-1/2 px-2 py-1 bg-black text-white text-xs rounded opacity-0 group-hover:opacity-100">
            Horizontal Layout
          </span>
        </div>

        {/* Collapse Icon */}
        <div className="relative group">
          <ArrowDownToLine className="w-5  h-5 hover:text-blue-500 cursor-pointer transition" />
          <span className="absolute bottom-8 left-1/2 transform -translate-x-1/2 px-2 py-1 bg-black text-white text-xs rounded opacity-0 group-hover:opacity-100">
            Collapse
          </span>
        </div>
      </div>
    </footer>
  );
}
