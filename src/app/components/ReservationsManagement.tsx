'use client'

import { useState } from 'react';

const EventReservationForm = () => {
  const [name, setName] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [table, setTable] = useState('');
  const [eventType, setEventType] = useState('');
  const [guestCount, setGuestCount] = useState('');
  const [specialRequests, setSpecialRequests] = useState('');
  const [status, setStatus] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate event reservation submission logic
    setStatus(`Event reservation for ${name} on ${date} at ${time} for ${guestCount} guests confirmed!`);
  };

  return (
    <div className="min-h-screen  p-8">
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-2xl p-8">
      <h2 className="text-3xl font-bold text-orange-400 text-center mb-8 flex items-center justify-center italic animate-pulse">
        <span className="w-1/12 border-t-2 border-orange-400 mr-2 "></span>Event Reservation
        <span className="w-1/12 border-t-2 border-orange-400 ml-2"></span>
      </h2>


        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="flex flex-col">
            <label htmlFor="name" className="text-lg font-bold text-gray-700">Your Name</label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="px-6 py-3 mt-2 border-2 border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="date" className="text-lg font-bold text-gray-700">Event Date</label>
            <input
              type="date"
              id="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              className="px-6 py-3 mt-2 border-2 border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="time" className="text-lg font-bold text-gray-700">Event Time</label>
            <input
              type="time"
              id="time"
              value={time}
              onChange={(e) => setTime(e.target.value)}
              className="px-6 py-3 mt-2 border-2 border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="table" className="text-lg font-bold text-gray-700">Preferred Table</label>
            <select
              id="table"
              value={table}
              onChange={(e) => setTable(e.target.value)}
              className="px-6 py-3 mt-2 border-2 border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            >
              <option value="">Select a table</option>
              <option value="Table 1">Table 1</option>
              <option value="Table 2">Table 2</option>
              <option value="Table 3">Table 3</option>
              <option value="Table 4">Table 4</option>
            </select>
          </div>

          {/* Event Type */}
          <div className="flex flex-col">
            <label htmlFor="eventType" className="text-lg font-bold text-gray-700">Event Type</label>
            <select
              id="eventType"
              value={eventType}
              onChange={(e) => setEventType(e.target.value)}
              className="px-6 py-3 mt-2 border-2 border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            >
              <option value="">Select Event Type</option>
              <option value="Birthday">Birthday</option>
              <option value="Wedding">Wedding</option>
              <option value="Corporate">Corporate Event</option>
              <option value="Party">Party</option>
            </select>
          </div>

          {/* Number of Guests */}
          <div className="flex flex-col">
            <label htmlFor="guestCount" className="text-lg font-bold text-gray-700">Number of Guests</label>
            <input
              type="number"
              id="guestCount"
              value={guestCount}
              onChange={(e) => setGuestCount(e.target.value)}
              className="px-6 py-3 mt-2 border-2 border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
              min="1"
            />
          </div>

          {/* Special Requests */}
          <div className="flex flex-col">
            <label htmlFor="specialRequests" className="text-lg font-bold text-gray-700">Special Requests</label>
            <textarea
              id="specialRequests"
              value={specialRequests}
              onChange={(e) => setSpecialRequests(e.target.value)}
              className="px-6 py-3 mt-2 border-2 border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="E.g., decoration preferences, food requests"
            />
          </div>

          <button
            type="submit"
            className=" bg-orange-400 text-2xl text-white px-6 py-3 mt-4 rounded-3xl w-1/4 font-bold focus:outline-none transition duration-300"
          >
            Reserve Event
          </button>
        </form>

        {status && <div className="mt-6 text-center text-green-500 text-lg font-bold">{status}</div>}
      </div>
    </div>
  );
};

export default EventReservationForm;
