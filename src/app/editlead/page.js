
"use client";

 
import Sidebar from "../../Components/Sidebar/Sidebar";
import Navbar from "../../Components/Navbar/Navbar";
import { FaTachometerAlt } from "react-icons/fa";
 
import Link from "next/link";
import React, { useState } from "react";

 
export default function page() {
    
  const [editLead, setEditLead] = useState({
    name: "",
    email: "",
    mobile: "",
    source: "",
    assigned: "",
    status: "",
  });

  const handleEditChange = (e) => {
    setEditLead((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleUpdateLead = () => {
    alert("Lead Updated Successfully!");
    console.log("Updated Data:", editLead);
    // Clear form or redirect logic
  };
  return (
    <>
      <div className="flex flex-col md:flex-row min-h-screen">
        {/* Sidebar: fixed width */}
        <div className="w-full md:w-64 bg-gray-800 text-white">
          <Sidebar />
        </div>

        {/* Main Content: full remaining width */}
        <div className="flex-1 overflow-y-auto bg-gray-100">
          <Navbar />

          {/* Header Section */}
          <div className="bg-white px-4 md:px-6 py-4 shadow-sm border-b flex flex-col sm:flex-row items-start sm:items-center gap-4">
            {/* Icon */}
            <div className="text-teal-600 text-3xl sm:text-4xl">
              <FaTachometerAlt />
            </div>

            {/* Text */}
            <div>
              <h1 className="text-xl sm:text-2xl font-semibold text-gray-800">
                Add Users
              </h1>
              <p className="text-sm text-gray-600">
                Very detailed &amp; featured admin.
              </p>
            </div>
          </div>

          {/* Form Wrapper */}
          
          <div className="min-h-screen bg-white flex items-center justify-center px-4  ">
  <div className="bg-white p-6 rounded-xl shadow-xl w-full max-w-3xl space-y-6">
    <h2 className="text-2xl font-bold text-gray-800  ">Edit Lead</h2>

    <div className="flex flex-col gap-4">
      {["name", "email", "mobile", "source", "assigned", "status"].map((field) => {
        const label = field.charAt(0).toUpperCase() + field.slice(1);
        return (
          <div key={field} className="flex flex-col">
            <label className="mb-1 font-medium text-gray-700">{label}</label>
            <input
              type="text"
              name={field}
              placeholder={`Enter ${label}`}
              className="border border-gray-300 px-4 py-3 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
              value={editLead[field]}
              onChange={handleEditChange}
            />
          </div>
        );
      })}
    </div>

    <div className="flex justify-end gap-3">
      <button
        className="bg-gray-300 text-black px-5 py-2 rounded hover:bg-gray-400"
        onClick={() =>
          setEditLead({
            name: "",
            email: "",
            mobile: "",
            source: "",
            assigned: "",
            status: "",
          })
        }
      >
        Cancel
      </button>

      <Link href="/">
        <button
          className="bg-teal-600 text-white px-5 py-2 rounded hover:bg-teal-700"
          onClick={handleUpdateLead}
        >
          Update Lead
        </button>
      </Link>
    </div>
  </div>
</div>




        </div>
      </div>
    </>
  );
}
