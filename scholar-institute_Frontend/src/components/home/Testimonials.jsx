import testimonials from "../../data/testimonialsData";

function Testimonials() {
    return (
        <section className="testimonial-section">

            <div className="container">

                <div className="testimonial-title">

                    <h2>Testimonials</h2>

                    <p>
                        What our students say about us
                    </p>

                </div>

                <div className="testimonial-grid">

                    {testimonials.map((item) => (
                        <div
                            key={item.id}
                            className="testimonial-card"
                        >

                            <p className="testimonial-message">
                                "{item.message}"
                            </p>

                            <div className="testimonial-user">

                                <img
                                    src={`https://randomuser.me/api/portraits/men/${item.id + 20}.jpg`}
                                    alt={item.name}
                                />

                                <div>
                                    <h4>{item.name}</h4>

                                    <p>Student</p>
                                </div>

                            </div>

                        </div>
                    ))}

                </div>
            </div>
        </section>
    );
}

export default Testimonials;