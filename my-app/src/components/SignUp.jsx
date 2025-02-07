import React, { useState } from "react";
import "../styling/Login.css";

const SignUp = ({ isOpen, onClose }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  if (!isOpen) return null;

  const handleSignUp = (e) => {
    e.preventDefault(); // Prevent form submission
    if (username === "" || password === "" || confirmPassword === "") {
      alert("Please fill in all fields.");
    } else if (password !== confirmPassword) {
      alert("Passwords do not match.");
    } else {
      onClose(); // Close modal only if all fields are valid
    }
  };

  return (
    <div className="loginOverlay">
      <div className="loginContainer">
        <div className="login-box" style={{ position: "relative" }}>
          <button
            className="closeIcon"
            onClick={onClose}
            style={{
              position: "absolute",
              top: "10px",
              right: "10px",
              width: "30px", // Adjust width
              height: "30px", // Adjust height
              color: "red",
              fontSize: "24px", // Increase font size
              background: "none",
              border: "none",
              marginTop: "-10px",
              marginRight: "5px"
            }}
          >
            ×
          </button>
          <h2>Sign Up</h2>
          <form onSubmit={handleSignUp}>
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
            <input
              type="password"
              placeholder="Confirm Password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
            <button type="submit">Sign Up</button>
          </form>
          <button className="closeButton" onClick={onClose} style={{ marginTop: "10px" }}>
            Close
          </button>
          <hr />
          <p>Already have an account? <a href="#">Sign in</a></p>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
