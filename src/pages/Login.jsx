import Navbar from "../components/common/Navbar";
import Footer from "../components/common/Footer";
import { Link } from "react-router-dom";

function Login() {
    return (
        <>
            <Navbar />

            <section className="login-page">

                <div className="login-wrapper">

                    {/* LEFT */}

                    <div className="login-left">

                        <h1>Welcome Back!</h1>

                        <p>
                            Login to your account and continue
                            your learning journey with us.
                        </p>

                        <div className="login-features">

                            <div className="login-feature">
                                <div className="login-feature-icon">
                                    🎓
                                </div>

                                <div>
                                    <h3>Quality Education</h3>

                                    <p>
                                        Access industry standard courses
                                    </p>
                                </div>
                            </div>

                            <div className="login-feature">
                                <div className="login-feature-icon">
                                    👨‍🏫
                                </div>

                                <div>
                                    <h3>Expert Faculty</h3>

                                    <p>
                                        Learn from experienced mentors
                                    </p>
                                </div>
                            </div>

                            <div className="login-feature">
                                <div className="login-feature-icon">
                                    🏆
                                </div>

                                <div>
                                    <h3>Certificates</h3>

                                    <p>
                                        Earn recognized certificates
                                    </p>
                                </div>
                            </div>

                        </div>
                    </div>

                    {/* RIGHT */}

                    <div className="login-right">

                        <div className="login-box">

                            <h2>Login</h2>

                            <p className="subtitle">
                                Enter your credentials to access your account
                            </p>

                            <form className="login-form">

                                <div className="form-group">
                                    <label>Student Email</label>

                                    <input
                                        type="email"
                                        placeholder="Enter your email"
                                    />
                                </div>

                                <div className="form-group">
                                    <label>Password</label>

                                    <input
                                        type="password"
                                        placeholder="Enter your password"
                                    />
                                </div>

                                <div className="login-options">

                                    <label>
                                        <input type="checkbox" />
                                        Remember me
                                    </label>

                                    <a href="#">
                                        Forgot password?
                                    </a>
                                </div>

                                <button className="login-btn">
                                    Login
                                </button>

                            </form>

                            <div className="login-divider">
                                or continue with
                            </div>

                            <div className="social-login">

                                <button className="social-btn">
                                    Google
                                </button>

                                <button className="social-btn">
                                    Microsoft
                                </button>

                            </div>

                            <div className="register-text">

                                Don’t have an account?

                                <Link to="/register">
                                    Register here
                                </Link>

                            </div>

                        </div>
                    </div>

                </div>
            </section>

            <Footer />
        </>
    );
}

export default Login;