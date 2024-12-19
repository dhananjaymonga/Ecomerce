import React,{useState,createContext} from "react";
  export const dataProvider=createContext()
 
 const Store = ({children}) => {
    let [cart,setCart]=useState([])
    let [item,setItem]=useState([])
  const [quantity, setQuantity] =useState(1);
  const [products, setProducts] = useState([]);

    const [wishlist, setWishlist] = useState([]);

   return (
   <dataProvider.Provider value={{ products,setProducts,cart,setCart,wishlist,setWishlist,item,setItem,quantity,setQuantity}}>
{children}
   </dataProvider.Provider>
   )
 }
 
 export default Store