import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import Need from './Need'
import Pay from './Pay'
import Carrersf from './Carrersf'

const About = () => {
    
  return (
    <div>
        <Navbar/>
          <div className="container mx-auto px-4 py-8">
                    <h1 className="text-3xl font-bold text-center mb-8">About TechShed</h1>
                    <div className="border-b border-gray-300 mb-8"></div>
                    <div className="flex flex-col lg:flex-row items-center">
                        <div className="lg:w-1/2 mb-8 lg:mb-0">
                            <img src="/About.avif" alt="A display of various smartphones in a tech store" className="w-full h-auto"/>
                        </div>
                        <div className="lg:w-1/2 lg:pl-8">
                            <p className="mb-4">
                                I'm a paragraph. Click here to add your own text and edit me. It's easy. Just click “Edit Text” or double click me to add your own content and make changes to the font. Feel free to drag and drop me anywhere you like on your page. I’m a great place for you to tell a story and let your users know a little more about you.
                            </p>
                            <p>
                                This is a great space to write a long text about your company and your services. You can use this space to go into a little more detail about your company. Talk about your team and what services you provide. Tell your visitors the story of how you came up with the idea for your business and what makes you different from your competitors. Make your company stand out and show your visitors who you are.
                            </p>
                        </div>
                    </div>
                </div>
                <Carrersf/>
                <Need/>
                <Footer/>
                <Pay/>
    </div>
    
  )
}

export default About