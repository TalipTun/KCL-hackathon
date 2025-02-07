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

const products = [
  { name: "barley", originalPrice: 20, img1: barley, benefit: "Used for biofuel, reducing carbon footprint." },
  { name: "cabbage", originalPrice: 10, img1: cabbage, benefit: "Improves soil health and requires minimal pesticides." },
  { name: "corn", originalPrice: 10, img1: corn, benefit: "Can be used for bioethanol, a renewable energy source." },
  { name: "cotton", originalPrice: 10, img1: cotton, benefit: "Supports sustainable textile production." },
  { name: "oat", originalPrice: 20, img1: oat, benefit: "Enhances soil fertility and reduces erosion." },
  { name: "potato", originalPrice: 10, img1: potato, benefit: "Low water consumption compared to other staple crops." },
  { name: "rice", originalPrice: 10, img1: rice, benefit: "Can be cultivated using water-efficient farming methods." },
  { name: "soybeans", originalPrice: 10, img1: soybeans, benefit: "Fixes nitrogen in the soil, reducing fertilizer needs." },
  { name: "sugercane", originalPrice: 20, img1: sugercane, benefit: "A key source for biodegradable packaging and biofuels." },
  { name: "sunflower", originalPrice: 10, img1: sunflower, benefit: "Supports pollinators and biodiversity." },
  { name: "tomato", originalPrice: 10, img1: tomato, benefit: "Grows efficiently with minimal environmental impact." },
  { name: "wheat", originalPrice: 10, img1: wheat, benefit: "A resilient crop that grows in diverse climates with minimal inputs." },
];

const ShoppingItems = () => {
  return (
    <div className="container my-5">
      <h1 className="text-3xl font-bold text-center mb-6">Sustainable Crops for a Greener Future</h1>
      <p className="text-center text-gray-700 mb-8 max-w-2xl mx-auto">
        Our crops are carefully selected to promote environmental sustainability. From reducing carbon emissions
        to improving soil health, each crop plays a role in preserving our planet.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product, index) => (
          <div key={index} className="p-4 border rounded-lg shadow-md bg-green-100 text-center">
            <img src={product.img1} alt={product.name} className="w-full h-40 object-cover rounded" />
            <h3 className="text-xl font-semibold text-gray-800 mt-4">{product.name}</h3>
            <p className="text-md text-gray-600">${product.originalPrice.toFixed(2)}</p>
            <p className="text-sm text-gray-700 mt-2">{product.benefit}</p>
            <button className="w-full mt-3 bg-green-500 text-white py-2 rounded hover:bg-green-600">
              Add To Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ShoppingItems;
