import React,{useState,useContext,createContext} from 'react'
import {dataProvider} from "../Context/Store"

const Item = () => {
    const { item,setItem } = useContext(dataProvider);
    const [quantity, setQuantity] = React.useState(1);
    const [showProductInfo, setShowProductInfo] = React.useState(false);
    const [showReturnPolicy, setShowReturnPolicy] = React.useState(false);
    const [showShippingInfo, setShowShippingInfo] = React.useState(false);

console.log(item)
    const handleNext = () => {
        setCurrentProductIndex((prevIndex) => (prevIndex + 1) % products.length);
    };

    const handlePrev = () => {
        setCurrentProductIndex((prevIndex) => (prevIndex - 1 + products.length) % products.length);
    };

    const handleAddToCart = () => {
        alert(`Added ${quantity} of ${currentProduct.name} to cart.`);
    };

    const handleAddToWishlist = () => {
        alert(`Added ${currentProduct.name} to wishlist.`);
    };

    const incrementQuantity = () => {
        setQuantity((prevQuantity) => prevQuantity + 1);
    };

    const decrementQuantity = () => {
        setQuantity((prevQuantity) => (prevQuantity > 1 ? prevQuantity - 1 : 1));
    };
  return (
    <div>
        {item.map((val)=>{
            return(val.price)
        })}
          <div className="container mx-auto p-4">
                    <nav className="text-sm text-gray-600 mb-4">
                        <a href="#" className="hover:underline">Home</a> / <a href="#" className="hover:underline">Mobile</a> / {item.name}
                    </nav>
                    <div className="flex flex-col lg:flex-row bg-white p-6 rounded-lg shadow-lg">
                        <div className="flex-1 flex justify-center items-center">
                            <img src={item.image} alt={item.name} className="max-w-full h-auto" />
                        </div>
                        <div className="flex-1 lg:ml-6 mt-6 lg:mt-0">
                           
                            <h1 className="text-2xl font-bold mb-2">{item.name}</h1>
                            <p className="text-gray-500 text-sm mb-2">SKU: {item.sku}</p>
                            <div className="text-gray-500 text-sm mb-2 line-through">ffff{item.price}</div>
                            <div className="text-2xl font-bold text-purple-600 mb-4">{item.salePrice}</div>
                            <div className="mb-4">
                                <label htmlFor="quantity" className="block text-sm font-medium text-gray-700">Quantity</label>
                                <div className="flex items-center mt-1">
                                    <button onClick={decrementQuantity} className="px-2 py-1 border border-gray-300 rounded-l-md">-</button>
                                    <input type="number" id="quantity" name="quantity" value={quantity} readOnly className="w-20 p-2 border-t border-b border-gray-300 text-center" />
                                    <button onClick={incrementQuantity} className="px-2 py-1 border border-gray-300 rounded-r-md">+</button>
                                </div>
                            </div>
                            <div className="flex items-center mb-4">
                                <button onClick={handleAddToCart} className="bg-purple-600 text-white px-4 py-2 rounded-md mr-2">Add to Cart</button>
                                <button className="bg-gray-800 text-white px-4 py-2 rounded-md">Buy Now</button>
                                <button onClick={handleAddToWishlist} className="ml-2 text-purple-600"><i className="far fa-heart"></i></button>
                            </div>
                            <div>
                                <div className="mb-4">
                                    <h2 className="text-lg font-bold mb-2 flex justify-between items-center cursor-pointer" onClick={() => setShowProductInfo(!showProductInfo)}>
                                        Product Info <i className={`fas fa-chevron-${showProductInfo ? 'up' : 'down'}`}></i>
                                    </h2>
                                    {showProductInfo && <p className="text-gray-700 mb-4">{item.details}</p>}
                                </div>
                                <div className="mb-4">
                                    <h2 className="text-lg font-bold mb-2 flex justify-between items-center cursor-pointer" onClick={() => setShowReturnPolicy(!showReturnPolicy)}>
                                        Return & Refund Policy <i className={`fas fa-chevron-${showReturnPolicy ? 'up' : 'down'}`}></i>
                                    </h2>
                                    {showReturnPolicy && <p className="text-gray-700 mb-4">{item.details}</p>}
                                </div>
                                <div className="mb-4">
                                    <h2 className="text-lg font-bold mb-2 flex justify-between items-center cursor-pointer" onClick={() => setShowShippingInfo(!showShippingInfo)}>
                                        Shipping Info <i className={`fas fa-chevron-${showShippingInfo ? 'up' : 'down'}`}></i>
                                    </h2>
                                    {showShippingInfo && <p className="text-gray-700 mb-4">{item.details}</p>}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex justify-between mt-6">
                        <button onClick={handlePrev} className="text-gray-600 hover:underline">&lt; Prev</button>
                        <button onClick={handleNext} className="text-gray-600 hover:underline">Next &gt;</button>
                    </div>
                    <div className="mt-6 text-gray-600 text-sm">
                        <p>You might also like</p>
                    </div>
                </div>
    </div>
  )
}

export default Item