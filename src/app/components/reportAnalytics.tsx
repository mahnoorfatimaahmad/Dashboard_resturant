"use client"
import React, { useState } from "react";

export default function ReportsAnalytics() {
  const [reportData, setReportData] = useState({
    dailyRevenue: 500,
    weeklyRevenue: 3500,
    monthlyRevenue: 15000,
    popularDishes: ["Pizza", "Burger", "Pasta"],
    peakHours: ["12 PM - 2 PM", "7 PM - 9 PM"],
    repeatCustomers: 120,
    newCustomers: 200,
  });

  return (
    <div className="bg-white shadow p-6 rounded-lg">
             <h2 className="text-3xl font-bold text-orange-400 text-center mb-8 flex items-center justify-center italic animate-pulse">
  <span className="w-1/12 border-t-2 border-orange-400 mr-2"></span>Reports & Analytics
  <span className="w-1/12 border-t-2 border-orange-400 ml-2"></span>
</h2>


      {/* Revenue Reports */}
      <div className="mb-8">
        <h3 className="text-2xl font-bold mb-4 text-orange-400 ml-14"
          style={{ fontFamily: "'Times New Roman', Times, serif" }}
        >Revenue Overview</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-gray-100 p-4 rounded-lg shadow-md">
            <h4 className="text-lg font-bold mb-2">Daily Revenue</h4>
            <p className="text-xl font-semibold">${reportData.dailyRevenue}</p>
          </div>
          <div className="bg-gray-100 p-4 rounded-lg shadow-md">
            <h4 className="text-lg font-bold mb-2">Weekly Revenue</h4>
            <p className="text-xl font-semibold">${reportData.weeklyRevenue}</p>
          </div>
          <div className="bg-gray-100 p-4 rounded-lg shadow-md">
            <h4 className="text-lg font-bold mb-2">Monthly Revenue</h4>
            <p className="text-xl font-semibold">${reportData.monthlyRevenue}</p>
          </div>
        </div>
      </div>

      {/* Popular Dishes */}
      <div className="mb-8">
        <h3 className="text-2xl font-bold mb-4 text-orange-400 ml-14"
                    style={{ fontFamily: "'Times New Roman', Times, serif" }}
        >Popular Dishes</h3>
        <ul className="list-disc pl-5 ml-12">
          {reportData.popularDishes.map((dish, index) => (
            <li key={index} className="text-lg">{dish}</li>
          ))}
        </ul>
      </div>

      {/* Peak Hours */}
      <div className="mb-8">
        <h3 className="text-2xl font-bold mb-4 text-orange-400 ml-14"
                    style={{ fontFamily: "'Times New Roman', Times, serif" }}
         >Peak Hours</h3>
        <ul className="list-disc pl-5 ml-12">
          {reportData.peakHours.map((hour, index) => (
            <li key={index} className="text-lg">{hour}</li>
          ))}
        </ul>
      </div>

      {/* Customer Data */}
      <div>
        <h3 className="text-2xl font-bold mb-4 text-orange-400 ml-14"
                    style={{ fontFamily: "'Times New Roman', Times, serif" }}
        >Customer Insights</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-gray-100 p-4 rounded-lg shadow-md">
            <h4 className="text-xl font-bold mb-2">Repeat Customers</h4>
            <p className="text-xl font-semibold">{reportData.repeatCustomers}</p>
          </div>
          <div className="bg-gray-100 p-4 rounded-lg shadow-md">
            <h4 className="text-xl font-bold mb-2">New Customers</h4>
            <p className="text-xl font-semibold">{reportData.newCustomers}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
