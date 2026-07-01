import Navbar from "../components/common/Navbar";
import Footer from "../components/common/Footer";



import { useNavigate } from "react-router-dom";
import studentImg from "../assets/1.jpg";
import umeshSir from "../assets/umesh-sir.png";


function About() {
    const navigate = useNavigate();
    return (
        <>
            <Navbar />

            <section className="about-page">

                {/* HERO */}

                <div className="about-hero">

                    <div className="about-left">

                        <span className="about-badge">
                            Established 2017
                        </span>

                        <h1>
                            About Scholar Computer
                            <span> Institute</span>
                        </h1>

                        <p>
                            SCHOLAR COMPUTER INSTITUTE OF TECHNOLOGIES (SCIT)
                            is a leading computer education institute located at
                            Tripula Chauraha, Raebareli, Uttar Pradesh.
                            We provide quality computer education,
                            practical skill development and industry-oriented
                            training programs for future professionals.
                        </p>

                        <button
                            className="about-btn"
                            onClick={() => navigate("/courses")}
                        >
                            Explore Courses
                        </button>

                    </div>

                    <div className="hero-image-card">

                        <img
                            src={studentImg}
                            alt="Scholar Institute"
                        />

                    </div>

                </div>

                {/* STATS */}

                <div className="about-stats">

                    <div className="stat-card">
                        <h2>10K+</h2>
                        <p>Students Trained</p>
                    </div>

                    <div className="stat-card">
                        <h2>25+</h2>
                        <p>Professional Courses</p>
                    </div>

                    <div className="stat-card">
                        <h2>98%</h2>
                        <p>Success Rate</p>
                    </div>

                    <div className="stat-card">
                        <h2>15+</h2>
                        <p>Expert Trainers</p>
                    </div>

                </div>

                {/* WHY CHOOSE */}

                <div className="section-title">
                    <h2>Why Choose Scholar?</h2>
                    <p>
                        Practical learning with career-focused training
                    </p>
                </div>

                <div className="features-grid">

                    <div className="feature-card">
                        Quality & Practical Education
                    </div>

                    <div className="feature-card">
                        Experienced Faculty Members
                    </div>

                    <div className="feature-card">
                        Industry-Oriented Training
                    </div>

                    <div className="feature-card">
                        Smart Learning Environment
                    </div>

                    <div className="feature-card">
                        Career Guidance & Job Assistance
                    </div>

                    <div className="feature-card">
                        Affordable Education
                    </div>

                    <div className="feature-card">
                        Skill Development & Personality Growth
                    </div>

                    <div className="feature-card">
                        Regular Assessment & Performance Tracking
                    </div>

                </div>

                {/* MISSION & VISION */}

                <div className="mission-vision">

                    <div className="mv-card">

                        <h2>🚀 Our Mission</h2>

                        <p>
                            To create highly skilled professionals in
                            Software, Hardware, Artificial Intelligence,
                            Accounting and Information Technology who can
                            successfully meet modern industry demands and
                            future technological challenges.
                        </p>

                    </div>

                    <div className="mv-card">

                        <h2>🎯 Our Vision</h2>

                        <p>
                            “We Believe In Making Youth Skilful.”
                        </p>

                    </div>

                </div>

                {/* CORE VALUES */}

                <div className="section-title">
                    <h2>Our Core Values</h2>
                    <p>Principles that drive our success</p>
                </div>

                <div className="values-grid">

                    <div className="value-card">Excellence in Education</div>

                    <div className="value-card">Practical Skill Development</div>

                    <div className="value-card">Innovation & Creativity</div>

                    <div className="value-card">Student-Centered Learning</div>

                    <div className="value-card">Professional Ethics</div>

                    <div className="value-card">Career-Oriented Training</div>

                    <div className="value-card">Lifelong Learning</div>

                    <div className="value-card">Social Responsibility</div>

                </div>

                <div className="section-title">
                    <h2>Meet Our Expert Faculty</h2>
                    <p>
                        Learn from experienced industry professionals
                    </p>
                </div>

                <div className="faculty-grid">

                    <div
                        className="faculty-card"
                        style={{
                            backgroundImage: `url(${umeshSir})`,
                        }}
                    >
                        <div className="faculty-overlay">
                            <h3>Mr. Umesh Srivastava</h3>

                            <span className="faculty-role">
                                Director | Ex-IBM Employee
                            </span>

                            <p>
                                <strong>Qualification:</strong> MCA
                            </p>

                            <p>
                                Expertise: Python, C, C++, C#, Java,
                                Data Analytics, Artificial Intelligence,
                                Machine Learning, Robotics, HTML, CSS,
                                JavaScript, PHP, .NET and more.
                            </p>
                        </div>
                    </div>

                    <div
                        className="faculty-card"
                        style={{
                            backgroundImage: `url(${umeshSir})`,
                        }}
                    >
                        <div className="faculty-overlay">
                            <h3>Mr. Umesh Srivastava</h3>

                            <span className="faculty-role">
                                Director | Ex-IBM Employee
                            </span>

                            <p>
                                <strong>Qualification:</strong> MCA
                            </p>

                            <p>
                                Expertise: Python, C, C++, C#, Java,
                                Data Analytics, Artificial Intelligence,
                                Machine Learning, Robotics, HTML, CSS,
                                JavaScript, PHP, .NET and more.
                            </p>
                        </div>
                    </div>

                    <div
                        className="faculty-card"
                        style={{
                            backgroundImage: `url(${umeshSir})`,
                        }}
                    >
                        <div className="faculty-overlay">
                            <h3>Mrs. Priya Shukla</h3>

                            <span className="faculty-role">
                                Center Manager
                            </span>

                            <p>
                                <strong>Qualification:</strong>
                                D.EL.Ed, MA (English), PGDCA
                            </p>

                            <p>
                                Expertise: Graphic Design, UI/UX Design,
                                Adobe Illustrator, CorelDRAW, Canva and
                                Creative Design Tools.
                            </p>
                        </div>
                    </div>

                    {/* <div className="faculty-card">

                        <div className="faculty-avatar">
                            👨‍🏫
                        </div>

                        <h3>Mr. Umesh Srivastava</h3>

                        <span className="faculty-role">
                            Director | Ex-IBM Employee
                        </span>

                        <p>
                            <strong>Qualification:</strong> MCA
                        </p>

                        <p>
                            Expertise: Python, C, C++, C#, Java,
                            Data Analytics, Artificial Intelligence,
                            Machine Learning, Robotics, HTML, CSS,
                            JavaScript, PHP, .NET and more.
                        </p>

                    </div>

                    <div className="faculty-card">

                        <div className="faculty-avatar">
                            👩‍🏫
                        </div>

                        <h3>Mrs. Priya Shukla</h3>

                        <span className="faculty-role">
                            Center Manager
                        </span>

                        <p>
                            <strong>Qualification:</strong>
                            D.EL.Ed, MA (English), PGDCA
                        </p>

                        <p>
                            Expertise: Graphic Design, UI/UX Design,
                            Adobe Illustrator, CorelDRAW, Canva and
                            Creative Design Tools.
                        </p>

                    </div>

                    <div className="faculty-card">

                        <div className="faculty-avatar">
                            👨‍💼
                        </div>

                        <h3>Mr. Shivesh Tripathi</h3>

                        <span className="faculty-role">
                            Finance Faculty
                        </span>

                        <p>
                            <strong>Qualification:</strong>
                            MBA (Finance & HR)
                        </p>

                        <p>
                            Expertise: SAP FICO, Tally Prime with AI,
                            Advanced Excel, Financial Accounting,
                            GST and Business Management.
                        </p>

                    </div> */}

                </div>

            </section>

            <Footer />
        </>
    );
}

export default About;