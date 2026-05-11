import { useState } from "react";
import PageHeader from "../components/PageHeader";
import patientData from "../data/patients.json";

export default function Patients() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="p-4">
      <PageHeader title="Patients" breadcrumb="Patient List">
        <button 
          onClick={() => setIsModalOpen(true)}
          className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-4 py-2 rounded-lg font-bold hover:from-cyan-600 hover:to-blue-600 transition-all shadow-md"
        >
          + Add New Patient
        </button>
      </PageHeader>

      {/* MODAL POP UP */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
          <div className="bg-white p-8 rounded-2xl shadow-2xl w-full max-w-md">
            <h2 className="text-2xl font-bold mb-6 bg-gradient-to-r from-cyan-500 to-blue-500 bg-clip-text text-transparent">Add New Patient</h2>
            <form className="space-y-4">
              <div>
                <label className="block text-sm font-semibold mb-1">Full Name</label>
                <input type="text" className="w-full border-2 border-cyan-200 rounded-xl p-3 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-200 outline-none transition-all" placeholder="Enter patient name" />
              </div>
              <div>
                <label className="block text-sm font-semibold mb-1">Email Address</label>
                <input type="email" className="w-full border-2 border-cyan-200 rounded-xl p-3 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-200 outline-none transition-all" placeholder="email@example.com" />
              </div>
              <div>
                <label className="block text-sm font-semibold mb-1">Phone Number</label>
                <input type="tel" className="w-full border-2 border-cyan-200 rounded-xl p-3 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-200 outline-none transition-all" placeholder="0812-xxxx-xxxx" />
              </div>
              <div className="flex justify-end space-x-3 mt-8">
                <button type="button" onClick={() => setIsModalOpen(false)} className="px-4 py-2 text-gray-500 font-medium hover:bg-gray-100 rounded-lg transition-all">Cancel</button>
                <button type="submit" className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-6 py-2 rounded-xl font-bold hover:from-cyan-600 hover:to-blue-600 transition-all shadow-md">Save Patient</button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Patients Table */}
      <div className="mt-6 bg-white rounded-xl shadow-sm border overflow-hidden">
        <table className="w-full text-left">
          <thead className="bg-gray-50 uppercase text-[10px] text-gray-400 font-bold">
            <tr>
              <th className="p-4">ID</th>
              <th className="p-4">Name</th>
              <th className="p-4">Email</th>
              <th className="p-4">Phone</th>
              <th className="p-4">Status</th>
            </tr>
          </thead>
          <tbody>
            {patientData.map((patient) => (
              <tr key={patient.id} className="border-t border-gray-50 hover:bg-gray-50">
                <td className="p-4 font-bold text-blue-500">{patient.id}</td>
                <td className="p-4 text-gray-800">{patient.name}</td>
                <td className="p-4 text-gray-600">{patient.email}</td>
                <td className="p-4 text-gray-600">{patient.phone}</td>
                <td className="p-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold ${patient.status === "Aktif" ? "bg-gradient-to-r from-green-100 to-teal-100 text-teal-700" : "bg-gradient-to-r from-gray-100 to-slate-100 text-gray-600"}`}>
                    {patient.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
