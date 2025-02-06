"use client";
import React, { useState } from "react";
import { Folder, Layers, History, Send, Code } from "lucide-react";

export default function Vbar() {
  const [activeTab, setActiveTab] = useState<string>("collections");

  const tabs = [
    { name: "Collections", icon: <Folder className="w-6 h-6" /> },
    { name: "Environments", icon: <Layers className="w-6 h-6" /> },
    { name: "History", icon: <History className="w-6 h-6" /> },
    { name: "Shared Requests", icon: <Send className="w-6 h-6" /> },
    { name: "Generate Code", icon: <Code className="w-6 h-6" /> },
  ];

  return (
    <div className="fixed right-1 h-full top-8 bg-gray-400 shadow-lg flex">
      {/* Vertical Tabs with Fixed Position */}
      <div className="flex flex-col w-12 border-r border-gray-300 items-center space-y-4 bg-gray-50 p-2 relative">
        {tabs.map((tab) => (
          <div key={tab.name} className="relative group">
            <button
              className={`w-full h-8 flex items-center justify-center rounded transition 
                ${activeTab === tab.name.toLowerCase() ? "bg-gray-100" : "hover:bg-gray-200"}`}
              onClick={() => setActiveTab(tab.name.toLowerCase())}
            >
              {tab.icon}
            </button>

            {/* Tooltip */}
            <span className="absolute left-14 top-1/2 transform -translate-y-1/2 px-2 py-1 bg-black text-white text-xs rounded opacity-0 group-hover:opacity-100">
              {tab.name}
            </span>
          </div>
        ))}
      </div>

      {/* Tab Content with Fixed Size */}
      <div className="p-4 flex-1 w-64">
        {activeTab === "collections" && <div>Collections Content</div>}
        {activeTab === "environments" && <div>Environments Content</div>}
        {activeTab === "history" && <div>History Content</div>}
        {activeTab === "shared requests" && <div>Shared Requests Content</div>}
        {activeTab === "generate code" && <div>Generate Code Content</div>}
      </div>
    </div>
  );
}
