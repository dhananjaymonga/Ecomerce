import React from 'react'
import Navbar from './Component/Navbar'
import Footer from './Component/Footer'
import Need from './Component/Need'
import Click from './Component/Click'
import About from './Component/About'
import Phone from './Component/Phone'
import Juda from './Component/juda'
import FAQItem from './Component/TechCenter'
import Pay from './Component/Pay'
import { Tech } from './Component/TechCenter'
const App = () => {
  return (
    <div>
      <Navbar/>
      {/* <About/> */}
      <Phone/>
      <Juda/>
      {/* <Click/> */}
      <Need/>
      <Footer/>
      <Pay/>
      {/* <FAQItem/> */}
      {/* <Tech/> */}
    </div>
  )
}

export default App