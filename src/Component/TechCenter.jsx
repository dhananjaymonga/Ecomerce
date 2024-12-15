import React,{useState} from "react";

const FAQItem = ({ question, answer, icons, isOpen, onClick }) => {
    return (
        <div className="border-b py-4">
            <div className="flex justify-between items-center cursor-pointer" onClick={onClick}>
                <h3 className="text-lg font-semibold">{question}</h3>
                <i className={`fas fa-chevron-${isOpen ? 'up' : 'down'}`}></i>
            </div>
            {isOpen && (
                <div className="mt-2">
                    <p className="text-gray-600">{answer}</p>
                    {icons && (
                        <div className="flex space-x-4 mt-2">
                            {icons.map((icon, index) => (
                                <i key={index} className={icon}></i>
                            ))}
                        </div>
                    )}
                </div>
            )}
        </div>
    );
};

 export const Tech = () => {
    const [openFAQ, setOpenFAQ] = useState(null);
    const [activeTab, setActiveTab] = useState('General');

    const handleFAQClick = (index) => {
        setOpenFAQ(openFAQ === index ? null : index);
    };

    const faqs = {
        General: [
            {
                question: "What is an FAQ section?",
                answer: 'An FAQ section can be used to quickly answer common questions about your business like "Where do you ship to?", "What are your opening hours?", or "How can I book a service?".',
                icons: ["fab fa-facebook", "fab fa-xing", "fab fa-linkedin", "fas fa-link"]
            },
            {
                question: "Why do FAQs matter?",
                answer: ""
            },
            {
                question: "Where can I add my FAQs?",
                answer: ""
            }
        ],
        "Setting up FAQs": [
            {
                question: "How do I set up an FAQ section?",
                answer: "You can set up an FAQ section by following these steps..."
            },
            {
                question: "What tools can I use to create FAQs?",
                answer: "There are various tools available such as..."
            }
        ]
    };

    return (
        <div className="flex flex-col items-center p-4">
            <h1 className="text-2xl md:text-4xl font-bold mt-8 cursor-pointer" onClick={() => setOpenFAQ(null)}>TechShed Help Center</h1>
            <h2 className="text-xl md:text-2xl font-semibold mt-4 cursor-pointer" onClick={() => setOpenFAQ(null)}>Frequently asked questions</h2>
            <div className="relative mt-4 w-full max-w-2xl">
                <input type="text" placeholder="Search" className="absolute right-0 top-0 mt-1 mr-2 text-gray-500"/>
            </div>
            <div className="flex mt-8 space-x-4">
                <span className={`cursor-pointer ${activeTab === 'General' ? 'text-purple-600 font-semibold' : 'text-gray-500'}`} onClick={() => setActiveTab('General')}>General</span>
                <span className={`cursor-pointer ${activeTab === 'Setting up FAQs' ? 'text-purple-600 font-semibold' : 'text-gray-500'}`} onClick={() => setActiveTab('Setting up FAQs')}>Setting up FAQs</span>
            </div>
            <div className="mt-4 w-full max-w-2xl">
                {faqs[activeTab].map((faq, index) => (
                    <FAQItem 
                        key={index}
                        question={faq.question} 
                        answer={faq.answer} 
                        icons={faq.icons}
                        isOpen={openFAQ === index}
                        onClick={() => handleFAQClick(index)}
                    />
                ))}
            </div>
        </div>
    );
};
    export default FAQItem