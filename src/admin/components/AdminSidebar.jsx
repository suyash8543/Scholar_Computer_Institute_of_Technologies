import { NavLink } from "react-router-dom";
import {
    FaHome,
    FaBook,
    FaLink,
    FaSignOutAlt
} from "react-icons/fa";

export default function AdminSidebar() {

    const menu = [
        {
            title: "Dashboard",
            icon: <FaHome />,
            path: "/admin/dashboard"
        },
        {
            title: "Manage Courses",
            icon: <FaBook />,
            path: "/admin/courses"
        },
        {
            title: "Test Link",
            icon: <FaLink />,
            path: "/admin/test"
        }
    ];

    return (

        <div className="admin-sidebar">

            <div className="admin-logo">

                SCIT Admin

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

        </div>

    );

}