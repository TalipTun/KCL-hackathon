import React from "react";
import barley from "../pictures/barley.png"
import cabbage from "../pictures/cabbage.jpg"
import corn from "../pictures/corn.jpg"
import cotton from "../pictures/cotton.png"
import oat from "../pictures/oat-image.png"
import potato from "../pictures/potato.jpg"
import rice from "../pictures/rice.jpg"
import soybeans from "../pictures/soybeans.jpg"
import sugercane from "../pictures/sugercane.jpg"
import sunflower from "../pictures/sunflower.jpg"
import tomato from "../pictures/tomato.jpg"
import wheat from "../pictures/wheat.png"

const products = [
    { name: "barley", originalPrice: 20, img1: barley },
    { name: "cabbage", originalPrice: 10, img1: cabbage},
    { name: "corn", originalPrice: 10, img1: corn },
    { name: "cotton", originalPrice: 10, img1: cotton },
    { name: "oat", originalPrice: 20, img1: oat },
    { name: "potato", originalPrice: 10, img1: potato },
    { name: "rice", originalPrice: 10, img1: rice },
    { name: "soybeans", originalPrice: 10, img1: soybeans },
    { name: "sugercane", originalPrice: 20, img1: sugercane },
    { name: "sunflower", originalPrice: 10, img1: sunflower},
    { name: "tomato", originalPrice: 10, img1: tomato },
    { name: "what", originalPrice: 10, img1: wheat },
];

const ShoppingItems = () => {
    return (
        <div className="container w-screen ">
            <div className="row flex justify-center flex-wrap">
                {products.map((product, index) => (
                    <div key={index} className="col-md-3 col-sm-6 my-10 mx-3 border-1 border-black p-0">
                        <div className="product-grid">
                            <div className="product-image">
                                <img className="pic-1 w-full" src={product.img1} alt={product.name} />
                            </div>
                            <ul className="rating">
                                <li className="fa fa-star"></li>
                                <li className="fa fa-star"></li>
                                <li className="fa fa-star"></li>
                                <li className="fa fa-star"></li>
                                <li className="fa fa-star disable"></li>
                            </ul>
                            <div className="product-content flex flex-col items-center">
                                <h3 className="m-0">{product.name}</h3>
                                <div className="m-1">${product.originalPrice.toFixed(2)}</div>
                                <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold shadow-md transition duration-300 ease-in-out transform hover:scale-105 gap-1 flex flex-row justify-center items-center !rounded-md w-40 h-10 mb-3">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="w-5 h-5">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13l-1.5 7m1.5-7L3 5m4 8h10m-7 7a1 1 0 100-2 1 1 0 000 2zm6 0a1 1 0 100-2 1 1 0 000 2z" />
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