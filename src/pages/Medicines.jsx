import { useState } from "react";
import PageHeader from "../components/PageHeader";

export default function Medicines() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Dummy medicines data
  const medicinesData = [
    { id: "MED-001", name: "Paracetamol 500mg", category: "Analgesik", price: "Rp.5.000", stock: "150", status: "Active" },
    { id: "MED-002", name: "Amoksisilin 500mg", category: "Antibiotik", price: "Rp.12.000", stock: "85", status: "Active" },
    { id: "MED-003", name: "Ibuprofen 400mg", category: "Anti-inflamasi", price: "Rp.8.000", stock: "120", status: "Active" },
    { id: "MED-004", name: "Omeprazole 20mg", category: "Antasida", price: "Rp.15.000", stock: "95", status: "Active" },
    { id: "MED-005", name: "Vitamin C 500mg", category: "Vitamin", price: "Rp.7.500", stock: "200", status: "Active" },
    { id: "MED-006", name: "Loratadin 10mg", category: "Antihistamin", price: "Rp.10.000", stock: "110", status: "Inactive" },
  ];

  return (
    <div className="p-4">
      <PageHeader title="Medicines" breadcrumb="Medicine List">
        <button 
          onClick={() => setIsModalOpen(true)}
          className="bg-gradient-to-r from-pink-500 to-rose-500 text-white px-4 py-2 rounded-lg font-bold hover:from-pink-600 hover:to-rose-600 transition-all shadow-md"
        >
          + Add New Medicine
        </button>
      </PageHeader>

      {/* MODAL POP UP */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
          <div className="bg-white p-8 rounded-2xl shadow-2xl w-full max-w-md">
            <h2 className="text-2xl font-bold mb-6 bg-gradient-to-r from-pink-500 to-rose-500 bg-clip-text text-transparent">Add New Medicine</h2>
            <form className="space-y-4">
              <div>
                <label className="block text-sm font-semibold mb-1">Medicine Name</label>
                <input type="text" className="w-full border-2 border-pink-200 rounded-xl p-3 focus:border-pink-500 focus:ring-2 focus:ring-pink-200 outline-none transition-all" placeholder="Medicine name" />
              </div>
              <div>
                <label className="block text-sm font-semibold mb-1">Category</label>
                <input type="text" className="w-full border-2 border-pink-200 rounded-xl p-3 focus:border-pink-500 focus:ring-2 focus:ring-pink-200 outline-none transition-all" placeholder="Category" />
              </div>
              <div>
                <label className="block text-sm font-semibold mb-1">Price</label>
                <input type="number" className="w-full border-2 border-pink-200 rounded-xl p-3 focus:border-pink-500 focus:ring-2 focus:ring-pink-200 outline-none transition-all" placeholder="Rp.0" />
              </div>
              <div>
                <label className="block text-sm font-semibold mb-1">Stock</label>
                <input type="number" className="w-full border-2 border-pink-200 rounded-xl p-3 focus:border-pink-500 focus:ring-2 focus:ring-pink-200 outline-none transition-all" placeholder="0" />
              </div>
              <div className="flex justify-end space-x-3 mt-8">
                <button type="button" onClick={() => setIsModalOpen(false)} className="px-4 py-2 text-gray-500 font-medium hover:bg-gray-100 rounded-lg transition-all">Cancel</button>
                <button type="submit" className="bg-gradient-to-r from-pink-500 to-rose-500 text-white px-6 py-2 rounded-xl font-bold hover:from-pink-600 hover:to-rose-600 transition-all shadow-md">Add Medicine</button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Medicines Table */}
      <div className="mt-6 bg-white rounded-xl shadow-sm border overflow-hidden">
        <table className="w-full text-left">
          <thead>
            <tr className="border-b bg-gray-50">
              <th className="px-6 py-3 text-sm font-semibold text-gray-700">Medicine ID</th>
              <th className="px-6 py-3 text-sm font-semibold text-gray-700">Medicine Name</th>
              <th className="px-6 py-3 text-sm font-semibold text-gray-700">Category</th>
              <th className="px-6 py-3 text-sm font-semibold text-gray-700">Price</th>
              <th className="px-6 py-3 text-sm font-semibold text-gray-700">Stock</th>
              <th className="px-6 py-3 text-sm font-semibold text-gray-700">Status</th>
              <th className="px-6 py-3 text-sm font-semibold text-gray-700">Action</th>
            </tr>
          </thead>
          <tbody>
            {medicinesData.map((medicine) => (  
              <tr key={medicine.id} className="border-b hover:bg-gray-50">
                <td className="px-6 py-4 text-sm text-blue-500 font-medium">{medicine.id}</td>
                <td className="px-6 py-4 text-sm text-gray-800">{medicine.name}</td>
                <td className="px-6 py-4 text-sm text-gray-600">{medicine.category}</td>
                <td className="px-6 py-4 text-sm text-gray-600">{medicine.price}</td>
                <td className="px-6 py-4 text-sm text-gray-600">{medicine.stock}</td>
                <td className="px-6 py-4 text-sm">
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold ${medicine.status === "Active" ? "bg-gradient-to-r from-green-100 to-emerald-100 text-emerald-700" : "bg-gradient-to-r from-red-100 to-pink-100 text-red-600"}`}>
                    {medicine.status}
                  </span>
                </td>
                <td className="px-6 py-4 text-sm">
                  <button className="text-gray-500 hover:text-gray-700">👁️</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
