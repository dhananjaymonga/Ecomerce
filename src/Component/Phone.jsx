import React,{useState,useEffect} from 'react'

const Phone = () => {
    const [products, setProducts] = useState([]);
    const [filteredProducts, setFilteredProducts] = useState([]);
    const [priceRange, setPriceRange] = useState([70, 85]);
    const [selectedCompanies, setSelectedCompanies] = useState([]);
    const [selectedSpecializations, setSelectedSpecializations] = useState([]);

    useEffect(() => {
        fetch('https://api.example.com/mobiles') // Replace with your API endpoint
            .then(response => response.json())
            .then(data => {
                console.log(data)
                setProducts(data);
                setFilteredProducts(data);
            });
    }, []);

    const handlePriceChange = (event) => {
        const value = event.target.value.split(',').map(Number);
        setPriceRange(value);
        filterProducts(value, selectedCompanies, selectedSpecializations);
    };

    const handleCompanyChange = (event) => {
        const value = event.target.value;
        const newSelectedCompanies = event.target.checked
            ? [...selectedCompanies, value]
            : selectedCompanies.filter(company => company !== value);
        setSelectedCompanies(newSelectedCompanies);
        filterProducts(priceRange, newSelectedCompanies, selectedSpecializations);
    };

    const handleSpecializationChange = (event) => {
        const value = event.target.value;
        const newSelectedSpecializations = event.target.checked
            ? [...selectedSpecializations, value]
            : selectedSpecializations.filter(spec => spec !== value);
        setSelectedSpecializations(newSelectedSpecializations);
        filterProducts(priceRange, selectedCompanies, newSelectedSpecializations);
    };

    const filterProducts = (priceRange, companies, specializations) => {
        const [minPrice, maxPrice] = priceRange;
        const filtered = products.filter(product => {
            const matchesPrice = product.price >= minPrice && product.price <= maxPrice;
            const matchesCompany = companies.length === 0 || companies.includes(product.company);
            const matchesSpecialization = specializations.length === 0 || specializations.includes(product.specialization);
            return matchesPrice && matchesCompany && matchesSpecialization;
        });
        setFilteredProducts(filtered);
    };
  return (
    <>
      <div>
                    <header className="bg-black text-white p-4 flex justify-between items-center">
                        <div className="text-xl font-bold">TechShed</div>
                        <div className="flex items-center">
                            <input type="text" placeholder="Search..." className="p-2 rounded-l-md" />
                            <button className="bg-purple-600 p-2 rounded-r-md"><i className="fas fa-search"></i></button>
                        </div>
                        <div className="flex items-center space-x-4">
                            <a href="#" className="hover:underline">About</a>
                            <a href="#" className="hover:underline">Contact</a>
                            <a href="#" className="hover:underline">Help Center</a>
                            <a href="#" className="hover:underline">Log In</a>
                            <a href="#" className="hover:underline"><i className="fas fa-shopping-cart"></i></a>
                        </div>
                    </header>
                    <nav className="bg-white shadow p-4 flex justify-between items-center">
                        <div className="flex space-x-4">
                            <a href="#" className="hover:underline">Shop All</a>
                            <a href="#" className="hover:underline">Computers</a>
                            <a href="#" className="hover:underline">Tablets</a>
                            <a href="#" className="hover:underline">Drones & Cameras</a>
                            <a href="#" className="hover:underline">Headphones</a>
                            <a href="#" className="hover:underline">Mobile</a>
                            <a href="#" className="hover:underline">TV & Home Cinema</a>
                            <a href="#" className="hover:underline">Wearable Tech</a>
                            <a href="#" className="hover:underline">Sale</a>
                        </div>
                        <div>
                            <a href="#" className="hover:underline">Free Shipping for orders over $50</a>
                        </div>
                    </nav>
                    <main className="p-8">
                        <div className="flex">
                            <aside className="w-1/4 pr-8">
                                <h2 className="text-2xl font-bold mb-4">Browse by</h2>
                                <ul className="space-y-2">
                                    <li><a href="#" className="hover:underline">All Products</a></li>
                                    <li><a href="#" className="hover:underline">Best Sellers</a></li>
                                    <li><a href="#" className="hover:underline">Computers</a></li>
                                    <li><a href="#" className="hover:underline">Drones & Cameras</a></li>
                                    <li><a href="#" className="hover:underline">Headphones</a></li>
                                    <li><a href="#" className="hover:underline">Home Page Best Sellers</a></li>
                                    <li><a href="#" className="hover:underline">Home Page Sale</a></li>
                                    <li><a href="#" className="hover:underline">Mobile</a></li>
                                    <li><a href="#" className="hover:underline">Sale</a></li>
                                    <li><a href="#" className="hover:underline">Speakers</a></li>
                                    <li><a href="#" className="hover:underline">Tablets</a></li>
                                    <li><a href="#" className="hover:underline">TV & Home Cinema</a></li>
                                    <li><a href="#" className="hover:underline">Wearable Tech</a></li>
                                </ul>
                                <h2 className="text-2xl font-bold mt-8 mb-4">Filter by</h2>
                                <div className="mb-4">
                                    <label className="block mb-2">Price</label>
                                    <input type="range" min="70" max="85" value={priceRange} onChange={handlePriceChange} className="w-full" />
                                    <div className="flex justify-between text-sm">
                                        <span>${priceRange[0]}.00</span>
                                        <span>${priceRange[1]}.00</span>
                                    </div>
                                </div>
                                <div className="mb-4">
                                    <label className="block mb-2">Company</label>
                                    <div className="flex items-center space-x-2">
                                        <input type="checkbox" value="Company1" onChange={handleCompanyChange} />
                                        <label>Company1</label>
                                    </div>
                                    <div className="flex items-center space-x-2">
                                        <input type="checkbox" value="Company2" onChange={handleCompanyChange} />
                                        <label>Company2</label>
                                    </div>
                                    <div className="flex items-center space-x-2">
                                        <input type="checkbox" value="Company3" onChange={handleCompanyChange} />
                                        <label>Company3</label>
                                    </div>
                                </div>
                                <div>
                                    <label className="block mb-2">Specialization</label>
                                    <div className="flex items-center space-x-2">
                                        <input type="checkbox" value="Specialization1" onChange={handleSpecializationChange} />
                                        <label>Specialization1</label>
                                    </div>
                                    <div className="flex items-center space-x-2">
                                        <input type="checkbox" value="Specialization2" onChange={handleSpecializationChange} />
                                        <label>Specialization2</label>
                                    </div>
                                    <div className="flex items-center space-x-2">
                                        <input type="checkbox" value="Specialization3" onChange={handleSpecializationChange} />
                                        <label>Specialization3</label>
                                    </div>
                                </div>
                            </aside>
                            <section className="w-3/4">
                                <h1 className="text-3xl font-bold mb-4">Mobile</h1>
                                <p className="mb-4">{filteredProducts.length} products</p>
                                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                                    {filteredProducts.map(product => (
                                        <div key={product.id} className="bg-white p-4 shadow rounded relative">
                                            {product.sale && <span className="absolute top-2 left-2 bg-red-500 text-white text-xs px-2 py-1 rounded">SALE</span>}
                                            <img src={product.image} alt={product.name} className="mb-4" />
                                            <h3 className="text-lg font-bold">{product.name}</h3>
                                            {product.sale ? (
                                                <>
                                                    <p className="line-through text-gray-500">${product.originalPrice}.00</p>
                                                    <p className="text-purple-600">${product.salePrice}.00</p>
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
    </>
  )
}

export default Phone