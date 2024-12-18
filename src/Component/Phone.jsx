import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
const Phone = () => {
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [priceRange, setPriceRange] = useState([70, 85]);
  const [selectedCompanies, setSelectedCompanies] = useState([]);
  const [selectedSpecializations, setSelectedSpecializations] = useState([]);
  
const [category, setCategory] = useState("Mobile")
const [searchQuery, setSearchQuery] = useState(""); // State for search query

  const [products, setProducts] = useState([]);


  useEffect(() => {
    fetch(`/${category}.json`)
      .then((response) => response.json())
      .then((data) => setProducts(data));
      setFilteredProducts(products);
    }, [category]);

  const handleCategoryClick = (newCategory) => {
    setCategory(newCategory);
  };
  const handleSearchChange = (event) => {
    const value = event.target.value.toLowerCase();
    setSearchQuery(value);

    const filtered = products.filter((product) =>
      product.name.toLowerCase().includes(value)
    );

    setProducts(filtered);
  };
    


  return (
    
    <>
      <div>
       
        <header className="bg-black text-white p-4 flex justify-between items-center">
          <div className="text-xl font-bold">TechShed</div>
          <div className="flex items-center">
          <input
  type="text"
  placeholder="Search..."
  className="p-2 rounded-l-md text-black"
  value={searchQuery} 
  onChange={handleSearchChange} 
/>
{/* <input type="text"  className="text-black"/> */}
            <button className="bg-purple-600 p-2 rounded-r-md">
              <i className="fas fa-search"></i>
            </button>
          </div>
          <div className="flex items-center space-x-4">
            <NavLink to="/about" className="hover:underline">
              About
            </NavLink>
            <NavLink to="/contact" className="hover:underline">
              Contact
            </NavLink>
            <NavLink to="/help" className="hover:underline">
              Help Center
            </NavLink>
            <NavLink to="/login" className="hover:underline">
              Log In
            </NavLink>
            <NavLink to="/cart" className="hover:underline">
              <i className="fas fa-shopping-cart"></i>
            </NavLink>
          </div>
        </header>
        <nav className="bg-white shadow p-4 flex justify-between items-center">
          <div className="flex space-x-4">
            <li
              className="hover:text-purple-300 cursor-pointer hover:underline list-none"
              onClick={() => handleCategoryClick("Computers")}
            >
              Computers
            </li>
            <li
              className="hover:text-purple-300 cursor-pointer hover:underline list-none"
              onClick={() => handleCategoryClick("Mobile")}
            >
              Mobile
            </li>
            <li
              className="hover:text-purple-300 cursor-pointer hover:underline list-none "
              onClick={() => handleCategoryClick("Tablets")}
            >
              Tablet
            </li>
            <li
              className="hover:text-purple-300 cursor-pointer hover:underline list-none"
              onClick={() => handleCategoryClick("Drones&Camera")}
            >
              Drones
            </li>
            <li
              className="hover:text-purple-300 cursor-pointer hover:underline list-none"
              onClick={() => handleCategoryClick("Headphones")}
            >
              Headphones
            </li>
            <li
              className="hover:text-purple-300 cursor-pointer hover:underline list-none"
              onClick={() => handleCategoryClick("Laptop")}
            >
              Laptop
            </li>
            <li
              className="hover:text-purple-300 cursor-pointer hover:underline list-none"
              onClick={() => handleCategoryClick("SmartTV")}
            >
              SmartTV
            </li>
            <li
              className="hover:text-purple-300 cursor-pointer hover:underline list-none"
              onClick={() => handleCategoryClick("WearableTech")}
            >
              Wearable Tech
            </li>
            <li
              className="hover:text-purple-300 cursor-pointer hover:underline list-none"
              onClick={() => handleCategoryClick("WearableTech")}
            >
              Wearable Tech
            </li>

            <a href="#" className="hover:underline">
              Sale
            </a>
          </div>
          <div>
            <a href="#" className="hover:underline">
              Free Shipping for orders over $50
            </a>
          </div>
        </nav>
        <main className="p-8">
          <div className="flex">
            <aside className="w-1/4 pr-8">
              <h2 className="text-2xl font-bold mb-4">Browse by</h2>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="hover:underline">
                    All Products
                  </a>
                </li>
                <li
                  className="hover:text-purple-300 cursor-pointer hover:underline list-none"
                  onClick={() => handleCategoryClick("Computers")}
                >
                  Computers
                </li>
                <li
                  className="hover:text-purple-300 cursor-pointer hover:underline list-none"
                  onClick={() => handleCategoryClick("Mobile")}
                >
                  Mobile
                </li>
                <li
                  className="hover:text-purple-300 cursor-pointer hover:underline list-none "
                  onClick={() => handleCategoryClick("Tablets")}
                >
                  Tablet
                </li>
                <li
                  className="hover:text-purple-300 cursor-pointer hover:underline list-none"
                  onClick={() => handleCategoryClick("Drones&Camera")}
                >
                  Drones
                </li>
                <li
                  className="hover:text-purple-300 cursor-pointer hover:underline list-none"
                  onClick={() => handleCategoryClick("Headphones")}
                >
                  Headphones
                </li>
                <li
                  className="hover:text-purple-300 cursor-pointer hover:underline list-none"
                  onClick={() => handleCategoryClick("Laptop")}
                >
                  Laptop
                </li>
                <li
                  className="hover:text-purple-300 cursor-pointer hover:underline list-none"
                  onClick={() => handleCategoryClick("SmartTV")}
                >
                  SmartTV
                </li>
                <li
                  className="hover:text-purple-300 cursor-pointer hover:underline list-none"
                  onClick={() => handleCategoryClick("WearableTech")}
                >
                  Wearable Tech
                </li>
                <li
                  className="hover:text-purple-300 cursor-pointer hover:underline list-none"
                  onClick={() => handleCategoryClick("WearableTech")}
                >
                  Wearable Tech
                </li>
              </ul>
              <h2 className="text-2xl font-bold mt-8 mb-4">Filter by</h2>
              {/* <div className="mb-4">
                <label className="block mb-2">Price</label>
                <input
                  type="range"
                  min="70"
                  max="85"
                  value={priceRange}
                  onChange={handlePriceChange}
                  className="w-full"
                />
                <div className="flex justify-between text-sm">
                  <span>${priceRange[0]}.00</span>
                  <span>${priceRange[1]}.00</span>
                </div>
              </div> */}
              {/* <div className="mb-4">
                <label className="block mb-2">Company</label>
                <div className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    value="Company1"
                    onChange={handleCompanyChange}
                  />
                  <label>Company1</label>
                </div>
                <div className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    value="Company2"
                    onChange={handleCompanyChange}
                  />
                  <label>Company2</label>
                </div>
                <div className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    value="Company3"
                    onChange={handleCompanyChange}
                  />
                  <label>Company3</label>
                </div>
              </div> */}
              {/* <div>
                <label className="block mb-2">Specialization</label>
                <div className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    value="Specialization1"
                    onChange={handleSpecializationChange}
                  />
                  <label>Specialization1</label>
                </div>
                <div className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    value="Specialization2"
                    onChange={handleSpecializationChange}
                  />
                  <label>Specialization2</label>
                </div>
                <div className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    value="Specialization3"
                    onChange={handleSpecializationChange}
                  />
                  <label>Specialization3</label>
                </div>
              </div> */}
            </aside>
            <section className="w-3/4">
              <h1 className="text-3xl font-bold mb-4">{category}</h1>
              <p className="mb-4">
                {filteredProducts.length}
                {category.length}
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                {products.map((product) => (
                  <div
                    key={product.id}
                    className="bg-white p-4 shadow rounded relative overflow-hidden inline-block"
                  >
                    {product.sale && (
                      <span className="absolute top-2 left-2 bg-red-500 text-white text-xs px-2 py-1 rounded">
                        SALE
                      </span>
                    )}
                    <img
                      src={product.image}
                      alt={product.name}
                      className="transition-transform duration-300 ease-in-out transform hover:scale-110 mb-4"
                    />{" "}
                    <h3 className="text-lg font-bold">{product.name}</h3>
                    {/* <h3 className="text-lg font-bold">{product.description}</h3> */}

                    {product.sale ? (
                      <>
                        <p className="line-through text-gray-500">
                          ${product.price}
                        </p>
                        <p className="text-purple-600">
                          ${product.salePrice}.00
                        </p>
                      </>
                    ) : (
                      <p className="text-purple-600">${product.price}.00</p>
                    )}
                  </div>
                ))}
              </div>
            </section>
          </div>
        </main>
      </div>
      {/* <Phone1/> */}
    </>
  );
};

export default Phone;
