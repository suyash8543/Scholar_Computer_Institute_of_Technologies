import { Routes, Route } from "react-router-dom";

import AdminLayout from "../layouts/AdminLayout";
import Dashboard from "../pages/Dashboard";
import ManageCourses from "../pages/ManageCourses";
import TestManager from "../pages/TestManager";

export default function AdminRoutes() {
    return (
        <Routes>
            <Route path="/" element={<AdminLayout />}>
                <Route path="dashboard" element={<Dashboard />} />
                <Route path="courses" element={<ManageCourses />} />
                <Route path="test" element={<TestManager />} />
                <Route path="tests" element={<TestManager />} />
            </Route>
        </Routes>
    );
}