// src/components/ProductDetails.js
import { useState } from 'react';
import { FaChevronLeft, FaChevronRight, FaShoppingCart, FaStar, FaChevronDown } from 'react-icons/fa';

const ProductDetails = () => {
    const [currentProduct, setCurrentProduct] = useState(0);

    const products = [
        { name: "Fresh Apples", price: 2.99, image: "https://images.unsplash.com/photo-1568702846914-96b305d2aaeb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80", description: "Crisp and juicy apples, perfect for snacking or baking.", rating: 4.5 },
        { name: "Whole Grain Bread", price: 3.49, image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1472&q=80", description: "Nutritious whole grain bread, freshly baked daily.", rating: 4.2 },
        { name: "Organic Milk", price: 4.99, image: "https://images.unsplash.com/photo-1550583724-b2692b85b150?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80", description: "Pure organic milk from grass-fed cows.", rating: 4.7 },
        { name: "Free-Range Eggs", price: 5.99, image: "https://images.unsplash.com/photo-1518569656558-1f25e69d93d7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80", description: "Farm-fresh eggs from free-range chickens.", rating: 4.8 },
        { name: "Assorted Vegetables", price: 7.99, image: "https://images.unsplash.com/photo-1540420773420-3366772f4999?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1384&q=80", description: "A mix of fresh, seasonal vegetables.", rating: 4.3 },
        { name: "Lean Ground Beef", price: 8.99, image: "https://images.unsplash.com/photo-1602470520998-f4a52199a3d6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80", description: "High-quality lean ground beef, perfect for various recipes.", rating: 4.6 }
    ];

    const nextProduct = () => {
        setCurrentProduct((prev) => (prev + 1) % products.length);
    };

    const prevProduct = () => {
        setCurrentProduct((prev) => (prev - 1 + products.length) % products.length);
    };

    return (
        <div className="bg-gradient-to-r from-yellow-100 to-orange-100 p-8 rounded-xl shadow-lg">
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden relative">
                <div className="relative">
                    <img
                        src={products[currentProduct].image}
                        alt={products[currentProduct].name}
                        className="w-full h-80 object-cover transition-all duration-300 transform hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
                        <p className="text-white text-lg font-semibold">Click to zoom</p>
                    </div>
                </div>
                <button onClick={prevProduct} className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-3 shadow-lg hover:bg-orange-100 transition duration-300">
                    <FaChevronLeft className="text-orange-500" />
                </button>
                <button onClick={nextProduct} className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-3 shadow-lg hover:bg-orange-100 transition duration-300">
                    <FaChevronRight className="text-orange-500" />
                </button>
                <div className="p-6">
                    <div className="flex justify-between items-center mb-4">
                        <h2 className="text-3xl font-bold text-gray-800">{products[currentProduct].name}</h2>
                        <p className="text-2xl font-semibold text-orange-500">${products[currentProduct].price.toFixed(2)}</p>
                    </div>
                    <div className="flex items-center mb-4">
                        {[...Array(5)].map((_, i) => (
                            <FaStar key={i} className={`${i < Math.floor(products[currentProduct].rating) ? 'text-yellow-400' : 'text-gray-300'} text-xl`} />
                        ))}
                        <span className="ml-2 text-gray-600">({products[currentProduct].rating.toFixed(1)})</span>
                    </div>
                    <p className="text-gray-600 mb-6">{products[currentProduct].description}</p>
                    <div className="flex justify-between items-center">
                        <div className="relative">
                            <select className="appearance-none bg-orange-100 border border-orange-300 text-orange-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-orange-500 transition duration-300">
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                            </select>
                            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-orange-700">
                                <FaChevronDown className="fill-current h-4 w-4" />
                            </div>
                        </div>
                        <button className="bg-gradient-to-r from-orange-400 to-red-500 text-white py-3 px-6 rounded-full font-bold text-lg shadow-lg hover:shadow-xl transition-all duration-300 flex items-center">
                            <FaShoppingCart className="mr-2" />
                            Add to Cart
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetails;
