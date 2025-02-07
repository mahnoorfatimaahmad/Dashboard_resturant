"use client";
import { useState } from "react";

export default function MenuManagement() {
  const [menu, setMenu] = useState([
    { id: 1, name: "Margherita Pizza", category: "Pizza", price: "$10" },
    { id: 2, name: "Grilled Burger", category: "Burgers", price: "$8" },
    { id: 3, name: "Pasta Alfredo", category: "Pasta", price: "$12" },
    { id: 4, name: "Chicken Biryani", category: "Biryani", price: "$15" },
    { id: 5, name: "Mutton Biryani", category: "Biryani", price: "$18" },
    { id: 6, name: "Gulab Jamun", category: "Sweets", price: "$5" },
    { id: 7, name: "Rasgulla", category: "Sweets", price: "$6" },
    { id: 8, name: "Paneer Tikka", category: "Special Dishes", price: "$20" },
    { id: 9, name: "Butter Chicken", category: "Special Dishes", price: "$25" },
    { id: 10, name: "Dal Tadka", category: "Special Dishes", price: "$12" },
    { id: 11, name: "Cheese Pizza", category: "Pizza", price: "$12" },
    { id: 12, name: "Veg Burger", category: "Burgers", price: "$7" },
    { id: 13, name: "Spaghetti", category: "Pasta", price: "$14" },
  ]);

  const [newItem, setNewItem] = useState({ name: "", category: "", price: "" });

  // Menu Handlers
  const handleAddMenu = () => {
    if (newItem.name && newItem.category && newItem.price) {
      setMenu([...menu, { id: Date.now(), ...newItem }]);
      setNewItem({ name: "", category: "", price: "" });
    } else {
      alert("Please fill in all fields!");
    }
  };

  const handleUpdateMenu = (id) => {
    const updatedName = prompt("Enter new name:");
    const updatedCategory = prompt("Enter new category:");
    const updatedPrice = prompt("Enter new price:");

    if (updatedName && updatedCategory && updatedPrice) {
      setMenu(
        menu.map((item) =>
          item.id === id
            ? { ...item, name: updatedName, category: updatedCategory, price: updatedPrice }
            : item
        )
      );
    }
  };

  const handleDeleteMenu = (id) => {
    if (confirm("Are you sure you want to delete this item?")) {
      setMenu(menu.filter((item) => item.id !== id));
    }
  };

  // Filter menu by category
  const categories = ["Pizza", "Burgers", "Pasta", "Biryani", "Sweets", "Special Dishes"];
  
  return (
    <div className="bg-gradient-to-br from-gray-50 to-gray-100 p-8 rounded-xl shadow-lg max-w-6xl mx-auto mt-10">
      <h2 className="text-3xl font-bold text-orange-400 text-center mb-8 flex items-center justify-center italic animate-pulse">
        <span className="w-1/12 border-t-2 border-orange-400 mr-2 "></span>Menu Management
        <span className="w-1/12 border-t-2 border-orange-400 ml-2"></span>
      </h2>

      {categories.map((category) => (
        <div key={category} className="bg-white p-6 rounded-lg shadow-md mb-8">
          <h3 className="text-2xl font-bold text-orange-400 mb-4 ml-16" style={{ fontFamily: "'Times New Roman', Times, serif" }}>
            {category}
          </h3>
          <ul className="space-y-4">
            {menu
              .filter((item) => item.category === category)
              .map((item) => (
                <li key={item.id} className="flex items-center justify-between bg-gray-100 p-4 rounded-lg shadow-sm">
                  <div>
                    <h4 className="font-medium text-gray-700">{item.name}</h4>
                    <p className="text-sm text-gray-500">{item.category}</p>
                    <p className="text-sm font-semibold text-gray-600">{item.price}</p>
                  </div>
                  <div className="space-x-2">
                    <button
                      onClick={() => handleUpdateMenu(item.id)}
                      className="bg-red-400 text-white px-4 py-2 rounded-md shadow-sm hover:bg-red-600 font-bold"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => handleDeleteMenu(item.id)}
                      className="bg-red-400 text-white px-4 py-2 rounded-md shadow-sm hover:bg-red-600 font-bold"
                    >
                      Delete
                    </button>
                  </div>
                </li>
              ))}
          </ul>
        </div>
      ))}

      {/* Add New Menu Item */}
      <div className="bg-white p-6 rounded-lg shadow-md mb-8">
        <h3 className="text-2xl font-bold text-orange-400 ml-16 mb-4" style={{ fontFamily: "'Times New Roman', Times, serif" }}>
          Add New Menu Item
        </h3>
        <div className="flex flex-col space-y-4">
          <input
            type="text"
            placeholder="Item Name"
            value={newItem.name}
            onChange={(e) => setNewItem({ ...newItem, name: e.target.value })}
            className="border border-gray-300 rounded-md p-2 w-full"
          />
          <input
            type="text"
            placeholder="Category"
            value={newItem.category}
            onChange={(e) => setNewItem({ ...newItem, category: e.target.value })}
            className="border border-gray-300 rounded-md p-2 w-full"
          />
          <input
            type="text"
            placeholder="Price"
            value={newItem.price}
            onChange={(e) => setNewItem({ ...newItem, price: e.target.value })}
            className="border border-gray-300 rounded-md p-2 w-full"
          />
          <button
            onClick={handleAddMenu}
            className="bg-orange-400 text-white px-2 py-2 rounded-md shadow-md hover:bg-orange-700 font-bold text-xl"
            style={{ fontFamily: "'Times New Roman', Times, serif" }}
          >
            Add Item
          </button>
        </div>
      </div>
    </div>
  );
}
