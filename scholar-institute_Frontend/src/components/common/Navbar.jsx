import { useState } from "react";
import { FaBars, FaTimes, FaUserShield } from "react-icons/fa";
import { Link } from "react-router-dom";
import scholarLogo from "../../assets/logo.png";

function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);
    return (
        <>
            <nav className="navbar">

                <div className="container navbar-container">

                    <div className="logo-container">

                        <img
                            src={scholarLogo}
                            alt="Scholar Computer Institute"
                            className="navbar-logo"
                        />

                        <h1 className="logo">
                            SCHOLAR Computer Institute of Technologies
                        </h1>

                    </div>

                    {/* Mobile Menu Icon */}
                    <div
                        className="menu-icon"
                        onClick={() => setMenuOpen(!menuOpen)}
                    >
                        {menuOpen ? <FaTimes /> : <FaBars />}
                    </div>

                    {/* Navigation Links */}
                    <div className={`nav-links ${menuOpen ? "active" : ""}`}>

                        <Link to="/" onClick={() => setMenuOpen(false)}>
                            Home
                        </Link>

                        <Link to="/about" onClick={() => setMenuOpen(false)}>
                            About
                        </Link>

                        <Link to="/courses" onClick={() => setMenuOpen(false)}>
                            Courses
                        </Link>

                        <Link to="/contact" onClick={() => setMenuOpen(false)}>
                            Contact
                        </Link>

                        <Link
                            to="/admin"
                            className="admin-icon"
                            title="Admin Login"
                            onClick={() => setMenuOpen(false)}
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
