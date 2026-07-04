import { NavLink, useNavigate } from "react-router-dom";
import {
    FaHome,
    FaBook,
    FaLink,
    FaSignOutAlt
} from "react-icons/fa";

export default function AdminSidebar({ open, setOpen }) {
    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem("admin");
        navigate("/");
    };

    return (

        <div className={`admin-sidebar ${open ? "active" : ""}`}>

            <div className="admin-logo">

                SCHOLAR Admin

            </div>

            <NavLink
                to="/admin/dashboard"
                onClick={() => setOpen(false)}
            >

                <FaHome />

                Dashboard

            </NavLink>

            <NavLink
                to="/admin/courses"
                onClick={() => setOpen(false)}
            >

                <FaBook />

                Manage Courses

            </NavLink>

            <NavLink
                to="/admin/test"
                onClick={() => setOpen(false)}
            >

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