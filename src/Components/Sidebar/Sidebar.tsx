"use client";

import { useState } from "react";
import Link from "next/link";
import { BiSolidDashboard } from "react-icons/bi";
import { HiOutlineUserGroup } from "react-icons/hi2";
import { AiOutlineLineChart } from "react-icons/ai";
import {
  FaClipboardList,
  FaSignOutAlt,
  FaChevronDown,
  FaBars,
} from "react-icons/fa";
import logo from "../../../public/logo.png"
import Image from "next/image";
export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Hamburger Icon - Mobile Only */}
      <button
        className="md:hidden fixed top-4 left-4 z-50 text-white bg-[#0a0f1c] p-2 rounded"
        onClick={() => setIsOpen(!isOpen)}
      >
        <FaBars size={20} />
      </button>

      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-[#0a0f1c] text-white p-4 space-y-6 z-40 transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } md:translate-x-0 md:static md:block`}
      >
        {/* Logo */}
        <div className="flex items-center gap-2">
          <Image
            src={logo}
            alt="Logo"
            className="  ml-10"
          />
        </div>

        {/* Navigation */}
        <nav className="space-y-3 text-base">
          <Link href="/" className="flex items-center gap-2 text-teal-400">
            <BiSolidDashboard /> Dashboard
          </Link>

          {/* Manage Sub Users */}
          <details className="group">
            <summary className="flex items-center justify-between cursor-pointer list-none py-2 text-gray-300 hover:text-white">
              <span className="flex items-center gap-2">
                <HiOutlineUserGroup /> Manage Sub Users
              </span>
              <FaChevronDown className="transition-transform duration-300 group-open:rotate-180" />
            </summary>
            <div className="ml-6 overflow-hidden max-h-0 group-open:max-h-96 transition-[max-height] duration-500 ease-in-out">
              <div className="mt-2 flex flex-col gap-2 text-sm text-gray-300">
                <Link href="/adduser" className="hover:text-white">
                  Add User
                </Link>
                <Link href="/viewalluser" className="hover:text-white">
                  View All Users
                </Link>
              </div>
            </div>
          </details>

          {/* Manage Leads */}
          <details className="group">
            <summary className="flex items-center justify-between cursor-pointer list-none py-2 text-gray-300 hover:text-white">
              <span className="flex items-center gap-2">
                <AiOutlineLineChart /> Manage Leads
              </span>
              <FaChevronDown className="transition-transform duration-300 group-open:rotate-180" />
            </summary>
            <div className="ml-6 overflow-hidden max-h-0 group-open:max-h-96 transition-[max-height] duration-500 ease-in-out">
              <div className="mt-2 flex flex-col gap-2 text-sm text-gray-300">
                <Link href="/addleads" className="hover:text-white">
                  Add Leads
                </Link>
                <Link href="/addleadssource" className="hover:text-white">
                  Add Leads Source
                </Link>
                <Link href="/addleadsstatus" className="hover:text-white">
                  Add Leads Status
                </Link>
              </div>
            </div>
          </details>

          {/* Leads Report */}
          <details className="group">
            <summary className="flex items-center justify-between cursor-pointer list-none py-2 text-gray-300 hover:text-white">
              <span className="flex items-center gap-2">
                <AiOutlineLineChart /> Leads Report
              </span>
              <FaChevronDown className="transition-transform duration-300 group-open:rotate-180" />
            </summary>
            <div className="ml-6 overflow-hidden max-h-0 group-open:max-h-96 transition-[max-height] duration-500 ease-in-out">
              <div className="mt-2 flex flex-col gap-2 text-sm text-gray-300">
                <Link href="/totalenquiry" className="hover:text-white">
                  Total Enquiry
                </Link>
                <Link href="/todayenquiry" className="hover:text-white">
                  Today Enquiry
                </Link>
                <Link href="/followup" className="hover:text-white">
                  Follow Up
                </Link>
                <Link href="/confirm" className="hover:text-white">
                  Confirm
                </Link>
                <Link href="/notintrested" className="hover:text-white">
                  Not Interested
                </Link>
              </div>
            </div>
          </details>

          <Link href="/reminder" className="flex items-center gap-2 hover:text-white">
            <FaClipboardList /> Reminder
          </Link>
         

          <Link href="/logout" className="flex items-center gap-2 text-red-500 hover:text-red-400">
            <FaSignOutAlt /> Logout
          </Link>
        </nav>
      </div>
    </>
  );
}
