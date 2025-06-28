"use client";
import React, { useState } from "react";
import Sidebar from "../../Components/Sidebar/Sidebar";
import Navbar from "../../Components/Navbar/Navbar";
import { FaTachometerAlt, FaEdit, FaTrash, FaEye } from "react-icons/fa";

const initialLeads = [
  {
    name: "Ford",
    email: "ford@info.net",
    mobile: "9170425365",
    source: "Phone",
    assigned: "User 1",
    status: "Follow up",
  },
  {
    name: "LG",
    email: "lg@info.net",
    mobile: "9170425365",
    source: "Marketing",
    assigned: "User 2",
    status: "DND",
  },
  {
    name: "Toyota",
    email: "totyota@info.net",
    mobile: "9170425365",
    source: "google",
    assigned: "User 3",
    status: "Intrested",
  },
  {
    name: "Mukesh Group",
    email: "mukesh@info.net",
    mobile: "9170425365",
    source: "Phone",
    assigned: "User 1",
    status: "Switch Off",
  },
  {
    name: "Nicrosoft",
    email: "ms@info.net",
    mobile: "9170425365",
    source: "Facebook",
    assigned: "User 1",
    status: "Not Important",
  },
];

export default function Page() {
  const [leads, setLeads] = useState(initialLeads);
  const [showModal, setShowModal] = useState(false);
  const [editingLead, setEditingLead] = useState(null);

  const handleDelete = (index) => {
    const confirmDelete = window.confirm(
      `Are you sure you want to delete lead: ${leads[index].name}?`
    );
    if (confirmDelete) {
      const updatedLeads = leads.filter((_, i) => i !== index);
      setLeads(updatedLeads);
    }
  };

  const handleEdit = (index) => {
    setEditingLead(leads[index]);
    setShowModal(true);
  };
  const [showNoteModal, setShowNoteModal] = useState(false);
  const [selectedLeadIndex, setSelectedLeadIndex] = useState(null);
  const [note, setNote] = useState("");
 


  return (
    <>
      <div className="flex flex-col md:flex-row h-screen">
        <div className="w-full md:w-64 bg-gray-800 text-white">
          <Sidebar />
        </div>

        <div className="flex-1 overflow-y-auto bg-gray-100">
          <Navbar />
          <div className="bg-white px-4 md:px-6 py-4 shadow-sm border-b flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <div className="text-teal-600 text-4xl">
              <FaTachometerAlt />
            </div>
            <div>
              <h1 className="text-2xl font-semibold text-gray-800">
                Today Enquiry
              </h1>
              <p className="text-sm text-gray-600">Today Enquiry List</p>
            </div>
          </div>

          <div className="p-4 md:p-6 bg-white rounded shadow-md">
            <h2 className="text-lg font-semibold border-b pb-2 mb-4">
              Filter By
            </h2>

            <div className="flex flex-wrap items-center gap-4 mb-4">
              <select className="p-2 border rounded">
                <option>10</option>
              </select>
              <button className="bg-teal-600 text-white px-4 py-2 rounded">
                Export Table Data
              </button>
            </div>

            <h2 className="text-lg font-semibold mt-4 mb-2">Lead Details</h2>

            <div className="overflow-x-auto">
              <table className="w-full border border-gray-300 text-sm">
                <thead className="bg-blue-100">
                  <tr>
                    <th className="border p-2"></th>
                    <th className="border p-2">Name</th>
                    <th className="border p-2">Email</th>
                    <th className="border p-2">Mobile</th>
                    <th className="border p-2">Source</th>
                    <th className="border p-2">Assigned</th>
                    <th className="border p-2">Status</th>
                    <th className="border p-2">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {leads.map((lead, index) => (
                    <tr key={index} className="text-center">
                      <td className="border p-2">
                        <input type="checkbox" />
                      </td>
                      <td className="border p-2">{lead.name}</td>
                      <td className="border p-2">{lead.email}</td>
                      <td className="border p-2">{lead.mobile}</td>
                      <td className="border p-2">{lead.source}</td>
                      <td className="border p-2">{lead.assigned}</td>
                      <td className="border p-2">{lead.status}</td>
                      <td className="border p-2 space-x-2">
                        <button
                          onClick={() => handleEdit(index)}
                          className="text-green-600"
                        >
                          <FaEdit />
                        </button>
                        <button
                          onClick={() => handleDelete(index)}
                          className="text-red-600"
                        >
                          <FaTrash />
                        </button>
                        <button
                          onClick={() => {
                            setSelectedLeadIndex(index);
                            setShowNoteModal(true);
                          }}
                          className="text-blue-600"
                        >
                          <FaEye />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="flex flex-wrap items-center justify-start space-x-2 mt-4">
              <button className="bg-green-600 text-white px-3 py-1 rounded">
                Preview
              </button>
              <button className="border px-3 py-1">1</button>
              <button className="border px-3 py-1">2</button>
              <button className="border px-3 py-1">3</button>
              <button className="border px-3 py-1">4</button>
              <button className="bg-teal-600 text-white px-3 py-1 rounded">
                Next
              </button>
            </div>
          </div>
        </div>
      </div>
      {showNoteModal && selectedLeadIndex !== null && (
        <div className="fixed inset-0   bg-opacity-40 flex items-center justify-center z-50">
          <div
            className="bg-white rounded-xl shadow-lg p-6 w-full max-w-md transform transition duration-300 ease-out translate-y-0 opacity-100"
            style={{
              transform: "translateY(0px)",
              animation: "slideDown 0.4s ease-out forwards",
            }}
          >
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-semibold text-blue-900 flex items-center gap-2">
                📈 Leads Note
              </h2>
              <button
                onClick={() => setShowNoteModal(false)}
                className="text-gray-600 text-xl"
              >
                &times;
              </button>
            </div>

            <div className="text-sm text-gray-700 mb-2">
              📅 {new Date().toLocaleDateString("en-GB")}
            </div>

            <p className="text-gray-600 mb-2">
              Write some notes about this lead
            </p>

            <textarea
              rows={4}
              placeholder="Write Your Note"
              className="w-full border border-gray-300 rounded p-2 mb-4 resize-none"
              value={note}
              onChange={(e) => setNote(e.target.value)}
            />

            <div className="flex justify-end gap-2">
              <button
                onClick={() => {
                  console.log("Saved note:", note);
                  setShowNoteModal(false);
                  setNote("");
                }}
                className="bg-teal-600 text-white px-4 py-2 rounded hover:bg-teal-700"
              >
                Save
              </button>
              <button
                onClick={() => setShowNoteModal(false)}
                className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700"
              >
                Close
              </button>
            </div>
          </div>

          {/* Inline keyframes using style tag for animation */}
          <style>
            {`
        @keyframes slideDown {
          from {
            transform: translateY(-40px);
            opacity: 0;
          }
          to {
            transform: translateY(0px);
            opacity: 1;
          }
        }
      `}
          </style>
        </div>
      )}

      {showModal && editingLead && (
        <div className="fixed inset-0   bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded shadow-md p-6 w-full max-w-xl">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-semibold">Update Leads</h2>
              <button
                onClick={() => setShowModal(false)}
                className="text-gray-500 text-xl"
              >
                &times;
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium mb-1">Name</label>
                <input
                  type="text"
                  defaultValue={editingLead.name}
                  className="w-full border p-2 rounded"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">
                  Email id
                </label>
                <input
                  type="email"
                  defaultValue={editingLead.email}
                  className="w-full border p-2 rounded"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">
                  Phone No
                </label>
                <input
                  type="text"
                  defaultValue={editingLead.mobile}
                  className="w-full border p-2 rounded"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">State</label>
                <input type="text" className="w-full border p-2 rounded" />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">
                  Lead Source
                </label>
                <select
                  className="w-full border p-2 rounded"
                  defaultValue={editingLead.source}
                >
                  <option>Phone Call</option>
                  <option>Marketing</option>
                  <option>Google</option>
                  <option>Facebook</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">
                  Assign Lead
                </label>
                <select
                  className="w-full border p-2 rounded"
                  defaultValue={editingLead.assigned}
                >
                  <option>User 1</option>
                  <option>User 2</option>
                  <option>User 3</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">
                  Lead Status
                </label>
                <select
                  className="w-full border p-2 rounded"
                  defaultValue={editingLead.status}
                >
                  <option>Follow up</option>
                  <option>DND</option>
                  <option>Interested</option>
                  <option>Switch Off</option>
                  <option>Not Important</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">
                  Tour Details
                </label>
                <textarea className="w-full border p-2 rounded"></textarea>
              </div>
            </div>

            <div className="flex justify-end mt-4 space-x-2">
              <button
                onClick={() => setShowModal(false)}
                className="bg-red-600 text-white px-4 py-2 rounded"
              >
                Close
              </button>
              <button className="bg-green-600 text-white px-4 py-2 rounded">
                Save
              </button>
            </div>
          </div>
        </div>
      )}
      {showNoteModal && selectedLeadIndex !== null && (
        <div className="fixed inset-0   bg-opacity-40 flex items-center justify-center z-50">
          <div
            className="bg-white rounded-xl shadow-lg p-6 w-full max-w-md transform transition duration-300 ease-out translate-y-0 opacity-100"
            style={{
              transform: "translateY(0px)",
              animation: "slideDown 0.4s ease-out forwards",
            }}
          >
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-semibold text-blue-900 flex items-center gap-2">
                📈 Leads Note
              </h2>
              <button
                onClick={() => setShowNoteModal(false)}
                className="text-gray-600 text-xl"
              >
                &times;
              </button>
            </div>

            <div className="text-sm text-gray-700 mb-2">
              📅 {new Date().toLocaleDateString("en-GB")}
            </div>

            <p className="text-gray-600 mb-2">
              Write some notes about this lead
            </p>

            <textarea
              rows={4}
              placeholder="Write Your Note"
              className="w-full border border-gray-300 rounded p-2 mb-4 resize-none"
              value={note}
              onChange={(e) => setNote(e.target.value)}
            />

            <div className="flex justify-end gap-2">
              <button
                onClick={() => {
                  console.log("Saved note:", note);
                  setShowNoteModal(false);
                  setNote("");
                }}
                className="bg-teal-600 text-white px-4 py-2 rounded hover:bg-teal-700"
              >
                Save
              </button>
              <button
                onClick={() => setShowNoteModal(false)}
                className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700"
              >
                Close
              </button>
            </div>
          </div>

          {/* Inline keyframes using style tag for animation */}
          <style>
            {`
        @keyframes slideDown {
          from {
            transform: translateY(-40px);
            opacity: 0;
          }
          to {
            transform: translateY(0px);
            opacity: 1;
          }
        }
      `}
          </style>
        </div>
      )}
    </>
  );
}
