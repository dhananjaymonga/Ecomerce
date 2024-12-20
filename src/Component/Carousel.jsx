import React,{useState,useEffect} from "react";
        const slides = [
            {
                id: 1,
                title: "Incredible Prices on All Your Favorite Items",
                subtitle: "Get more for less on selected brands",
                buttonText: "Shop Now",
                imageUrl: "/img/carousel.avif",
                altText: "Blurred background with a laptop"
            },
            {
                id: 2,
                title: "Amazing Deals on Electronics",
                subtitle: "Save big on top brands",
                buttonText: "Discover Now",
                imageUrl: "/img/carousel2.avif",
                altText: "Blurred background with electronics"
            },
            {
                id: 3,
                title: "Exclusive Offers on Fashion",
                subtitle: "Trendy styles at unbeatable prices",
                buttonText: "Shop Fashion",
                imageUrl: "/img/Carousel3.avif",
                altText: "Blurred background with fashion items"
            }
        ];

        const Carousel = () => {
            const [currentSlide, setCurrentSlide] = useState(0);

            useEffect(() => {
                const interval = setInterval(() => {
                    setCurrentSlide((currentSlide + 1) % slides.length);
                }, 2000);
                return () => clearInterval(interval);
            }, [currentSlide]);

            const nextSlide = () => {
                setCurrentSlide((currentSlide + 1) % slides.length);
            };

            const prevSlide = () => {
                setCurrentSlide((currentSlide - 1 + slides.length) % slides.length);
            };

            return (
                <div className="relative w-full h-screen bg-gray-100">
                    {slides.map((slide, index) => (
                        <div
                            key={slide.id}
                            className={`absolute inset-0 transition-opacity duration-1000 ${index === currentSlide ? 'opacity-100' : 'opacity-0'}`}
                        >
                            <img src={slide.imageUrl} alt={slide.altText} className="w-full h-full object-cover" />
                            <div className="absolute inset-0 bg-black opacity-50"></div>
                            <div className="absolute inset-0 flex items-center justify-start px-4 md:px-10">
                                <div className="text-white max-w-lg">
                                    <div className="bg-red-500 text-white px-3 py-1 inline-block mb-4">Best Prices</div>
                                    <h1 className="text-2xl md:text-5xl font-bold mb-4">{slide.title}</h1>
                                    <p className="text-sm md:text-lg mb-6">{slide.subtitle}</p>
                                    <button className="bg-purple-600 text-white px-4 py-2 md:px-6 md:py-3 rounded-full text-sm md:text-lg">{slide.buttonText}</button>
                                </div>
                            </div>
                        </div>
                    ))}
                    <button onClick={prevSlide} className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full">
                        <i className="fas fa-chevron-left"></i>
                    </button>
                    <button onClick={nextSlide} className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full">
                        <i className="fas fa-chevron-right"></i>
                    </button>
                </div>
            );
        };

      export default Carousel;