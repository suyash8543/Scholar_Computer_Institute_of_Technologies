import { useState } from "react";
import { useNavigate } from "react-router-dom";

function AdminLogin() {

    const navigate = useNavigate();

    const [email, setEmail] = useState("");

    const [password, setPassword] = useState("");

    const handleLogin = (e) => {

        e.preventDefault();

        if (
            email === "admin@scholar.com" &&
            password === "admin123"
        ) {

            localStorage.setItem("admin", true);

            navigate("/admin/dashboard");

        } else {

            alert("Invalid Credentials");

        }
    };

    return (

        <section className="admin-login-page">

            <div className="admin-login-box">

                <h1>
                    Scholar Admin
                </h1>

                <p>
                    Manage courses, tests and website content
                </p>

                <form onSubmit={handleLogin}>

                    <input
                        type="email"
                        placeholder="Admin Email"
                        onChange={(e) =>
                            setEmail(e.target.value)
                        }
                    />

                    <input
                        type="password"
                        placeholder="Password"
                        onChange={(e) =>
                            setPassword(e.target.value)
                        }
                    />

                    <button type="submit">
                        Login
                    </button>

                </form>

            </div>

        </section>
    );
}

export default AdminLogin;