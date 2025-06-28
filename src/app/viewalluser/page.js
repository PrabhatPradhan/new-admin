"use client";

import React, { useState } from "react";
import Sidebar from "../../Components/Sidebar/Sidebar";
import Navbar from "../../Components/Navbar/Navbar";
import { FaTachometerAlt, FaPlus, FaListAlt, FaEdit, FaTrash } from "react-icons/fa";
import Link from "next/link";

const users = [
  {
    code: "+880167",
    name: "MD. Alimul Alrazy",
    phone: "+91-8800123456",
    email: "alrazy@thememinister.com",
    pass: "********",
    status: "Active",
  },
  {
    code: "+88016",
    name: "MD. Alimul Alrazy",
    phone: "+91-8800123456",
    email: "alrazy@thememinister.com",
    pass: "********",
    status: "Inactive",
  },
  {
    code: "+8801",
    name: "MD. Alimul Alrazy",
    phone: "+91-8800123456",
    email: "alrazy@thememinister.com",
    pass: "********",
    status: "Active",
  },
  {
    code: "+88016",
    name: "MD. Alimul Alrazy",
    phone: "+91-8800123456",
    email: "alrazy@thememinister.com",
    pass: "********",
    status: "Active",
  },
];

export default function Page() {
  const [popupContent, setPopupContent] = useState(null);

  const handlePopup = (type, user) => {
    if (type === "edit") {
      setPopupContent(`Editing user: ${user.name}`);
    } else if (type === "delete") {
      setPopupContent(`Are you sure you want to delete ${user.name}?`);
    }
  };

  const closePopup = () => setPopupContent(null);

  return (
    <>
      <div className="flex flex-col md:flex-row min-h-screen">
        <div className="w-full md:w-64 bg-gray-800 text-white">
          <Sidebar />
        </div>

        <div className="flex-1 overflow-y-auto bg-gray-100">
          <Navbar />

          <div className="bg-white px-4 md:px-6 py-4 shadow-sm border-b flex flex-wrap items-center gap-4">
            <div className="text-teal-600 text-3xl md:text-4xl">
              <FaTachometerAlt />
            </div>
            <div>
              <h1 className="text-xl md:text-2xl font-semibold text-gray-800">Manage Users</h1>
              <p className="text-sm text-gray-600">Very detailed &amp; featured admin.</p>
            </div>
          </div>

          <div className="p-4 md:p-6 bg-gray-100 min-h-screen">
            <div className="bg-white rounded shadow-md p-4 w-full mx-auto max-w-7xl">
              <div className="flex flex-wrap justify-between items-center gap-3 mb-4">
                <Link href="/adduser">
                  <button className="bg-green-600 text-white px-4 py-2 rounded flex items-center gap-2 text-sm">
                    <FaPlus /> Add Users
                  </button>
                </Link>
              </div>

              <div className="border rounded shadow">
                <div className="bg-blue-100 px-4 py-2 font-semibold text-lg">Users List</div>

                <div className="p-4 flex flex-wrap gap-2 items-center">
                  <select className="border px-2 py-1 rounded text-sm">
                    <option>10</option>
                    <option>25</option>
                    <option>50</option>
                  </select>
                  <button className="bg-green-600 text-white px-3 py-1 rounded flex items-center gap-2 text-sm">
                    <FaListAlt /> Export
                  </button>
                  <button className="bg-green-600 text-white px-3 py-1 rounded flex items-center gap-2 text-sm">
                    <FaListAlt /> Import
                  </button>
                  <select className="border px-2 py-1 rounded text-sm">
                    <option>Select a Name</option>
                    <option>Alrazy</option>
                  </select>
                  <button className="bg-teal-600 text-white px-4 py-1 rounded text-sm">Search</button>
                </div>

                <div className="overflow-x-auto w-full">
                  <table className="w-full text-sm text-left border-t min-w-[700px]">
                    <thead className="bg-blue-50">
                      <tr>
                        <th className="px-4 py-2 border">Employee Code</th>
                        <th className="px-4 py-2 border">Employee Name</th>
                        <th className="px-4 py-2 border">Phone No</th>
                        <th className="px-4 py-2 border">Username</th>
                        <th className="px-4 py-2 border">Password</th>
                        <th className="px-4 py-2 border">Status</th>
                        <th className="px-4 py-2 border">Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      {users.map((user, i) => (
                        <tr key={i} className={i % 2 === 0 ? "bg-gray-50" : "bg-white"}>
                          <td className="px-4 py-2 border">{user.code}</td>
                          <td className="px-4 py-2 border">{user.name}</td>
                          <td className="px-4 py-2 border">{user.phone}</td>
                          <td className="px-4 py-2 border">{user.email}</td>
                          <td className="px-4 py-2 border">{user.pass}</td>
                          <td className="px-4 py-2 border">
                            <span className={`px-3 py-1 text-white rounded text-sm ${user.status === "Active" ? "bg-teal-600" : "bg-red-500"}`}>
                              {user.status}
                            </span>
                          </td>
                          <td className="px-4 py-2 border space-x-2">
                            <button
                              onClick={() => handlePopup("edit", user)}
                              className="bg-teal-600 text-white p-2 rounded text-sm"
                            >
                              <FaEdit />
                            </button>
                            <button
                              onClick={() => handlePopup("delete", user)}
                              className="bg-red-600 text-white p-2 rounded text-sm"
                            >
                              <FaTrash />
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              <footer className="text-center text-sm text-gray-500 py-4 bg-white shadow-inner mt-6">
                Copyright © 2016-2017{" "}
                <span className="text-teal-600 font-semibold">Webideainfotech</span>. All rights reserved.
              </footer>
            </div>
          </div>
        </div>
      </div>

      {/* POPUP Modal */}
      {popupContent && (
        <div className="fixed inset-0   bg-opacity-40 flex justify-center items-center z-50 p-4">
          <div className="bg-white rounded-lg p-6 shadow-xl w-full max-w-md text-center">
            <p className="text-lg font-semibold mb-4">{popupContent}</p>
            <button onClick={closePopup} className="bg-red-600 text-white px-4 py-2 rounded mt-4">
              Close
            </button>
          </div>
        </div>
      )}
    </>
  );
}
