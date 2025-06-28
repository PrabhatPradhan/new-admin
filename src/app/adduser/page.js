"use client";

import React from "react";
import Sidebar from "../../Components/Sidebar/Sidebar";
import Navbar from "../../Components/Navbar/Navbar";
import { FaTachometerAlt } from "react-icons/fa";
import {
  FaListAlt,
   
} from "react-icons/fa";
import Link from "next/link";

export default function page() {
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
          <div className="p-4 md:p-6 bg-gray-100 min-h-screen">
            <div className="bg-white rounded shadow-md p-4 md:p-6 max-w-5xl mx-auto">
              {/* Header Buttons */}
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center bg-blue-100 px-4 py-2 rounded-t gap-4">
                <Link href="/viewalluser">
                  <button className="bg-green-600 text-white px-4 py-1 rounded flex items-center gap-2 text-sm sm:text-base">
                    <FaListAlt /> Users List
                  </button>
                </Link>
                
              </div>

              {/* Form */}
              <form className="mt-6 space-y-5">
                {[
                  "Employee Code",
                  "Employee Name",
                  "Employee Phone No.",
                  "Login User Name",
                  "Login Password",
                  "Enter Hint",
                ].map((label, index) => (
                  <div key={index}>
                    <label className="block font-semibold mb-1">{label}</label>
                    <input
                      type={label.includes("Password") ? "password" : "text"}
                      placeholder={`Enter ${label}`}
                      className="w-full border border-gray-300 rounded px-4 py-2"
                    />
                  </div>
                ))}

                <button
                  type="submit"
                  className="bg-green-600 text-white px-6 py-2 rounded shadow hover:bg-green-700"
                >
                  Save
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
