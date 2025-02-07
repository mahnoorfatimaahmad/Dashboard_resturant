"use client";

import React, { useState } from "react";

export default function EmployeeManagement() {
  // Sample employee data
  const [employees, setEmployees] = useState([
    {
      id: 1,
      name: "John Doe",
      role: "Waiter",
      shift: "Morning",
      performance: 4,
      salary: 3000,
    },
    {
      id: 2,
      name: "Jane Smith",
      role: "Chef",
      shift: "Evening",
      performance: 5,
      salary: 3500,
    },
  ]);

  const [newEmployee, setNewEmployee] = useState({
    name: "",
    role: "",
    shift: "Morning",
    performance: 0,
    salary: 0,
  });

  const handleEmployeeChange = (e) => {
    setNewEmployee({
      ...newEmployee,
      [e.target.name]: e.target.value,
    });
  };

  const handleAddEmployee = () => {
    if (
      newEmployee.name &&
      newEmployee.role &&
      newEmployee.performance >= 0 &&
      newEmployee.salary > 0
    ) {
      setEmployees([ 
        ...employees,
        { ...newEmployee, id: employees.length + 1 },
      ]);
      setNewEmployee({
        name: "",
        role: "",
        shift: "Morning",
        performance: 0,
        salary: 0,
      });
    }
  };

  return (
    <div className="bg-white shadow p-6 rounded-lg">
      <h2 className="text-3xl font-bold text-orange-400 text-center mb-8 flex items-center justify-center italic animate-pulse">
        <span className="w-1/12 border-t-2 border-orange-400 mr-2 "></span>Employee Management
        <span className="w-1/12 border-t-2 border-orange-400 ml-2"></span>
      </h2>

      {/* Employee Submission Form */}
      <div className="mb-6">
        <h3 className="text-2xl font-bold mb-3 text-orange-400 ml-16"
            style={{ fontFamily: "'Times New Roman', Times, serif" }}
        >Add New Employee</h3>
        <div className="space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <input
              type="text"
              name="name"
              value={newEmployee.name}
              onChange={handleEmployeeChange}
              placeholder="Employee Name"
              className="w-full p-3 border border-gray-300 rounded"
            />
            <input
              type="text"
              name="role"
              value={newEmployee.role}
              onChange={handleEmployeeChange}
              placeholder="Role (e.g., Waiter, Chef)"
              className="w-full p-3 border border-gray-300 rounded"
            />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block mb-2 font-bold">Shift:</label>
              <select
                name="shift"
                value={newEmployee.shift}
                onChange={handleEmployeeChange}
                className="w-full p-3 border border-gray-300 rounded"
              >
                <option value="Morning">Morning</option>
                <option value="Evening">Evening</option>
                <option value="Night">Night</option>
              </select>
            </div>
            <div>
              <label className="block mb-2 font-bold">Performance Rating (1-5):</label>
              <input
                type="number"
                name="performance"
                value={newEmployee.performance}
                onChange={handleEmployeeChange}
                min="1"
                max="5"
                className="w-full p-3 border border-gray-300 rounded"
              />
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block mb-2 font-bold">Salary ($):</label>
              <input
                type="number"
                name="salary"
                value={newEmployee.salary}
                onChange={handleEmployeeChange}
                min="1"
                className="w-full p-3 border border-gray-300 rounded"
              />
            </div>
            <div></div> {/* Empty div to maintain column structure */}
          </div>
          <button
            onClick={handleAddEmployee}
            className="bg-orange-400 text-white px-6 py-2 rounded hover:bg-orange-700 text-xl font-bold"
            style={{ fontFamily: "'Times New Roman', Times, serif" }}
          >
            Add Employee
          </button>
        </div>
      </div>

      {/* Employee List */}
      <div>
        <h3 className="text-2xl font-bold mb-3 text-orange-400 ml-14"
            style={{ fontFamily: "'Times New Roman', Times, serif" }}
        >Employee List</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {employees.map((employee) => (
            <div
              key={employee.id}
              className="bg-gray-100 p-4 rounded-lg shadow-md w-full"
            >
              <p className="font-bold text-lg">{employee.name}</p>
              <p>
                <strong>Role:</strong> {employee.role}
              </p>
              <p>
                <strong>Shift:</strong> {employee.shift}
              </p>
              <p>
                <strong>Performance Rating:</strong> {employee.performance}
              </p>
              <p>
                <strong>Salary:</strong> ${employee.salary}
              </p>
              <div className="mt-4 flex gap-2">
                <button className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-700">
                  Edit
                </button>
                <button className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-700">
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
