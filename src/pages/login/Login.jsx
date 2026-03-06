import { useEffect, useState } from "react";
import { loginUser } from "../../api/authApi"
import { useNavigate } from "react-router-dom";
import './Login.css'

const Login = () => {
    const [error, setError] = useState("");

    const navigate = useNavigate();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = async (e) => {
        e.preventDefault();

        try {
            const user = await loginUser(email, password);

            localStorage.setItem("user", JSON.stringify(user));


            if (user.role === "ADMIN") {
                window.location.href = "/admin";
            } else {
                window.location.href = "/";
            }

        } catch (error) {
            setError("Invalid credentials");
        }
    };

    return (

        <div className="login-container">
            <form className="login-form" onSubmit={handleLogin}>

                <h2>Login</h2>

                <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />

                <button type="submit">
                    Login
                </button>
                <p className="login-help">
                    Demo: admin@gmail.com / 123
                </p>
                {error && <p className="login-error">{error}</p>}
            </form>

        </div>
    );
};

export default Login;