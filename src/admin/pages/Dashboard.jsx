import {
    FaBook,
    FaClipboardList,
    FaUsers,
    FaEnvelope
} from "react-icons/fa";

function Dashboard() {
    const stats = [
        {
            title: "Courses",
            value: 12,
            icon: <FaBook />,
        },
        {
            title: "Tests",
            value: 3,
            icon: <FaClipboardList />,
        },
        {
            title: "Students",
            value: "250+",
            icon: <FaUsers />,
        },
        {
            title: "Enquiries",
            value: 18,
            icon: <FaEnvelope />,
        },
    ];

    return (
        <div>

            <div className="dashboard-header">

                <h1>Dashboard</h1>

                <button className="primary-btn">
                    + Add Course
                </button>

            </div>

            <div className="stats-grid">

                {stats.map((item, index) => (
                    <div className="stat-card" key={index}>

                        <div className="stat-icon">
                            {item.icon}
                        </div>

                        <h2>{item.value}</h2>

                        <p>{item.title}</p>

                    </div>
                ))}

            </div>

            <div className="activity-card">

                <h3>Recent Activity</h3>

                <ul>
                    <li>Course "Python" Added</li>
                    <li>CCC Test Updated</li>
                    <li>New Contact Enquiry</li>
                    <li>Offer Bar Changed</li>
                </ul>

            </div>

        </div>
    );
}

export default Dashboard;