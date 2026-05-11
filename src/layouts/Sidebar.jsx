import { MdSpaceDashboard, MdLocalPharmacy, MdPersonAdd, MdAssignmentTurnedIn } from "react-icons/md";
import { NavLink } from "react-router-dom";

export default function Sidebar() {
    // Fungsi untuk menentukan class berdasarkan status active
    const menuClass = ({ isActive }) =>
        `flex cursor-pointer items-center rounded-xl p-4 space-x-2 transition-all ${
            isActive
                ? "text-hijau bg-gradient-to-r from-ungu to-pink font-extrabold"
                : "text-gray-800 font-semibold hover:text-white hover:bg-gradient-to-r hover:from-hijau hover:to-teal hover:font-extrabold"
        }`;

    return (
        <div id="sidebar" className="flex min-h-screen w-90 flex-col bg-gradient-to-b from-blue-50 to-purple-50 p-10 shadow-lg">
            <div id="sidebar-logo" className="flex flex-col items-center gap-2">
                <div className="text-6xl">💊</div>
                <span id="logo-title" className="font-poppins text-[42px] font-bold bg-gradient-to-r from-ungu to-pink bg-clip-text text-transparent">
                    Apotek Sehat
                </span>
                <span id="logo-subtitle" className="font-semibold text-cyan-600">Your Health Partner</span>
            </div>

            <div id="sidebar-menu" className="mt-10">
                <ul id="menu-list" className="space-y-3">
                    {/* PRODUCTS */}
                    <li>
                        <NavLink id="menu-1" to="/products" className={menuClass}>
                            <MdLocalPharmacy className="mr-4 text-xl" />
                            Produk
                        </NavLink>
                    </li>
                    
                    {/* RESEP DOKTER */}
                    <li>
                        <NavLink id="menu-2" to="/resep-dokter" className={menuClass}>
                            <MdAssignmentTurnedIn className="mr-4 text-xl" />
                            Resep Dokter
                        </NavLink>
                    </li>
                </ul>
            </div>

            <div id="sidebar-footer" className="mt-auto">
                <div id="footer-card" className="bg-gradient-to-r from-cyan-400 to-teal-400 px-4 py-2 rounded-md shadow-lg mb-10 flex items-center justify-between">
                    <div id="footer-text" className="text-white text-sm">
                        <span>Manage pharmacy efficiently</span>
                        <div id="add-menu-button" className="flex justify-center items-center p-2 mt-3 bg-white rounded-md space-x-2 text-gray-800 cursor-pointer hover:bg-gray-100 font-semibold">
                            <span> ⚙️ Settings</span>
                        </div>
                    </div>
                    <img id="footer-avatar" className="w-20 rounded-full ml-4" src="https://i.pravatar.cc/100" alt="Avatar" />
                </div>
                <span id="footer-brand" className="font-bold bg-gradient-to-r from-pink to-ungu bg-clip-text text-transparent">Apotek Sehat</span>
                <p id="footer-copyright" className="font-light text-gray-500">&copy; 2026 All Right Reserved</p>
            </div>
        </div>
    );
}