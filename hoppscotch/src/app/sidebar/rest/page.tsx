"use client";
import React, { useState, useEffect } from "react";
import { FiChevronDown } from "react-icons/fi";

const TabSystem = () => {
  const [tabs, setTabs] = useState<{ id: number; title: string }[]>([
    { id: 1, title: "Tab 1" },
  ]);
  const [activeTab, setActiveTab] = useState<number>(1);
  const [selectedMethod, setSelectedMethod] = useState<string>("GET");
  const [inputText, setInputText] = useState<string>("");
  const [selectedSaveOption, setSelectedSaveOption] = useState<string>("Save");  // Updated default value
  const [sendOption, setSendOption] = useState<string>("Send");
  const [showSendDropdown, setShowSendDropdown] = useState(false);
  const [showSaveDropdown, setShowSaveDropdown] = useState(false);
  const [selectedSection, setSelectedSection] = useState<string>("Parameters");

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (!target.closest(".dropdown")) {
        setShowSendDropdown(false);
        setShowSaveDropdown(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const addTab = () => {
    const newTab = {
      id: tabs.length + 1,
      title: `Untitled ${tabs.length + 1}`,
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

  const handleSendAction = (option: string) => {
    setSendOption(option);
    setShowSendDropdown(false);
    console.log(`Action: ${option} - Method: ${selectedMethod}, Input: ${inputText}`);
  };

  const handleSaveAction = (option: string) => {
    setSelectedSaveOption(option);
    setShowSaveDropdown(false);
    console.log(`Saved as: ${option}`);
  };

  // Render active section content
  const renderActiveSection = () => {
    switch (selectedSection) {
      case "Parameters":
        return <div>Parameters Content</div>;
      case "Body":
        return <div>Body Content</div>;
      case "Header":
        return <div>Header Content</div>;
      case "Authorization":
        return <div>Authorization Content</div>;
      case "Pre-request Script":
        return <div>Pre-request Script Content</div>;
      case "Tests":
        return <div>Tests Content</div>;
      default:
        return <div>Select a section</div>;
    }
  };

  return (
    <div className="ml-20 -mt-80 mr-96">
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

      <div className="pl-4 pr-2 py-2 mt-1 w-fit ml-0 mr-auto flex space-x-2 items-center">
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
        
        {/* Send Button with Dropdown next to input */}
        <div className="relative flex items-center ml-2">
          <button
            onClick={() => handleSendAction(sendOption)}
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 shadow-md"
          >
            {sendOption}
          </button>
          <button
            onClick={() => setShowSendDropdown(!showSendDropdown)}
            className="-ml-1 h-10 p-2 bg-blue-500 text-white rounded hover:bg-blue-600 shadow-md"
          >
            <FiChevronDown />
          </button>
          {showSendDropdown && (
            <div className="absolute top-10 left-0 bg-white border rounded shadow-md w-40">
              {["Import cURL ", "Show code", "Clear all"].map((option) => (
                <button
                  key={option}
                  className="block w-full text-left px-4 py-2 hover:bg-gray-200"
                  onClick={() => handleSendAction(option)}
                >
                  {option}
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Save Button with Dropdown next to input */}
        <div className="relative flex items-center ml-2">
          <button
            onClick={() => handleSaveAction(selectedSaveOption)}
            className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 shadow-md"
          >
            {selectedSaveOption}
          </button>
          <button
            onClick={() => setShowSaveDropdown(!showSaveDropdown)}
            className="-ml-1 p-2 h-10 bg-green-500 text-white rounded hover:bg-green-600 shadow-md"
          >
            <FiChevronDown />   
          </button>
          {showSaveDropdown && (
            <div className="absolute top-10 left-0 bg-white border rounded shadow-md w-40">
              {["Untitled", "Save as", "Share Request"].map((option) => (
                <button
                  key={option}
                  className="block w-full text-left px-4 py-2 hover:bg-gray-200"
                  onClick={() => handleSaveAction(option)}
                >
                  {option}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Section Buttons */}
      <div className="flex justify-between mt-2 border-b pb-2">
        <div className="flex space-x-4">
          {[
            "Parameters",
            "Body",
            "Header",
            "Authorization",
            "Pre-request Script",
            "Tests",
          ].map((buttonName) => (
            <button
              key={buttonName}
              onClick={() => setSelectedSection(buttonName)}
              className={`px-0 text-xs text-black-300 hover:text-black-900 border-b-2 border-transparent hover:border-blue-500 ${
                selectedSection === buttonName
                  ? "border-blue-500 text-black-900"
                  : ""
              }`}
            >
              {buttonName}
            </button>
          ))}
        </div>
        <button
          onClick={() => setSelectedSection("Variables")}
          className={`px-0 text-xs text-black-300 hover:text-black-900 border-b-2 border-transparent hover:border-blue-500 ${
            selectedSection === "Variables" ? "border-blue-500 text-black-900" : ""
          }`}
        >
          Variables
        </button>
      </div>

      {/* Render Active Section Content */}
      <div className="-mt-2 p-1 bg-red-600 rounded shadow-md">
        {renderActiveSection()}
      </div>
    </div>
  );
};

export default TabSystem;
