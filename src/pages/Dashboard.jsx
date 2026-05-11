import { FaTablets, FaUsers, FaDollarSign, FaCheckCircle, FaFileAlt, FaExclamationTriangle, FaClock } from "react-icons/fa";
import PageHeader from "../components/PageHeader";

export default function Dashboard() {
    // Data untuk resep terbaru
    const recentPrescriptions = [
        { id: "RX-001", patient: "Ahmad Wijaya", medicines: "Paracetamol 500mg x2", status: "Completed", date: "2025-01-15" },
        { id: "RX-002", patient: "Siti Nurhaliza", medicines: "Amoksisilin 500mg x1", status: "Pending", date: "2025-01-14" },
        { id: "RX-003", patient: "Budi Santoso", medicines: "Ibuprofen 400mg x3", status: "Completed", date: "2025-01-13" },
        { id: "RX-004", patient: "Rina Marlina", medicines: "Vitamin C 500mg x1", status: "Completed", date: "2025-01-12" },
    ];

    // Data obat dengan stok rendah
    const lowStockMedicines = [
        { id: "MED-006", name: "Loratadin 10mg", stock: 5, threshold: 20, status: "Critical" },
        { id: "MED-004", name: "Omeprazole 20mg", stock: 15, threshold: 50, status: "Warning" },
    ];

    const getStatusColor = (status) => {
        switch (status) {
            case "Completed":
                return "bg-gradient-to-r from-green-100 to-emerald-100 text-emerald-700";
            case "Pending":
                return "bg-gradient-to-r from-yellow-100 to-orange-100 text-orange-700";
            case "Critical":
                return "bg-gradient-to-r from-red-100 to-pink-100 text-red-700";
            case "Warning":
                return "bg-gradient-to-r from-orange-100 to-yellow-100 text-orange-700";
            default:
                return "bg-gray-100 text-gray-700";
        }
    };

    return (
        <div id="dashboard-container">
            <PageHeader 
                title="Dashboard" 
                breadcrumb="Pharmacy Statistics" 
                buttonText="+ Filter Data" 
            />
            <div className="p-5">
                <div className="bg-white rounded-lg p-8 shadow-sm mb-6 border border-gray-200">
                    <h2 className="text-4xl font-bold mb-3 text-gray-800">Selamat datang di Apotek Sehat 💊</h2>
                    <p className="text-lg text-gray-600">Kelola stok obat, pasien, dan resep dengan efisien</p>
                </div>
            </div>

            {/* Quick Statistics Grid */}
            <div id="dashboard-grid" className="p-5 grid sm:grid-cols-2 md:grid-cols-4 gap-4">
                <div id="dashboard-medicines" className="bg-white rounded-lg p-6 flex items-center space-x-4 shadow-sm hover:shadow-md transition-all border border-gray-200">
                    <div id="medicines-icon" className="bg-pink-500 rounded-full p-4 text-3xl text-white">
                        <FaTablets />
                    </div>
                    <div id="medicines-info" className="flex flex-col">
                        <span id="medicines-count" className="font-bold text-2xl text-gray-800">6</span>
                        <span id="medicines-text" className="text-gray-600 font-medium">Total Medicines</span>
                    </div>
                </div>

                <div id="dashboard-patients" className="bg-white rounded-lg p-6 flex items-center space-x-4 shadow-sm hover:shadow-md transition-all border border-gray-200">
                    <div id="patients-icon" className="bg-cyan-500 rounded-full p-4 text-3xl text-white">
                        <FaUsers />
                    </div>
                    <div id="patients-info" className="flex flex-col">
                        <span id="patients-count" className="font-bold text-2xl text-gray-800">10</span>
                        <span id="patients-text" className="text-gray-600 font-medium">Total Patients</span>
                    </div>
                </div>

                <div id="dashboard-active" className="bg-white rounded-lg p-6 flex items-center space-x-4 shadow-sm hover:shadow-md transition-all border border-gray-200">
                    <div id="active-icon" className="bg-purple-500 rounded-full p-4 text-3xl text-white">
                        <FaFileAlt />
                    </div>
                    <div id="active-info" className="flex flex-col">
                        <span id="active-count" className="font-bold text-2xl text-gray-800">24</span>
                        <span id="active-text" className="text-gray-600 font-medium">Resep Hari Ini</span>
                    </div>
                </div>

                <div id="dashboard-revenue" className="bg-white rounded-lg p-6 flex items-center space-x-4 shadow-sm hover:shadow-md transition-all border border-gray-200">
                    <div id="revenue-icon" className="bg-orange-500 rounded-full p-4 text-3xl text-white">
                        <FaDollarSign />
                    </div>
                    <div id="revenue-info" className="flex flex-col">
                        <span id="revenue-amount" className="font-bold text-2xl text-gray-800">Rp.2.5M</span>
                        <span id="revenue-text" className="text-gray-600 font-medium">Omset Bulan Ini</span>
                    </div>
                </div>
            </div>

            {/* Recent Prescriptions and Low Stock */}
            <div className="p-5 grid md:grid-cols-2 gap-4">
                {/* Recent Prescriptions */}
                <div className="bg-white rounded-lg shadow-md p-6">
                    <h3 className="text-lg font-bold text-gray-800 mb-4 flex items-center gap-2">
                        <FaFileAlt className="text-cyan-500" />
                        Resep Terbaru
                    </h3>
                    <div className="space-y-3">
                        {recentPrescriptions.map((rx, index) => (
                            <div key={index} className="flex items-center justify-between border-b border-gray-100 pb-3 last:border-0">
                                <div className="flex-1">
                                    <p className="font-medium text-gray-800 text-sm">{rx.patient}</p>
                                    <p className="text-xs text-gray-500">{rx.medicines}</p>
                                </div>
                                <div className="flex flex-col items-end gap-1">
                                    <span className={`px-2 py-1 rounded text-xs font-medium ${getStatusColor(rx.status)}`}>
                                        {rx.status}
                                    </span>
                                    <p className="text-xs text-gray-500">{rx.date}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Low Stock Medicines */}
                <div className="bg-white rounded-lg shadow-md p-6">
                    <h3 className="text-lg font-bold text-gray-800 mb-4 flex items-center gap-2">
                        <FaExclamationTriangle className="text-red-500" />
                        Perhatian - Stok Rendah
                    </h3>
                    <div className="space-y-3">
                        {lowStockMedicines.map((medicine, index) => (
                            <div key={index} className="border-l-4 border-red-500 bg-red-50 p-3 rounded">
                                <div className="flex items-center justify-between mb-2">
                                    <p className="font-medium text-gray-800 text-sm">{medicine.name}</p>
                                    <span className={`px-2 py-1 rounded text-xs font-medium ${getStatusColor(medicine.status)}`}>
                                        {medicine.status}
                                    </span>
                                </div>
                                <div className="w-full bg-gray-200 rounded-full h-2">
                                    <div 
                                        className="bg-gradient-to-r from-orange-500 to-red-500 h-2 rounded-full transition-all"
                                        style={{ width: `${(medicine.stock / medicine.threshold) * 100}%` }}
                                    ></div>
                                </div>
                                <p className="text-xs text-gray-600 mt-1">Stok: {medicine.stock} unit (Min: {medicine.threshold})</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Info Cards */}
            <div className="p-5 grid md:grid-cols-3 gap-4">
                <div className="bg-gradient-to-br from-teal-50 to-cyan-50 rounded-lg p-6 border-l-4 border-teal-500">
                    <div className="flex items-center gap-2 mb-2">
                        <FaClock className="text-teal-600 text-xl" />
                        <h4 className="font-bold text-gray-800">Jam Operasional</h4>
                    </div>
                    <p className="text-gray-600 text-sm">Senin - Jumat: 08:00 - 20:00</p>
                    <p className="text-gray-600 text-sm">Sabtu: 08:00 - 18:00</p>
                    <p className="text-gray-600 text-sm">Minggu: 09:00 - 17:00</p>
                </div>

                <div className="bg-gradient-to-br from-emerald-50 to-green-50 rounded-lg p-6 border-l-4 border-emerald-500">
                    <div className="flex items-center gap-2 mb-2">
                        <FaCheckCircle className="text-emerald-600 text-xl" />
                        <h4 className="font-bold text-gray-800">Stok Aman</h4>
                    </div>
                    <p className="text-gray-600 text-sm">4 dari 6 jenis obat</p>
                    <p className="text-emerald-600 font-semibold text-sm mt-2">Status: Baik ✓</p>
                </div>

                <div className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-lg p-6 border-l-4 border-indigo-500">
                    <div className="flex items-center gap-2 mb-2">
                        <FaUsers className="text-indigo-600 text-xl" />
                        <h4 className="font-bold text-gray-800">Pasien Baru</h4>
                    </div>
                    <p className="text-gray-600 text-sm">Bulan ini: 3 pasien baru</p>
                    <p className="text-indigo-600 font-semibold text-sm mt-2">Total: 10 pasien</p>
                </div>
            </div>
        </div>
    );
}