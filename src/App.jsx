import React, { useState,useEffect } from "react";
import Navbar from "./Component/Navbar";
import Footer from "./Component/Footer";
import Need from "./Component/Need";
import Click from "./Component/Click";
import About from "./Component/About";
import Phone from "./Component/Phone";

import FAQItem from "./Component/TechCenter";
import Pay from "./Component/Pay"
import { Tech } from "./Component/TechCenter";
import ProductList from "./Component/Product";

// import Phone1 from "./Component/Phone1";

// import Data from "./Data/data.json"
// import  Data  from "./Data/data.json"
const App = () => {
  const [filter, setFilter] = useState(null);

 


  const [category, setCategory] = useState("TV & Home Cinema");
  const [products, setProducts] = useState([]);

  useEffect(() => {
      fetch(`/${category}.json`)
          .then(response => response.json())
          .then(data => setProducts(data));
  }, [category]);

  const handleCategoryClick = (newCategory) => {
      setCategory(newCategory);
  };
  return (
    <div>

      <Phone/>
   
      <Need />
      <Footer />
      <Pay />
      {/* <FAQItem/> */}
      <Tech />
    </div>
  );
};

export default App;


