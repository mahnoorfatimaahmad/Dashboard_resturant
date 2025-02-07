import React from 'react';

const Services = () => {
  return (
    <div className="container mx-auto px-4 py-16">
            <h2 className="text-3xl font-bold text-orange-400 text-center mb-8 flex items-center justify-center italic animate-pulse">
        <span className="w-1/12 border-t-2 border-orange-400 mr-2 "></span>Our Services & Facilities
        <span className="w-1/12 border-t-2 border-orange-400 ml-2"></span>
      </h2>

      <h2 className="text-4xl font-bold text-center text-gray-800 mb-12"></h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Card 1 - Online Ordering */}
        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
          <div className="p-6">
            <h3 className="text-2xl font-semibold text-gray-800">Order Online</h3>
            <p className="text-lg text-gray-600 mb-4">Enjoy delicious food from the comfort of your home.</p>
            <button className="bg-blue-600 text-white py-2 px-6 rounded-full hover:bg-blue-700">Order Now</button>
          </div>
        </div>

        {/* Card 2 - Table Reservation */}
        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
          <div className="p-6">
            <h3 className="text-2xl font-semibold text-gray-800">Book a Table</h3>
            <p className="text-lg text-gray-600 mb-4">Reserve your spot at our restaurant today.</p>
            <button className="bg-green-600 text-white py-2 px-6 rounded-full hover:bg-green-700">Reserve Now</button>
          </div>
        </div>

        {/* Card 3 - Home Delivery */}
        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
          <div className="p-6">
            <h3 className="text-2xl font-semibold text-gray-800">Food Delivery</h3>
            <p className="text-lg text-gray-600 mb-4">Fresh meals delivered straight to your door.</p>
            <button className="bg-orange-600 text-white py-2 px-6 rounded-full hover:bg-orange-700">Order Delivery</button>
          </div>
        </div>

        {/* Card 4 - Event Bookings */}
        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
          <div className="p-6">
            <h3 className="text-2xl font-semibold text-gray-800">Book an Event</h3>
            <p className="text-lg text-gray-600 mb-4">Host your special events at our venue.</p>
            <button className="bg-purple-600 text-white py-2 px-6 rounded-full hover:bg-purple-700">Book Now</button>
          </div>
        </div>

        {/* Card 5 - Special Offers */}
        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
          <div className="p-6">
            <h3 className="text-2xl font-semibold text-gray-800">Special Offers</h3>
            <p className="text-lg text-gray-600 mb-4">Exclusive discounts and promotions for our customers.</p>
            <button className="bg-red-600 text-white py-2 px-6 rounded-full hover:bg-red-700">Check Offers</button>
          </div>
        </div>

        {/* Card 6 - Seating Options */}
        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
          <div className="p-6">
            <h3 className="text-2xl font-semibold text-gray-800">Seating Options</h3>
            <p className="text-lg text-gray-600 mb-4">Choose your preferred seating for a comfortable dining experience.</p>
            <button className="bg-teal-600 text-white py-2 px-6 rounded-full hover:bg-teal-700">View Seating</button>
          </div>
        </div>

        {/* Card 7 - Private Dining */}
        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
          <div className="p-6">
            <h3 className="text-2xl font-semibold text-gray-800">Private Dining</h3>
            <p className="text-lg text-gray-600 mb-4">Enjoy an exclusive private dining experience.</p>
            <button className="bg-blue-700 text-white py-2 px-6 rounded-full hover:bg-blue-800">Book Private Dining</button>
          </div>
        </div>

        {/* Card 8 - Takeaway Service */}
        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
          <div className="p-6">
            <h3 className="text-2xl font-semibold text-gray-800">Takeaway Service</h3>
            <p className="text-lg text-gray-600 mb-4">Order your food and pick it up at the restaurant.</p>
            <button className="bg-green-600 text-white py-2 px-6 rounded-full hover:bg-green-700">Order Takeaway</button>
          </div>
        </div>

        {/* Card 9 - Catering Service */}
        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
          <div className="p-6">
            <h3 className="text-2xl font-semibold text-gray-800">Catering Service</h3>
            <p className="text-lg text-gray-600 mb-4">Let us cater to your special events and gatherings.</p>
            <button className="bg-purple-600 text-white py-2 px-6 rounded-full hover:bg-purple-700">Request Catering</button>
          </div>
        </div>

        {/* Card 10 - Parking Facility */}
        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
          <div className="p-6">
            <h3 className="text-2xl font-semibold text-gray-800">Parking Facility</h3>
            <p className="text-lg text-gray-600 mb-4">Convenient parking options available for our guests.</p>
            <button className="bg-orange-600 text-white py-2 px-6 rounded-full hover:bg-orange-700">View Parking</button>
          </div>
        </div>

        {/* Card 11 - Free Wi-Fi */}
        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
          <div className="p-6">
            <h3 className="text-2xl font-semibold text-gray-800">Free Wi-Fi</h3>
            <p className="text-lg text-gray-600 mb-4">Stay connected with our high-speed internet during your visit.</p>
            <button className="bg-blue-500 text-white py-2 px-6 rounded-full hover:bg-blue-600">Connect Now</button>
          </div>
        </div>

        {/* Card 12 - Kids Menu */}
        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
          <div className="p-6">
            <h3 className="text-2xl font-semibold text-gray-800">Kids Menu</h3>
            <p className="text-lg text-gray-600 mb-4">Delicious and healthy options for our younger guests.</p>
            <button className="bg-yellow-600 text-white py-2 px-6 rounded-full hover:bg-yellow-700">View Menu</button>
          </div>
        </div>

        {/* Card 13 - Outdoor Seating */}
        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
          <div className="p-6">
            <h3 className="text-2xl font-semibold text-gray-800">Outdoor Seating</h3>
            <p className="text-lg text-gray-600 mb-4">Enjoy your meal with a beautiful view of the outdoors.</p>
            <button className="bg-green-700 text-white py-2 px-6 rounded-full hover:bg-green-800">Book Outdoor</button>
          </div>
        </div>

        {/* Card 14 - Custom Orders */}
        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
          <div className="p-6">
            <h3 className="text-2xl font-semibold text-gray-800">Custom Orders</h3>
            <p className="text-lg text-gray-600 mb-4">Customize your meal to suit your taste.</p>
            <button className="bg-red-500 text-white py-2 px-6 rounded-full hover:bg-red-600">Create Custom Order</button>
          </div>
        </div>

        {/* Card 15 - Décor */}
        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
          <div className="p-6">
            <h3 className="text-2xl font-semibold text-gray-800">Beautiful Décor</h3>
            <p className="text-lg text-gray-600 mb-4">Enjoy our elegant and cozy restaurant ambiance.</p>
            <button className="bg-purple-500 text-white py-2 px-6 rounded-full hover:bg-purple-600">View Décor</button>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Services;
