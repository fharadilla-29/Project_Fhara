import React from "react";
import { useParams, Link } from "react-router-dom";
import { Search } from "lucide-react";

export default function CategoryPage() {
  const { category } = useParams();
  const [searchQuery, setSearchQuery] = React.useState("");

  // Sample pharmacy products data
  const allProducts = [
    {
      id: 1,
      name: "Paracetamol 500mg",
      category: "Obat Bebas",
      sku: "OBT-001",
      image: "https://images.unsplash.com/photo-1587854692152-cbe660dbde0b?w=300&h=300&fit=crop",
      price: 15000,
      stock: 245,
      sold: 1245,
      rating: 4.8,
    },
    {
      id: 2,
      name: "Vitamin C 1000mg",
      category: "Vitamin",
      sku: "VIT-002",
      image: "https://images.unsplash.com/photo-1603088113235-099d2dd5aaad?w=300&h=300&fit=crop",
      price: 45000,
      stock: 189,
      sold: 892,
      rating: 4.9,
    },
    {
      id: 3,
      name: "Masker Medis 3 Ply",
      category: "Alat Kesehatan",
      sku: "ALK-003",
      image: "https://images.unsplash.com/photo-1576091160550-112173f7b14d?w=300&h=300&fit=crop",
      price: 35000,
      stock: 456,
      sold: 2156,
      rating: 4.7,
    },
    {
      id: 4,
      name: "Hand Sanitizer 100ml",
      category: "Alat Kesehatan",
      sku: "ALK-004",
      image: "https://images.unsplash.com/photo-1584308666744-24d5f15714ae?w=300&h=300&fit=crop",
      price: 25000,
      stock: 312,
      sold: 1456,
      rating: 4.6,
    },
    {
      id: 5,
      name: "Ibuprofen 200mg",
      category: "Obat Bebas",
      sku: "OBT-005",
      image: "https://images.unsplash.com/photo-1587854692152-cbe660dbde0b?w=300&h=300&fit=crop",
      price: 12000,
      stock: 320,
      sold: 1820,
      rating: 4.8,
    },
    {
      id: 6,
      name: "Vitamin B Complex",
      category: "Vitamin",
      sku: "VIT-006",
      image: "https://images.unsplash.com/photo-1603088113235-099d2dd5aaad?w=300&h=300&fit=crop",
      price: 38000,
      stock: 201,
      sold: 756,
      rating: 4.7,
    },
    {
      id: 7,
      name: "Plester Luka",
      category: "Alat Kesehatan",
      sku: "ALK-007",
      image: "https://images.unsplash.com/photo-1587854692152-cbe660dbde0b?w=300&h=300&fit=crop",
      price: 8000,
      stock: 650,
      sold: 3200,
      rating: 4.9,
    },
    {
      id: 8,
      name: "Antacid Tablet",
      category: "Obat Bebas",
      sku: "OBT-008",
      image: "https://images.unsplash.com/photo-1587854692152-cbe660dbde0b?w=300&h=300&fit=crop",
      price: 18000,
      stock: 280,
      sold: 945,
      rating: 4.5,
    },
  ];

  const categoryMap = {
    "obat-obatan": "Obat Bebas",
    vitamin: "Vitamin",
    "alat-kesehatan": "Alat Kesehatan",
    herbal: "Herbal",
    suplemen: "Suplemen",
    "ibu-anak": "Ibu & Anak",
    "perawatan-luka": "Perawatan Luka",
    "medical-device": "Medical Device",
  };

  const categoryName = categoryMap[category] || "Produk";
  const filteredProducts = allProducts.filter((product) => {
    const matchesCategory = product.category === categoryName;
    const matchesSearch =
      product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.sku.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const formatPrice = (price) => {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      minimumFractionDigits: 0,
    }).format(price);
  };

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
          <div className="flex items-center justify-between gap-6 mb-6">
            <div className="flex items-center gap-2">
              <div className="bg-emerald-600 rounded-lg p-2 text-white font-bold text-lg">
                A+
              </div>
              <div>
                <h1 className="font-bold text-lg text-gray-800">Apotek Sehat</h1>
                <p className="text-xs text-gray-600">Terpercaya & Terlengkap</p>
              </div>
            </div>

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

            <button
              onClick={() => navigate("/")}
              className="textwindow.history.back( hover:text-emerald-700 font-medium"
            >
              Kembali
            </button>
          </div>
        </div>
      </header>

      {/* Category Products */}
      <div className="max-w-7xl mx-auto px-6 py-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-2">{categoryName}</h1>
        <p className="text-gray-600 mb-8">Produk kategori {categoryName}</p>

        {/* Search */}
        <div className="mb-8">
          <div className="relative">
            <Search className="absolute left-4 top-3.5 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Cari produk dalam kategori ini..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-600"
            />
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {filteredProducts.length > 0 ? (
            filteredProducts.map((product) => (
              <Link
                key={product.id}
                to={`/product/${product.id}`}
                style={{ textDecoration: 'none' }}
                className="bg-white rounded-lg shadow hover:shadow-lg transition-shadow overflow-hidden cursor-pointer block"
              >
                <div className="hover:scale-105 transform transition-transform">
                  {/* Product Image */}
                  <div className="relative h-48 bg-gray-200">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover"
                    />
                    {/* Rating Badge */}
                    <div className="absolute top-3 right-3 bg-white rounded-full px-3 py-1 flex items-center gap-1 shadow-md">
                      <span className="text-yellow-400">★</span>
                      <span className="font-semibold text-gray-800">
                        {product.rating}
                      </span>
                    </div>
                  </div>

                  {/* Product Info */}
                  <div className="p-4">
                    <p className="text-sm text-gray-500 mb-1">{product.category}</p>
                    <p className="text-xs text-gray-400 mb-2">SKU: {product.sku}</p>

                    <h3 className="font-bold text-gray-900 mb-3 text-base line-clamp-2">
                      {product.name}
                    </h3>

                    <div className="flex items-center gap-2 text-sm text-gray-600 mb-3">
                      <span>📦</span>
                      <span>Stok: {product.stock.toLocaleString()}</span>
                      <span>•</span>
                      <span>Terjual: {product.sold.toLocaleString()}</span>
                    </div>

                    <p className="text-xl font-bold text-emerald-600">
                      {formatPrice(product.price)}
                    </p>
                  </div>
                </div>
              </Link>
            ))
          ) : (
            <div className="col-span-full text-center py-12">
              <p className="text-gray-500 text-lg">Produk tidak ditemukan</p>
            </div>
          )}
        </div>

        {/* Results Count */}
        <div className="text-center text-gray-600 pb-8">
          <p>
            Menampilkan {filteredProducts.length} produk dalam kategori{" "}
            {categoryName}
          </p>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 text-center text-gray-400 text-sm">
          <p>&copy; 2024 Apotek Sehat. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
