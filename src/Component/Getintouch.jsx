import React from 'react'

const Getintouch = () => {
  return (
    <>
      <div className="container mx-auto px-4 py-16">
                    <h1 className="text-4xl font-bold text-center mb-8">Get in Touch</h1>
                    <hr className="mb-8"/>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        <div>
                            <div className="mb-8">
                                <h2 className="text-xl font-bold mb-2">Opening Hours</h2>
                                <p>Mon - Fri: 8am - 8pm</p>
                                <p>Saturday: 9am - 7pm</p>
                                <p>Sunday: 9am - 8pm</p>
                            </div>
                            <div>
                                <h2 className="text-xl font-bold mb-2">Store Location</h2>
                                <p>500 Terry Francine Street</p>
                                <p>San Francisco, CA 94158</p>
                                <p>info@mysite.com</p>
                                <p>123-456-7890</p>
                            </div>
                        </div>
                        <div>
                            <h2 className="text-xl font-bold mb-2">We're here to help!</h2>
                            <p className="mb-4">Fill out the form with any query on your mind and we'll get back to you as soon as possible</p>
                            <form>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                                    <input type="text" placeholder="First Name *" className="border-b-2 border-gray-300 focus:outline-none focus:border-black py-2"/>
                                    <input type="text" placeholder="Last Name *" className="border-b-2 border-gray-300 focus:outline-none focus:border-black py-2"/>
                                </div>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                                    <input type="email" placeholder="Email *" className="border-b-2 border-gray-300 focus:outline-none focus:border-black py-2"/>
                                    <input type="text" placeholder="Subject" className="border-b-2 border-gray-300 focus:outline-none focus:border-black py-2"/>
                                </div>
                                <textarea placeholder="Leave us a message..." className="border-b-2 border-gray-300 focus:outline-none focus:border-black py-2 w-full mb-4"></textarea>
                                <button type="submit" className="bg-purple-600 text-white py-2 px-4 rounded-full hover:bg-purple-700">Submit</button>
                            </form>
                        </div>
                    </div>
                </div>
    </>
  )
}

export default Getintouch