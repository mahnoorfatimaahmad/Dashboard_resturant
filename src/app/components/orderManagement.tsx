"use client";
import { useState } from "react";

export default function Dashboard() {
  const [filter, setFilter] = useState("");
  const [sortBy, setSortBy] = useState("name");

  const orders = {
    placed: [
      { id: 101, item: "Cheese Pizza", customer: "Ali", details: "Extra cheese, no olives", placedAt: "2025-01-15", status: "Placed", amount: 15.99, paymentStatus: "Pending" },
      { id: 102, item: "Chicken Burger", customer: "Sara", details: "Spicy sauce", placedAt: "2025-01-12", status: "Placed", amount: 9.99, paymentStatus: "Paid" },
    ],
    preparing: [
      { id: 201, item: "Grilled Sandwich", customer: "Ahmed", details: "No mayo, extra cheese", placedAt: "2025-01-14", status: "Preparing", amount: 12.50, paymentStatus: "Pending" },
      { id: 202, item: "Pasta Alfredo", customer: "Hina", details: "Vegetarian", placedAt: "2025-01-10", status: "Preparing", amount: 14.75, paymentStatus: "Paid" },
    ],
    completed: [
      { id: 301, item: "Chocolate Shake", customer: "Zara", details: "With whipped cream", placedAt: "2025-01-08", status: "Completed", amount: 5.99, paymentStatus: "Paid" },
      { id: 302, item: "BBQ Pizza", customer: "Usman", details: "Large size", placedAt: "2025-01-05", status: "Completed", amount: 18.50, paymentStatus: "Paid" },
    ],
    canceled: [
      { id: 401, item: "French Fries", customer: "Ali", details: "Regular fries", placedAt: "2025-01-03", status: "Canceled", amount: 3.99, paymentStatus: "Refunded" },
      { id: 402, item: "Veggie Wrap", customer: "Ayesha", details: "With extra veggies", placedAt: "2025-01-02", status: "Canceled", amount: 8.50, paymentStatus: "Refunded" },
    ],
  };

  const filteredOrders = (status: string) =>
    orders[status].filter((order) =>
      order.item.toLowerCase().includes(filter.toLowerCase())
    );

  const sortOrders = (orders: any[]) => {
    return orders.sort((a, b) => {
      if (sortBy === "name") {
        return a.item.localeCompare(b.item);
      } else if (sortBy === "date") {
        return new Date(a.placedAt).getTime() - new Date(b.placedAt).getTime();
      }
      return 0;
    });
  };

  const handleSortChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSortBy(e.target.value);
  };

  return (
    <div className="p-8">
      {/* Main Dashboard Content */}
      <div className="bg-gray-100 p-8 rounded-xl shadow-2xl max-w-7xl mx-auto mt-10">
      <h2 className="text-3xl font-bold text-orange-400 text-center mb-8 flex items-center justify-center italic animate-pulse">
        <span className="w-1/12 border-t-2 border-orange-400 mr-2 "></span>Order Management
        <span className="w-1/12 border-t-2 border-orange-400 ml-2"></span>
      </h2>

        {/* Search Bar */}
        <div className="mb-8 flex justify-center">
          <input
            type="text"
            placeholder="Search orders..."
            className="p-2 w-1/2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
          />
        </div>

        {/* Sort Dropdown */}
        <div className="mb-8 flex justify-center">
          <select
            className="p-2 w-1/4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
            value={sortBy}
            onChange={handleSortChange}
          >
            <option value="name">Sort by Name</option>
            <option value="date">Sort by Date</option>
          </select>
        </div>

        {/* Orders Summary */}
        <div className="mb-8 flex justify-center">
          <p className="text-xl font-semibold text-gray-700">
            Orders Summary: {orders.placed.length} Placed | {orders.preparing.length} Preparing | {orders.completed.length} Completed | {orders.canceled.length} Canceled
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Orders Placed */}
          <div className="bg-white rounded-xl shadow-md p-6 transition-transform transform hover:shadow-xl">
            <h3 className="text-2xl font-bold text-red-400 mb-4 text-center">Orders Placed</h3>
            <ul className="space-y-3">
              {sortOrders(filteredOrders("placed")).map((order) => (
                <li
                  key={order.id}
                  className="bg-blue-100 p-3 rounded-lg shadow-sm flex flex-col hover:bg-blue-200"
                >
                  <span className="font-medium text-blue-700">{order.item}</span>
                  <span className="text-gray-600">Customer: {order.customer}</span>
                  <span className="text-gray-500">Details: {order.details}</span>
                  <span className="text-gray-400">Placed At: {new Date(order.placedAt).toLocaleDateString()}</span>
                  <span className="text-gray-400">Amount: ${order.amount.toFixed(2)}</span>
                  <span className="text-gray-400">Payment Status: {order.paymentStatus}</span>
                  <div className="flex justify-between mt-3">
                    <button className="bg-orange-300 text-white px-4 py-1 rounded-md hover:bg-orange-600">
                      Mark as Preparing
                    </button>
                    <button className="bg-red-300 text-white px-4 py-1 rounded-md hover:bg-red-600">
                      Cancel Order
                    </button>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* Preparing Orders */}
          <div className="bg-white rounded-xl shadow-md p-6 transition-transform transform hover:shadow-xl">
            <h3 className="text-2xl font-bold text-red-400 mb-4 text-center">Preparing Orders</h3>
            <ul className="space-y-3">
              {sortOrders(filteredOrders("preparing")).map((order) => (
                <li
                  key={order.id}
                  className="bg-yellow-100 p-3 rounded-lg shadow-sm flex flex-col hover:bg-yellow-200"
                >
                  <span className="font-medium text-yellow-700">{order.item}</span>
                  <span className="text-gray-600">Customer: {order.customer}</span>
                  <span className="text-gray-500">Details: {order.details}</span>
                  <span className="text-gray-400">Placed At: {new Date(order.placedAt).toLocaleDateString()}</span>
                  <span className="text-gray-400">Amount: ${order.amount.toFixed(2)}</span>
                  <span className="text-gray-400">Payment Status: {order.paymentStatus}</span>
                  <div className="flex justify-between mt-3">
                    <button className="bg-green-300 text-white px-4 py-1 rounded-md hover:bg-green-600">
                      Mark as Completed
                    </button>
                    <button className="bg-red-300 text-white px-4 py-1 rounded-md hover:bg-red-600">
                      Cancel Order
                    </button>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* Completed Orders */}
          <div className="bg-white rounded-xl shadow-md p-6 transition-transform transform  hover:shadow-xl">
            <h3 className="text-2xl font-bold text-red-400 mb-4 text-center">Completed Orders</h3>
            <ul className="space-y-3">
              {sortOrders(filteredOrders("completed")).map((order) => (
                <li
                  key={order.id}
                  className="bg-green-100 p-3 rounded-lg shadow-sm flex flex-col hover:bg-green-200"
                >
                  <span className="font-medium text-green-700">{order.item}</span>
                  <span className="text-gray-600">Customer: {order.customer}</span>
                  <span className="text-gray-500">Details: {order.details}</span>
                  <span className="text-gray-400">Placed At: {new Date(order.placedAt).toLocaleDateString()}</span>
                  <span className="text-gray-400">Amount: ${order.amount.toFixed(2)}</span>
                  <span className="text-gray-400">Payment Status: {order.paymentStatus}</span>
                  <div className="flex justify-between mt-3">
                    <button className="bg-gray-500 text-white px-4 py-1 rounded-md cursor-not-allowed" disabled>
                      Completed
                    </button>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* Canceled Orders */}
          <div className="bg-white rounded-xl shadow-md p-6 transition-transform transform hover:shadow-xl">
            <h3 className="text-2xl font-bold text-red-400 mb-4 text-center">Canceled Orders</h3>
            <ul className="space-y-3">
              {sortOrders(filteredOrders("canceled")).map((order) => (
                <li
                  key={order.id}
                  className="bg-red-100 p-3 rounded-lg shadow-sm flex flex-col hover:bg-red-200"
                >
                  <span className="font-medium text-red-700">{order.item}</span>
                  <span className="text-gray-600">Customer: {order.customer}</span>
                  <span className="text-gray-500">Details: {order.details}</span>
                  <span className="text-gray-400">Placed At: {new Date(order.placedAt).toLocaleDateString()}</span>
                  <span className="text-gray-400">Amount: ${order.amount.toFixed(2)}</span>
                  <span className="text-gray-400">Payment Status: {order.paymentStatus}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
