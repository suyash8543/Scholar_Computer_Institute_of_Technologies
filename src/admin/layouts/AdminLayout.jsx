import { useState } from "react";
import { Outlet } from "react-router-dom";
import { FaBars } from "react-icons/fa";

import AdminSidebar from "../components/AdminSidebar";
import AdminNavbar from "../components/AdminNavbar";

export default function AdminLayout() {
    const [open, setOpen] = useState(false);

    return (
        <div className="admin-layout">

            {/* Mobile Menu Button */}
            <button
                className="admin-menu-btn"
                onClick={() => setOpen(!open)}
            >
                <FaBars />
            </button>

            {/* Overlay */}
            {open && (
                <div
                    className="sidebar-overlay"
                    onClick={() => setOpen(false)}
                ></div>
            )}

            {/* Sidebar */}
            <AdminSidebar open={open} setOpen={setOpen} />

            {/* Main Content */}
            <div className="admin-content">
                <AdminNavbar />
                <div className="admin-page">
                    <Outlet />
                </div>
            </div>

        </div>
    );
}