import { useState } from "react";
import "../index.css";

import { useNavigate } from "react-router-dom";
import api from "../services/api";

function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

const [email, setEmail] = useState("");
const [password, setPassword] = useState("");
const [error, setError] = useState("");
const handleLogin = async (e) => {
  e.preventDefault();

  setError("");

  if (!email || !password) {
    setError("Please enter both email and password.");
    return;
  }

  try {
    const response = await api.post("/login", {
      email,
      password,
    });

    if (response.data.success) {
      navigate("/dashboard");
    }
  } catch (err) {
    setError("Invalid Email or Password");
  }
};
  return (
    <div className="login-container">

      <div className="bg-shape shape1"></div>
      <div className="bg-shape shape2"></div>

      <div className="login-card">

        <div className="left-panel">

          <div className="brand">

            <div className="logo">
              🥷
            </div>

            <h1>NinjaLogin</h1>

            <p>
              Fast • Secure • Invisible
            </p>

          </div>

          <div className="welcome-text">

            <h2>
              Welcome Back
            </h2>

            <p>
              Securely access your dashboard and continue your journey.
            </p>

          </div>

        </div>

        <div className="right-panel">

          <h2>Login</h2>

         <form onSubmit={handleLogin}>

            <div className="input-box">

              <label>Email Address</label>

              <div className="input-field">

                <span className="icon">📧</span>

                <input
  type="email"
  placeholder="Enter your email"
  value={email}
  onChange={(e) => setEmail(e.target.value)}
/>
              </div>

            </div>

            <div className="input-box">

              <label>Password</label>

              <div className="input-field">

                <span className="icon">
                  🔒
                </span>

                <input
  type={showPassword ? "text" : "password"}
  placeholder="Enter your password"
  value={password}
  onChange={(e) => setPassword(e.target.value)}
/>

                <span
                  className="eye"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? "🙈" : "👁"}
                </span>

              </div>

            </div>

            <div className="options">

              <label>

                <input type="checkbox" />

                Remember Me

              </label>

              <a href="/">Forgot Password?</a>

            </div>
            {error && (
  <p className="error-message">
    {error}
  </p>
)}

            <button className="login-btn">

              Login

            </button>

            <p className="signup">

              Don't have an account?

              <span> Sign Up</span>

            </p>

          </form>

        </div>

      </div>

    </div>
  );
}

export default Login;