import { BsClock } from "react-icons/bs";
import { RiEdit2Fill } from "react-icons/ri";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import FoodImg from '../image/foodImg.png'
import { BiEdit } from "react-icons/bi";
import { useEffect, useState } from "react";
import { FaMinus, FaPlus } from "react-icons/fa";


function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{
                ...style,
                display: "block",
                color: "red",       // Change icon color to white if needed
            }}
            onClick={onClick}
        />
    );
}
function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{
                ...style,
                display: "block",
                color: "red",       // Change icon color to white if needed
                // Center the arrow icon vertically
            }}
            onClick={onClick}
        />
    );
}

const MyCart = () => {
    const [quantity, setQuantity] = useState(1);
    const [pricePerItem] = useState(70.0); // Price per item
    const taxRate = 0.05; // 5% tax

    // Increase quantity
    const incrementQuantity = () => {
        setQuantity(prevQuantity => prevQuantity + 1);
    };

    // Decrease quantity but don't go below 1
    const decrementQuantity = () => {
        if (quantity > 1) {
            setQuantity(prevQuantity => prevQuantity - 1);
        }
    };

    // Calculate subtotal
    const subtotal = pricePerItem * quantity;

    // Calculate tax
    const tax = subtotal * taxRate;

    // Calculate total price
    const totalPrice = subtotal + tax;
    const settings = {
        dots: false,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,      
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrows: false,
                }
            }
        ]
    };
    // set date and time 
    const [dates, setDates] = useState([]);

    useEffect(() => {
        const generateNext7Days = () => {
            const today = new Date();
            const daysArray = [];

            for (let i = 0; i < 7; i++) {
                const nextDate = new Date(today);
                nextDate.setDate(today.getDate() + i);
                daysArray.push(nextDate.toDateString()); // Format the date as desired
            }

            setDates(daysArray);
        };

        generateNext7Days();
    }, []);
    const hours = Array.from({ length: 24 }, (_, i) => `${i.toString().padStart(2, '0')}:00`);
    return (
        <>
            <section className="text-gray-600 body-font mx-auto">
                <div className="container px-0 lg:px-5 py-2 lg:py-12 mx-auto flex flex-wrap w-full lg:w-10/12">

                    {/* Left side section */}
                    <div className="lg:w-4/6 md:w-1/2 w-full shadow-lg rounded-lg  mb-10 lg:mb-0">
                        <div className="bg-gray-200 rounded-t-md pb-4">
                            <h1 className="title-font font-bold text-xl lg:text-3xl text-gray-900 pt-5 ml-3 mb-6">
                                Add something extra to your order
                            </h1>

                            {/* Slider Container */}
                            <div className="slider-container w-full mx-auto">
                                <Slider {...settings} className="w-11/12 md:w-10/12 lg:w-11/12 mx-auto gap-2">
                                    {/* Example Slide */}
                                    {[...Array(3)].map((_, index) => (
                                        <div key={index} className="px-4">
                                            <div className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-xl transition duration-300">
                                                <img className="rounded-t-lg w-full object-cover" src={FoodImg} alt="content" />
                                                <div className="p-4">
                                                    <h3 className="text-indigo-600 text-xs font-semibold uppercase mb-1">Subtitle</h3>
                                                    <h2 className="text-lg text-gray-900 font-bold mb-2">Chichen Itza</h2>
                                                    <p className="leading-relaxed text-sm text-gray-600">
                                                        Fingerstache flexitarian street art 8-bit waistcoat.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </Slider>
                            </div>

                        </div>

                        {/* Order Review */}
                        <div className="my-7 mx-4 text-black">
                            <h1 className="text-2xl sm:text-4xl text-black">Review Order</h1>
                            <div className="divider"></div>
                            <div className="flex justify-between text-center text-xl sm:text-2xl">
                                <h2>10 pc Classic Combo</h2>
                                <Link to="/details">
                                    <BiEdit />
                                </Link>
                            </div>

                            {/* Order Details */}
                            <div className="space-y-2">
                                <p>Sweet BBQ Blaze x 5</p>
                                <p>Atomic x 5</p>
                                <p>Ranch</p>
                                <p>Seasoned Fries</p>
                                <p>Self-Serve Fountain</p>
                                <p>Regular Amount of Seasoning</p>
                                <p>Regular Ranch (+$1.99)</p>
                            </div>

                            {/* Quantity and Price */}
                            <div className="flex items-center justify-between mt-4">
                                <div className="flex items-center gap-3">
                                    <button className="p-2 border border-gray-300 rounded-md hover:bg-gray-100" onClick={decrementQuantity}>
                                        <FaMinus />
                                    </button>
                                    <span className="p-2 border-gray-300 text-xl font-semibold">{quantity}</span>
                                    <button className="p-2 border border-gray-300 rounded-md hover:bg-gray-100" onClick={incrementQuantity}>
                                        <FaPlus />
                                    </button>
                                </div>
                                <span className="text-2xl font-semibold">${subtotal.toFixed(2)}</span>
                            </div>
                        </div>
                    </div>

                    {/* Right Side Section */}
                    <div className="lg:w-2/6 md:w-1/2 w-full border border-gray-300 rounded-lg flex flex-col md:ml-auto p-4 mt-10 md:mt-0">

                        {/* Carryout Info */}
                        <div className="mb-4">
                            <div className="flex items-center justify-between">
                                <h2 className="text-gray-900 text-2xl font-medium title-font">Carryout from:</h2>
                                <Link to="/myLocation" className="text-3xl">
                                    <RiEdit2Fill />
                                </Link>
                            </div>
                            <div className="space-y-1 text-green-700">
                                <h2 className="font-semibold text-xl">Customer Current Location</h2>
                                <p>Customer Street</p>
                                <p>House No</p>
                                <p>Customer City</p>
                            </div>
                        </div>

                        {/* Order Time */}
                        <div className="mt-3 flex items-center gap-2 text-black">
                            <BsClock />
                            <span>10:30 AM to Midnight</span>
                        </div>

                        <div className="divider"></div>

                        {/* Time Selection */}
                        <div className="flex items-center justify-between p-4">
                            <span className="text-2xl font-semibold text-black">Time</span>
                            <div className="flex items-center gap-2">
                                <input type="radio" name="radio-5" className="radio radio-success" defaultChecked />
                                <h1>ASAP</h1>
                                <input type="radio" name="radio-5" className="radio radio-success" />
                                <h1>Later</h1>
                            </div>
                        </div>

                        {/* Date and Time Select */}
                        <div className="flex justify-between bg-slate-100 px-2 py-3 rounded">
                            <div className="w-1/2 mr-2">
                                <label>Date</label>
                                <select className="select select-bordered w-full" required>
                                    <option disabled selected>Select Date</option>
                                    {dates.map((date, index) => (
                                        <option key={index} value={date}>{date}</option>
                                    ))}
                                </select>
                            </div>
                            <div className="w-1/2">
                                <label>Time</label>
                                <select className="select select-bordered w-full">
                                    <option disabled selected>Select Time</option>
                                    {hours.map((time, index) => (
                                        <option key={index} value={time}>{time}</option>
                                    ))}
                                </select>
                            </div>
                        </div>

                        {/* ASAP Unavailable Notice */}
                        <div className="mx-2 mt-6 mb-3 p-2 border rounded">
                            <h1 className="text-red-800">ASAP Unavailable (Optional)</h1>
                            <p className="text-red-400">We are not currently accepting ASAP orders. Please select a later time to continue with your order.</p>
                        </div>

                        {/* Coupon Code Input */}
                        <div className="relative flex mx-2 mb-4 h-10">
                            <button className="absolute right-1 top-1 z-10 rounded bg-green-800 py-2 px-4 text-xs font-bold uppercase text-white shadow-md transition-all hover:shadow-lg" type="button">
                                Submit
                            </button>
                            <input type="text" className="peer w-full rounded-lg border px-3 py-2.5 font-sans text-sm bg-transparent text-gray-700 placeholder-gray-500 focus:border-green-500" placeholder="Coupon Code" />
                        </div>

                        {/* Total Price Table */}
                        <div>
                            <table className="w-full text-left text-xl text-black">
                                <thead className="text-2xl uppercase bg-gray-50">
                                    <tr>
                                        <th className="py-3 px-6">Total Price</th>
                                        <th className="py-3 px-6"></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className="bg-white text-base">
                                        <td className="py-2 px-6">Subtotal</td>
                                        <td className="py-2 px-6">${subtotal.toFixed(2)}</td>
                                    </tr>
                                    <tr className="bg-white text-base">
                                        <td className="py-2 px-6">Tax</td>
                                        <td className="py-2 px-6">${tax.toFixed(2)}</td>
                                    </tr>
                                    <tr className="bg-white text-base">
                                        <td className="py-2 px-6">Total</td>
                                        <td className="py-2 px-6">${totalPrice.toFixed(2)}</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        {/* Checkout Button */}
                        <Link to="/checkout" className=" my-4 w-full">
                            <button className="btn btn-outline mx-auto  flex btn-success">
                                Checkout <span>${totalPrice.toFixed(2)}</span>
                            </button>
                        </Link>
                    </div>

                </div>
            </section>

        </>
    );
};

export default MyCart;