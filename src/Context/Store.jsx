import React,{useState,createContext} from "react";
  export const dataProvider=createContext()
 
 const Store = ({children}) => {
    let [cart,setCart]=useState([])
    let [item,setItem]=useState([])

    const [wishlist, setWishlist] = useState([]);

   return (
   <dataProvider.Provider value={{cart,setCart,wishlist,setWishlist,item,setItem}}>
{children}
   </dataProvider.Provider>
   )
 }
 
 export default Store