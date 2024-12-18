import React,{useState,useContext,createContext} from 'react'
import {dataProvider} from "../Context/Store"

const Whislist = () => {
    const { wishlist,setWishlist } = useContext(dataProvider);
//   let [Whislis,setWishlis]=useState([])
//   setWishlis([...Whislis,wishlist])
  return (
    <div>
        {wishlist.map((val)=>{
            return(
                <div key={val.id}>
                    <h1>{val.name}</h1>
                </div>
            )
        })}
    </div>
  )
}

export default Whislist