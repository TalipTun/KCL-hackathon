import React, { useState } from "react";
import "./Login.css";

const Login = ({ isOpen, onClose }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  if (!isOpen) return null;

  const handleLogin = (e) => {
    e.preventDefault(); // Prevent form submission
    if (username === "" || password === "") {
      alert("Please fill in all fields.");
    } else {
      onClose(); // Close modal only if fields are not empty
    }
  };

  return (
    <div className="loginOverlay">
      <div className="loginContainer">
        <div className="login-box">
          <h2>Login</h2>
          <form onSubmit={handleLogin}>
            <input
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <button type="submit">Login</button>
          </form>
          <button className="closeButton" onClick={onClose} style={{ marginTop: "10px" }}>
            Close
          </button>
          <hr />
          <p>Don't have an account? <a href="#">Sign up</a></p>
        </div>
      </div>
    </div>
  );
};

export default Login;