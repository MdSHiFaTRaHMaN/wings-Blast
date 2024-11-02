import { useRef, useState } from "react";
import { useFlavor } from "../../api/api";
import Slider from "react-slick";
import LogoImg from '../../assets/images/icon.png';
import Fire from '../../assets/images/fire.png'
import { Link } from "react-router-dom";
const FlavorSelector = () => {
    const [heatLevel, setHeatLevel] = useState(0);
    const { flavor, loading, error } = useFlavor();
    const sliderRef = useRef(null);
    // Adjust heat level by slider range
    const handleSliderChange = (e) => {
        setHeatLevel(e.target.value);
    };
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 786,  // For screens < 1024px (lg)
                settings: {
                    slidesToShow: 2,  // Show 2 slides for medium screens
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 450,  // For screens < 768px (md)
                settings: {
                    slidesToShow: 1,  // Show 1 slide for small screens
                    slidesToScroll: 1,
                    arrows: true,
                },
            },
        ],
    };

    return (
        <div
            className="min-h-screen hero flex px-2 py-3 flex-col items-center justify-center bg-black text-WhiteColor"
            style={{
                backgroundImage: "url(https://i.ibb.co.com/3WyWXrF/happy.jpg)",
            }}
        >
            <div className="hero-overlay bg-opacity-100"></div>
            <h1 className="text-4xl font-bold mb-2">Find Your Flavor</h1>
            <p className="text-center mb-6">
                Explore our saucy or dry rub flavors that range from mild to hot, in
                sweet or savory.
            </p>

            {/* Heat Range Slider */}
            <div className="w-full  max-w-3xl">
                <div className="text-red-200">
                    <input
                        type="range"
                        min="0"
                        width="5px"
                        max="100"
                        color="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 ..."
                        value={heatLevel}
                        onChange={handleSliderChange}
                        className="w-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 ..."
                    />
                </div>
                <div className="flex justify-between mt-2">
                    <span className={heatLevel < 30 ? "text-green-400" : ""}>No Heat</span>
                    <span className={heatLevel >= 30 && heatLevel < 70 ? "text-red-500" : ""}>Some Heat</span>
                    <span className={heatLevel >= 70 ? "text-red-700" : ""}>All the Heat</span>
                </div>
            </div>

            {/* Flavor Cards */}
            <div className="justify-center mt-10 w-full slider-container">
            {error && <span className="loading loading-bars w-[200px] ml-[700px] "></span>}
                <Slider ref={sliderRef} {...settings} className="w-11/12 lg:w-7/12 mx-auto">
                    {!loading &&
                        flavor.map((item, index) => (
                            <div className=" px-4"
                                key={index}>
                                <div
                                    className="bg-gray-200  text-black py-6 px-2 rounded-lg text-center"
                                >
                                    <div className="w-20 h-20 inline-flex items-center justify-center border rounded-full mb-2 flex-shrink-0">
                                        <img className='rounded-full' src={"https://wings-blast-backend.onrender.com" + item.image || LogoImg} alt={item.name || "Flavor"} />
                                    </div>
                                    <h3 className="text-lg font-bold">{item.name}</h3>
                                    <div className="rating flex justify-center">
                                        {[...Array(item.flavor_rating)].map((_, i) => (
                                            <img key={i} src={Fire} type="radio" name={`rating-${index}`} className={`h-5 w-[18px] ${i < item.flavor_rating ? '' : ''}`} />
                                        ))}
                                        {[...Array(5 - item.flavor_rating)].map((_, i) => (
                                            <img key={i} src={Fire} type="radio" name={`rating-${index}`} className={`opacity-30 h-5 w-[18px] ${i < item.flavor_rating ? '' : ''}`} />
                                        ))}
                                    </div>
                                    <p className="text-sm line-clamp-3 h-[60px] mt-4">
                                        {item.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                </Slider>
            </div>

            {/* Explore Menu Button */}
            <Link to='/foodmenu'>
                <button className="mt-8 px-6 py-3 bg-black border border-white text-white rounded-lg font-semibold hover:bg-green-800">
                    Explore Menu
                </button>
            </Link>
        </div>
    );
};

export default FlavorSelector;
