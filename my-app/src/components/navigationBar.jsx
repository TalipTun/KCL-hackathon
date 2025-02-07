import React, { useState } from "react";
import { Link } from "react-router-dom"; // Import Link
import Login from "./Login";
import SignUp from "./SignUp";

const Navbar = () => {
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isSignUpOpen, setIsSignUpOpen] = useState(false);

  const openLogin = () => {
    setIsLoginOpen(true);
    setIsSignUpOpen(false); // Close SignUp if open
  };

  const openSignUp = () => {
    setIsSignUpOpen(true);
    setIsLoginOpen(false); // Close Login if open
  };

  const closeModals = () => {
    setIsLoginOpen(false);
    setIsSignUpOpen(false);
  };

  return (
    <>
      <nav className="navbar navbar-expand-lg bg-green-500">
        <div className="container-fluid">
          <div className="navbar-collapse show" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item" to="/home">
                <Link className="navbar-brand d-flex align-items-center text-white" to="/home">AgriTrack</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active text-white" to="/home">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-white" to="/shoppingPage">Shop</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-white" to="/calculator">Soil Calculator</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-white" to="/disease-detector">Disease Identifier</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-white" to="/weather-condition">Weather Forecast</Link>
              </li>
            </ul>
            <button
              className="btn btn-outline-light me-2"
              type="button"
              onClick={openLogin}
            >
              Login
            </button>
            <button
              className="btn btn-light"
              type="button"
              onClick={openSignUp}
            >
              Sign Up
            </button>
          </div>
        </div>
      </nav>

      {/* Login and SignUp Modals */}
      <Login isOpen={isLoginOpen} onClose={closeModals} />
      <SignUp isOpen={isSignUpOpen} onClose={closeModals} />
    </>
  );
};

export default Navbar;
