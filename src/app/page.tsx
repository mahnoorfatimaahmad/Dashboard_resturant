"use client";
import { useState } from "react";
import {
  FaTachometerAlt,
  FaBox,
  FaClipboardList,
  FaUtensils,
  FaCalendarAlt,
  FaComments,
  FaUsers,
  FaChartBar,
  FaBell,
  FaCogs,
} from "react-icons/fa";

// Import section components
import DashboardOverview from "./components/DashboardOverview";
import OrderManagement from "./components/orderManagement";
import MenuManagement from "./components/menuManagement";
import ReservationsManagement from "./components/ReservationsManagement";
import RestaurantManagement from "./components/ResturantManagement";
import VenueManagement from "./components/Venue";
import DecorThemeManagement from "./components/Decor";
import CustomerFeedback from "./components/CustomerFeedback";
import EmployeeManagement from "./components/EmployeeManagement";
import ReportsAnalytics from "./components/reportAnalytics";
import NotificationsAlerts from "./components/NotificationAlerts";


export default function Home() {
  const [activeSection, setActiveSection] = useState("dashboard");

  const menuItems = [
    { id: "dashboard", name: "Dashboard", icon: <FaTachometerAlt /> },
    { id: "orders", name: "Order Management", icon: <FaClipboardList /> },
    { id: "menu", name: "Menu Management", icon: <FaUtensils /> },
    { id: "reservations", name: "Reservations", icon: <FaCalendarAlt /> },
    { id: "restaurant", name: "Restaurant Management", icon: <FaUtensils /> },
    { id: "venue", name: "Venue Management", icon: <FaCalendarAlt /> },
    { id: "decor", name: "Decor & Theme", icon: <FaCogs /> },
    { id: "feedback", name: "Feedback", icon: <FaComments /> },
    { id: "employees", name: "Employees", icon: <FaUsers /> },
    { id: "reports", name: "Reports", icon: <FaChartBar /> },
    { id: "notifications", name: "Notifications", icon: <FaBell /> },
  ];

  const services = [
    { title: "Service 1", description: "Description for service 1" },
    { title: "Service 2", description: "Description for service 2" },
    { title: "Service 3", description: "Description for service 3" },
  ];

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className="w-64 bg-white shadow-md">
        <div className="p-4 text-2xl font-bold text-center bg-gray-800 text-white italic">
          Dashboard
        </div>
        <nav className="mt-4">
          <ul>
            {menuItems.map((item) => (
              <li
                key={item.id}
                onClick={() => setActiveSection(item.id)}
                className={`flex items-center px-4 py-2 text-gray-700 cursor-pointer hover:bg-gray-200 ${
                  activeSection === item.id ? "bg-gray-300 font-semibold" : ""
                }`}
              >
                <span className="mr-3 text-xl">{item.icon}</span>
                {item.name}
              </li>
            ))}
          </ul>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-6 overflow-auto">
        {/* Dynamically render the section based on the active section */}
        {activeSection === "dashboard" && <DashboardOverview />}
        {activeSection === "orders" && <OrderManagement />}
        {activeSection === "menu" && <MenuManagement />}
        {activeSection === "reservations" && <ReservationsManagement />}
        {activeSection === "restaurant" && <RestaurantManagement />}
        {activeSection === "venue" && <VenueManagement />}
        {activeSection === "decor" && <DecorThemeManagement />}
        {activeSection === "feedback" && <CustomerFeedback />}
        {activeSection === "employees" && <EmployeeManagement />}
        {activeSection === "reports" && <ReportsAnalytics />}
        {activeSection === "notifications" && <NotificationsAlerts />}
      </main>
    </div>
  );
}
