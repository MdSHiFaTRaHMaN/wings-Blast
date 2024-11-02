import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Banner = () => {

    const [currentSlide, setCurrentSlide] = useState(0);
    const slides = [
        {
            url: "https://i.ibb.co.com/XjmHvnk/01.jpg",
            content: "Slide 1",
        },
        {
            url: "https://i.ibb.co.com/GCYmJvs/03.png",
            content: "Slide 2",
        },
        {
            url: "https://i.ibb.co.com/bvSVm3p/05.png",
            content: "Slide 3",
        },
    ];

    const totalSlides = slides.length;

    // Automatically change slide every 3 seconds
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlide((prevSlide) => (prevSlide + 1) % totalSlides);
        }, 3000); // Change slide every 3 seconds

        return () => clearInterval(interval); // Clean up the interval on component unmount
    }, [totalSlides]);

    const goToNextSlide = () => {
        setCurrentSlide((currentSlide + 1) % totalSlides);
    };

    const goToPrevSlide = () => {
        setCurrentSlide((currentSlide - 1 + totalSlides) % totalSlides);
    };

    return (
        <header className="bg-white  w-full lg:w-10/12 mt-0 lg:mt-7 mx-auto ">
            <div className="container grid md:flex lg:flex gap-6 px-1  lg:px-6 py-3 lg:py-10 mx-auto space-y-6 lg:h-[32rem] lg:flex-row lg:items-center">
                <div className="flex items-center justify-center w-full  lg:w-4/6">
                    <div className="relative w-full overflow-hidden">
                        {/* Carousel wrapper */}
                        <div
                            className="flex transition-transform ease-in-out duration-700"
                            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
                        >
                            {slides.map((slide, index) => (
                                <div key={index} className="min-w-full">
                                    <img
                                        src={slide.url}
                                        alt={slide.content}
                                        className="w-full  object-cover"
                                    />
                                </div>
                            ))}
                        </div>

                        {/* Left Arrow */}
                        <button
                            onClick={goToPrevSlide}
                            className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-gray-300 text-blue-500 p-1 rounded-full"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-6 w-6"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                strokeWidth="2"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                            </svg>
                        </button>

                        {/* Right Arrow */}
                        <button
                            onClick={goToNextSlide}
                            className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-gray-300 text-blue-500 p-1 rounded-full"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-6 w-6"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                strokeWidth="2"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                            </svg>
                        </button>
                    </div>
                </div>
                <div className="w-full lg:w-2/6">
                    <div className="lg:max-w-lg">
                        <h1 className="text-3xl font-extrabold tracking-wide text-gray-800  text-center lg:text-3xl">Bring the Flavor™</h1>
                        <p className="mt-4 text-black text-center ">We know one flavor does not fit all, that is why we perfected 12 of them.
                            Your next flavor obsession starts with just one click.</p>
                       <Link to='/foodmenu'><button className="w-full md:w-6/12 lg:w-full mx-auto text-center btn btn-outline btn-secondary mt-7">Order Now</button></Link>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Banner;