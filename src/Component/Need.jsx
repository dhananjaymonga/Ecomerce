import React from 'react'

const Need = () => {
  return (
    <>
               <div className="flex items-center justify-center min-h-screen bg-gray-100">
                    <div className="flex flex-col lg:flex-row items-center bg-black text-white p-8 rounded-lg shadow-lg w-full max-w-6xl">
                        <div className="lg:w-1/2 p-8">
                            <h1 className="text-2xl md:text-3xl font-bold mb-4">Need Help? Check Out Our Help Center</h1>
                            <p className="mb-6">I'm a paragraph. Click here to add your own text and edit me. Let your users get to know you.</p>
                            <a href="help-center.html" className="bg-white text-purple-600 font-semibold py-2 px-4 rounded-full hover:bg-gray-200">
                                Go to Help Center
                            </a>
                        </div>
                        <div className="lg:w-1/2 p-8">
                            <img src="speak.avif" alt="Laptop, headphones, and a smartwatch on a desk" className="rounded-lg shadow-lg w-full"/>
                        </div>
                    </div>
                </div>
            
    </>
  )
}

export default Need