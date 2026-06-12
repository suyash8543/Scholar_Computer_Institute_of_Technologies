import { Outlet, NavLink } from "react-router-dom";
import {
    FaTachometerAlt,
    FaBook,
    FaClipboardList,
    FaCog,
    FaSignOutAlt
} from "react-icons/fa";

function AdminLayout() {
    return (
        <div className="admin-layout">

            <aside className="admin-sidebar">

                <div className="admin-logo">
                    Scholar Admin
                </div>

                <nav>

                    <NavLink
                        to="/admin/dashboard"
                        className="sidebar-link"
                    >
                        <FaTachometerAlt />
                        Dashboard
                    </NavLink>

                    <NavLink
                        to="/admin/courses"
                        className="sidebar-link"
                    >
                        <FaBook />
                        Courses
                    </NavLink>

                    <NavLink
                        to="/admin/tests"
                        className="sidebar-link"
                    >
                        <FaClipboardList />
                        Online Tests
                    </NavLink>

                    

                </nav>

                <button className="logout-btn">
                    <FaSignOutAlt />
                    Logout
                </button>

            </aside>

            <main className="admin-main">
                <Outlet />
            </main>

        </div>
    );
}

export default AdminLayout;