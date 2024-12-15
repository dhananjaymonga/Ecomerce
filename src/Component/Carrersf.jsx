import React from 'react'

const Carrersf = () => {
  return (
    <d>
         <div className="text-center p-14">
                    <h1 className="text-3xl font-bold mb-2">Careers</h1>
                    <p className="text-lg mb-8">Check out our job postings & opportunities waiting for you</p>
                    <form className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                        <div className="flex flex-col">
                            <label className="text-left">First Name *</label>
                            <input type="text" className="border-b-2 border-gray-300 focus:border-black outline-none py-2" />
                        </div>
                        <div className="flex flex-col">
                            <label className="text-left">Last Name *</label>
                            <input type="text" className="border-b-2 border-gray-300 focus:border-black outline-none py-2" />
                        </div>
                        <div className="flex flex-col">
                            <label className="text-left">Email *</label>
                            <input type="email" className="border-b-2 border-gray-300 focus:border-black outline-none py-2" />
                        </div>
                        <div className="flex flex-col">
                            <label className="text-left">Phone</label>
                            <input type="tel" className="border-b-2 border-gray-300 focus:border-black outline-none py-2" />
                        </div>
                        <div className="flex flex-col">
                            <label className="text-left">Position You Apply for</label>
                            <select className="border-b-2 border-gray-300 focus:border-black outline-none py-2">
                                <option>Position 1</option>
                                <option>Position 2</option>
                                <option>Position 3</option>
                            </select>
                        </div>
                        <div className="flex flex-col">
                            <label className="text-left">Available Start Date *</label>
                            <input type="date" className="border-b-2 border-gray-300 focus:border-black outline-none py-2" />
                        </div>
                        <div className="flex flex-col sm:col-span-2">
                            <label className="text-left">Link to Resume</label>
                            <input type="url" className="border-b-2 border-gray-300 focus:border-black outline-none py-2" />
                        </div>
                        <div className="flex justify-end sm:col-span-2">
                            <button type="submit" className="bg-purple-600 text-white py-2 px-6 rounded-full hover:bg-purple-700 focus:outline-none">Submit</button>
                        </div>
                    </form>
                </div>
    </d>
  )
}

export default Carrersf