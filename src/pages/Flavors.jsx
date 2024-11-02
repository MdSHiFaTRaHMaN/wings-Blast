import { Link } from 'react-router-dom';
import BannarImg from '../assets/images/bannar.jpg';
import LogoImg from '../assets/images/icon.png';
import { useState } from 'react';
import { useFlavor } from '../api/api';
import Fire from '../assets/images/fire.png';

const Flavors = () => {
    const [heatLevel, setHeatLevel] = useState(0);
    const { flavor, loading, error } = useFlavor();

    console.log(flavor)
    // State for filter options
    const [isWet, setIsWet] = useState(true);
    const [isDry, setIsDry] = useState(true);
    const [isHoney, setIsHoney] = useState(true);

    // Adjust heat level by slider range
    const handleSliderChange = (e) => {
        setHeatLevel(e.target.value);
    };

    // Filter flavors based on selected options
    const filteredFlavors = flavor?.filter(item => {
        return (isWet && item.isWet) || (isDry && item.isDry) || (isHoney && item.isHoney);
    });

    return (
        <div>
            {/* Header Section */}
            <div className="hero h-96" style={{ backgroundImage: "url(https://i.ibb.co.com/M1FRdHc/Screenshot-2024-10-22-105817.png)" }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-neutral-content text-center mx-auto">
                    <div>
                        <h1 className="mb-5 text-5xl font-bold">Find your Flavor</h1>
                        <div className="w-full mb-7">
                            <input
                                type="range"
                                min="0"
                                max="100"
                                color='bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500'
                                value={heatLevel}
                                onChange={handleSliderChange}
                                className="w-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500"
                            />
                            <div className="flex justify-between mt-2">
                                <span className={heatLevel < 30 ? "text-green-400" : ""}>No Heat</span>
                                <span className={heatLevel >= 30 && heatLevel < 70 ? "text-red-500" : ""}>Some Heat</span>
                                <span className={heatLevel >= 70 ? "text-red-700" : ""}>All the Heat</span>
                            </div>
                        </div>
                        <div>
                            {/* Flavor filter section */}
                            <h2 className='text-center my-3 font-semibold text-xl'>Flavor type</h2>
                            <div className="items-center flex ml-0 lg:ml-20 gap-5">
                                <div className="w-full flex items-center">
                                    <input
                                        type="checkbox"
                                        className="toggle toggle-success"
                                        checked={isWet}
                                        onChange={() => setIsWet(!isWet)}
                                    />
                                    <span className="mx-2 font-bold">WET</span>
                                </div>
                                <div className="w-full flex items-center">
                                    <input
                                        type="checkbox"
                                        className="toggle toggle-success"
                                        checked={isDry}
                                        onChange={() => setIsDry(!isDry)}
                                    />
                                    <span className="mx-2 font-bold">DRY</span>
                                </div>
                                <div className="w-full flex items-center">
                                    <input
                                        type="checkbox"
                                        className="toggle toggle-success"
                                        checked={isHoney}
                                        onChange={() => setIsHoney(!isHoney)}
                                    />
                                    <span className="mx-2 font-bold">HONEY</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Flavor Cards Section */}
            <section className="text-gray-600 body-font hero" style={{ backgroundImage: `url(${BannarImg})` }}>
                <div className="container py-24 mx-auto w-full lg:w-10/12">
                    {loading && <div className='flex text-center mx-auto'>
                        <span className="loading loading-infinity loading-lg"></span>
                    </div>}
                    {error && <p>Error loading flavors.</p>}
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 mx-2 gap-3">
                        {!loading && filteredFlavors.map((item, index) => (
                            <div key={index} className="p-4 w-full bg-gray-100 flex flex-col border text-center rounded items-center">
                                <div className="w-20 h-20 inline-flex items-center justify-center border rounded-full mb-2 flex-shrink-0">
                                    <img className='rounded-full' src={"https://wings-blast-backend.onrender.com" + item.image || LogoImg} alt={item.name || "Flavor"} />
                                </div>
                                <h2 className="text-gray-900 text-lg title-font font-medium mb-3">{item.name}</h2>
                                <div className="rating flex">
                                    {[...Array(item.flavor_rating)].map((_, i) => (
                                        <img key={i} src={Fire} type="radio" name={`rating-${index}`} className={`h-6 w-6 ${i < item.flavor_rating ? '' : ''}`} />
                                    ))}
                                    {[...Array(5 - item.flavor_rating)].map((_, i) => (
                                        <img key={i} src={Fire} type="radio" name={`rating-${index}`} className={`opacity-30 h-6 w-6 ${i < item.flavor_rating ? '' : ''}`} />
                                    ))}
                                </div>
                                <div>
                                </div>
                                <p className='line-clamp-2 h-[50px]'>{item.description}</p>
                                <Link to='/foodmenu' className='w-full'>
                                    <button className='w-full mx-auto my-3 py-4 bg-green-900 text-white font-semibold'>ORDER NOW</button>
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            <div className="h-1 w-full bg-sky-800"></div>
        </div>
    );
};

export default Flavors;
