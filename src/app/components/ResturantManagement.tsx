'use client'

import { useState } from 'react';
import { motion } from 'framer-motion';

const tables = Array.from({ length: 10 }, (_, i) => ({
  id: i + 1,
  available: Math.random() > 0.3,
}));

export default function Restaurant() {
  const [selectedTable, setSelectedTable] = useState(null);
  const [eventType, setEventType] = useState('');
  const [guestCount, setGuestCount] = useState('');
  const [specialRequests, setSpecialRequests] = useState('');

  const handleReservation = () => {
    if (selectedTable && eventType && guestCount) {
      alert(`Reservation for ${eventType} at Table ${selectedTable.id} for ${guestCount} guests is confirmed!`);
    } else {
      alert('Please fill in all the details for reservation.');
    }
  };

  return (
    <div className="p-8 max-w-5xl mx-auto min-h-screen">
            <h2 className="text-3xl font-bold text-orange-400 text-center mb-8 flex items-center justify-center italic animate-pulse">
        <span className="w-1/12 border-t-2 border-orange-400 mr-2 "></span>Restaurant Reservation
        <span className="w-1/12 border-t-2 border-orange-400 ml-2"></span>
      </h2>

      <div className="p-10 rounded-lg shadow-xl">
        <h2 className="text-3xl font-bold text-black mb-6">Seating Arrangement</h2>
        <div className="grid grid-cols-5 gap-8 mb-8">
          {tables.map((table) => (
            <motion.div
              key={table.id}
              className={`p-6 border-4 rounded-lg cursor-pointer transition-all transform ${
                table.available ? 'bg-green-400 hover:bg-green-500' : 'bg-red-400 hover:bg-red-500'
              } text-white text-center font-semibold shadow-lg shadow-gray-500/50`}
              whileHover={{ scale: 1.1, rotate: 5 }}
              onClick={() => setSelectedTable(table)}
            >
              Table {table.id}
            </motion.div>
          ))}
        </div>

        {/* Table Availability */}
        {selectedTable && (
          <p className="text-lg font-medium text-gray-800 mt-4">
            {selectedTable.available
              ? `Table ${selectedTable.id} is available for reservation.`
              : `Table ${selectedTable.id} is occupied.`}
          </p>
        )}

        {/* Event Type & Guest Count */}
        <div className="mt-6 space-y-6">
          <div className="flex flex-col">
            <label htmlFor="eventType" className="font-bold text-gray-700 text-lg">Event Type</label>
            <select
              id="eventType"
              value={eventType}
              onChange={(e) => setEventType(e.target.value)}
              className="px-6 py-3 mt-2 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all ease-in-out duration-300"
              required
            >
              <option value="">Select Event Type</option>
              <option value="Birthday">Birthday</option>
              <option value="Wedding">Wedding</option>
              <option value="Corporate Event">Corporate Event</option>
              <option value="Party">Party</option>
            </select>
          </div>

          <div className="flex flex-col">
            <label htmlFor="guestCount" className="font-bold text-gray-700 text-lg">Number of Guests</label>
            <input
              type="number"
              id="guestCount"
              value={guestCount}
              onChange={(e) => setGuestCount(e.target.value)}
              className="px-6 py-3 mt-2 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all ease-in-out duration-300"
              required
              min="1"
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="specialRequests" className="font-bold text-gray-700 text-lg">Special Requests</label>
            <textarea
              id="specialRequests"
              value={specialRequests}
              onChange={(e) => setSpecialRequests(e.target.value)}
              className="px-6 py-3 mt-2 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all ease-in-out duration-300"
              placeholder="E.g., decoration preferences, food requests"
            />
          </div>
        </div>

        {/* Reservation Button */}
        <div className="mt-8 text-center">
          <button
            onClick={handleReservation}
            className="bg-orange-400 text-white font-bold py-4 px-12 rounded-xl shadow-lg hover:scale-105 hover:shadow-2xl transition-all duration-300"
          >
            Confirm Reservation
          </button>
        </div>
      </div>
    </div>
  );
}
