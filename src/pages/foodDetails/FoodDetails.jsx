import { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';
import FlavorSelection from "./FlavorSelection";
import ChickenOption from "./ChickenOption";
import DetailsAbout from "./DetailsAbout";
import { useFoodDetails } from "../../api/api";
import DrinkSection from "./DrinkSection";
import { FaPlus } from "react-icons/fa";
import SideSection from "./SideSection";
import DipSection from "./DipSection";

const FoodDetails = () => {
    const [quantity, setQuantity] = useState(1);
    const [isScrolled, setIsScrolled] = useState(false);
    const { foodDetails, loading, error } = useFoodDetails();
    const navigate = useNavigate();
    const [unitPrice, setUnitPrice] = useState(0); // Initialize as 0 until foodDetails is loaded
    const [totalPrice, setTotalPrice] = useState(0);

    console.log(foodDetails);
    useEffect(() => {
        // Set unitPrice when foodDetails is loaded and update totalPrice
        if (foodDetails?.price) {
            setUnitPrice(foodDetails.price);
            setTotalPrice((quantity * foodDetails.price).toFixed(2));
        }
    }, [foodDetails, quantity]);



    useEffect(() => {
        setTotalPrice((quantity * unitPrice).toFixed(2)); // Fixed to 2 decimal places
    }, [quantity]);


    useEffect(() => {
        // Check if 'deliveryAddress' exists in localStorage
        const savedAddress = localStorage.getItem("deliveryAddress");
        console.log(savedAddress)
        if (!savedAddress) {
            // Redirect to /location page if no address found
            navigate('/myLocation');
        }
    }, [navigate]);


    const incrementQuantity = () => {
        setQuantity(prevQuantity => prevQuantity + 1);
    };

    const decrementQuantity = () => {
        if (quantity > 1) {
            setQuantity(prevQuantity => prevQuantity - 1);
        }
    };

    const handleScroll = () => {
        const scrollPosition = window.scrollY;
        if (scrollPosition > 200) {
            setIsScrolled(true);
        } else {
            setIsScrolled(false);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <>
            <div className="flex flex-col w-full lg:w-9/12 mx-auto">
                <div className="container mx-auto p-6 bg-white mt-6">
                    <div className="flex flex-col lg:flex-row items-center lg:gap-10">
                        <div className="lg:w-1/3">
                            <img
                                src="https://i.ibb.co/c8vHjj0/food-26.png"
                                alt="Boneless Meal Deal"
                                className="w-full rounded-lg"
                            />
                        </div>

                        <div className="lg:w-1/2 p-4">
                            <h1 className="text-xl md:text-3xl lg:text-4xl font-extrabold mb-2 px-3 text-gray-800">
                                {foodDetails.name}
                            </h1>
                            <p className="text-gray-500 text-lg md:text-xl font-medium mb-4">
                                ${foodDetails.price} | {foodDetails.cal} cal
                            </p>
                            <p className="text-gray-600 mb-6 leading-relaxed text-sm md:text-base lg:text-lg">
                                {foodDetails.description}
                            </p>

                            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                                <div className="flex items-center">
                                    <button
                                        className="px-3 py-1 md:px-4 md:py-2 text-xl md:text-2xl font-semibold border border-gray-300 rounded-md hover:bg-gray-100"
                                        onClick={decrementQuantity}
                                    >
                                        -
                                    </button>
                                    <div className="px-4 py-1 md:px-6 md:py-2 border-t border-b border-gray-300 text-lg md:text-xl font-semibold">
                                        {quantity}
                                    </div>
                                    <button
                                        className="px-3 py-1 md:px-4 md:py-2 text-xl md:text-2xl font-semibold border border-gray-300 rounded-md hover:bg-gray-100"
                                        onClick={incrementQuantity}
                                    >
                                        +
                                    </button>
                                </div>

                                <div
                                    className={`${isScrolled ? 'fixed bottom-0 z-50 left-0 right-0 bg-cyan-600' : 'relative'} border-t border-gray-200 px-3 py-1 rounded-md flex justify-between md:justify-end gap-3 items-center shadow-lg`}
                                >
                                    <div className="text-base md:text-lg font-bold text-black">${totalPrice}</div>
                                    <button className="bg-green-600 text-white font-semibold py-1 mr-2 px-6 md:py-3 md:px-8 rounded-md hover:bg-green-700 transition duration-300 ease-in-out">
                                        ADD TO BAG
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <FlavorSelection flavorReq={foodDetails.howManyFlavor} choiceFlavorReq={foodDetails.howManyChoiceFlavor} />
            <DipSection dips={foodDetails.dips} loading={loading} error={error}></DipSection>
            <SideSection sides={foodDetails.sides} loading={loading} error={error}></SideSection>
            <DrinkSection drinks={foodDetails.drinks} loading={loading} error={error}></DrinkSection>
            {/* Button Section */}
            <div className="mt-6 text-center">
                <button
                    className={`w-full lg:w-3/6 py-2 px-4 bg-green-900 text-white rounded shadow-md transition duration-300 ease-in-out transform`}
                >
                    Done
                </button>
            </div>
            <ChickenOption />
            <DetailsAbout />
            {/* Special Request Section */}
            <div
                className="hero mt-8 rounded-lg overflow-hidden shadow-lg"
                style={{
                    backgroundImage: "url(https://img.daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.webp)",
                }}
            >
                <div className="hero-overlay bg-opacity-70"></div>
                <div className="hero-content text-neutral-content text-center p-8">
                    <div className="max-w-md flex items-center gap-3">
                        <FaPlus className="text-4xl text-white" />
                        <h1 className="mb-5 text-4xl font-bold text-white">Add Special Requests</h1>
                    </div>
                </div>
            </div>
        </>
    );
};

export default FoodDetails;
