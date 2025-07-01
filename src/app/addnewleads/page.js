"use client";
import { useState } from "react";
import React from "react";
import Sidebar from "../../Components/Sidebar/Sidebar";
import Navbar from "../../Components/Navbar/Navbar";
import { FaTachometerAlt } from "react-icons/fa";
import Link from "next/link";
export default function LeadFormTable() {
  const [leads, setLeads] = useState([]);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    source: "",
    assigned: "",
    status: "",
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.name && formData.email && formData.mobile) {
      setLeads((prev) => [...prev, formData]);
      setFormData({
        name: "",
        email: "",
        mobile: "",
        source: "",
        assigned: "",
        status: "",
      });
    }
  };

  return (
    <>
      <div className="flex flex-col md:flex-row min-h-screen">
        {/* Sidebar: fixed width */}
        <div className="w-full md:w-64 bg-gray-800 text-white">
          <Sidebar />
        </div>

        <div className="flex-1 overflow-y-auto bg-gray-100">
          <Navbar />
          <div className="bg-white px-4 md:px-6 py-4 shadow-sm border-b flex flex-col sm:flex-row items-start sm:items-center gap-4">
            {/* Icon */}
            <div className="text-teal-600 text-3xl sm:text-4xl">
              <FaTachometerAlt />
            </div>

            {/* Text */}
            <div>
              <h1 className="text-xl sm:text-2xl font-semibold text-gray-800">
                Add New Leads 
              </h1>
              <p className="text-sm text-gray-600">
                Very detailed &amp; featured admin.
              </p>
            </div>
            </div>

          <div className="min-h-screen bg-gray-100 py-10 px-4 sm:px-8">
            <div className="max-w-6xl mx-auto bg-white p-6 rounded-xl shadow">
              <h2 className="text-2xl font-bold mb-6 text-blue-900">
                Add Lead
              </h2>

              <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                <div>
                  <label className="block text-sm font-semibold mb-1 text-gray-700">
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    placeholder="Enter full name"
                    onChange={handleChange}
                    className="border rounded w-full px-3 py-2"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold mb-1 text-gray-700">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    placeholder="Enter email address"
                    onChange={handleChange}
                    className="border rounded w-full px-3 py-2"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold mb-1 text-gray-700">
                    Mobile
                  </label>
                  <input
                    type="text"
                    name="mobile"
                    value={formData.mobile}
                    placeholder="Enter mobile number"
                    onChange={handleChange}
                    className="border rounded w-full px-3 py-2"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold mb-1 text-gray-700">
                    Source
                  </label>
                  <input
                    type="text"
                    name="source"
                    value={formData.source}
                    placeholder="e.g. Website, Referral"
                    onChange={handleChange}
                    className="border rounded w-full px-3 py-2"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold mb-1 text-gray-700">
                    Assigned
                  </label>
                  <input
                    type="text"
                    name="assigned"
                    value={formData.assigned}
                    placeholder="Assigned to"
                    onChange={handleChange}
                    className="border rounded w-full px-3 py-2"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold mb-1 text-gray-700">
                    Status
                  </label>
                  <input
                    type="text"
                    name="status"
                    value={formData.status}
                    placeholder="e.g. New, In Progress"
                    onChange={handleChange}
                    className="border rounded w-full px-3 py-2"
                  />
                </div>
                <div className="md:col-span-2 text-right">
                  <Link href="/addleads">

                  <button
                    type="submit"
                    className="bg-teal-600 text-white px-6 py-2 rounded hover:bg-teal-700"
                  >
                    Add Lead
                  </button>
                  </Link>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

 