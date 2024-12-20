import React from 'react'

const Off = () => {
  return (
<div className="flex justify-center items-center  bg-gray-200 p-4">
                    <div className="bg-white shadow-lg rounded-lg overflow-hidden flex flex-col lg:flex-row w-full max-w-6xl">
                        <div className="p-8 lg:w-1/2">
                            <div className="mb-4">
                                <span className="bg-red-500 text-white text-xs font-bold px-2 py-1 rounded">Today's Special</span>
                            </div>
                            <h1 className="text-2xl lg:text-3xl font-bold mb-2">Best Arial View in Town</h1>
                            <div className="text-4xl lg:text-6xl font-bold text-purple-600 mb-2">30% <span className="text-black">OFF</span></div>
                            <p className="text-base lg:text-lg font-medium mb-4">on professional camera drones</p>
                            <p className="text-gray-600 mb-6 text-sm lg:text-base">Limited quantities.<br />See product detail pages for availability.</p>
                            <button className="bg-purple-600 text-white px-4 py-2 lg:px-6 lg:py-3 rounded-full text-sm lg:text-lg font-semibold">Shop</button>
                        </div>
                        <div className="lg:w-1/2">
                            <img src="img/i.avif" alt="A professional camera drone flying in the sky during sunset" className="w-full h-full object-cover " />
                        </div>
                    </div>
                </div>
  )
}

export default Off