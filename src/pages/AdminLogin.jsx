import React, { useState } from "react";
import '../styles/admin.css';
import { useNavigate } from "react-router";
import Logo from '../assets/logo.JPG';

function AdminLogin() {
  const [showPassword, setShowPassword] = useState(false);
  const [username, setUsername ] = useState("");
  const [password, setPassword ] = useState("");

  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");
    setIsLoading(true);
    try{
      const res = await fetch('https://ifedore-backend.onrender.com/api/admin/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password })
      })

        const data = await res.json()

        if (!res.ok) {
            setError(data.message || 'Invalid credentials')
            return
        }

        localStorage.setItem('token', data.token)
        navigate('/admin/dashboard')
    } catch(error){
        console.error(error)
        console.log("Error logging in");
        setError(error.response?.data?.message || "Invalid credentials")
    } finally{
        setIsLoading(false);
    }
  }

  return (
    <div className="login-container">
      <div className="login-card">
        <div className="login-header">
          <img src={Logo} alt="Ifedore LGA" className="login-logo" />
          <div className="login-header-text">
            <h1>Ifedore LGA</h1>
            <p>Content Management System</p>
          </div>
        </div>

        <div className="login-divider"></div>

        <div className="login-body">
          <h2>Admin Login</h2>
          <p className="login-subtitle">Enter your credentials to access the dashboard</p>

          <form className="login-form" onSubmit={handleLogin}>
            <div className="input-group">
              <label htmlFor="username">Username</label>
              <input
                id="username"
                type="text"
                placeholder="Enter your username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>

            <div className="input-group">
              <label htmlFor="password">Password</label>
              <div className="password-wrapper">
                <input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <span
                  className="toggle-password"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? "Hide" : "Show"}
                </span>
              </div>
            </div>

            <button type="submit" className="login-btn" disabled={isLoading}>
              {isLoading ? "Logging in..." : "Login"}
            </button>
          </form>
        </div>

        <p className="login-footer">
          Ifedore Local Government Area — Ondo State, Nigeria
        </p>
      </div>
    </div>
  )
}

export default AdminLogin;