"use client";

import React, { useState } from "react";
import Sidebar from "../../Components/Sidebar/Sidebar";
import Navbar from "../../Components/Navbar/Navbar";
import {
  FaTachometerAlt,
  FaPlus,
  FaUserPlus,
  FaEdit,
  FaTrash,
  FaEye,
} from "react-icons/fa";

const leadsData = [
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
  const [leads, setLeads] = useState(leadsData);
  const [showModal, setShowModal] = useState(false);
  const [showAssignModal, setShowAssignModal] = useState(false);
  const [showNoteModal, setShowNoteModal] = useState(false);
const [selectedLeadIndex, setSelectedLeadIndex] = useState(null);
const [note, setNote] = useState('');

  const [newLead, setNewLead] = useState({
    name: "",
    email: "",
    mobile: "",
    source: "",
    assigned: "",
    status: "",
  });
  const [assignLead, setAssignLead] = useState({
    leadName: "",
    assignedTo: "",
  });
  const [showEditModal, setShowEditModal] = useState(false);
  const [currentLeadIndex, setCurrentLeadIndex] = useState(null);
  const [editLead, setEditLead] = useState({
    name: "",
    email: "",
    mobile: "",
    source: "",
    assigned: "",
    status: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewLead({ ...newLead, [name]: value });
  };

  const handleAddLead = () => {
    setLeads([...leads, newLead]);
    setNewLead({
      name: "",
      email: "",
      mobile: "",
      source: "",
      assigned: "",
      status: "",
    });
    setShowModal(false);
  };

  const handleAssignChange = (e) => {
    const { name, value } = e.target;
    setAssignLead({ ...assignLead, [name]: value });
  };

  const handleAssignLead = () => {
    const updatedLeads = leads.map((lead) =>
      lead.name === assignLead.leadName
        ? { ...lead, assigned: assignLead.assignedTo }
        : lead
    );
    setLeads(updatedLeads);
    setAssignLead({ leadName: "", assignedTo: "" });
    setShowAssignModal(false);
  };

  const handleEditClick = (index) => {
    setCurrentLeadIndex(index);
    setEditLead(leads[index]);
    setShowEditModal(true);
  };

  const handleEditChange = (e) => {
    const { name, value } = e.target;
    setEditLead({ ...editLead, [name]: value });
  };

  const handleUpdateLead = () => {
    const updatedLeads = [...leads];
    updatedLeads[currentLeadIndex] = editLead;
    setLeads(updatedLeads);
    setShowEditModal(false);
  };

  const handleDeleteLead = (index) => {
    const updatedLeads = leads.filter((_, i) => i !== index);
    setLeads(updatedLeads);
  };

  return (
    <div className="flex flex-col md:flex-row h-screen">
      <div className="w-full md:w-64 bg-gray-800 text-white">
        <Sidebar />
      </div>
      <div className="flex-1 overflow-y-auto bg-gray-100">
        <Navbar />
        <div className="bg-white px-4 sm:px-6 py-4 shadow-sm border-b flex items-center gap-4 flex-wrap">
          <div className="text-teal-600 text-3xl sm:text-4xl">
            <FaTachometerAlt />
          </div>
          <div>
            <h1 className="text-xl sm:text-2xl font-semibold text-gray-800">
              Leads
            </h1>
            <p className="text-sm text-gray-600">
              Very detailed & featured admin.
            </p>
          </div>
        </div>

        <div className="p-4 sm:p-6 bg-gray-100 min-h-screen">
          <div className="bg-white rounded shadow-md p-4 max-w-7xl mx-auto space-y-4">
            <div className="flex flex-wrap gap-3">
              <button
                className="bg-teal-600 text-white px-4 py-2 rounded flex items-center gap-2"
                onClick={() => setShowModal(true)}
              >
                <FaPlus /> Add new Lead
              </button>
              <button
                className="bg-teal-600 text-white px-4 py-2 rounded flex items-center gap-2"
                onClick={() => setShowAssignModal(true)}
              >
                <FaUserPlus /> Assign Lead
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-4">
              <div>
                <label className="block mb-1 text-sm font-medium">
                  Assigned Lead
                </label>
                <select className="w-full p-2 border rounded">
                  <option>Assigned</option>
                </select>
              </div>
              <div>
                <label className="block mb-1 text-sm font-medium">
                  Lead Source
                </label>
                <select className="w-full p-2 border rounded">
                  <option>Facebook</option>
                </select>
              </div>
              <div>
                <label className="block mb-1 text-sm font-medium">
                  Start Date
                </label>
                <input type="date" className="w-full p-2 border rounded" />
              </div>
              <div>
                <label className="block mb-1 text-sm font-medium">
                  End Date
                </label>
                <input type="date" className="w-full p-2 border rounded" />
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-4 mb-4">
              <select className="p-2 border rounded">
                <option>10</option>
                <option>6</option>
                <option>2</option>
              </select>
              <button className="bg-teal-600 text-white px-4 py-2 rounded">
                Export Table Data
              </button>
              <button className="bg-teal-600 text-white px-4 py-2 rounded">
                Import Table Data
              </button>
            </div>

            <div className="overflow-x-auto border rounded">
              <div className="bg-blue-100 px-4 py-2 font-semibold">
                Lead Details
              </div>
              <table className="w-full text-sm text-left min-w-[640px]">
                <thead className="bg-blue-50">
                  <tr>
                    <th className="px-4 py-2 border">
                      <input type="checkbox" />
                    </th>
                    <th className="px-4 py-2 border">Name</th>
                    <th className="px-4 py-2 border">Email</th>
                    <th className="px-4 py-2 border">Mobile</th>
                    <th className="px-4 py-2 border">Source</th>
                    <th className="px-4 py-2 border">Assigned</th>
                    <th className="px-4 py-2 border">Status</th>
                    <th className="px-4 py-2 border">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {leads.map((lead, index) => (
                    <tr
                      key={index}
                      className={index % 2 === 0 ? "bg-white" : "bg-gray-50"}
                    >
                      <td className="px-4 py-2 border">
                        <input type="checkbox" />
                      </td>
                      <td className="px-4 py-2 border">{lead.name}</td>
                      <td className="px-4 py-2 border">{lead.email}</td>
                      <td className="px-4 py-2 border">{lead.mobile}</td>
                      <td className="px-4 py-2 border">{lead.source}</td>
                      <td className="px-4 py-2 border">{lead.assigned}</td>
                      <td className="px-4 py-2 border">{lead.status}</td>
                      <td className="px-4 py-2 border flex gap-2 flex-wrap">
                        <button
                          className="bg-teal-600 text-white p-2 rounded"
                          onClick={() => handleEditClick(index)}
                        >
                          <FaEdit />
                        </button>
                        <button
                          className="bg-red-600 text-white p-2 rounded"
                          onClick={() => handleDeleteLead(index)}
                        >
                          <FaTrash />
                        </button>
                        <button
                          onClick={() => {
                            setSelectedLeadIndex(index);
                            setShowNoteModal(true);
                          }}
                          className="bg-blue-600 text-white p-2 rounded "
                        >
                          <FaEye />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Add New Lead Modal */}
            {showModal && (
              <div className="fixed inset-0   bg-opacity-40 flex items-center justify-center z-50 px-4">
                <div className="bg-white p-6 rounded-xl shadow-xl w-full max-w-lg space-y-4">
                  <h2 className="text-xl font-bold mb-4">Add New Lead</h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {[
                      "name",
                      "email",
                      "mobile",
                      "source",
                      "assigned",
                      "status",
                    ].map((field) => (
                      <input
                        key={field}
                        type="text"
                        name={field}
                        placeholder={
                          field.charAt(0).toUpperCase() + field.slice(1)
                        }
                        className="border p-2 rounded"
                        value={newLead[field]}
                        onChange={handleChange}
                      />
                    ))}
                  </div>
                  <div className="flex justify-end gap-2">
                    <button
                      className="bg-gray-300 px-4 py-2 rounded"
                      onClick={() => setShowModal(false)}
                    >
                      Cancel
                    </button>
                    <button
                      className="bg-teal-600 text-white px-4 py-2 rounded"
                      onClick={handleAddLead}
                    >
                      Add Lead
                    </button>
                  </div>
                </div>
              </div>
            )}

            {/* Edit Lead Modal */}
            {showEditModal && (
              <div className="fixed inset-0   bg-opacity-40 flex items-center justify-center z-50 px-4">
                <div className="bg-white p-6 rounded-xl shadow-xl w-full max-w-lg space-y-4">
                  <h2 className="text-xl font-bold mb-4">Edit Lead</h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {[
                      "name",
                      "email",
                      "mobile",
                      "source",
                      "assigned",
                      "status",
                    ].map((field) => (
                      <input
                        key={field}
                        type="text"
                        name={field}
                        placeholder={
                          field.charAt(0).toUpperCase() + field.slice(1)
                        }
                        className="border p-2 rounded"
                        value={editLead[field]}
                        onChange={handleEditChange}
                      />
                    ))}
                  </div>
                  <div className="flex justify-end gap-2">
                    <button
                      className="bg-gray-300 px-4 py-2 rounded"
                      onClick={() => setShowEditModal(false)}
                    >
                      Cancel
                    </button>
                    <button
                      className="bg-teal-600 text-white px-4 py-2 rounded"
                      onClick={handleUpdateLead}
                    >
                      Update Lead
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

            {/* Assign Lead Modal */}
            {showAssignModal && (
              <div className="fixed inset-0   bg-opacity-40 flex items-center justify-center z-50 px-4">
                <div className="bg-white p-6 rounded-xl shadow-xl w-full max-w-md space-y-4">
                  <h2 className="text-xl font-bold mb-4">Assign Lead</h2>
                  <div className="space-y-4">
                    <select
                      name="leadName"
                      value={assignLead.leadName}
                      onChange={handleAssignChange}
                      className="w-full border p-2 rounded"
                    >
                      <option value="">Select Lead</option>
                      {leads.map((lead, idx) => (
                        <option key={idx} value={lead.name}>
                          {lead.name}
                        </option>
                      ))}
                    </select>
                    <input
                      type="text"
                      name="assignedTo"
                      placeholder="Assign to (e.g. User 4)"
                      className="w-full border p-2 rounded"
                      value={assignLead.assignedTo}
                      onChange={handleAssignChange}
                    />
                  </div>
                  <div className="flex justify-end gap-2">
                    <button
                      className="bg-gray-300 px-4 py-2 rounded"
                      onClick={() => setShowAssignModal(false)}
                    >
                      Cancel
                    </button>
                    <button
                      className="bg-teal-600 text-white px-4 py-2 rounded"
                      onClick={handleAssignLead}
                    >
                      Assign
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
