import { useState } from 'react';
import { FaChevronRight, FaSearch } from 'react-icons/fa';
import { FaLocationDot } from 'react-icons/fa6';
import Bannar from '../assets/images/location2.png'

const FindMenu = () => {
    const [activeTab, setActiveTab] = useState('carryout');

    return (
        <div className="flex w-full lg:w-10/12 mx-auto hero flex-col items-center justify-center bg-white p-6"
            style={{
                backgroundImage: `url(${Bannar})`,
            }}
        >
            <div className="hero-overlay bg-opacity-30"></div>
            <div className='flex items-center my-3'>
                <h1 className="text-2xl font-bold">FIND YOUR MENU  </h1>
                <FaLocationDot className='text-2xl'> </ FaLocationDot>
            </div>
            <div className="flex space-x-4 mb-4">
                <button
                    className={`px-4 py-2 rounded-l-full ${activeTab === 'carryout' ? 'bg-cyan-800 text-white' : 'bg-white text-black border'
                        }`}
                    onClick={() => setActiveTab('carryout')}
                >
                    CARRYOUT
                </button>
                <button
                    className={`px-4 py-2 rounded-r-full ${activeTab === 'delivery' ? 'bg-cyan-800 text-white' : 'bg-white text-black border'
                        }`}
                    onClick={() => setActiveTab('delivery')}
                >
                    DELIVERY
                </button>
            </div>
            <div className="w-full max-w-md">
                {activeTab === 'carryout' ? (
                    //  Search Zip or City, State
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                            Search Zip or City, State
                        </label>

                        <div className="relative mt-2 flex items-center">
                            <div className="absolute inset-y-0 left-0 flex items-center pl-3">
                                {/* React Icon */}
                                <FaSearch className="text-black" />
                            </div>

                            <input
                                type="text"
                                placeholder="Search Zip or City, State"
                                className="block w-full pl-10 placeholder-gray-400/70 rounded-l-lg border border-gray-200 bg-white px-5 py-2.5 text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40"
                            />

                            <button className="rounded-r-lg bg-blue-500 px-4 py-3.5 text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300">
                                <FaChevronRight />
                            </button>
                        </div>
                    </div>
                ) : (
                    // Enter Your Delivery Address
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                            Enter Your Delivery Address
                        </label>

                        <div className="relative mt-2 flex items-center">
                            <div className="absolute inset-y-0 left-0 flex items-center pl-3">
                                {/* React Icon */}
                                <FaSearch className="text-black" />
                            </div>

                            <input
                                type="text"
                                placeholder="Enter Your Delivery Address"
                                className="block w-full pl-10 placeholder-gray-400/70 rounded-l-lg border border-gray-200 bg-white px-5 py-2.5 text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40"
                            />

                            <button className="rounded-r-lg bg-blue-500 px-4 py-3.5 text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300">
                                <FaChevronRight />
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default FindMenu;
