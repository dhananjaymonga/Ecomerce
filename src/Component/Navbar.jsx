import React,{useState,useEffect} from 'react'
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [isLoggedIn, setIsLoggedIn] = React.useState(localStorage.getItem('isLoggedIn') === 'true');
    const [showLogin, setShowLogin] = React.useState(false);
    const [showSignup, setShowSignup] = React.useState(false);

    const handleLogin = () => {
        setIsLoggedIn(true);
        localStorage.setItem('isLoggedIn', 'true');
        setShowLogin(false);
    };

    const handleLogout = () => {
        setIsLoggedIn(false);
        localStorage.setItem('isLoggedIn', 'false');
    };

    const handleSignup = () => {
        setIsLoggedIn(true);
        localStorage.setItem('isLoggedIn', 'true');
        setShowSignup(false);
    };
  return (
    <>     
             
                <div className="bg-black text-white text-sm py-2 flex justify-between items-center px-4">
                        <div className="flex items-center">
                            <i className="fas fa-box mr-2"></i>
                            <span>Free Shipping for orders over $50</span>
                        </div>
                        <div className="hidden md:flex space-x-4">
                            <Link to={"/About"}>About</Link>

          <Link to={"/Contact"}>Contact</Link>
          <Link to={"/Helpcenter"}>Helpcenter</Link>
          {/* <Link to={"/page"}>Page</Link> 
           <Link to={"/quiz"}>Quiz</Link> */}
                            <span>Call Us 123-456-7890</span>
                        </div>
                    </div>
                    <div className="flex flex-col md:flex-row justify-between items-center py-4 px-4">
                        <div className="text-3xl font-bold mb-4 md:mb-0">TechShed</div>
                        <div className="flex items-center w-full md:w-1/2 mb-4 md:mb-0">
                            <input type="text" placeholder="Search..." className="w-full py-2 px-4 rounded-l-full bg-gray-200 focus:outline-none" />
                            <button className="bg-purple-600 text-white py-2 px-4 rounded-r-full">
                                <i className="fas fa-search"></i>
                            </button>
                        </div>
                        <div className="flex items-center space-x-4">
                            <img src="https://placehold.co/40x40" alt="User profile picture" className="w-10 h-10 rounded-full" />
                            <i className="fas fa-chevron-down"></i>
                            <i className="fas fa-heart"></i>
                            <div className="relative">
                                <i className="fas fa-shopping-cart"></i>
                                <span className="absolute top-0 right-0 bg-black text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">0</span>
                            </div>
                        </div>
                        </div>
    </>
  )
}

export default Navbar;