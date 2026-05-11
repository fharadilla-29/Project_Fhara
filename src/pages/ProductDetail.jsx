import React from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { ArrowLeft, ShoppingCart, Heart, Share2, Search, User } from "lucide-react";

export default function ProductDetail() {
  const { id } = useParams();
  const navigate = useNavigate();

  // Sample pharmacy products data
  const productsData = [
    {
      id: 1,
      name: "Paracetamol 500mg",
      category: "Obat Bebas",
      sku: "OBT-001",
      image: "https://images.unsplash.com/photo-1587854692152-cbe660dbde0b?w=600&h=600&fit=crop",
      price: 15000,
      stock: 245,
      sold: 1245,
      rating: 4.8,
      description: "Paracetamol 500mg adalah obat penurun demam dan penghilang rasa sakit yang umum digunakan untuk mengatasi berbagai kondisi kesehatan.",
      benefits: [
        "Menurunkan demam",
        "Menghilangkan sakit kepala",
        "Mengurangi nyeri otot",
        "Aman untuk segala usia"
      ],
      dosage: "1-2 tablet setiap 4-6 jam, maksimal 8 tablet per hari",
      sideEffects: "Mual, reaksi alergi pada beberapa individu",
      warnings: "Jangan gunakan jika alergi terhadap paracetamol. Konsultasikan dengan dokter sebelum digunakan jika hamil.",
    },
    {
      id: 2,
      name: "Vitamin C 1000mg",
      category: "Vitamin",
      sku: "VIT-002",
      image: "https://images.unsplash.com/photo-1603088113235-099d2dd5aaad?w=600&h=600&fit=crop",
      price: 45000,
      stock: 189,
      sold: 892,
      rating: 4.9,
      description: "Vitamin C 1000mg membantu meningkatkan sistem imun dan kesehatan tubuh secara keseluruhan.",
      benefits: [
        "Meningkatkan imunitas",
        "Antioksidan kuat",
        "Membantu penyerapan zat besi",
        "Menjaga kesehatan kulit"
      ],
      dosage: "1 tablet per hari",
      sideEffects: "Jarang terjadi, mungkin gangguan pencernaan ringan",
      warnings: "Konsultasikan dengan dokter jika memiliki riwayat batu ginjal.",
    },
    {
      id: 3,
      name: "Masker Medis 3 Ply",
      category: "Alat Kesehatan",
      sku: "ALK-003",
      image: "https://images.unsplash.com/photo-1576091160550-112173f7b14d?w=600&h=600&fit=crop",
      price: 35000,
      stock: 456,
      sold: 2156,
      rating: 4.7,
      description: "Masker medis 3 ply yang standar kesehatan untuk melindungi dari bakteri dan virus.",
      benefits: [
        "Perlindungan 3 lapis",
        "Nyaman digunakan",
        "Elastisitas sempurna",
        "Standar kesehatan internasional"
      ],
      dosage: "Gunakan sesuai kebutuhan",
      sideEffects: "Tidak ada",
      warnings: "Ganti masker setiap 4-8 jam pemakaian.",
    },
    {
      id: 4,
      name: "Hand Sanitizer 100ml",
      category: "Alat Kesehatan",
      sku: "ALK-004",
      image: "https://images.unsplash.com/photo-1584308666744-24d5f15714ae?w=600&h=600&fit=crop",
      price: 25000,
      stock: 312,
      sold: 1456,
      rating: 4.6,
      description: "Hand sanitizer 100ml dengan kandungan alkohol 70% untuk membunuh bakteri dan virus.",
      benefits: [
        "Membunuh 99.9% kuman",
        "Mudah digunakan",
        "Ukuran portabel",
        "Tidak meninggalkan residu"
      ],
      dosage: "Oleskan pada tangan dan gosok hingga kering",
      sideEffects: "Tidak ada",
      warnings: "Hindari kontak dengan mata dan mulut.",
    },
    {
      id: 5,
      name: "Ibuprofen 200mg",
      category: "Obat Bebas",
      sku: "OBT-005",
      image: "https://images.unsplash.com/photo-1587854692152-cbe660dbde0b?w=600&h=600&fit=crop",
      price: 12000,
      stock: 320,
      sold: 1820,
      rating: 4.8,
      description: "Ibuprofen 200mg untuk mengatasi nyeri dan inflamasi.",
      benefits: [
        "Mengurangi nyeri",
        "Anti inflamasi",
        "Cepat bekerja",
        "Aman digunakan"
      ],
      dosage: "1-2 tablet setiap 6-8 jam",
      sideEffects: "Gangguan pencernaan",
      warnings: "Jangan gunakan saat perut kosong.",
    },
    {
      id: 6,
      name: "Vitamin B Complex",
      category: "Vitamin",
      sku: "VIT-006",
      image: "https://images.unsplash.com/photo-1603088113235-099d2dd5aaad?w=600&h=600&fit=crop",
      price: 38000,
      stock: 201,
      sold: 756,
      rating: 4.7,
      description: "Vitamin B complex untuk energi dan metabolisme.",
      benefits: [
        "Meningkatkan energi",
        "Metabolisme lebih baik",
        "Kesehatan saraf",
        "Pertumbuhan sel"
      ],
      dosage: "1 tablet per hari",
      sideEffects: "Minimal",
      warnings: "Tidak ada",
    },
    {
      id: 7,
      name: "Plester Luka",
      category: "Alat Kesehatan",
      sku: "ALK-007",
      image: "https://images.unsplash.com/photo-1587854692152-cbe660dbde0b?w=600&h=600&fit=crop",
      price: 8000,
      stock: 650,
      sold: 3200,
      rating: 4.9,
      description: "Plester luka berkualitas untuk perawatan luka.",
      benefits: [
        "Daya lengket kuat",
        "Tahan air",
        "Nyaman digunakan",
        "Steril"
      ],
      dosage: "Tempel pada luka yang bersih",
      sideEffects: "Tidak ada",
      warnings: "Jangan gunakan jika alergi pada perekat.",
    },
    {
      id: 8,
      name: "Antacid Tablet",
      category: "Obat Bebas",
      sku: "OBT-008",
      image: "https://images.unsplash.com/photo-1587854692152-cbe660dbde0b?w=600&h=600&fit=crop",
      price: 18000,
      stock: 280,
      sold: 945,
      rating: 4.5,
      description: "Antacid tablet untuk mengatasi asam lambung.",
      benefits: [
        "Menetralkan asam",
        "Kerja cepat",
        "Aman digunakan",
        "Nyaman di mulut"
      ],
      dosage: "1-2 tablet sesuai kebutuhan",
      sideEffects: "Jarang",
      warnings: "Konsultasikan jika gejala berlanjut.",
    },
  ];

  const product = productsData.find((p) => p.id === parseInt(id));

  if (!product) {
    return (
      <div className="max-w-7xl mx-auto px-6 py-12 text-center">
        <h1 className="text-2xl font-bold text-gray-900 mb-4">Produk tidak ditemukan</h1>
        <button
          onClick={() => navigate("/products")}
          className="bg-emerald-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-emerald-700"
        >
          Kembali ke Produk
        </button>
      </div>
    );
  }

  const formatPrice = (price) => {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      minimumFractionDigits: 0,
    }).format(price);
  };

  return (
    <div className="bg-gray-50 min-h-screen pb-12">
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
            <Link to="/products" className="text-emerald-600 font-semibold pb-2 border-b-2 border-emerald-600">
              Produk
            </Link>
            <Link to="/resep-dokter" className="text-gray-600 hover:text-emerald-600 font-medium">
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

      {/* Breadcrumb and Back Button */}
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center gap-2">
          <button
            onClick={() => window.history.back()}
            className="flex items-center gap-2 text-emerald-600 hover:text-emerald-700 font-semibold"
          >
            <ArrowLeft className="w-5 h-5" />
            Kembali
          </button>
          <span className="text-gray-400">/</span>
          <span className="text-gray-600">{product?.name}</span>
        </div>
      </div>

      {/* Product Details */}
      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Product Image and Info */}
          <div className="lg:col-span-2">
            {/* Main Image */}
            <div className="bg-white rounded-lg overflow-hidden shadow-lg mb-6">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-96 object-cover"
              />
            </div>

            {/* Product Description */}
            <div className="bg-white rounded-lg p-6 shadow mb-6">
              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                {product.description}
              </p>

              {/* Benefits */}
              <div className="mb-6">
                <h3 className="text-lg font-bold text-gray-900 mb-4">Manfaat</h3>
                <ul className="grid grid-cols-2 gap-3">
                  {product.benefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <span className="text-emerald-600 font-bold text-xl mt-1">✓</span>
                      <span className="text-gray-700">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Usage */}
              <div className="mb-6">
                <h3 className="text-lg font-bold text-gray-900 mb-2">Dosis & Cara Penggunaan</h3>
                <p className="text-gray-700 bg-gray-50 p-4 rounded">{product.dosage}</p>
              </div>

              {/* Side Effects */}
              <div className="mb-6">
                <h3 className="text-lg font-bold text-gray-900 mb-2">Efek Samping</h3>
                <p className="text-gray-700 bg-red-50 p-4 rounded text-sm">{product.sideEffects}</p>
              </div>

              {/* Warnings */}
              <div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Peringatan</h3>
                <p className="text-gray-700 bg-yellow-50 p-4 rounded text-sm">{product.warnings}</p>
              </div>
            </div>
          </div>

          {/* Sidebar - Price and Actions */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-lg p-6 sticky top-20">
              {/* Rating */}
              <div className="flex items-center gap-2 mb-4">
                <span className="text-yellow-400 text-2xl">★</span>
                <span className="text-2xl font-bold text-gray-900">{product.rating}</span>
                <span className="text-gray-500">({product.sold.toLocaleString()} terjual)</span>
              </div>

              {/* Category and SKU */}
              <div className="mb-6 pb-6 border-b">
                <p className="text-sm text-gray-500 mb-1">{product.category}</p>
                <p className="text-xs text-gray-400">SKU: {product.sku}</p>
              </div>

              {/* Price */}
              <div className="mb-6">
                <p className="text-sm text-gray-600 mb-2">Harga</p>
                <p className="text-4xl font-bold text-emerald-600">
                  {formatPrice(product.price)}
                </p>
              </div>

              {/* Stock */}
              <div className="mb-6 pb-6 border-b">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-gray-600 font-semibold">Stok Tersedia</span>
                  <span className={`font-bold ${product.stock > 50 ? 'text-emerald-600' : 'text-orange-600'}`}>
                    {product.stock} unit
                  </span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div
                    className="bg-emerald-600 h-2 rounded-full"
                    style={{ width: `${Math.min((product.stock / 500) * 100, 100)}%` }}
                  ></div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="space-y-3 mb-4">
                <button className="w-full bg-emerald-600 text-white py-3 rounded-lg font-bold hover:bg-emerald-700 transition flex items-center justify-center gap-2">
                  <ShoppingCart className="w-5 h-5" />
                  Tambah ke Keranjang
                </button>
                <button className="w-full border-2 border-emerald-600 text-emerald-600 py-3 rounded-lg font-bold hover:bg-emerald-50 transition flex items-center justify-center gap-2">
                  <Heart className="w-5 h-5" />
                  Simpan
                </button>
              </div>

              {/* Share */}
              <button className="w-full border border-gray-300 text-gray-700 py-2 rounded-lg font-semibold hover:bg-gray-50 transition flex items-center justify-center gap-2">
                <Share2 className="w-4 h-4" />
                Bagikan
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
