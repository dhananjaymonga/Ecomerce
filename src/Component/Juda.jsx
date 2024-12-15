import React, { useEffect, useState } from "react";
import axios from "axios";

const Juda = () => {
    const handleClick = (category) => {
        console.log(`Category clicked: ${category}`);
    };

    const handleFilter = (filter) => {
        console.log(`Filter applied: ${filter}`);
    };
//   const [products, setProducts] = useState([]);
//   const [filteredProducts, setFilteredProducts] = useState([]);
//   const [category, setCategory] = useState("mobile");
//   const [priceRange, setPriceRange] = useState(1000);
//   const [company, setCompany] = useState("");

//   // Fetch products dynamically based on category
//   const fetchProducts = async (selectedCategory) => {
//     try {
//       const response = await axios.get(
//         `https://api.example.com/products?category=${selectedCategory}`
//       );
//       setProducts(response.data);
//       setFilteredProducts(response.data);
//       setCategory(selectedCategory);
//     } catch (error) {
//       console.error("Error fetching data:", error);
//     }
//   };

//   // Filter products
//   const applyFilters = () => {
//     let filtered = products.filter((p) => p.price <= priceRange);
//     if (company) {
//       filtered = filtered.filter((p) => p.company === company);
//     }
//     setFilteredProducts(filtered);
//   };

//   // Initial fetch for "mobile"
//   useEffect(() => {
//     fetchProducts(category);
//   }, []);

//   useEffect(() => {
//     applyFilters();
//   }, [priceRange, company]);

  return (
    <div className="container mx-auto p-4">
    <nav className="flex space-x-4 text-sm text-gray-600 mb-4">
        {['Shop All', 'Computers', 'Tablets', 'Drones & Cameras', 'Audio', 'Mobile', 'TV & Home Cinema', 'Wearable Tech', 'Sale'].map((item, index) => (
            <button key={index} onClick={() => handleClick(item)} className={`hover:underline ${item === 'TV & Home Cinema' ? 'text-purple-600' : ''}`}>
                {item}
            </button>
        ))}
    </nav>
    <div className="text-sm text-gray-600 mb-4">
        <button onClick={() => handleClick('Home')} className="hover:underline">Home</button> &gt; <button onClick={() => handleClick('TV & Home Cinema')} className="hover:underline">TV & Home Cinema</button>
    </div>
    <div className="flex flex-col lg:flex-row">
        <aside className="w-full lg:w-1/4 pr-4 mb-4 lg:mb-0">
            <h2 className="text-xl font-bold mb-4">Browse by</h2>
            <ul className="space-y-2 mb-8">
                {['All Products', 'Best Sellers', 'Computers', 'Drones & Cameras', 'Headphones', 'Home Page Best Sellers', 'Home Page Sale', 'Mobile', 'Sale', 'Speakers', 'Tablets', 'TV & Home Cinema', 'Wearable Tech'].map((item, index) => (
                    <li key={index}>
                        <button onClick={() => handleClick(item)} className={`hover:underline ${item === 'TV & Home Cinema' ? 'text-purple-600' : ''}`}>
                            {item}
                        </button>
                    </li>
                ))}
            </ul>
            <h2 className="text-xl font-bold mb-4">Filter by</h2>
            <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Price</label>
                <input type="range" min="70" max="85" className="w-full mb-2" onChange={(e) => handleFilter(`Price: $${e.target.value}`)}/>
                <div className="flex justify-between text-sm text-gray-600">
                    <span>$70.00</span>
                    <span>$85.00</span>
                </div>
            </div>
        </aside>
        <main className="w-full lg:w-3/4">
            <h1 className="text-3xl font-bold mb-4">TV & Home Cinema</h1>
            <p className="text-sm text-gray-600 mb-4">8 products</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                {[
                    { name: "Shel 50'' Class LED 4K UHD Smart TV", price: "$85.00", img: "https://placehold.co/200x150" },
                    { name: "Wilsom Home Cinema 4K PRO-UHD 3LCD Projector", price: "$85.00", img: "https://placehold.co/200x150" },
                    { name: "TV Bluetooth Soundbar With HDMI-ARC Connectivity", price: "$85.00", img: "https://placehold.co/200x150" },
                    { name: "65'' Class Nano LED 4K UHD Smart TV", price: "$70.00", originalPrice: "$85.00", img: "https://placehold.co/200x150", sale: true },
                    { name: "JP 470 Wireless Mini Projector", price: "$85.00", img: "https://placehold.co/200x150" },
                    { name: "42'' Class Full HD Smart Streamer TV", price: "$85.00", img: "https://placehold.co/200x150" },
                    { name: "Shel 40'' Class LED Full HD Smart TV", price: "$85.00", img: "https://placehold.co/200x150" },
                    { name: "Allures 55'' Class LED 4K UHD Smart TV", price: "$70.00", originalPrice: "$85.00", img: "https://placehold.co/200x150", sale: true }
                ].map((product, index) => (
                    <div key={index} className="bg-white p-4 shadow relative">
                        {product.sale && <span className="absolute top-2 left-2 bg-red-500 text-white text-xs px-2 py-1">SALE</span>}
                        <img src={product.img} alt={product.name} className="mb-2"/>
                        <p className="text-sm text-gray-600">{product.name}</p>
                        {product.originalPrice && <p className="text-gray-400 line-through">{product.originalPrice}</p>}
                        <p className="text-purple-600">{product.price}</p>
                    </div>
                ))}
            </div>
        </main>
    </div>
</div>
  );
};

export default Juda ;
