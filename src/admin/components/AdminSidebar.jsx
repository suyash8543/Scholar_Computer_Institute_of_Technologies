import { NavLink, useNavigate } from "react-router-dom";
import {
    FaHome,
    FaBook,
    FaLink,
    FaSignOutAlt
} from "react-icons/fa";

export default function AdminSidebar() {
    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem("admin");
        navigate("/");
    };

    return (

        <div className="admin-sidebar">

            <div className="admin-logo">

                SCHOLAR Admin

            </div>

            <NavLink to="/admin/dashboard">

                <FaHome />

                Dashboard

            </NavLink>

            <NavLink to="/admin/courses">

                <FaBook />

                Manage Courses

            </NavLink>

            <NavLink to="/admin/test">

                <FaLink />

                Test Link

            </NavLink>

            <button type="button" className="admin-logout-btn" onClick={handleLogout}>
                <FaSignOutAlt />
                Logout
            </button>

        </div>

    );

}