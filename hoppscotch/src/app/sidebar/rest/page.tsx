"use client";
import React, { useState } from "react";

const TabSystem = () => {
  const [tabs, setTabs] = useState<{ id: number; title: string }[]>([
    { id: 1, title: "Tab 1" },
  ]);
  const [activeTab, setActiveTab] = useState<number>(1);
  const [selectedMethod, setSelectedMethod] = useState<string>("GET");
  const [inputText, setInputText] = useState<string>("");
  const [selectedSaveOption, setSelectedSaveOption] = useState<string>("Local");

  // Add a new tab dynamically
  const addTab = () => {
    const newTab = {
      id: tabs.length + 1,
      title: `untitled ${tabs.length + 1}`,
    };
    setTabs([...tabs, newTab]);
    setActiveTab(newTab.id);
  };

  // Delete a tab
  const deleteTab = (id: number) => {
    const updatedTabs = tabs.filter((tab) => tab.id !== id);
    setTabs(updatedTabs);

    if (activeTab === id && updatedTabs.length > 0) {
      setActiveTab(updatedTabs[0].id);
    }
  };

  // Handle HTTP method change
  const handleMethodChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedMethod(event.target.value);
  };

  // Handle text input change
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputText(event.target.value);
  };

  // Handle save option change
  const handleSaveOptionChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setSelectedSaveOption(event.target.value);
  };

  // Handle send button click
  const handleSend = () => {
    console.log("Selected Method:", selectedMethod);
    console.log("Input Text:", inputText);
  };

  // Handle save button click
  const handleSave = () => {
    console.log("Save Option:", selectedSaveOption);
  };

  return (
    <div className="ml-20 -mt-72 mr-96">
      {/* Tab Section */}
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
          {/* Add New Tab Button */}
          <button
            onClick={addTab}
            className="ml-2 mr-10 px-4 py-2 text-black hover:text-gray-700"
          >
            +
          </button>
        </div>
      </div>

      {/* Dropdown + Input + Send + Save Button */}
      <div className="flex items-center space-x-4 pl-4 pr-4 py-2 mt-2 w-fit rounded-lg ml-0 mr-auto">
        {/* HTTP Method Dropdown */}
        <select
          id="http-method"
          value={selectedMethod}
          onChange={handleMethodChange}
          className="border rounded p-2 bg-white shadow-sm"
        >
          <option value="GET">GET</option>
          <option value="POST">POST</option>
          <option value="PUT">PUT</option>
          <option value="PATCH">PATCH</option>
          <option value="OPTIONS">OPTIONS</option>
          <option value="TRACE">TRACE</option>
        </select>

        {/* Input Field */}
        <input
          type="text"
          value={inputText}
          onChange={handleInputChange}
          placeholder="Enter request URL"
          className="border rounded p-2 w-72 bg-white shadow-sm"
        />

        {/* Send Button */}
        <button
          onClick={handleSend}
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 shadow-md"
        >
          Send
        </button>

        {/* Save Button with Dropdown */}
        <div className="relative">
          <select
            value={selectedSaveOption}
            onChange={handleSaveOptionChange}
            className="border rounded p-2 bg-white shadow-sm"
          >
            <option value="Local">Save Locally</option>
            <option value="Cloud">Save to Cloud</option>
            <option value="Database">Save to Database</option>
          </select>

          <button
            onClick={handleSave}
            className="ml-2 px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 shadow-md"
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default TabSystem;
