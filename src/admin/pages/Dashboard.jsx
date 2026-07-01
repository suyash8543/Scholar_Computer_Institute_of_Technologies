import { useEffect, useState } from "react";
import DashboardCard from "../components/DashboardCard";
import { FaBook, FaEnvelope } from "react-icons/fa";
import api from "../../api/api";

export default function Dashboard() {

    const [loading, setLoading] = useState(true);

    const [dashboard, setDashboard] = useState({
        totalCourses: 0,
        totalContacts: 0,
        recentContacts: []
    });

    useEffect(() => {
        fetchDashboard();
    }, []);

    const fetchDashboard = async () => {
        try {

            const res = await api.get("/dashboard");

            setDashboard(res.data);

        } catch (error) {

            console.error(error);

        } finally {

            setLoading(false);

        }
    };

    if (loading) {

        return (
            <div className="text-center mt-5">
                <h4>Loading Dashboard...</h4>
            </div>
        );

    }

    return (
        <div>

            <h2 className="mb-4">Dashboard</h2>

            <div className="row g-4">

                <div className="col-md-6">

                    <DashboardCard
                        title="Total Courses"
                        value={dashboard.totalCourses}
                        icon={<FaBook />}
                        color="#0d6efd"
                    />

                </div>

                <div className="col-md-6">

                    <DashboardCard
                        title="Total Contacts"
                        value={dashboard.totalContacts}
                        icon={<FaEnvelope />}
                        color="#198754"
                    />

                </div>

            </div>

            <div className="card table-card shadow-sm mt-5">

                <div className="card-header bg-primary text-white">

                    Recent Contact Requests

                </div>

                <div className="card-body p-0">

                    <table className="table table-hover mb-0">

                        <thead>

                            <tr>

                                <th>Name</th>
                                <th>Phone</th>
                                <th>Email</th>

                            </tr>

                        </thead>

                        <tbody>

                            {dashboard.recentContacts.length > 0 ? (

                                dashboard.recentContacts.map(contact => (

                                    <tr key={contact.id}>

                                        <td>{contact.name}</td>
                                        <td>{contact.phone}</td>
                                        <td>{contact.email}</td>

                                    </tr>

                                ))

                            ) : (

                                <tr>

                                    <td colSpan="3" className="text-center">

                                        No Contact Requests

                                    </td>

                                </tr>

                            )}

                        </tbody>

                    </table>

                </div>

            </div>

        </div>
    );
}