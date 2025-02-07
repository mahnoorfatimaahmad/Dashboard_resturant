export default function InventoryManagement() {
  return (
    <div className="bg-gradient-to-r from-blue-50 via-blue-100 to-blue-200 shadow-lg p-6 rounded-xl max-w-3xl mx-auto mt-8">
      {/* Header Section */}
      <h2 className="text-3xl font-extrabold text-center text-blue-600 mb-8 animate-pulse">
        Inventory Management
      </h2>

      {/* Feature List with Icons */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div className="flex items-center space-x-4 bg-white shadow-lg rounded-lg p-4 hover:bg-blue-50 transition duration-300">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 3v18m9-9H3"></path>
          </svg>
          <div>
            <h3 className="text-xl font-semibold text-gray-800">Track Stock Levels</h3>
            <p className="text-gray-600 text-sm">Easily monitor stock levels of all ingredients in real-time.</p>
          </div>
        </div>

        <div className="flex items-center space-x-4 bg-white shadow-lg rounded-lg p-4 hover:bg-blue-50 transition duration-300">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-orange-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M18 10l-6 6-6-6"></path>
          </svg>
          <div>
            <h3 className="text-xl font-semibold text-gray-800">Low Stock Alerts</h3>
            <p className="text-gray-600 text-sm">Get notified when stocks run low to ensure timely restocking.</p>
          </div>
        </div>

        <div className="flex items-center space-x-4 bg-white shadow-lg rounded-lg p-4 hover:bg-blue-50 transition duration-300">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-green-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M19 3h-4a4 4 0 0 0-4 4v12a4 4 0 0 0 4 4h4a4 4 0 0 0 4-4V7a4 4 0 0 0-4-4z"></path>
          </svg>
          <div>
            <h3 className="text-xl font-semibold text-gray-800">Add/Update Inventory</h3>
            <p className="text-gray-600 text-sm">Add or update inventory items easily and efficiently.</p>
          </div>
        </div>

        <div className="flex items-center space-x-4 bg-white shadow-lg rounded-lg p-4 hover:bg-blue-50 transition duration-300">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-purple-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 8V4l-8 8 8 8v-4l4-4z"></path>
          </svg>
          <div>
            <h3 className="text-xl font-semibold text-gray-800">Manage Supplier Details</h3>
            <p className="text-gray-600 text-sm">Keep track of supplier contact and order history for easy management.</p>
          </div>
        </div>
      </div>

      {/* Interactive Call to Action */}
      <div className="mt-8 text-center">
        <button className="bg-gradient-to-r from-green-400 to-green-600 text-white text-lg font-semibold py-3 px-8 rounded-full hover:scale-105 transform transition duration-300">
          Manage Inventory Now
        </button>
      </div>
    </div>
  );
}
