import React, { useState, useMemo } from "react";
import { useNavigate, Link } from "react-router-dom";
import { Search, Download, Eye, Upload, User, ShoppingCart } from "lucide-react";

export default function ResepDokter() {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedStatus, setSelectedStatus] = useState("Semua");

  // Sample prescription data
  const prescriptions = [
    {
      id: "RX-001",
      image: "https://images.unsplash.com/photo-1587854692152-cbe660dbde0f?w=200&h=200&fit=crop",
      status: "Selesai",
      patient: "Budi Santoso",
      doctor: "Dr. Susanto, Sp.PD",
      uploadDate: "2026-05-11",
      medicines: ["Amoxicillin 500mg", "Paracetamol 500mg"],
      total: "Rp 125.000",
    },
    {
      id: "RX-002",
      image: "https://images.unsplash.com/photo-1587854692152-cbe660dbde0f?w=200&h=200&fit=crop",
      status: "Diproses",
      patient: "Siti Nurhaliza",
      doctor: "Dr. Ahmad, Sp.A",
      uploadDate: "2026-05-11",
      medicines: ["Vitamin C 1000mg", "Multivitamin"],
      total: "Rp 85.000",
    },
    {
      id: "RX-003",
      image: "https://images.unsplash.com/photo-1587854692152-cbe660dbde0f?w=200&h=200&fit=crop",
      status: "Menunggu",
      patient: "Rina Wijaya",
      doctor: "Dr. Siti, Sp.OG",
      uploadDate: "2026-05-10",
      medicines: ["Ibuprofen 400mg", "Omeprazole 20mg"],
      total: "Rp 95.000",
    },
    {
      id: "RX-004",
      image: "https://images.unsplash.com/photo-1587854692152-cbe660dbde0f?w=200&h=200&fit=crop",
      status: "Selesai",
      patient: "Ahmad Hassan",
      doctor: "Dr. Budi, Sp.JP",
      uploadDate: "2026-05-09",
      medicines: ["Aspirin 500mg", "Atorvastatin 10mg"],
      total: "Rp 120.000",
    },
    {
      id: "RX-005",
      image: "https://images.unsplash.com/photo-1587854692152-cbe660dbde0f?w=200&h=200&fit=crop",
      status: "Ditolak",
      patient: "Mirna Handoko",
      doctor: "Dr. Lisa, Sp.KJ",
      uploadDate: "2026-05-08",
      medicines: ["Sertraline 50mg"],
      total: "Rp 75.000",
    },
  ];

  // Filter by status and search
  const filteredPrescriptions = useMemo(() => {
    return prescriptions.filter((rx) => {
      const matchStatus = selectedStatus === "Semua" || rx.status === selectedStatus;
      const matchSearch =
        searchQuery === "" ||
        rx.id.toLowerCase().includes(searchQuery.toLowerCase()) ||
        rx.patient.toLowerCase().includes(searchQuery.toLowerCase()) ||
        rx.doctor.toLowerCase().includes(searchQuery.toLowerCase());
      return matchStatus && matchSearch;
    });
  }, [searchQuery, selectedStatus]);

  const getStatusColor = (status) => {
    switch (status) {
      case "Selesai":
        return "bg-green-100 text-green-700";
      case "Diproses":
        return "bg-blue-100 text-blue-700";
      case "Menunggu":
        return "bg-yellow-100 text-yellow-700";
      case "Ditolak":
        return "bg-red-100 text-red-700";
      default:
        return "bg-gray-100 text-gray-700";
    }
  };

  const getStatusIcon = (status) => {
    switch (status) {
      case "Selesai":
        return "✓";
      case "Diproses":
        return "⏳";
      case "Menunggu":
        return "⏱";
      case "Ditolak":
        return "✕";
      default:
        return "•";
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Top Green Bar */}
      <div className="bg-emerald-600 text-white px-4 py-2 flex justify-between items-center text-sm">
        <div className="flex items-center gap-2">
          <span>☎</span>
          <span>Hotline: 0812-3456-7890</span>
        </div>
        <span>Buka 24 Jam</span>
      </div>

      {/* Header */}
      <header className="bg-white shadow-md">
        <div className="max-w-7xl mx-auto px-4 py-4">
          {/* Logo and Search Bar */}
          <div className="flex items-center justify-between gap-6 mb-6">
            {/* Logo */}
            <div className="flex items-center gap-2">
              <div className="bg-emerald-600 rounded-lg p-2 text-white font-bold text-lg">
                A+
              </div>
              <div>
                <h1 className="font-bold text-lg text-gray-800">Apotek Sehat</h1>
                <p className="text-xs text-gray-600">
                  Terpercaya & Terlengkap
                </p>
              </div>
            </div>

            {/* Search Bar */}
            <div className="flex-1 max-w-md">
              <div className="relative">
                <Search className="absolute left-3 top-3 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Cari obat, vitamin, alat kesehatan..."
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-600"
                />
              </div>
            </div>

            {/* Right Actions */}
            <div className="flex items-center gap-4">
              <Link
                to="/products"
                className="flex items-center gap-2 text-gray-700 hover:text-emerald-600 font-medium"
              >
                <div className="w-6 h-6 bg-gray-200 rounded flex items-center justify-center">
                  ⊞
                </div>
                Dashboard
              </Link>
              <Link
                to="/login"
                className="flex items-center gap-2 text-gray-700 hover:text-emerald-600 font-medium"
              >
                <User className="w-5 h-5" />
                Masuk
              </Link>
              <button className="relative">
                <ShoppingCart className="w-6 h-6 text-gray-700" />
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  3
                </span>
              </button>
            </div>
          </div>

          {/* Navigation Menu */}
          <nav className="flex gap-8 border-t border-gray-200 pt-4">
            <Link to="/" className="text-gray-600 hover:text-emerald-600 font-medium">
              Beranda
            </Link>
            <Link to="/products" className="text-gray-600 hover:text-emerald-600 font-medium">
              Produk
            </Link>
            <Link to="/resep-dokter" className="text-emerald-600 font-semibold pb-2 border-b-2 border-emerald-600">
              Resep Dokter
            </Link>
            <a href="#" className="text-gray-600 hover:text-emerald-600 font-medium">
              Artikel
            </a>
            <a href="#" className="text-gray-600 hover:text-emerald-600 font-medium">
              Promo
            </a>
            <a href="#" className="text-gray-600 hover:text-emerald-600 font-medium">
              Kontak
            </a>
          </nav>
        </div>
      </header>

      {/* Page Header Section */}
      <div className="bg-white border-b border-gray-200 px-8 py-8">
        <div className="max-w-7xl mx-auto flex justify-between items-start">
          <div>
            <h1 className="text-4xl font-bold text-gray-900 mb-2">Resep Dokter</h1>
            <p className="text-gray-600">Kelola resep dokter dari pelanggan</p>
          </div>
          <button
            onClick={() => navigate("/upload-resep")}
            className="flex items-center gap-2 bg-emerald-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-emerald-700 transition"
          >
            <Upload className="w-5 h-5" />
            Upload Resep
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-8 py-8">
        {/* Instructions Card */}
        <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-6 mb-8">
          <div className="flex gap-4">
            <div className="bg-emerald-600 text-white w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0">
              <span className="text-xl">📋</span>
            </div>
            <div>
              <h3 className="font-bold text-gray-900 mb-3">Cara Upload Resep Dokter</h3>
              <ol className="space-y-2 text-gray-700 text-sm">
                <li>1. Pastikan resep dokter terlihat jelas dan tidak buram</li>
                <li>2. Format yang diterima: JPG, PNG, atau PDF</li>
                <li>3. Resep akan diverifikasi oleh apoteker dalam 1-2 jam</li>
                <li>4. Anda akan mendapat notifikasi jika resep sudah diproses</li>
              </ol>
            </div>
          </div>
        </div>

        {/* Search and Filter Section */}
        <div className="bg-white rounded-xl shadow p-6 mb-8">
          <div className="mb-4">
            <div className="relative">
              <Search className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Cari berdasarkan ID, nama pasien, atau dokter..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-600"
              />
            </div>
          </div>

          {/* Filter Tabs */}
          <div className="flex gap-3 flex-wrap">
            {["Semua", "Menunggu", "Diproses", "Selesai", "Ditolak"].map((status) => (
              <button
                key={status}
                onClick={() => setSelectedStatus(status)}
                className={`px-6 py-2 rounded-lg font-medium transition ${
                  selectedStatus === status
                    ? "bg-emerald-600 text-white"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                {status}
              </button>
            ))}
          </div>
        </div>

        {/* Prescription List */}
        <div className="space-y-4">
          {filteredPrescriptions.length > 0 ? (
            filteredPrescriptions.map((rx) => (
              <div key={rx.id} className="bg-white rounded-xl shadow p-6 hover:shadow-lg transition">
                <div className="flex gap-6">
                  {/* Image */}
                  <img
                    src={rx.image}
                    alt={rx.id}
                    className="w-32 h-32 object-cover rounded-lg flex-shrink-0"
                  />

                  {/* Content */}
                  <div className="flex-1">
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <h3 className="text-lg font-bold text-gray-900 mb-1">
                          {rx.id}
                        </h3>
                        <span
                          className={`inline-flex items-center gap-1 px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(
                            rx.status
                          )}`}
                        >
                          <span>{getStatusIcon(rx.status)}</span>
                          {rx.status}
                        </span>
                      </div>
                    </div>

                    <div className="space-y-2 text-sm mb-4">
                      <p className="text-gray-700">
                        <span className="font-semibold">Pasien:</span> {rx.patient}
                      </p>
                      <p className="text-gray-700">
                        <span className="font-semibold">Dokter:</span> {rx.doctor}
                      </p>
                      <p className="text-gray-600">
                        <span className="font-semibold">Tanggal Upload:</span> {rx.uploadDate}
                      </p>
                    </div>

                    <div className="mb-4">
                      <p className="font-semibold text-gray-900 mb-2">Obat yang Diresepkan:</p>
                      <div className="flex gap-2 flex-wrap">
                        {rx.medicines.map((medicine, idx) => (
                          <span
                            key={idx}
                            className="bg-emerald-100 text-emerald-700 px-3 py-1 rounded-full text-sm"
                          >
                            {medicine}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="flex justify-between items-center">
                      <p className="text-lg font-bold text-emerald-600">{rx.total}</p>
                      <div className="flex gap-3">
                        <button
                          onClick={() => navigate(`/resep-dokter/${rx.id}`)}
                          className="flex items-center gap-2 px-4 py-2 border-2 border-gray-300 text-gray-700 rounded-lg font-medium hover:bg-gray-50 transition"
                        >
                          <Eye className="w-4 h-4" />
                          Lihat Detail
                        </button>
                        <button className="flex items-center gap-2 px-4 py-2 bg-emerald-600 text-white rounded-lg font-medium hover:bg-emerald-700 transition">
                          <Download className="w-4 h-4" />
                          Download
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="bg-white rounded-xl shadow p-12 text-center">
              <p className="text-gray-500 text-lg">Tidak ada resep ditemukan</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
