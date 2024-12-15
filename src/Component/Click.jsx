import React from 'react'

const Click = () => {
 


    const [section, setSection] = React.useState('Shop All');

    const handleClick = (section) => {
        setSection(section);
    };

    const renderContent = () => {
        switch (section) {
            case 'Computers':
                return <div>Computers data...</div>;
            case 'Tablets':
                return <div>Tablets data...</div>;
            case 'Drones & Cameras':
                return <div>Drones & Cameras data...</div>;
            case 'Audio':
                return <div>Audio data...</div>;
            case 'Mobile':
                return <div>Mobile data...</div>;
            case 'T.V & Home Cinema':
                return <div>T.V & Home Cinema data...</div>;
            case 'Wearable Tech':
                return <div>Wearable Tech data...</div>;
            case 'Sale':
                return <div>Sale data...</div>;
            default:
                return <div>Shop All data...</div>;
        }
    };

    return (
        <div>
         
                    <div className="bg-gray-200">
                        <nav className="flex flex-wrap justify-center space-x-4 sm:space-x-8 py-4">
                            <a href="#" className="text-black" onClick={() => handleClick('Shop All')}>Shop All</a>
                            <a href="#" className="text-black" onClick={() => handleClick('Computers')}>Computers</a>
                            <a href="#" className="text-black" onClick={() => handleClick('Tablets')}>Tablets</a>
                            <a href="#" className="text-black" onClick={() => handleClick('Drones & Cameras')}>Drones & Cameras</a>
                            <a href="#" className="text-black" onClick={() => handleClick('Audio')}>Audio</a>
                            <a href="#" className="text-black" onClick={() => handleClick('Mobile')}>Mobile</a>
                            <a href="#" className="text-black" onClick={() => handleClick('T.V & Home Cinema')}>T.V & Home Cinema</a>
                            <a href="#" className="text-black" onClick={() => handleClick('Wearable Tech')}>Wearable Tech</a>
                            <a href="#" className="text-black" onClick={() => handleClick('Sale')}>Sale</a>
                        </nav>
                    </div>
                    <div className="p-4">
                        {renderContent()}
                    </div>
      
</div>
    )}
    export default Click

