 
"use client"
import React, { useState } from "react";
import Sidebar from "../../Components/Sidebar/Sidebar";
import Navbar from "../../Components/Navbar/Navbar";
import { FaTachometerAlt, FaEdit, FaTrash, FaEye } from "react-icons/fa";
import Link from "next/link";

const initialLeads = [
  { name: 'Ford', email: 'ford@info.net', mobile: '9170425365', source: 'Phone', assigned: 'User 1', status: 'Follow up' },
  { name: 'LG', email: 'lg@info.net', mobile: '9170425365', source: 'Marketing', assigned: 'User 2', status: 'DND' },
  { name: 'Toyota', email: 'totyota@info.net', mobile: '9170425365', source: 'google', assigned: 'User 3', status: 'Intrested' },
  { name: 'Mukesh Group', email: 'mukesh@info.net', mobile: '9170425365', source: 'Phone', assigned: 'User 1', status: 'Switch Off' },
  { name: 'Nicrosoft', email: 'ms@info.net', mobile: '9170425365', source: 'Facebook', assigned: 'User 1', status: 'Not Important' },
];

export default function Page() {
  const [leads, setLeads] = useState(initialLeads);
 
  const [showNoteModal, setShowNoteModal] = useState(false);
const [noteDate, setNoteDate] = useState('');
const [noteText, setNoteText] = useState('');

 

  const handleDelete = (index) => {
    const confirmDelete = window.confirm(`Are you sure you want to delete lead: ${leads[index].name}?`);
    if (confirmDelete) {
      const updatedLeads = leads.filter((_, i) => i !== index);
      setLeads(updatedLeads);
    }
  };

 
  const handleViewNote = () => {
    const today = new Date();
    const formattedDate = today.toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' });
    setNoteDate(formattedDate);
    setShowNoteModal(true);
  };
  const [assignedLead, setAssignedLead] = useState("");
  const [showSuggestions, setShowSuggestions] = useState(false);

  const leadOptions = ["Assigned", "Unassigned", "In Progress", "Completed"];

  const filteredOptions = leadOptions.filter((option) =>
    option.toLowerCase().includes(assignedLead.toLowerCase())
  );

  const handleSelect = (value) => {
    setAssignedLead(value);
    setShowSuggestions(false);
  };
  

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
Confirm Leads
</h1>
              <p className="text-sm text-gray-600">Leads List</p>
            </div>
          </div>

          <div className="p-4 md:p-6 bg-white rounded shadow-md">
            <h2 className="text-lg font-semibold border-b pb-2 mb-4">Filter By</h2>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-4">
            <div className="relative">
      <label className="block mb-1 text-sm font-medium">Assigned Lead</label>
      <input
        type="text"
        value={assignedLead}
        onChange={(e) => {
          setAssignedLead(e.target.value);
          setShowSuggestions(true);
        }}
        onFocus={() => setShowSuggestions(true)}
        onBlur={() => setTimeout(() => setShowSuggestions(false), 100)}
        className="w-full p-2 border rounded"
        placeholder="Search lead status..."
      />

      {showSuggestions && filteredOptions.length > 0 && (
        <ul className="absolute z-10 bg-white border rounded mt-1 w-full max-h-40 overflow-auto shadow">
          {filteredOptions.map((option) => (
            <li
              key={option}
              onClick={() => handleSelect(option)}
              className="p-2 hover:bg-gray-100 cursor-pointer text-sm"
            >
              {option}
            </li>
          ))}
        </ul>
      )}

      {/* Optional: show selected value */}
      <p className="mt-2 text-sm text-gray-600">Selected: {assignedLead}</p>
    </div>
              <div>
                <label className="block mb-1 text-sm font-medium">Lead Source</label>
                <select className="w-full p-2 border rounded">
                  <option>Facebook</option>
                </select>
              </div>
              <div>
                <label className="block mb-1 text-sm font-medium">Start Date</label>
                <input type="date" className="w-full p-2 border rounded" />
              </div>
              <div>
                <label className="block mb-1 text-sm font-medium">End Date</label>
                <input type="date" className="w-full p-2 border rounded" />
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-4 mb-4">
              <select className="p-2 border rounded">
                <option>10</option>
              </select>
              <button className="bg-teal-600 text-white px-4 py-2 rounded">Export Table Data</button>
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
                      <Link href="/editlead">
                          {" "}
                          <button className="bg-teal-600 text-white p-2 rounded">
                            <FaEdit />
                          </button>{" "}
                        </Link>
                        <button onClick={() => handleDelete(index)} className="text-red-600">
                          <FaTrash />
                        </button>
                        <button onClick={handleViewNote} className="text-blue-600">
  <FaEye />
</button>

                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="flex flex-wrap items-center justify-start space-x-2 mt-4">
              <button className="bg-green-600 text-white px-3 py-1 rounded">Preview</button>
              <button className="border px-3 py-1">1</button>
              <button className="border px-3 py-1">2</button>
              <button className="border px-3 py-1">3</button>
              <button className="border px-3 py-1">4</button>
              <button className="bg-teal-600 text-white px-3 py-1 rounded">Next</button>
            </div>
          </div>
        </div>
      </div>
     
{showNoteModal && (
  <div className="fixed inset-0  bg-opacity-50 flex items-center justify-center z-50">
    <div className="bg-white rounded shadow-md p-6 w-full max-w-md">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold flex items-center space-x-2">
          <span>📈</span>
          <span>Leads Note</span>
        </h2>
        <button onClick={() => setShowNoteModal(false)} className="text-gray-500 text-xl">&times;</button>
      </div>

      <p className="text-sm text-gray-600 mb-2">📅 {noteDate}</p>
      <p className="mb-2">Write some notes about this leads</p>

      <textarea
        placeholder="Write Your Note"
        value={noteText}
        onChange={(e) => setNoteText(e.target.value)}
        className="w-full border p-2 rounded mb-4"
        rows={4}
      />

      <div className="flex justify-end space-x-2">
        <button className="bg-green-600 text-white px-4 py-2 rounded">Save</button>
        <button onClick={() => setShowNoteModal(false)} className="bg-red-600 text-white px-4 py-2 rounded">Close</button>
      </div>
    </div>
  </div>
)}

    </>
  );
}
