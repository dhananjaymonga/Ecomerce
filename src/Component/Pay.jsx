import React from 'react'

const Pay = () => {
  return (
    <div>
          <div className="flex flex-col items-center justify-center py-8 border-t border-gray-200">
                    <p className="text-sm mb-4">We accept the following paying methods</p>
                    <div className="flex space-x-4 mb-4">
                        <img src="https://placehold.co/40x40?text=VISA" alt="VISA logo" className="h-10"/>
                        <img src="https://placehold.co/40x40?text=MasterCard" alt="MasterCard logo" className="h-10"/>
                        <img src="https://placehold.co/40x40?text=American+Express" alt="American Express logo" className="h-10"/>
                        <img src="https://placehold.co/40x40?text=JCB" alt="JCB logo" className="h-10"/>
                        <img src="https://placehold.co/40x40?text=Diners+Club" alt="Diners Club logo" className="h-10"/>
                        <img src="https://placehold.co/40x40?text=Discover" alt="Discover logo" className="h-10"/>
                        <img src="https://placehold.co/40x40?text=PayPal" alt="PayPal logo" className="h-10"/>
                    </div>
                    <p className="text-sm text-gray-500">© 2035 by TechShed. Powered and secured by <a href="#" className="text-blue-500">Wix</a></p>
                    <div className="fixed bottom-4 right-4">
                        <button className="bg-red-500 text-white rounded-full p-3 shadow-lg">
                            <i className="fas fa-comment"></i>
                        </button>
                    </div>
                </div>
    </div>
  )
}

export default Pay