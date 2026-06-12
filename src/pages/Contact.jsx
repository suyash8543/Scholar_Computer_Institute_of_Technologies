import Navbar from "../components/common/Navbar";
import Footer from "../components/common/Footer";

function Contact() {
    return (
        <>
            <Navbar />

            <section className="contact-page">

                <div className="contact-wrapper">

                    <div className="contact-title">
                        <h1>Contact Us</h1>

                        <p>
                            We would love to hear from you
                        </p>
                    </div>

                    <div className="contact-grid">

                        {/* LEFT FORM */}

                        <div className="contact-card">

                            <h2>Send Message</h2>

                            <form className="contact-form">

                                <input
                                    type="text"
                                    placeholder="Your Name"
                                />

                                <input
                                    type="email"
                                    placeholder="Your Email"
                                />

                                <textarea
                                    placeholder="Your Message"
                                ></textarea>

                                <button className="contact-btn">
                                    Send Message
                                </button>

                            </form>
                        </div>

                        {/* RIGHT INFO */}

                        <div className="contact-info">

                            <div className="contact-map">

                                <iframe
                                    src="https://maps.google.com/maps?q=Tripula%20Chauraha%20Raebareli&t=&z=15&ie=UTF8&iwloc=&output=embed"
                                    allowFullScreen=""
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                ></iframe>

                            </div>

                            <div className="contact-details">

                                <h2>Get In Touch</h2>

                                <div className="contact-item">
                                    <h3>Address</h3>

                                    <p>
                                        Next to SRM Tata Motors, Tripula Chauraha, Raebareli, Uttar Pradesh, India – 229001
                                    </p>
                                </div>

                                <div className="contact-item">
                                    <h3>Phone</h3>

                                    <p>
                                        +91 80040 36061
                                    </p>
                                </div>

                                <div className="contact-item">
                                    <h3>Email</h3>

                                    <p>
                                        writeus.scholarcomputers@gmail.com
                                    </p>
                                </div>

                                <div className="contact-social">

                                    <div className="social-icon">
                                        f
                                    </div>

                                    <div className="social-icon">
                                        in
                                    </div>

                                    <div className="social-icon">
                                        ig
                                    </div>

                                </div>

                            </div>
                        </div>

                    </div>
                </div>
            </section>

            <Footer />
        </>
    );
}

export default Contact;