import React from 'react'

const Footer = () => {
  return (
    <>
          <footer className="bg-white p-20 sm:p10">
                    <div className="container mx-auto px-4">
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
                            <div>
                                <h2 className="font-bold text-lg mb-4">Store Location</h2>
                                <p>500 Terry Francine Street</p>
                                <p>San Francisco, CA 94158</p>
                                <p>info@mysite.com</p>
                                <p>123-456-7890</p>
                                <div className="flex space-x-4 mt-4">
                                    <a href="#" className="text-black"><i className="fab fa-facebook-f"></i></a>
                                    <a href="#" className="text-black"><i className="fab fa-instagram"></i></a>
                                    <a href="#" className="text-black"><i className="fab fa-twitter"></i></a>
                                    <a href="#" className="text-black"><i className="fab fa-youtube"></i></a>
                                </div>
                            </div>
                            <div>
                                <h2 className="font-bold text-lg mb-4">Shop</h2>
                                <ul>
                                    <li><a href="#" className="text-black">Shop All</a></li>
                                    <li><a href="#" className="text-black">Computers</a></li>
                                    <li><a href="#" className="text-black">Tablets</a></li>
                                    <li><a href="#" className="text-black">Drones & Cameras</a></li>
                                    <li><a href="#" className="text-black">Audio</a></li>
                                    <li><a href="#" className="text-black">Mobile</a></li>
                                    <li><a href="#" className="text-black">T.V & Home Cinema</a></li>
                                    <li><a href="#" className="text-black">Wearable Tech</a></li>
                                    <li><a href="#" className="text-black">Sale</a></li>
                                </ul>
                            </div>
                            <div>
                                <h2 className="font-bold text-lg mb-4">Customer Support</h2>
                                <ul>
                                    <li><a href="#" className="text-black">Contact Us</a></li>
                                    <li><a href="#" className="text-black">Help Center</a></li>
                                    <li><a href="#" className="text-black">About Us</a></li>
                                    <li><a href="#" className="text-black">Careers</a></li>
                                </ul>
                            </div>
                            <div>
                                <h2 className="font-bold text-lg mb-4">Policy</h2>
                                <ul>
                                    <li><a href="#" className="text-black">Shipping & Returns</a></li>
                                    <li><a href="#" className="text-black">Terms & Conditions</a></li>
                                    <li><a href="#" className="text-black">Payment Methods</a></li>
                                    <li><a href="#" className="text-black">FAQ</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </footer>
    </>
  )
}

export default Footer