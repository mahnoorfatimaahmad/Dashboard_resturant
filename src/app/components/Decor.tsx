"use client";

import { useState } from "react";

const decorations = [
  "Theme Selection",
  "Color Palette Customization",
  "Floral Arrangements",
  "Lighting Setup",
  "Table & Chair Decoration",
  "Stage & Backdrop Design",
  "Balloon & Fabric Draping",
  "Centerpieces & Props",
  "Entrance & Aisle Decor",
  "Custom Signage & Banners",
];

export default function DecorationDashboard() {
  const [selectedDecor, setSelectedDecor] = useState([]);
  const [savedDecor, setSavedDecor] = useState([]);
  const [customerName, setCustomerName] = useState("");
  const [eventDate, setEventDate] = useState("");
  const [eventTime, setEventTime] = useState("");
  const [eventType, setEventType] = useState("");

  const toggleSelection = (item) => {
    setSelectedDecor((prev) =>
      prev.includes(item)
        ? prev.filter((d) => d !== item)
        : [...prev, item]
    );
  };

  const handleSave = () => {
    if (!customerName || !eventDate || !eventTime || !eventType) {
      alert("Please enter all customer details before saving.");
      return;
    }
    setSavedDecor(selectedDecor);
    alert("Decoration selection saved for " + customerName + " on " + eventDate + " at " + eventTime + " for a " + eventType);
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-3xl mx-auto bg-white p-6 shadow-lg rounded-xl">
      <h2 className="text-3xl font-bold text-orange-400 text-center mb-8 flex items-center justify-center italic animate-pulse">
        <span className="w-1/12 border-t-2 border-orange-400 mr-2 "></span>Event Decoration Selection
        <span className="w-1/12 border-t-2 border-orange-400 ml-2"></span>
      </h2>
        <p className="mb-4 text-gray-400 font-semibold underline italic">Enter customer details and select the decorations you want for the event.</p>
        
        <div className="mb-4">
          <label className="block text-gray-700 font-bold">Customer Name:</label>
          <input
            type="text"
            value={customerName}
            onChange={(e) => setCustomerName(e.target.value)}
            className="w-full p-2 border rounded-lg mt-1"
            placeholder="Enter customer name"
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 font-bold">Event Date:</label>
          <input
            type="date"
            value={eventDate}
            onChange={(e) => setEventDate(e.target.value)}
            className="w-full p-2 border rounded-lg mt-1"
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 font-bold">Event Time:</label>
          <input
            type="time"
            value={eventTime}
            onChange={(e) => setEventTime(e.target.value)}
            className="w-full p-2 border rounded-lg mt-1"
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 font-bold">Event Type:</label>
          <input
            type="text"
            value={eventType}
            onChange={(e) => setEventType(e.target.value)}
            className="w-full p-2 border rounded-lg mt-1"
            placeholder="Enter event type (e.g., Wedding, Birthday, Corporate)"
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {decorations.map((item, index) => (
            <button
              key={index}
              onClick={() => toggleSelection(item)}
              className={`p-3 border rounded-lg text-center transition duration-200 ${
                selectedDecor.includes(item)
                  ? "bg-blue-500 text-white"
                  : "bg-gray-200 hover:bg-gray-300"
              }`}
            >
              {item}
            </button>
          ))}
        </div>

        <div className="mt-6 p-4 bg-gray-50 rounded-lg">
          <h2 className="text-lg font-bold mb-2">Selected Decorations:</h2>
          {selectedDecor.length > 0 ? (
            <ul className="list-disc pl-5">
              {selectedDecor.map((item, index) => (
                <li key={index} className="text-gray-700">{item}</li>
              ))}
            </ul>
          ) : (
            <p className="text-gray-500">No decorations selected.</p>
          )}
        </div>

        <button
          onClick={handleSave}
          className="mt-4 px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600"
        >
          Save Selection
        </button>
        
        {savedDecor.length > 0 && (
          <div className="mt-6 p-4 bg-orange-300 rounded-lg">
            <h2 className="text-lg font-bold mb-2">Saved Decorations for {customerName}:</h2>
            <p className="text-gray-600 font-bold">Event Date: {eventDate}</p>
            <p className="text-gray-600 font-bold">Event Time: {eventTime}</p>
            <p className="text-gray-600 font-bold">Event Type: {eventType}</p>
            <ul className="list-disc pl-5">
              {savedDecor.map((item, index) => (
                <li key={index} className="text-green-700">{item}</li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}
