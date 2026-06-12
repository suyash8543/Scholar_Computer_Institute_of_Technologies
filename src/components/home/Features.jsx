function Features() {

    const features = [

        {
            title: "Digital Projector Classes",
            desc: "Interactive smart classes conducted using HD projectors for better visual learning and understanding.",
            icon: "📽️",
        },

        {
            title: "High-Speed Campus Wi-Fi",
            desc: "Unlimited high-speed internet for research, coding practice, online learning and digital projects.",
            icon: "🌐",
        },

        {
            title: "Advanced Computer Lab",
            desc: "Modern computer systems equipped with the latest software and industry-standard tools.",
            icon: "💻",
        },

        {
            title: "Integrated Typing Lab",
            desc: "Free Hindi & English typing practice with every course to improve speed and accuracy.",
            icon: "⌨️",
        },

        {
            title: "Expert Qualified Trainers",
            desc: "Learn from highly experienced trainers with strong academic and industry backgrounds.",
            icon: "👨‍🏫",
        },

        {
            title: "Dedicated Doubt Sessions",
            desc: "Personal guidance and one-to-one doubt clearing sessions for every student.",
            icon: "❓",
        },

        {
            title: "Weekly Chapter Tests",
            desc: "Regular chapter-wise assessments to monitor progress and improve performance.",
            icon: "📝",
        },

        {
            title: "Monthly Mega Classes",
            desc: "Special 3-hour expert sessions covering advanced topics, career guidance and exam preparation.",
            icon: "📚",
        },

        {
            title: "Rapid Assessment Tests (RAT)",
            desc: "Performance tracking system to evaluate learning progress and skill development.",
            icon: "📊",
        },

        {
            title: "Industry-Oriented Training",
            desc: "Practical projects, real-world assignments and job-ready skill development.",
            icon: "🚀",
        },

        {
            title: "Certification Programs",
            desc: "Government-recognized and professional certifications after successful completion.",
            icon: "🏆",
        },

        {
            title: "Career Guidance & Placement Support",
            desc: "Interview preparation, resume building and career counseling for students.",
            icon: "🎯",
        },

    ];

    return (

        <section className="why-section">

            <div className="container">

                <div className="why-top">

                    <span className="why-tag">
                        WHY SCHOLAR INSTITUTE
                    </span>

                    <h2>
                        Everything You Need To Build A Successful Career
                    </h2>

                    <p>
                        Smart classrooms, expert faculty, hands-on training,
                        certifications and career guidance designed to help
                        students succeed in today's competitive world.
                    </p>

                </div>

                <div className="why-grid">

                    {features.map((feature, index) => (

                        <div
                            className="why-card"
                            key={index}
                        >

                            <div className="why-icon">
                                {feature.icon}
                            </div>

                            <h3>
                                {feature.title}
                            </h3>

                            <p>
                                {feature.desc}
                            </p>

                        </div>

                    ))}

                </div>

            </div>

        </section>
    );
}

export default Features;