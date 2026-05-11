import React from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  ShoppingCart,
  FileText,
  Pill,
  Heart,
  Thermometer,
  Package,
  Droplet,
  Leaf,
  Menu,
  Search,
  User,
} from "lucide-react";

export default function ApotekHome() {
  const navigate = useNavigate();
  const categories = [
    {
      id: 1,
      name: "Obat-obatan",
      slug: "obat-obatan",
      icon: Pill,
      color: "bg-blue-100",
      iconColor: "text-blue-600",
    },
    {
      id: 2,
      name: "Vitamin",
      slug: "vitamin",
      icon: Heart,
      color: "bg-pink-100",
      iconColor: "text-pink-600",
    },
    {
      id: 3,
      name: "Ibu & Anak",
      slug: "ibu-anak",
      icon: Package,
      color: "bg-pink-200",
      iconColor: "text-pink-600",
    },
    {
      id: 4,
      name: "Alat Kesehatan",
      slug: "alat-kesehatan",
      icon: Thermometer,
      color: "bg-yellow-100",
      iconColor: "text-yellow-600",
    },
    {
      id: 5,
      name: "Perawatan Luka",
      slug: "perawatan-luka",
      icon: FileText,
      color: "bg-green-100",
      iconColor: "text-green-600",
    },
    {
      id: 6,
      name: "Medical Device",
      slug: "medical-device",
      icon: Package,
      color: "bg-purple-100",
      iconColor: "text-purple-600",
    },
    {
      id: 7,
      name: "Suplemen",
      slug: "suplemen",
      icon: Droplet,
      color: "bg-teal-100",
      iconColor: "text-teal-600",
    },
    {
      id: 8,
      name: "Herbal",
      slug: "herbal",
      icon: Leaf,
      color: "bg-green-200",
      iconColor: "text-green-600",
    },
  ];

  return (
    <div className="w-full">
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
                <h1 className="font-bold text-lg text-gray-800">
                  Apotek Sehat
                </h1>
                <p className="text-xs text-gray-600">Terpercaya & Terlengkap</p>
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
            <a
              href="#"
              className="text-emerald-600 font-semibold pb-2 border-b-2 border-emerald-600"
            >
              Beranda
            </a>
            <Link
              to="/products"
              className="text-gray-600 hover:text-emerald-600 font-medium"
            >
              Produk
            </Link>
            <Link
              to="/resep-dokter"
              className="text-gray-600 hover:text-emerald-600 font-medium"
            >
              Resep Dokter
            </Link>
            <a
              href="#"
              className="text-gray-600 hover:text-emerald-600 font-medium"
            >
              Artikel
            </a>
            <a
              href="#"
              className="text-gray-600 hover:text-emerald-600 font-medium"
            >
              Promo
            </a>
            <a
              href="#"
              className="text-gray-600 hover:text-emerald-600 font-medium"
            >
              Kontak
            </a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-b from-green-50 to-white">
        <div className="max-w-7xl mx-auto px-4 py-16">
          <div className="flex items-center gap-12">
            {/* Left Content */}
            <div className="flex-1">
              <h2 className="text-5xl font-bold text-gray-900 mb-6 leading-tight">
                Solusi Kesehatan Keluarga Anda
              </h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Dapatkan obat resep dokter, vitamin, dan produk kesehatan
                lainnya dengan mudah dan aman. Dilayani oleh apoteker
                profesional berpengalaman.
              </p>

              {/* Buttons */}
              <div className="flex gap-4 mb-12">
                <button
                  onClick={() => navigate("/category/obat-obatan")}
                  className="bg-emerald-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-emerald-700 transition"
                >
                  Belanja Sekarang
                </button>
                <button className="border-2 border-emerald-600 text-emerald-600 px-8 py-3 rounded-lg font-semibold hover:bg-emerald-50 transition">
                  Upload Resep
                </button>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-8">
                <div>
                  <p className="text-4xl font-bold text-emerald-600">24/7</p>
                  <p className="text-gray-600">Layanan</p>
                </div>
                <div>
                  <p className="text-4xl font-bold text-emerald-600">10K+</p>
                  <p className="text-gray-600">Produk</p>
                </div>
                <div>
                  <p className="text-4xl font-bold text-emerald-600">50K+</p>
                  <p className="text-gray-600">Pelanggan</p>
                </div>
              </div>
            </div>

            {/* Right Image */}
            <div className="flex-1">
              <img
                src="/img/apotek.jpg"
                alt="Apotek Sehat"
                className="w-full h-96 object-cover rounded-2xl shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Product Categories Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h3 className="text-4xl font-bold text-center text-gray-900 mb-16">
            Kategori Produk
          </h3>

          <div className="grid grid-cols-8 gap-6">
            {categories.map((category) => {
              const IconComponent = category.icon;
              return (
                <button
                  key={category.id}
                  onClick={() => navigate(`/category/${category.slug}`)}
                  className="flex flex-col items-center gap-4 cursor-pointer hover:transform hover:scale-110 transition-transform bg-none border-none p-0"
                >
                  <div
                    className={`w-24 h-24 rounded-full ${category.color} flex items-center justify-center shadow-md hover:shadow-lg transition-shadow`}
                  >
                    <IconComponent
                      className={`w-10 h-10 ${category.iconColor}`}
                    />
                  </div>
                  <p className="text-center text-gray-700 font-semibold text-sm">
                    {category.name}
                  </p>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-4 gap-8 mb-8">
            <div>
              <h4 className="font-bold mb-4">Tentang Kami</h4>
              <p className="text-gray-400 text-sm">
                Apotek Sehat adalah toko kesehatan online terpercaya dengan
                produk lengkap dan harga terjangkau.
              </p>
            </div>
            <div>
              <h4 className="font-bold mb-4">Layanan</h4>
              <ul className="text-gray-400 text-sm space-y-2">
                <li>
                  <a href="#" className="hover:text-white">
                    Resep Dokter
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Pengiriman
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Testimoni
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Informasi</h4>
              <ul className="text-gray-400 text-sm space-y-2">
                <li>
                  <a href="#" className="hover:text-white">
                    Blog
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Karir
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Kontak
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Hubungi Kami</h4>
              <p className="text-gray-400 text-sm">
                Email: info@apoteksehat.com
              </p>
              <p className="text-gray-400 text-sm">Telp: 0812-3456-7890</p>
            </div>
          </div>
          <div className="border-t border-gray-700 pt-8 text-center text-gray-400 text-sm">
            <p>&copy; 2024 Apotek Sehat. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
