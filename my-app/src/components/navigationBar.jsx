import React from "react";
import { Link } from "react-router-dom"; // Add this import

const Navbar = () => {
  return (
    <nav className="bg-gray-800 p-4 flex justify-between items-center">
      <ul className="flex space-x-0">
        <li>
        <Link to="/home">
            <button className="flex items-center text-white px-4 py-2 rounded-full hover:bg-gray-700 transition-all duration-300">
                homebutton
            </button>
        </Link>
        </li>
        <li>
        <Link to="/calculator">
            <button className="flex items-center text-white px-4 py-2 rounded-full hover:bg-gray-700 transition-all duration-300">
                calculatorbutton
            </button>
        </Link>
        </li>
      </ul>

      <ul className="flex space-x-0">
        <li>
        <Link to="/signup">
            <button className="flex items-center text-white px-4 py-2 rounded-full hover:bg-gray-700 transition-all duration-300">
                signupbutton
            </button>
        </Link>
        </li>
        <li>
        <Link to="/cart">
            <button className="flex items-center text-white px-4 py-2 rounded-full hover:bg-gray-700 transition-all duration-300">
                cartbutton
            </button>
        </Link>
        </li>
        <li>
        <Link to="/favourites">
            <button className="flex items-center text-white px-4 py-2 rounded-full hover:bg-gray-700 transition-all duration-300">
                favouritesbutton
            </button>
        </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
