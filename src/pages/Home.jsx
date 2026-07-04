import { useState, useEffect } from "react";

import Navbar from "../components/common/Navbar";
import Footer from "../components/common/Footer";

import Hero from "../components/home/Hero";
import Features from "../components/home/Features";
import CoursesPreview from "../components/home/CoursesPreview";
import Testimonials from "../components/home/Testimonials";
import BonusCourses from "../components/home/BonusCourses";

import api from "../api/api";

function Home() {

    const [showPopup, setShowPopup] = useState(true);

    const [scholarshipLink, setScholarshipLink] = useState("");

    useEffect(() => {
        fetchScholarshipLink();
    }, []);

    const fetchScholarshipLink = async () => {
        try {
            const res = await api.get("/settings/testlink");
            setScholarshipLink(res.data.value);
        } catch (err) {
            console.log(err);
        }
    };

    return (
        <>
            <Navbar />

            {/* SCHOLARSHIP POPUP */}

            {showPopup && (
                <div className="popup-overlay">

                    <div className="scholarship-popup">

                        <button
                            className="popup-close"
                            onClick={() => setShowPopup(false)}
                        >
                            ✕
                        </button>

                        <div className="popup-badge">
                            Scholarship Test 2026
                        </div>

                        <h2>
                            Win Up To 100% Scholarship
                        </h2>

                        <p>
                            Appear in Scholar Institute Scholarship Test and get
                            fee discounts based on your marks.
                        </p>

                        <div className="scholarship-marks">

                            <div className="mark-card">
                                <h3>90%+</h3>
                                <p>100% Scholarship</p>
                            </div>

                            <div className="mark-card">
                                <h3>75%+</h3>
                                <p>50% Scholarship</p>
                            </div>

                            <div className="mark-card">
                                <h3>60%+</h3>
                                <p>25% Scholarship</p>
                            </div>

                        </div>

                        <button
                            className="apply-btn"
                            onClick={() => {
                                if (scholarshipLink && scholarshipLink.trim() !== "") {
                                    window.open(scholarshipLink, "_blank");
                                } else {
                                    alert("Scholarship test is not available yet.");
                                }
                            }}
                        >
                            Apply Now
                        </button>

                    </div>

                </div>
            )}

            {/* HOME CONTENT */}

            <Hero />

            <Features />

            <CoursesPreview />

            <Testimonials />

            <BonusCourses />

            <Footer />
        </>
    );
}

export default Home;