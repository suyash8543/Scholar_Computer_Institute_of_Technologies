import { useNavigate } from "react-router-dom";
import studentImg from "../../assets/1.jpg";
function Hero() {

    const navigate = useNavigate();

    return (
        <section className="premium-hero">

            <div className="hero-overlay"></div>

            <div className="hero-container">

                {/* LEFT */}

                <div className="premium-left">

                    <div className="hero-badge">
                        🔥 Admissions Open 2026-27
                    </div>

                    <h1>


                        Raebareli's
                        <span> No. 1</span>
                        <br />
                        Computer Training
                        <br />
                        Institute
                    </h1>

                    <p>
                        Get 100% Job Assured Training. Achieve an 'S' GRADE in 'O' Level & CCC with expert guidance and industry-ready curriculum.
                    </p>

                    <div className="hero-tags">

                        <span>✔ Recognized by Govt. of India</span>

                        <span>✔ Ministry of HRD</span>

                        <span>✔ MSME Registered</span>

                        <span>✔ NIELIT Certified</span>

                        <span>✔ Expert Faculty</span>

                        <span>✔ Placement Guidance</span>

                    </div>

                    <div className="premium-buttons">

                        <button
                            className="hero-primary"
                            onClick={() => navigate("/courses")}
                        >
                            🎓 Explore Courses
                        </button>

                        <button className="hero-secondary">
                            📞 +91 80040 36061
                        </button>

                    </div>

                </div>

                {/* RIGHT */}

                <div className="premium-right">

                    <div className="hero-image-card">

                        <img src={studentImg} alt="Students" />

                    </div>

                    <div className="hero-stats">

                        <div className="stat-box">

                            <h2>100%</h2>

                            <p>Practical Training</p>

                        </div>

                        <div className="stat-box">

                            <h2>50+</h2>

                            <p>Courses Available</p>

                        </div>

                        <div className="stat-box">

                            <h2>10K+</h2>

                            <p>Students Trained</p>

                        </div>

                        <div className="stat-box">

                            <h2>#1</h2>

                            <p>Institute</p>

                        </div>

                    </div>

                </div>

            </div>
        </section>
    );
}

export default Hero;