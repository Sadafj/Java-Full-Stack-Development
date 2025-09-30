

// src/App.jsx
import React from "react";

function ProductCard({ product }) {
  return (
    <div className="p-4 border rounded-2xl shadow hover:shadow-lg transition">
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-40 object-cover rounded-xl mb-3"
      />
      <h2 className="text-lg font-semibold">{product.name}</h2>
      <p className="text-gray-600 text-sm">{product.description}</p>
      <p className="mt-2 font-bold text-blue-600">${product.price}</p>
      <button className="mt-3 px-4 py-2 bg-blue-500 text-white rounded-xl hover:bg-blue-600">
        Add to Cart
      </button>
    </div>
  );
}

export default function Array() {
  const products = [
    {
      id: 1,
      name: "Wireless Headphones",
      price: 99.99,
      image: "https://via.placeholder.com/200x150?text=Headphones",
      description: "High-quality sound, noise cancellation.",
    },
    {
      id: 2,
      name: "Smartwatch",
      price: 149.99,
      image: "https://via.placeholder.com/200x150?text=Smartwatch",
      description: "Track fitness, monitor heart rate, stay connected.",
    },
    {
      id: 3,
      name: "Gaming Laptop",
      price: 1299.99,
      image: "https://via.placeholder.com/200x150?text=Laptop",
      description: "Powerful performance for gaming & work.",
    },
    {
      id: 4,
      name: "Laptop",
      price: 500000,
      image: "https://via.placeholder.com/200x150?text=Laptop",
      description: "Powerful performance for gaming & work.",
    },
  ];

  return (
    <div className="p-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}
