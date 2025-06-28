"use client";

import React from "react";
import Dashboard from "@/Components/Dashboard/Dashboard";
import { FaTachometerAlt } from "react-icons/fa";
import Sidebar from "@/Components/Sidebar/Sidebar";
import Navbar from "../Components/Navbar/Navbar"
export default function Page() {
  return (
    <>
      <div className="flex h-screen">
        {/* Sidebar */}

        <Sidebar />

        {/* Main Content */}
        <main className="flex-1 bg-gray-100 overflow-y-auto">
          {/* Header */}
          {/* <header className="bg-[#2f3d56] text-white flex justify-between items-center px-6 py-4">
            <h1 className="text-xl font-semibold">CRM Admin Dashboard</h1>
            <div className="flex items-center gap-6">
              <FaClipboardList className="w-5 h-5" />
              <div className="relative">
                <FaBell className="w-5 h-5" />
                <span className="absolute -top-2 -right-2 bg-yellow-400 text-xs text-black rounded-full w-5 h-5 flex items-center justify-center">
                  5
                </span>
              </div>
              <img
                src="http://127.0.0.1:5500/CRM%20ADMIN/assets/dist/img/avatar5.png"
                alt="User"
                className="w-10 h-10 rounded-full border-2 border-white"
              />
            </div>
          </header> */}

          <Navbar/>

          <div className="bg-white px-6 py-4 shadow-sm border-b flex items-center gap-4">
            {/* Icon */}
            <div className="text-teal-600 text-4xl">
              <FaTachometerAlt />
            </div>

            {/* Text */}
            <div>
              <h1 className="text-2xl font-semibold text-gray-800">
                CRM Admin Dashboard
              </h1>
              <p className="text-sm text-gray-600">
                Very detailed &amp; featured admin.
              </p>
            </div>
          </div>

          {/* Dashboard Cards */}
          <Dashboard />
        </main>
      </div>
    </>
  );
}
