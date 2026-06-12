import {
    FaCertificate,
    FaMicrophone,
    FaUserTie,
    FaBullseye,
    FaDesktop,
    FaFileAlt,
} from "react-icons/fa";

function BonusCourses() {

    const bonuses = [

        {
            icon: <FaCertificate />,
            title: "CCC Certification",
            image:
                "https://images.unsplash.com/photo-1523240795612-9a054b0db644",
        },

        {
            icon: <FaMicrophone />,
            title: "Spoken English",
            image:
                "https://images.unsplash.com/photo-1522202176988-66273c2fd55f",
        },

        {
            icon: <FaUserTie />,
            title: "Personality Development",
            image:
                "https://images.unsplash.com/photo-1500648767791-00dcc994a43e",
        },

        {
            icon: <FaBullseye />,
            title: "Mock Interview",
            image:
                "https://images.unsplash.com/photo-1552664730-d307ca884978",
        },

        {
            icon: <FaDesktop />,
            title: "System Installation",
            image:
                "https://images.unsplash.com/photo-1515879218367-8466d910aaa4",
        },

        {
            icon: <FaFileAlt />,
            title: "Online Test Series",
            image:
                "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40",
        },

    ];

    return (

        <section className="bonus-section">

            <div className="bonus-top">

                <span>
                    BONUS WITH EVERY COURSE
                </span>

                <h2>
                    Get 6 Courses
                    <span> Absolutely FREE!</span>
                </h2>

                <p>
                    Enroll in any core course and unlock these bonus
                    programs at zero extra cost.
                </p>

            </div>

            <div className="bonus-grid">

                {bonuses.map((item, index) => (

                    <div className="bonus-card" key={index}>

                        <img src={item.image} alt={item.title} />

                        <div className="bonus-overlay">

                            <div className="bonus-icon">
                                {item.icon}
                            </div>

                            <h3>{item.title}</h3>

                        </div>

                    </div>

                ))}

            </div>

        </section>
    );
}

export default BonusCourses;