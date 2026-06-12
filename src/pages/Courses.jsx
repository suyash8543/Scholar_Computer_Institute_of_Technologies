import Navbar from "../components/common/Navbar";
import Footer from "../components/common/Footer";

import {
    FaLaptopCode,
    FaPython,
    FaChartLine,
    FaVideo,
    FaWordpress,
    FaPalette,
} from "react-icons/fa";

import {
    SiSap,
} from "react-icons/si";

import {
    CgTally,
} from "react-icons/cg";

function Courses() {

    const courses = [

        {
            title: "Web Development",
            icon: <FaLaptopCode />,
            level: "Most Popular",
            duration: "6 Months",
            image:
                "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
            description:
                "Learn HTML, CSS, JavaScript, React, Node.js and build real-world projects.",
        },

        {
            title: "Python Programming",
            icon: <FaPython />,
            level: "Trending",
            duration: "4 Months",
            image:
                "https://images.unsplash.com/photo-1526379095098-d400fd0bf935",
            description:
                "Master Python for AI, automation, backend development and data science.",
        },

        {
            title: "Tally Prime + GST",
            icon: <CgTally />,
            level: "Job Ready",
            duration: "3 Months",
            image:
                "https://images.unsplash.com/photo-1554224155-6726b3ff858f",
            description:
                "Accounting, GST filing, inventory management and business reports.",
        },

        {
            title: "SAP FICO",
            icon: <SiSap />,
            level: "High Demand",
            duration: "5 Months",
            image:
                "https://images.unsplash.com/photo-1516321318423-f06f85e504b3",
            description:
                "Professional SAP finance training with practical ERP workflow.",
        },

        {
            title: "Graphic Designing",
            icon: <FaPalette />,
            level: "Creative",
            duration: "4 Months",
            image:
                "https://images.unsplash.com/photo-1561070791-2526d30994b5",
            description:
                "Learn Photoshop, Canva, branding, social media and advertising design.",
        },

        {
            title: "Digital Marketing",
            icon: <FaChartLine />,
            level: "Fast Growing",
            duration: "3 Months",
            image:
                "https://images.unsplash.com/photo-1460925895917-afdab827c52f",
            description:
                "SEO, Meta Ads, Google Ads, YouTube growth and content marketing.",
        },

        {
            title: "Video Editing",
            icon: <FaVideo />,
            level: "Popular",
            duration: "2 Months",
            image:
                "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d",
            description:
                "Professional video editing using Premiere Pro and After Effects.",
        },

        {
            title: "WordPress",
            icon: <FaWordpress />,
            level: "Freelancing",
            duration: "2 Months",
            image:
                "https://images.unsplash.com/photo-1461749280684-dccba630e2f6",
            description:
                "Build modern WordPress websites and blogs without coding.",
        },

    ];

    return (
        <>
            <Navbar />

            <section className="modern-courses">

                <div className="courses-wrapper">

                    {/* TOP */}

                    <div className="courses-top">

                        <span className="courses-tag">
                            PROFESSIONAL TRAINING
                        </span>

                        <h1>
                            Upgrade Your Career With
                            <span> Industry Skills</span>
                        </h1>

                        <p>
                            Practical computer courses designed for jobs,
                            freelancing and business growth.
                        </p>

                    </div>

                    {/* FEATURED */}

                    <div className="featured-course">

                        <div className="featured-left">

                            <div className="featured-icon">
                                <FaLaptopCode />
                            </div>

                            <div>

                                <h2>
                                    Full Stack Web Development
                                </h2>

                                <p>
                                    Build real-world websites, admin panels,
                                    APIs and deployment-ready projects.
                                </p>

                            </div>

                        </div>

                        <button>
                            Enquire Now
                        </button>

                    </div>

                    {/* GRID */}

                    <div className="modern-grid">

                        {courses.map((course, index) => (

                            <div className="modern-card" key={index}>

                                <div className="modern-image">

                                    <img
                                        src={course.image}
                                        alt={course.title}
                                    />

                                    <div className="course-badge">
                                        {course.level}
                                    </div>

                                </div>

                                <div className="modern-content">

                                    <div className="modern-icon">
                                        {course.icon}
                                    </div>

                                    <div className="course-duration">
                                        {course.duration}
                                    </div>

                                    <h3>
                                        {course.title}
                                    </h3>

                                    <p>
                                        {course.description}
                                    </p>

                                    <button>
                                        View Details
                                    </button>

                                </div>

                            </div>

                        ))}

                    </div>

                </div>

            </section>

            <Footer />
        </>
    );
}

export default Courses;