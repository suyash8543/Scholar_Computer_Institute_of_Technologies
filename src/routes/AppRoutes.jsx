import { Routes, Route } from "react-router-dom";

/* Public Pages */
import Home from "../pages/Home";
import About from "../pages/About";
import Courses from "../pages/Courses";
import Contact from "../pages/Contact";

/* Admin */
import AdminLogin from "../admin/pages/AdminLogin";
import AdminRoutes from "../admin/routes/AdminRoutes";

function AppRoutes() {
    return (
        <Routes>

            {/* Public */}

            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/courses" element={<Courses />} />
            <Route path="/contact" element={<Contact />} />

            {/* Login */}

            <Route path="/admin" element={<AdminLogin />} />

            {/* Protected */}

            <Route path="/admin/*" element={<AdminRoutes />} />

        </Routes>
    );
}

export default AppRoutes;