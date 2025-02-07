// src/pages/Shop.jsx

import '../styling/test.css';

import React from "react";
import barley from "../pictures/barley.png";
import cabbage from "../pictures/cabbage.jpg";
import corn from "../pictures/corn.jpg";
import cotton from "../pictures/cotton.png";
import oat from "../pictures/oat-image.png";
import potato from "../pictures/potato.jpg";
import rice from "../pictures/rice.jpg";
import soybeans from "../pictures/soybeans.jpg";
import sugercane from "../pictures/sugercane.jpg";
import sunflower from "../pictures/sunflower.jpg";
import tomato from "../pictures/tomato.jpg";
import wheat from "../pictures/wheat.png";

// Product data
const products = [
  { name: "barley", originalPrice: 20, img1: barley },
  { name: "cabbage", originalPrice: 10, img1: cabbage },
  { name: "corn", originalPrice: 10, img1: corn },
  { name: "cotton", originalPrice: 10, img1: cotton },
  { name: "oat", originalPrice: 20, img1: oat },
  { name: "potato", originalPrice: 10, img1: potato },
  { name: "rice", originalPrice: 10, img1: rice },
  { name: "soybeans", originalPrice: 10, img1: soybeans },
  { name: "sugercane", originalPrice: 20, img1: sugercane },
  { name: "sunflower", originalPrice: 10, img1: sunflower },
  { name: "tomato", originalPrice: 10, img1: tomato },
  { name: "wheat", originalPrice: 10, img1: wheat },
];

const ShoppingItems = () => {
  return (
    <div className="container my-5">

        <h2>Shopping Items</h2>
      {/* Product Grid - 4 images per row on large screens */}
      <div className="row">
        {products.map((product, index) => (
          <div
            key={index}
            className="col-lg-3 col-md-4 col-sm-6 mb-4" // 4 per row on large, 3 on medium, and 2 on small screens
          >
            <div className="product-card border rounded-lg overflow-hidden shadow-md">
              {/* Product Image */}
              <div className="product-image">
                <img
                  src={product.img1}
                  alt={product.name}
                  className="w-100 h-56 object-cover"
                />
              </div>

              {/* Product Content */}
              <div className="product-content text-center p-4">
                <h3 className="text-lg font-semibold text-gray-800">{product.name}</h3>
                <div className="text-md text-gray-600 mt-2">${product.originalPrice.toFixed(2)}</div>
                <button className="add-to-cart-button w-full mt-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                    stroke="currentColor"
                    className="w-5 h-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13l-1.5 7m1.5-7L3 5m4 8h10m-7 7a1 1 0 100-2 1 1 0 000 2zm6 0a1 1 0 100-2 1 1 0 000 2z"
                    />
                  </svg>
                  Add To Cart
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ShoppingItems;