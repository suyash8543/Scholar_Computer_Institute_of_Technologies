import {
    FaDesktop,
    FaChartLine,
    FaVideo,
    FaWordpress,
    FaPalette,
    FaFileExcel,
} from "react-icons/fa";

import {
    SiSap,
} from "react-icons/si";

import {
    CgTally,
} from "react-icons/cg";

function CoursesPreview() {

    const courses = [

        {
            title: "CCC",
            icon: "📝",
            tag: "NIELIT",
        },

        {
            title: "O Level",
            icon: "⭐",
            tag: "GOVT.",
        },

        {
            title: "DCA",
            icon: <FaDesktop />,
        },

        {
            title: "DCA Pro",
            icon: <FaDesktop />,
            tag: "ADVANCED",
        },

        {
            title: "ADCA",
            icon: "✅",
        },

        {
            title: "PGDCA",
            icon: "🛡️",
        },

        {
            title: "Tally Prime + GST",
            icon: <CgTally />,
            tag: "POPULAR",
        },

        {
            title: "SAP FICO",
            icon: <SiSap />,
            tag: "HIGH DEMAND",
        },

        {
            title: "Advance Excel (M.I.S.)",
            icon: "📊",
        },

        {
            title: "Graphic Designing",
            icon: <FaPalette />,
        },

        {
            title: "WordPress",
            icon: <FaWordpress />,
        },

        {
            title: "DTP",
            icon: "🖥️",
        },

        {
            title: "Digital Marketing",
            icon: <FaChartLine />,
            tag: "TRENDING",
        },

        {
            title: "Video Editing",
            icon: <FaVideo />,
        },

    ];

    return (

        <section className="popular-courses-section">

            <div className="container">

                <div className="course-heading">

                    <span>POPULAR COURSES</span>

                    <h2>
                        Build Your Career With Professional Courses
                    </h2>

                    <p>
                        Industry-ready computer courses with practical
                        training and certification.
                    </p>

                </div>

                <div className="popular-grid">

                    {courses.map((course, index) => (

                        <div className="popular-card" key={index}>

                            <div className="popular-icon">
                                {course.icon}
                            </div>

                            <h3>{course.title}</h3>

                            {course.tag && (
                                <div className="course-tag">
                                    {course.tag}
                                </div>
                            )}

                        </div>

                    ))}

                </div>

            </div>

        </section>

    );
}

export default CoursesPreview;