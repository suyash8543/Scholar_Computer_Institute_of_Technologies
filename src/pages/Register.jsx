import { useState } from "react";
import Navbar from "../components/common/Navbar";
import Footer from "../components/common/Footer";

function Register() {

    const [formData, setFormData] = useState({
        fullName: "",
        email: "",
        phone: "",
        course: "",
        password: "",
        confirmPassword: "",
    });

    const handleChange = (e) => {

        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e) => {

        e.preventDefault();

        if (
            formData.password !==
            formData.confirmPassword
        ) {

            alert("Passwords do not match");

            return;
        }

        const enrollmentNo =
            "SCH2026" +
            Math.floor(1000 + Math.random() * 9000);

        alert(
            `Registration Successful!\nEnrollment No: ${enrollmentNo}`
        );
    };

    return (
        <>
            <Navbar />

            <section className="register-page">

                <div className="register-container">

                    {/* LEFT */}

                    <div className="register-left">

                        <h1>
                            Join Scholar Institute
                        </h1>

                        <p>
                            Start your journey towards a successful career
                            with industry-focused courses and expert guidance.
                        </p>

                        <img
                            src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f"
                            alt="Students"
                        />

                    </div>

                    {/* RIGHT */}

                    <div className="register-right">

                        <div className="register-card">

                            <h2>Create Account</h2>

                            <p>
                                Register yourself and get your enrollment number
                            </p>

                            <form onSubmit={handleSubmit}>

                                <div className="form-group">

                                    <label>Full Name</label>

                                    <input
                                        type="text"
                                        name="fullName"
                                        placeholder="Enter full name"
                                        onChange={handleChange}
                                        required
                                    />

                                </div>

                                <div className="form-group">

                                    <label>Email Address</label>

                                    <input
                                        type="email"
                                        name="email"
                                        placeholder="Enter email"
                                        onChange={handleChange}
                                        required
                                    />

                                </div>

                                <div className="form-group">

                                    <label>Phone Number</label>

                                    <input
                                        type="text"
                                        name="phone"
                                        placeholder="Enter phone number"
                                        onChange={handleChange}
                                        required
                                    />

                                </div>

                                <div className="form-group">

                                    <label>Select Course</label>

                                    <select
                                        name="course"
                                        onChange={handleChange}
                                        required
                                    >

                                        <option value="">
                                            Choose Course
                                        </option>

                                        <option>
                                            O Level
                                        </option>

                                        <option>
                                            Tally Prime
                                        </option>

                                        <option>
                                            Python Programming
                                        </option>

                                    </select>

                                </div>

                                <div className="form-group">

                                    <label>Password</label>

                                    <input
                                        type="password"
                                        name="password"
                                        placeholder="Create password"
                                        onChange={handleChange}
                                        required
                                    />

                                </div>

                                <div className="form-group">

                                    <label>Confirm Password</label>

                                    <input
                                        type="password"
                                        name="confirmPassword"
                                        placeholder="Confirm password"
                                        onChange={handleChange}
                                        required
                                    />

                                </div>

                                <button
                                    type="submit"
                                    className="register-btn"
                                >
                                    Register Now
                                </button>

                            </form>

                        </div>
                    </div>

                </div>
            </section>

            <Footer />
        </>
    );
}

export default Register;