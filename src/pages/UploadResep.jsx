import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, Upload, AlertCircle } from "lucide-react";

export default function UploadResep() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    patientName: "",
    doctorName: "",
    uploadFile: null,
    description: "",
  });
  const [preview, setPreview] = useState(null);
  const [uploadSuccess, setUploadSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFormData((prev) => ({
        ...prev,
        uploadFile: file,
      }));

      // Create preview for images
      if (file.type.startsWith("image/")) {
        const reader = new FileReader();
        reader.onloadend = () => {
          setPreview(reader.result);
        };
        reader.readAsDataURL(file);
      }
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate required fields
    if (!formData.patientName || !formData.doctorName || !formData.uploadFile) {
      alert("Mohon lengkapi semua field yang diperlukan");
      return;
    }

    // Handle form submission
    console.log("Upload Resep submitted:", {
      patientName: formData.patientName,
      doctorName: formData.doctorName,
      fileName: formData.uploadFile.name,
      description: formData.description,
    });

    // Show success message
    setUploadSuccess(true);

    // Reset form
    setFormData({
      patientName: "",
      doctorName: "",
      uploadFile: null,
      description: "",
    });
    setPreview(null);

    // Redirect after 2 seconds
    setTimeout(() => {
      navigate("/resep-dokter");
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 to-blue-50 py-8 px-4">
      <div className="max-w-2xl mx-auto">
        {/* Back Button */}
        <button
          onClick={() => navigate("/resep-dokter")}
          className="flex items-center gap-2 text-emerald-600 hover:text-emerald-700 font-semibold mb-4"
        >
          <ArrowLeft className="w-5 h-5" />
          Kembali ke Resep Dokter
        </button>

        {/* Success Message */}
        {uploadSuccess && (
          <div className="bg-green-50 border border-green-200 rounded-xl p-4 mb-6 flex gap-3">
            <div className="text-green-600 text-2xl">✓</div>
            <div>
              <p className="font-semibold text-green-700 mb-1">Resep Berhasil Diupload!</p>
              <p className="text-green-600 text-sm">Resep Anda sedang diverifikasi oleh apoteker. Anda akan menerima notifikasi dalam 1-2 jam.</p>
            </div>
          </div>
        )}

        {/* Form Card */}
        <div className="bg-white rounded-xl shadow-lg p-6">
          <h1 className="text-2xl font-bold text-gray-900 mb-1">Upload Resep Dokter</h1>
          <p className="text-gray-600 mb-6 text-sm">Unggah resep dokter Anda untuk melakukan pemesanan obat</p>

          {/* Information Card */}
          <div className="bg-emerald-50 border border-emerald-200 rounded-lg p-4 mb-6 flex gap-3">
            <AlertCircle className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
            <div className="text-sm text-emerald-700">
              <p className="font-semibold mb-1">Catatan Penting:</p>
              <ul className="space-y-1 list-disc list-inside">
                <li>Pastikan resep terlihat jelas dan tidak buram</li>
                <li>Format yang diterima: JPG, PNG, atau PDF (Maks 10MB)</li>
                <li>Resep akan diverifikasi dalam 1-2 jam kerja</li>
              </ul>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Patient Name */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1">
                Nama Pasien *
              </label>
              <input
                type="text"
                name="patientName"
                value={formData.patientName}
                onChange={handleChange}
                placeholder="Contoh: Budi Santoso"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-600 text-sm"
                required
              />
            </div>

            {/* Doctor Name */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1">
                Nama Dokter *
              </label>
              <input
                type="text"
                name="doctorName"
                value={formData.doctorName}
                onChange={handleChange}
                placeholder="Contoh: Dr. Susanto, Sp.PD"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-600 text-sm"
                required
              />
            </div>

            {/* File Upload */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1">
                Upload File Resep *
              </label>
              <div className="relative">
                <input
                  type="file"
                  accept="image/*,.pdf"
                  onChange={handleFileChange}
                  className="w-full px-3 py-2 border-2 border-dashed border-gray-300 rounded-lg focus:outline-none focus:border-emerald-600 text-sm file:mr-4 file:py-2 file:px-4 file:rounded file:border-0 file:bg-emerald-50 file:text-emerald-700 file:font-semibold hover:file:bg-emerald-100 cursor-pointer"
                  required
                />
              </div>
              {formData.uploadFile && (
                <p className="text-sm text-gray-600 mt-2">
                  File dipilih: <span className="font-semibold">{formData.uploadFile.name}</span>
                </p>
              )}
            </div>

            {/* Image Preview */}
            {preview && (
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Preview Resep
                </label>
                <img
                  src={preview}
                  alt="Preview"
                  className="w-full max-w-xs h-64 object-cover rounded-lg border border-gray-300"
                />
              </div>
            )}

            {/* Description */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1">
                Keterangan Tambahan
              </label>
              <textarea
                name="description"
                value={formData.description}
                onChange={handleChange}
                placeholder="Tulis catatan atau informasi penting tentang resep (opsional)"
                rows="2"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-600 text-sm"
              />
            </div>

            {/* Buttons */}
            <div className="flex gap-3 pt-2">
              <button
                type="submit"
                disabled={uploadSuccess}
                className="flex-1 flex items-center justify-center gap-2 bg-emerald-600 text-white py-2 rounded-lg font-semibold hover:bg-emerald-700 transition text-sm disabled:bg-emerald-400"
              >
                <Upload className="w-4 h-4" />
                {uploadSuccess ? "Berhasil Diupload" : "Upload Resep"}
              </button>
              <button
                type="button"
                onClick={() => navigate("/resep-dokter")}
                className="flex-1 border-2 border-gray-300 text-gray-700 py-2 rounded-lg font-semibold hover:bg-gray-50 transition text-sm"
              >
                Batal
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
