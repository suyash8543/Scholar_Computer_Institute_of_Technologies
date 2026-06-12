import { Routes, Route } from "react-router-dom";

/* Public Pages */
import Home from "../pages/Home";
import About from "../pages/About";
import Courses from "../pages/Courses";
import Contact from "../pages/Contact";

/* Admin */
import AdminLogin from "../admin/pages/AdminLogin";
import Dashboard from "../admin/pages/Dashboard";
import CoursesManager from "../admin/pages/CoursesManager";
import TestManager from "../admin/pages/TestManager";
import AdminLayout from "../admin/layouts/AdminLayout";
import ProtectedRoute from "../admin/routes/ProtectedRoute";

function AppRoutes() {
    return (
        <Routes>

            {/* PUBLIC */}

            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/courses" element={<Courses />} />
            <Route path="/contact" element={<Contact />} />

            {/* ADMIN LOGIN */}

            <Route
                path="/admin"
                element={<AdminLogin />}
            />

            {/* ADMIN PANEL */}

            <Route
                path="/admin"
                element={
                    <ProtectedRoute>
                        <AdminLayout />
                    </ProtectedRoute>
                }
            >
                <Route
                    path="dashboard"
                    element={<Dashboard />}
                />

                <Route
                    path="courses"
                    element={<CoursesManager />}
                />

                <Route
                    path="tests"
                    element={<TestManager />}
                />

                
            </Route>

        </Routes>
    );
}

export default AppRoutes;