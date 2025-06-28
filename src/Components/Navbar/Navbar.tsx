"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useRef, useEffect } from "react";
import {
  FaClipboardList,
  FaBell,
  FaCircle,
  FaUser,
  FaSignOutAlt,
} from "react-icons/fa";
import avtar from "../../../public/avatar5.png";

export default function Navbar() {
  const [showPopup, setShowPopup] = useState(false);
  const [showNotifications, setShowNotifications] = useState(false);
  const [showUserMenu, setShowUserMenu] = useState(false);
  const userMenuRef = useRef<HTMLDivElement>(null);

  const [formData, setFormData] = useState({
    related: "",
    date: "",
    remark: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    if (!e || !e.target) return;
    const name = e.target.name;
    const value = e.target.value;
    setFormData({ ...formData, [name]: value });
  };

  const handleSave = () => {
    if (!formData.related || !formData.date || !formData.remark) {
      alert("Please fill all fields before saving.");
      return;
    }

    console.log("Saved Data:", formData);
    setFormData({ related: "", date: "", remark: "" });
    setShowPopup(false);
  };

  const notifications = [
    "Change Your font style",
    "Check the system status",
    "Add more admin...",
    "Add more clients and order",
    "New updates available!",
     
  ];

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (userMenuRef.current && !userMenuRef.current.contains(e.target as Node)) {
        setShowUserMenu(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div>
      {/* Header */}
      <header className="bg-[#2f3d56] text-white flex justify-between items-center px-4 sm:px-6 py-4 relative">
        <h1 className="text-lg sm:text-xl font-semibold"> </h1>
        <div className="flex items-center gap-4 sm:gap-6">
          {/* Reminder Icon */}
          <button onClick={() => setShowPopup(true)}>
            <FaClipboardList className="w-5 h-5 cursor-pointer" />
          </button>

          {/* Notification Bell */}
          <div className="relative">
            <button onClick={() => setShowNotifications(!showNotifications)}>
              <FaBell className="w-5 h-5 cursor-pointer" />
              <span className="absolute -top-2 -right-2 bg-yellow-400 text-xs text-black rounded-full w-5 h-5 flex items-center justify-center">
                {notifications.length}
              </span>
            </button>

            {showNotifications && (
              <div className="absolute right-0 mt-2 w-64 sm:w-72 h-60 sm:h-72 text-black bg-green-100 border border-green-300 overflow-y-auto shadow-lg rounded-lg z-50">
                {notifications.map((note, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-2 px-4 py-2 border-b border-green-300 hover:bg-green-200 transition text-sm"
                  >
                    <FaCircle className="text-teal-600 text-[8px]" />
                    <span>{note}</span>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* User Avatar */}
          <div className="relative" ref={userMenuRef}>
            <Image
              src={avtar}
              alt="User"
              className="w-8 sm:w-10 h-8 sm:h-10 rounded-full border-2 border-white cursor-pointer"
              onClick={() => setShowUserMenu(!showUserMenu)}
            />

            {showUserMenu && (
              <div className="absolute right-0 mt-2 w-44 sm:w-48 bg-white text-black border border-gray-300 shadow-lg rounded-md z-50">
                <Link href="/userprofile">
                  <button className="flex items-center gap-2 w-full text-left px-4 py-2 hover:bg-blue-100">
                    <FaUser className="text-blue-600" /> View Profile
                  </button>
                </Link>
                <button
                  onClick={() => alert("Logging out...")}
                  className="flex items-center gap-2 w-full text-left px-4 py-2 hover:bg-red-100"
                >
                  <FaSignOutAlt className="text-red-600" /> Logout
                </button>
              </div>
            )}
          </div>
        </div>
      </header>

      {/* Popup Modal for Reminder */}
      {showPopup && (
        <div className="fixed inset-0 flex   justify-center  px-2 sm:px-0 z-50   bg-opacity-30">
          <div className="bg-white rounded shadow-lg w-full max-w-md sm:max-w-lg p-4 sm:p-6 relative">
            <div className="flex justify-between items-center border-b pb-3 mb-4">
              <h2 className="text-lg font-semibold flex items-center gap-2">
                <FaClipboardList className="text-blue-800" /> Set Reminder
              </h2>
              <button className="text-xl" onClick={() => setShowPopup(false)}>
                &times;
              </button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1">
                  Related
                </label>
                <input
                  type="text"
                  name="related"
                  value={formData.related}
                  onChange={handleChange}
                  className="w-full p-2 border rounded"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1">
                  Reminder Date
                </label>
                <input
                  type="date"
                  name="date"
                  value={formData.date}
                  onChange={handleChange}
                  className="w-full p-2 border rounded"
                />
              </div>
            </div>

            <div className="mb-4">
              <label className="block text-sm font-semibold text-gray-700 mb-1">
                Remark
              </label>
              <textarea
                name="remark"
                value={formData.remark}
                onChange={handleChange}
                className="w-full p-2 border rounded"
              ></textarea>
            </div>

            <div className="flex justify-end gap-2">
              <button
                onClick={handleSave}
                className="bg-teal-600 text-white px-4 py-2 rounded"
              >
                Save
              </button>
              <button
                onClick={() => setShowPopup(false)}
                className="bg-red-600 text-white px-4 py-2 rounded"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
