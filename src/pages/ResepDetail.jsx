import React from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { ArrowLeft, Download, FileText, User, ShoppingCart, Search } from "lucide-react";

export default function ResepDetail() {
  const { id } = useParams();
  const navigate = useNavigate();

  // Sample prescription data - same as in ResepDokter
  const prescriptions = [
    {
      id: "RX-001",
      image: "https://images.unsplash.com/photo-1587854692152-cbe660dbde0f?w=400&h=400&fit=crop",
      status: "Selesai",
      patient: "Budi Santoso",
      doctor: "Dr. Susanto, Sp.PD",
      uploadDate: "2026-05-11",
      medicines: ["Amoxicillin 500mg", "Paracetamol 500mg"],
      total: "Rp 125.000",
      description: "Resep untuk penyakit jantung kronis",
      notes: "Ambil 2x sehari setelah makan",
    },
    {
      id: "RX-002",
      image: "https://images.unsplash.com/photo-1587854692152-cbe660dbde0f?w=400&h=400&fit=crop",
      status: "Diproses",
      patient: "Siti Nurhaliza",
      doctor: "Dr. Ahmad, Sp.A",
      uploadDate: "2026-05-11",
      medicines: ["Vitamin C 1000mg", "Multivitamin"],
      total: "Rp 85.000",
      description: "Resep untuk menjaga kesehatan",
      notes: "Ambil 1x sehari di pagi hari",
    },
    {
      id: "RX-003",
      image: "https://images.unsplash.com/photo-1587854692152-cbe660dbde0f?w=400&h=400&fit=crop",
      status: "Menunggu",
      patient: "Rina Wijaya",
      doctor: "Dr. Siti, Sp.OG",
      uploadDate: "2026-05-10",
      medicines: ["Ibuprofen 400mg", "Omeprazole 20mg"],
      total: "Rp 95.000",
      description: "Resep untuk gangguan lambung",
      notes: "Ambil 3x sehari sebelum makan",
    },
    {
      id: "RX-004",
      image: "https://images.unsplash.com/photo-1587854692152-cbe660dbde0f?w=400&h=400&fit=crop",
      status: "Selesai",
      patient: "Ahmad Hassan",
      doctor: "Dr. Budi, Sp.JP",
      uploadDate: "2026-05-09",
      medicines: ["Aspirin 500mg", "Atorvastatin 10mg"],
      total: "Rp 120.000",
      description: "Resep untuk tekanan darah tinggi",
      notes: "Ambil setiap malam sebelum tidur",
    },
    {
      id: "RX-005",
      image: "https://images.unsplash.com/photo-1587854692152-cbe660dbde0f?w=400&h=400&fit=crop",
      status: "Ditolak",
      patient: "Mirna Handoko",
      doctor: "Dr. Lisa, Sp.KJ",
      uploadDate: "2026-05-08",
      medicines: ["Sertraline 50mg"],
      total: "Rp 75.000",
      description: "Resep untuk depresi dan kecemasan",
      notes: "Ambil 1x sehari",
    },
  ];

  const prescription = prescriptions.find((rx) => rx.id === id);

  if (!prescription) {
    return (
      <div className="w-full bg-white min-h-screen">
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

        {/* Not Found */}
        <div className="max-w-7xl mx-auto px-8 py-12">
          <div className="bg-red-50 border border-red-200 rounded-lg p-8 text-center">
            <h1 className="text-2xl font-bold text-red-700 mb-2">Resep Tidak Ditemukan</h1>
            <p className="text-red-600 mb-6">Resep dengan ID {id} tidak tersedia</p>
            <button
              onClick={() => navigate("/resep-dokter")}
              className="bg-emerald-600 text-white px-6 py-2 rounded-lg hover:bg-emerald-700 transition"
            >
              Kembali
            </button>
          </div>
        </div>
      </div>
    );
  }

  const getStatusColor = (status) => {
    switch (status) {
      case "Selesai":
        return "bg-green-100 text-green-700 border-green-300";
      case "Diproses":
        return "bg-blue-100 text-blue-700 border-blue-300";
      case "Menunggu":
        return "bg-yellow-100 text-yellow-700 border-yellow-300";
      case "Ditolak":
        return "bg-red-100 text-red-700 border-red-300";
      default:
        return "bg-gray-100 text-gray-700 border-gray-300";
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
    <div className="w-full bg-gray-50 min-h-screen">
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

      {/* Breadcrumb and Title */}
      <div className="bg-white shadow-sm px-8 py-6 mb-8">
        <div className="max-w-7xl mx-auto">
          <button
            onClick={() => navigate("/resep-dokter")}
            className="flex items-center gap-2 text-emerald-600 hover:text-emerald-700 font-semibold mb-4"
          >
            <ArrowLeft className="w-5 h-5" />
            Kembali ke Daftar Resep
          </button>
          <h1 className="text-3xl font-bold text-gray-900">Detail Resep: {prescription.id}</h1>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-8 pb-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Image and Basic Info */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow p-6">
              <img
                src={prescription.image}
                alt={prescription.id}
                className="w-full h-96 object-cover rounded-lg mb-6"
              />

              <div className="space-y-4">
                <div>
                  <p className="text-sm text-gray-600 font-semibold mb-1">ID Resep</p>
                  <p className="text-2xl font-bold text-gray-900">{prescription.id}</p>
                </div>

                <div>
                  <p className="text-sm text-gray-600 font-semibold mb-1">Status</p>
                  <span
                    className={`inline-flex items-center gap-1 px-4 py-2 rounded-lg border ${getStatusColor(
                      prescription.status
                    )}`}
                  >
                    <span className="text-lg">{getStatusIcon(prescription.status)}</span>
                    {prescription.status}
                  </span>
                </div>

                <div className="border-t pt-4">
                  <p className="text-sm text-gray-600 font-semibold mb-3">Total</p>
                  <p className="text-3xl font-bold text-emerald-600">{prescription.total}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Detailed Information */}
          <div className="lg:col-span-2 space-y-6">
            {/* Patient & Doctor Info */}
            <div className="bg-white rounded-lg shadow p-6">
              <h2 className="text-xl font-bold text-gray-900 mb-4">Informasi Pasien & Dokter</h2>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-sm text-gray-600 font-semibold mb-1">Nama Pasien</p>
                  <p className="text-lg text-gray-900 font-semibold">{prescription.patient}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600 font-semibold mb-1">Dokter</p>
                  <p className="text-lg text-gray-900 font-semibold">{prescription.doctor}</p>
                </div>
                <div className="col-span-2">
                  <p className="text-sm text-gray-600 font-semibold mb-1">Tanggal Upload</p>
                  <p className="text-gray-900">{prescription.uploadDate}</p>
                </div>
              </div>
            </div>

            {/* Medicines */}
            <div className="bg-white rounded-lg shadow p-6">
              <h2 className="text-xl font-bold text-gray-900 mb-4">Obat yang Diresepkan</h2>
              <div className="space-y-3">
                {prescription.medicines.map((medicine, idx) => (
                  <div
                    key={idx}
                    className="flex items-center gap-3 p-4 bg-emerald-50 border border-emerald-200 rounded-lg"
                  >
                    <div className="w-8 h-8 bg-emerald-600 text-white rounded-full flex items-center justify-center font-semibold text-sm">
                      {idx + 1}
                    </div>
                    <p className="text-gray-900 font-semibold">{medicine}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Description & Notes */}
            <div className="bg-white rounded-lg shadow p-6">
              <h2 className="text-xl font-bold text-gray-900 mb-4">Keterangan</h2>
              <div className="space-y-4">
                <div>
                  <p className="text-sm text-gray-600 font-semibold mb-2">Deskripsi</p>
                  <p className="text-gray-700">{prescription.description}</p>
                </div>
                <div className="border-t pt-4">
                  <p className="text-sm text-gray-600 font-semibold mb-2">Catatan Penggunaan</p>
                  <p className="text-gray-700 bg-yellow-50 p-3 rounded border border-yellow-200">
                    {prescription.notes}
                  </p>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-4">
              <button className="flex-1 flex items-center justify-center gap-2 px-6 py-3 bg-emerald-600 text-white rounded-lg font-semibold hover:bg-emerald-700 transition">
                <Download className="w-5 h-5" />
                Download Resep
              </button>
              <button className="flex-1 flex items-center justify-center gap-2 px-6 py-3 border-2 border-gray-300 text-gray-700 rounded-lg font-semibold hover:bg-gray-50 transition">
                <FileText className="w-5 h-5" />
                Cetak
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
