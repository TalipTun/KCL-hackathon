import React from "react";

const Navbar = () => {
  return (
    <nav className="bg-gray-800 p-4 flex justify-between items-center">
      <ul className="flex space-x-0">
        <li>
          <a
            href="#home"
            className="flex items-center text-white px-4 py-2 rounded-full hover:bg-gray-700 transition-all duration-300"
          >
            <span className="mr-2">🏠</span> Home
          </a>
        </li>
        <li>
          <a
            href="#calculator"
            className="flex items-center text-white px-4 py-2 rounded-full hover:bg-gray-700 transition-all duration-300"
          >
            <span className="mr-2">🧮</span> Calculator
          </a>
        </li>
      </ul>

      <ul className="flex space-x-0">
        <li>
          <a
            href="#signup"
            className="flex items-center text-white px-4 py-2 rounded-full hover:bg-gray-700 transition-all duration-300"
          >
            <span className="mr-2">📝</span> Signup
          </a>
        </li>
        <li>
          <a
            href="#cart"
            className="flex items-center text-white px-4 py-2 rounded-full hover:bg-gray-700 transition-all duration-300"
          >
            <span className="mr-2">🛒</span> Cart
          </a>
        </li>
        <li>
          <a
            href="#favourites"
            className="flex items-center text-white px-4 py-2 rounded-full hover:bg-gray-700 transition-all duration-300"
          >
            <span className="mr-2">❤️</span> Favourites
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
