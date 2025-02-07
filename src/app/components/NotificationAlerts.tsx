'use client'; // Client-side rendering directive

import React, { useState } from 'react';

const NotificationCard = ({ title, notifications, visibleCount, onLoadMore, onShowLess }) => {
  const [seenNotifications, setSeenNotifications] = useState({});

  const handleMarkAsSeen = (index) => {
    setSeenNotifications((prev) => ({ ...prev, [index]: true }));
  };

  // Function to set all titles to black and bold
  const getTitleStyle = () => {
    return 'text-black font-bold';  // Black color and Bold for all titles
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg mb-6 border border-gray-200">
      <h3 className={`text-xl ${getTitleStyle()} mt-3`}>{title}</h3>
      <div className="space-y-3 mt-3">
        {notifications.slice(0, visibleCount).map((notification, index) => (
          <div key={index} className={`p-3 border rounded-lg ${seenNotifications[index] ? 'opacity-50 bg-gray-100' : 'bg-gray-50'}`}>
            <p className="text-sm text-gray-700">{notification.details}</p>
            {!seenNotifications[index] && (
              <div className="mt-2 flex justify-center">
                <button className="bg-green-500 text-white px-4 py-1 rounded-md hover:bg-green-600" onClick={() => handleMarkAsSeen(index)}>
                  Mark as Seen
                </button>
              </div>
            )}
            {seenNotifications[index] && <p className="text-center text-gray-500 mt-2">Seen by Admin</p>}
          </div>
        ))}
      </div>
      {notifications.length > visibleCount && (
        <div className="flex justify-center mt-3">
          <button className="bg-blue-500 text-white px-4 py-2 rounded-md" onClick={onLoadMore}>
            Load More
          </button>
        </div>
      )}
      {visibleCount > 2 && notifications.length > 2 && (
        <div className="flex justify-center mt-3">
          <button className="bg-red-500 text-white px-4 py-2 rounded-md" onClick={onShowLess}>
            Show Less
          </button>
        </div>
      )}
    </div>
  );
};

const Notifications = () => {
  const [visibleCounts, setVisibleCounts] = useState({});

  // Handle Load More
  const handleLoadMore = (index) => {
    setVisibleCounts((prev) => ({ ...prev, [index]: (prev[index] || 2) + 2 }));
  };

  // Handle Show Less
  const handleShowLess = (index) => {
    setVisibleCounts((prev) => ({ ...prev, [index]: 2 }));
  };

  // Sample notifications data
  const notifications = [
    { title: "Orders Completed", notifications: [{ details: "Order #123 completed" }, { details: "Order #124 completed" }, { details: "Order #125 completed" }, { details: "Order #126 completed" }] },
    { title: "Orders Cancelled", notifications: [{ details: "Order #126 cancelled" }, { details: "Order #127 cancelled" }] },
    { title: "Stock Low", notifications: [{ details: "Item A is running low on stock" }, { details: "Item B is below reorder level" }] },
    { title: "Feedback Received", notifications: [{ details: "Customer feedback received for Order #128" }, { details: "New feedback from user #456" }] },
    { title: "Staff Pending", notifications: [{ details: "Task for staff member #001 pending" }, { details: "New pending task for HR team" }] },
    { title: "Events Booked", notifications: [{ details: "Conference room booked for 2 PM" }, { details: "Event Hall reserved for corporate meeting" }] },
    { title: "Table Booked", notifications: [{ details: "Table #10 reserved for dinner" }, { details: "VIP table booked for 8 PM" }] },
  ];

  return (
    <div className="max-w-4xl mx-auto p-6 space-y-6">
      {/* Title */}
      <h2 className="text-3xl font-bold text-orange-400 text-center mb-8 flex items-center justify-center italic animate-pulse">
        <span className="w-1/12 border-t-2 border-orange-400 mr-2 "></span>Stay Updated  
        <span className="w-1/12 border-t-2 border-orange-400 ml-2"></span>
      </h2>

      {/* Notifications */}
      {notifications.map((category, index) => (
        <NotificationCard 
          key={index} 
          title={category.title} 
          notifications={category.notifications} 
          visibleCount={visibleCounts[index] || 2}
          onLoadMore={() => handleLoadMore(index)}
          onShowLess={() => handleShowLess(index)}
        />
      ))}
    </div>
  );
};

export default Notifications;
