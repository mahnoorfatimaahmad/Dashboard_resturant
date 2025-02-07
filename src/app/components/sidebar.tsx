// // components/Dashboard/Sidebar.js
// "use client";
// import { useState } from 'react';
// import { FaBars, FaHome, FaCog, FaTh, FaBox, FaClipboardList, FaUsers, FaChartBar } from 'react-icons/fa';

// export default function Sidebar() {
//   const [isOpen, setIsOpen] = useState(false);

//   return (
//     <div className={`flex ${isOpen ? 'w-64' : 'w-45'} transition-all duration-300 h-screen bg-gray-800 text-blue-500`}>
//       <div className="flex flex-col w-full">
//         {/* Sidebar Header */}
//         <div className="flex items-center justify-between p-4 bg-gray-900">
//           <div className="text-2xl font-bold">Dashboard</div>
//           <button onClick={() => setIsOpen(!isOpen)} className="text-white lg:hidden">
//             <FaBars />
//           </button>
//         </div>

//         {/* Sidebar Menu */}
//         <div className="flex flex-col items-start p-4 space-y-6 mt-4">
//           <div className="flex items-center space-x-4">
//             <FaHome className="text-xl" />
//             {isOpen && <span>Home</span>}
//           </div>
//           <div className="flex items-center space-x-4">
//             <FaTh className="text-xl" />
//             {isOpen && <span>Dashboard Overview</span>}
//           </div>
//           <div className="flex items-center space-x-4">
//             <FaClipboardList className="text-xl" />
//             {isOpen && <span>Orders</span>}
//           </div>
//           <div className="flex items-center space-x-4">
//             <FaBox className="text-xl" />
//             {isOpen && <span>Inventory</span>}
//           </div>
//           <div className="flex items-center space-x-4">
//             <FaClipboardList className="text-xl" />
//             {isOpen && <span>Menu</span>}
//           </div>
//           <div className="flex items-center space-x-4">
//             <FaUsers className="text-xl" />
//             {isOpen && <span>Reservations</span>}
//           </div>
//           <div className="flex items-center space-x-4">
//             <FaChartBar className="text-xl" />
//             {isOpen && <span>Reports</span>}
//           </div>
//           <div className="flex items-center space-x-4">
//             <FaCog className="text-xl" />
//             {isOpen && <span>Settings</span>}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }




const Sidebar = () => {
  return (
    <div className="bg-gray-800 text-white w-64 p-4">
      <ul>
        <li className="mb-4">Dashboard Overview</li>
        <li className="mb-4">Venue Management</li>
        <li className="mb-4">Menu Management</li>
        <li className="mb-4">Décor & Theme</li>
        <li className="mb-4">Special Offers & Events</li>
        <li className="mb-4">Recipe Management</li>
        <li className="mb-4">Categories</li>
        <li className="mb-4">User Engagement</li>
        <li className="mb-4">Media Library</li>
        <li className="mb-4">Comments & Reviews</li>
        <li className="mb-4">Settings</li>
        <li className="mb-4">Analytics & Reports</li>
      </ul>
    </div>
  );
};

export default Sidebar;
