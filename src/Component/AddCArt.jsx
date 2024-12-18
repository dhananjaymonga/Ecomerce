import React,{useState,useContext, createContext} from 'react'
import {dataProvider} from "../Context/Store"
const AddCArt = () => {
  // const dataProvider = createContext();

  const { cart,setCart } = useContext(dataProvider);
console.log(cart)

  // const removeItem = (id) => {
  //   const updatedCart = cartItems.filter((item) => item.id !== id);
  //   setCartItems(updatedCart);
  // };
// console.log(cart)
  // const calculateTotal = () => {
  //   // return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  // };
  return (
    <div>
   
        <div className="p-4 w-full max-w-md mx-auto bg-white shadow-lg rounded-md">
      <h2 className="text-xl font-bold mb-4">
        Cart ({cart.length} {cart.length === 1 ? "item" : "items"})
      </h2>

      <div className="space-y-4">
        {cart.map((item) => (
          
          <div
            key={item.id}
            className="flex items-center justify-between border-b pb-2"
          >
            <div>
              <h3 className="text-sm font-semibold">{item.name}</h3>
              <p className="text-gray-500">${item.price.toFixed(2)}</p>
            </div>
            <div className="flex items-center gap-2">
              <button className="px-2 py-1 border rounded">-</button>
              <span>{item.quantity}</span>
              <button className="px-2 py-1 border rounded">+</button>

              <button
                onClick={() => removeItem(item.id)}
                className="text-red-500 text-sm hover:underline"
              >
                Remove
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-4">
        <h3 className="text-lg font-bold">
          {/* Subtotal: ${calculateTotal().toFixed(2)} */}
        </h3>
        <p className="text-sm text-gray-500">
          Taxes and shipping are calculated at checkout.
        </p>
      </div>

      <div className="mt-4 flex flex-col gap-2">
        <button className="w-full py-2 bg-purple-600 text-white rounded hover:bg-purple-700">
          Checkout
        </button>
        <button className="w-full py-2 border rounded text-purple-600">
          View Cart
        </button>
      </div>
    </div>

 

    </div>

  )}
export default AddCArt