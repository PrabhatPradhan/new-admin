"use client";

import React, { useState } from "react";
import Sidebar from "../../Components/Sidebar/Sidebar";
import Navbar from "../../Components/Navbar/Navbar";
import { FaTachometerAlt } from "react-icons/fa";

export default function Page() {
  const [formData, setFormData] = useState({});

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: files ? files[0] : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <>
      <div className="flex flex-col lg:flex-row h-screen">
        {/* Sidebar */}
        <div className="w-full lg:w-64 bg-gray-800 text-white">
          <Sidebar />
        </div>

        {/* Main Content */}
        <div className="flex-1 overflow-y-auto bg-gray-100">
          <Navbar />

          {/* Header */}
          <div className="bg-white px-4 sm:px-6 py-4 shadow-sm border-b flex flex-col sm:flex-row sm:items-center gap-4">
            <div className="text-teal-600 text-4xl">
              <FaTachometerAlt />
            </div>
            <div>
              <h1 className="text-2xl font-semibold text-gray-800">
                CRM Admin Dashboard
              </h1>
              <p className="text-sm text-gray-600">
                Very detailed &amp; featured admin.
              </p>
            </div>
          </div>

          {/* Form Section */}
          <div className="p-4 sm:p-6 max-w-4xl mx-auto bg-white rounded shadow mt-4">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block font-semibold mb-1">
                  Employee Code
                </label>
                <input
                  type="text"
                  name="employeeCode"
                  placeholder="Enter Employee Code"
                  className="w-full border p-2 rounded"
                  onChange={handleChange}
                />
              </div>
              <div>
                <label className="block font-semibold mb-1">
                  Employee Name
                </label>
                <input
                  type="text"
                  name="employeeName"
                  placeholder="Enter Employee Name"
                  className="w-full border p-2 rounded"
                  onChange={handleChange}
                />
              </div>
              <div>
                <label className="block font-semibold mb-1">
                  Employee Phone No.
                </label>
                <input
                  type="text"
                  name="employeePhone"
                  placeholder="Enter Employee Phone No."
                  className="w-full border p-2 rounded"
                  onChange={handleChange}
                />
              </div>
              <div>
                <label className="block font-semibold mb-1">
                  Login User Name
                </label>
                <input
                  type="text"
                  name="loginUser"
                  placeholder="Enter Login User Name"
                  className="w-full border p-2 rounded"
                  onChange={handleChange}
                />
              </div>
              <div>
                <label className="block font-semibold mb-1">
                  Login Password
                </label>
                <input
                  type="password"
                  name="password"
                  placeholder="Enter Login Password"
                  className="w-full border p-2 rounded"
                  onChange={handleChange}
                />
              </div>
              <div>
                <label className="block font-semibold mb-1">
                  Confirm Password
                </label>
                <input
                  type="password"
                  name="confirmPassword"
                  placeholder="Confirm Password"
                  className="w-full border p-2 rounded"
                  onChange={handleChange}
                />
              </div>
              <div>
                <label className="block font-semibold mb-1">Enter Hint</label>
                <input
                  type="text"
                  name="hint"
                  placeholder="Enter hint"
                  className="w-full border p-2 rounded"
                  onChange={handleChange}
                />
              </div>
              <div>
                <label className="block font-semibold mb-1">
                  Upload User Image
                </label>
                <input
                  type="file"
                  name="userImage"
                  className="w-full"
                  onChange={handleChange}
                />
              </div>
              <button
                type="submit"
                className="bg-green-600 text-white px-6 py-2 rounded"
              >
                Save
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
