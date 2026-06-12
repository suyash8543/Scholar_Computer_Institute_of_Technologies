import { Link } from "react-router-dom";
import { FaUserShield } from "react-icons/fa";

function Navbar() {
    return (
        <>
            <nav className="navbar">

                <div className="container navbar-container">

                    <h1 className="logo">
                        Scholar Institute
                    </h1>

                    <div className="nav-links">

                        <Link to="/">Home</Link>

                        <Link to="/about">About</Link>

                        <Link to="/courses">Courses</Link>

                        <Link to="/contact">Contact</Link>

                        {/* Admin Login Icon */}

                        <Link
                            to="/admin"
                            className="admin-icon"
                            title="Admin Login"
                        >
                            <FaUserShield />
                        </Link>

                    </div>

                </div>

            </nav>

            <div className="offer-bar">

                <div className="offer-track">

                    🔥 MEGA OFFER: Enroll in any course & get
                    <span> 6 COURSES ABSOLUTELY FREE! </span>

                    — CCC • Spoken English • Personality Development
                    • Mock Interview • System Installation
                    • Online Test Series

                </div>

            </div>
        </>
    );
}

export default Navbar;