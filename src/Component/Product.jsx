import React, { useState, useEffect } from 'react';

const ProductList = ({ filter }) => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch('/data.json')
      .then((response) => response.json())
      .then((data) => setItems(data.items))
      .catch((error) => console.error('Error fetching data:', error));
  }, [filter]);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-6">
      {items.map((item) => (
        <div
          key={item.id}
          className="bg-white border rounded-lg p-4 shadow-md hover:shadow-lg transition-transform transform hover:scale-105"
        >
          <img
            src={item.image}
            alt={item.title}
            className="w-full h-48 object-cover mb-4 rounded-lg"
          />
          <h3 className="text-lg font-semibold">{item.title}</h3>
          <p className="text-gray-600 text-sm">{item.description}</p>
          <div className="text-purple-600 font-bold mt-2">${item.price}</div>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
