"use client";

import { useState } from "react";

export default function VenueDashboard() {
  const [venueDetails, setVenueDetails] = useState({
    name: "",
    location: "",
    availability: "Available",
    date: "",
    time: "",
    eventType: "",
    seatingCapacity: "",
    advancePayment: "",
    totalPayment: "",
    remainingPayment: "",
    decor: "Standard",
    events: [],
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setVenueDetails({ ...venueDetails, [name]: value });
  };

  const handleAddEvent = () => {
    const newEvent = {
      eventType: venueDetails.eventType,
      date: venueDetails.date,
      time: venueDetails.time,
      advancePayment: venueDetails.advancePayment,
      totalPayment: venueDetails.totalPayment,
      remainingPayment: venueDetails.remainingPayment,
    };
    setVenueDetails((prev) => ({
      ...prev,
      events: [...prev.events, newEvent],
      eventType: "",
      date: "",
      time: "",
      advancePayment: "",
      totalPayment: "",
      remainingPayment: "",
    }));
  };

  const handleSave = () => {
    console.log("Venue Details:", venueDetails);
  };

  return (
    <div className="p-8 flex flex-col items-center">
      <h2 className="text-3xl font-bold text-orange-400 text-center mb-8 flex items-center justify-center italic animate-pulse">
        <span className="w-1/6 border-t-4 border-orange-400 mr-4"></span>
        Venue Management
        <span className="w-1/6 border-t-4 border-orange-400 ml-4"></span>
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full max-w-4xl p-4 border border-black rounded-lg">
        {[
          { label: "Venue Name", name: "name" },
          { label: "Location", name: "location" },
          { label: "Seating Capacity", name: "seatingCapacity", type: "number" },
          { label: "Event Type", name: "eventType" },
          { label: "Date", name: "date", type: "date" },
          { label: "Time", name: "time", type: "time" },
        ].map(({ label, name, type = "text" }) => (
          <div key={name} className="mb-4">
            <label className="block font-bold mb-2 text-black">{label}</label>
            <input
              type={type}
              name={name}
              value={venueDetails[name]}
              onChange={handleChange}
              className="w-full p-2 border border-[#ccc] rounded"
            />
          </div>
        ))}

        <div className="mb-4">
          <label className="block font-bold mb-2 text-black">Availability</label>
          <select
            name="availability"
            value={venueDetails.availability}
            onChange={handleChange}
            className="w-full p-2 border border-[#ccc] rounded"
          >
            <option value="Available">Available</option>
            <option value="Not Available">Not Available</option>
          </select>
        </div>

        {[
          { label: "Advance Payment", name: "advancePayment", type: "number" },
          { label: "Total Payment", name: "totalPayment", type: "number" },
          { label: "Remaining Payment", name: "remainingPayment", type: "number" },
        ].map(({ label, name, type = "text" }) => (
          <div key={name} className="mb-4">
            <label className="block font-bold mb-2 text-black">{label}</label>
            <input
              type={type}
              name={name}
              value={venueDetails[name]}
              onChange={handleChange}
              className="w-full p-2 border border-[#ccc] rounded"
            />
          </div>
        ))}

        <div className="mb-4">
          <label className="block font-bold mb-2 text-black">Decor Type</label>
          <select
            name="decor"
            value={venueDetails.decor}
            onChange={handleChange}
            className="w-full p-2 border border-[#ccc] rounded"
          >
            <option value="Standard">Standard</option>
            <option value="Non-Standard">Non-Standard</option>
          </select>
        </div>
      </div>

      <div className="flex flex-col items-center gap-4 mt-4 w-full max-w-xs">
        <button
          onClick={handleAddEvent}
          className="w-1/2 bg-orange-400 text-white rounded cursor-pointer text-lg font-bold py-1.5 hover:bg-orange-500 hover:text-white"
        >
          Add Event
        </button>

        <button
          onClick={handleSave}
          className="w-1/2 py-2 px-2 bg-blue-400 text-white rounded cursor-pointer text-xl font-bold hover:bg-blue-500 hover:text-white"
        >
          Save Venue
        </button>
      </div>
    </div>
  );
}
