"use client";
import React, { useState } from "react";
import { FiChevronDown } from "react-icons/fi";

const TabSystem = () => {
  const [tabs, setTabs] = useState<{ id: number; title: string }[]>([
    { id: 1, title: "Tab 1" },
  ]);
  const [activeTab, setActiveTab] = useState<number>(1);
  const [selectedMethod, setSelectedMethod] = useState<string>("GET");
  const [inputText, setInputText] = useState<string>("");
  const [selectedSaveOption, setSelectedSaveOption] = useState<string>("Local");
  const [sendOption, setSendOption] = useState<string>("Send");
  const [showSendDropdown, setShowSendDropdown] = useState(false);
  const [showSaveDropdown, setShowSaveDropdown] = useState(false);

  const addTab = () => {
    const newTab = {
      id: tabs.length + 1,
      title: `untitled ${tabs.length + 1}`,
    };
    setTabs([...tabs, newTab]);
    setActiveTab(newTab.id);
  };

  const deleteTab = (id: number) => {
    const updatedTabs = tabs.filter((tab) => tab.id !== id);
    setTabs(updatedTabs);
    if (activeTab === id && updatedTabs.length > 0) {
      setActiveTab(updatedTabs[0].id);
    }
  };

  const handleSendAction = () => {
    switch (sendOption) {
      case "Send":
        console.log("Sending request with:", selectedMethod, inputText);
        break;
      case "Import":
        console.log("Importing data...");
        break;
      case "Show":
        console.log("Showing request history...");
        break;
      case "Clear":
        console.log("Clearing request history...");
        break;
      default:
        console.log("Invalid action");
    }
  };

  return (
    <div className="ml-20 -mt-72 mr-96">
      <div className="bg-red-100 p-4 rounded-lg shadow-md">
        <div className="flex space-x-2">
          {tabs.map((tab) => (
            <div
              key={tab.id}
              className={`px-4 py-2 cursor-pointer flex items-center ${
                activeTab === tab.id
                  ? "border-b-2 border-blue-500 text-blue-600"
                  : "text-gray-500 hover:text-gray-700"
              }`}
              onClick={() => setActiveTab(tab.id)}
            >
              <span>{tab.title}</span>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  deleteTab(tab.id);
                }}
                className="ml-2 text-gray-400 hover:text-gray-600"
              >
                ✕
              </button>
            </div>
          ))}
          <button
            onClick={addTab}
            className="ml-2 mr-10 px-4 py-2 text-black hover:text-gray-700"
          >
            +
          </button>
        </div>
      </div>

      <div className="pl-4 pr-4 py-2 mt-1 w-fit ml-0 mr-auto flex space-x-2 items-center">
        <select
          id="http-method"
          value={selectedMethod}
          onChange={(e) => setSelectedMethod(e.target.value)}
          className="border rounded p-2 bg-white shadow-sm"
        >
          <option value="GET">GET</option>
          <option value="POST">POST</option>
          <option value="PUT">PUT</option>
          <option value="PATCH">PATCH</option>
          <option value="OPTIONS">OPTIONS</option>
          <option value="TRACE">TRACE</option>
        </select>

        <input
          type="text"
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
          placeholder="Enter a URL or paste a cURL command"
          className="p-1 w-96 bg-white shadow-sm border rounded"
        />

        <div className="relative flex items-center">
          <button
            onClick={handleSendAction}
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 shadow-md"
          >
            Send
          </button>
          <button
            onClick={() => setShowSendDropdown(!showSendDropdown)}
            className="ml-1 p-2 bg-blue-500 text-white rounded hover:bg-blue-600 shadow-md"
          >
            <FiChevronDown />
          </button>
          {showSendDropdown && (
            <div className="absolute top-10 bg-white border rounded shadow-md">
              {["Import", "Show", "Clear"].map((option) => (
                <div
                  key={option}
                  onClick={() => {
                    setSendOption(option);
                    setShowSendDropdown(false);
                  }}
                  className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                >
                  {option}
                </div>
              ))}
            </div>
          )}
        </div>

        <div className="relative flex items-center">
          <button
            onClick={() => console.log("Save Option:", selectedSaveOption)}
            className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 shadow-md"
          >
            Save
          </button>
          <button
            onClick={() => setShowSaveDropdown(!showSaveDropdown)}
            className="ml-1 p-2 bg-green-500 text-white rounded hover:bg-green-600 shadow-md"
          >
            <FiChevronDown />
          </button>
          {showSaveDropdown && (
            <div className="absolute top-10 bg-white border rounded shadow-md">
              {["Local", "Cloud", "Database"].map((option) => (
                <div
                  key={option}
                  onClick={() => {
                    setSelectedSaveOption(option);
                    setShowSaveDropdown(false);
                  }}
                  className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                >
                  {option}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default TabSystem;
