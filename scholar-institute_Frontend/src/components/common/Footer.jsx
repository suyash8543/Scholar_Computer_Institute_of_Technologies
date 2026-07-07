import logo from "../../assets/logo.png";

import {
    FaInstagram,
    FaYoutube,
    FaFacebookF,
    FaLinkedinIn,
    FaPhoneAlt,
    FaMapMarkerAlt,
} from "react-icons/fa";



function Footer() {
    return (
        <footer className="footer">

            <div className="container footer-grid">

                {/* LEFT SECTION */}

                <div className="footer-about">

                    <div className="footer-logo">

                        <img
                            src={logo}
                            alt="Scholar Institute"
                        />

                        <div>

                            <h2>
                                 SCHOLAR Computer Institute of Technologies
                            </h2>

                            <span>
                                ✦ Accredited by NIELIT
                            </span>

                        </div>

                    </div>

                    <p>
                        Raebareli’s trusted computer training institute
                        providing practical education, certifications,
                        and career-focused programs for students.
                    </p>

                    <div className="social-title">
                        FOLLOW US
                    </div>

                    {/* SOCIAL ICONS */}

                    <div className="social-icons">

                        <a
                            href="https://www.instagram.com/scholarcomputer/"
                            target="_blank"
                            rel="noreferrer"
                            className="instagram"
                        >
                            <FaInstagram />
                        </a>

                        <a
                            href="https://www.youtube.com/@thetechnicalscholar"
                            target="_blank"
                            rel="noreferrer"
                            className="youtube"
                        >
                            <FaYoutube />
                        </a>

                        <a
                            href="https://www.facebook.com/ScholarComputersRaebareli/"
                            target="_blank"
                            rel="noreferrer"
                            className="facebook"
                        >
                            <FaFacebookF />
                        </a>

                        <a
                            href="https://linkedin.com"
                            target="_blank"
                            rel="noreferrer"
                            className="linkedin"
                        >
                            <FaLinkedinIn />
                        </a>

                    </div>

                </div>

                {/* QUICK LINKS */}

                <div className="footer-links">

                    <h3>QUICK LINKS</h3>

                    <a href="/">Home</a>

                    <a href="/about">About</a>

                    <a href="/courses">Courses</a>

                    <a href="/contact">Contact</a>

                    

                </div>

                {/* PROGRAMS */}

                <div className="footer-links">

                    <h3>PROGRAMS</h3>

                    <a href="/courses">CCC & O Level</a>

                    <a href="/courses">Tally Prime + GST</a>

                    <a href="/courses">Python Programming</a>

                    <a href="/courses">Web Development</a>

                    <a href="/courses">Digital Marketing</a>

                </div>

                {/* CONTACT */}

                <div className="footer-contact">

                    <h3>CONTACT US</h3>

                    <div className="contact-item">

                        <FaPhoneAlt className="contact-icon" />

                        <div>

                            <span>OFFICE</span>

                            <a href="tel:+916393000257">
                                +91 6393 000 257
                            </a>

                            <a href="tel:+918004036061">
                                +91 8004 036 061
                            </a>

                        </div>

                    </div>

                    <div className="contact-item">

                        <FaMapMarkerAlt className="contact-icon" />

                        <p>
                            Next to SRM TATA MOTORS,
                            Beside PNB, Tripula Chauraha,
                            Raebareli – 229001
                        </p>

                    </div>

                </div>

            </div>

            {/* FOOTER BOTTOM */}

            <div className="footer-bottom container">

                <p>
                    © 2026 Scholar Computer Institute.
                    All rights reserved.
                </p>

                <div className="footer-bottom-links">

                    <a href="/">Privacy Policy</a>

                    <a href="/">Terms</a>

                    <a href="/">NIELIT Verification</a>

                </div>

            </div>

        </footer>
    );
}

export default Footer;
