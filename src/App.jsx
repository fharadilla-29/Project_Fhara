import React, { Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import MainLayout from "./layouts/MainLayout";
import AuthLayout from "./layouts/AuthLayout";
import PublicLayout from "./layouts/PublicLayout";
import ErrorPage from "./pages/ErrorPage";
import Login from "./pages/auth/Login";
import ApotekHome from "./pages/ApotekHome";
import ProductsList from "./pages/ProductsList";
import ProductDetail from "./pages/ProductDetail";
import CategoryPage from "./pages/CategoryPage";
import AddProductForm from "./pages/AddProductForm";
import ResepDokter from "./pages/ResepDokter";
import ResepDetail from "./pages/ResepDetail";
import UploadResep from "./pages/UploadResep";

export default function App() {
  return (
    <Routes>
      {/* Public Routes */}
      <Route element={<PublicLayout />}>
        <Route path="/" element={<ApotekHome />} />
        <Route path="/category/:category" element={<CategoryPage />} />
        <Route path="/product/:id" element={<ProductDetail />} />
        <Route path="/products" element={<ProductsList />} />
        <Route path="/resep-dokter" element={<ResepDokter />} />
        <Route path="/resep-dokter/:id" element={<ResepDetail />} />
      </Route>

      {/* Auth Routes */}
      <Route element={<AuthLayout />}>
        <Route path="/login" element={<Login />} />
        <Route path="/add-product" element={<AddProductForm />} />
        <Route path="/upload-resep" element={<UploadResep />} />
      </Route>

      {/* Main Routes - Pharmacy Admin */}
      <Route element={<MainLayout />}>
        <Route path="/products/:id" element={<ProductDetail />} />
        
        {/* Error Routes */}
        <Route path="/error-404" element={<ErrorPage code="404" title="Page Not Found" description="Halaman yang anda cari tidak ditemukan." />} />
        
        {/* 404 Not Found */}
        <Route path="*" element={<ErrorPage code="404" title="Page Not Found" description="Halaman yang anda cari raib entah kemana." />} />
      </Route>
    </Routes>
  );
}