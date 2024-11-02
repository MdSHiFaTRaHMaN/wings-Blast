import { useState, useEffect, useContext } from "react";
import { FaLocationArrow } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import Swal from "sweetalert2";
import { AuthContext } from "../authprovider/AuthProvider";

const FindLocation = () => {
    const [activeTab, setActiveTab] = useState('carryout');
    const [address, setAddress] = useState(""); // State for address input
    const [buildingInfo, setBuildingInfo] = useState(""); // State for Building/Suite/Apt input
    const [savedCarryoutAddress, setSavedCarryoutAddress] = useState(""); // State for saved carryout address
    const [savedDeliveryAddress, setSavedDeliveryAddress] = useState(""); // State for saved delivery address
 
    const {customData, setUserData } = useContext(AuthContext)
    // Load saved addresses from local storage on component mount
    console.log(customData)
    console.log(setUserData)
    useEffect(() => {
        const storedCarryoutAddress = localStorage.getItem("carryoutAddress");
        const storedDeliveryAddress = localStorage.getItem("deliveryAddress");
        if (storedCarryoutAddress) {
            setSavedCarryoutAddress(storedCarryoutAddress);
        }
        if (storedDeliveryAddress) {
            setSavedDeliveryAddress(storedDeliveryAddress);
        }
    }, []);

    // Handle address input change
    const handleAddressChange = (e) => {
        setAddress(e.target.value);
    };

    // Handle building/suite/apt input change
    const handleBuildingChange = (e) => {
        setBuildingInfo(e.target.value);
    };

    // Save address to local storage based on active tab
    const saveAddress = () => {
        if (activeTab === 'delivery') {
            const fullAddress = `${buildingInfo}, ${address}`; // Combine address and building info
            localStorage.setItem("deliveryAddress", fullAddress);
            setSavedDeliveryAddress(fullAddress);
            setAddress(""); // Clear address input field
            setBuildingInfo(""); // Clear building info input field
            Swal.fire({
                position: "center",
                icon: "success",
                title: "Delivery Address Added Successfully",
                showConfirmButton: false,
                timer: 1000
            });
        } else if (activeTab === 'carryout') {
            localStorage.setItem("carryoutAddress", address);
            setSavedCarryoutAddress(address);
            setAddress(""); // Clear address input field
            Swal.fire({
                position: "center",
                icon: "success",
                title: "Carryout Location Added Successfully",
                showConfirmButton: false,
                timer: 1000
            });
        }
    };

    return (
        <div className="flex hero flex-col items-center justify-center -mt-20 lg:-mt-0 bg-white px-6 py-1 md:py-12 lg:py-16">
            <div className="flex items-center my-2">
                <h1 className="font-extrabold text-xl md:text-3xl lg:text-4xl text-center text-black-rol">
                    Find Your Location
                </h1>
                <FaLocationDot className="text-xl md:text-2xl ml-2" />
            </div>
            <div className="flex space-x-2 md:space-x-4 mb-4">
                <button
                    className={`px-4 py-2 text-sm md:text-base rounded-l-full ${activeTab === 'carryout' ? 'bg-black text-white' : 'bg-white text-black border'
                        }`}
                    onClick={() => setActiveTab('carryout')}
                >
                    CARRYOUT
                </button>
                <button
                    className={`px-4 py-2 text-sm md:text-base rounded-r-full ${activeTab === 'delivery' ? 'bg-black text-white' : 'bg-white text-black border'
                        }`}
                    onClick={() => setActiveTab('delivery')}
                >
                    DELIVERY
                </button>
            </div>
            <div className="w-full max-w-md lg:max-w-lg">
                {activeTab === 'carryout' ? (
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                            Enter Zip or City, State
                        </label>

                        <div className="relative mt-2 flex gap-2 items-center">
                            <div className="absolute inset-y-0 left-0 flex items-center py-1.5 pl-3">
                                <FaLocationArrow className="text-black" />
                            </div>

                            <input
                                type="text"
                                value={address}
                                onChange={handleAddressChange}
                                className="block w-full pl-10 placeholder-gray-400/70 rounded-l-lg border border-gray-200 bg-white px-4 py-2 md:px-5 md:py-2.5 text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40"
                            />
                            <button
                                onClick={saveAddress}
                                className="rounded-r-lg bg-blue-500 px-4 py-3 text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300">
                                Save
                            </button>
                        </div>
                        <button
                            className="btn btn-success text-white w-full mt-4">
                            Your Current Location
                        </button>
                    </div>
                ) : (
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                            Enter Your Delivery Address
                        </label>

                        <div>
                            <input
                                type="text"
                                value={address}
                                onChange={handleAddressChange}
                                placeholder="Enter Your Delivery Address"
                                className="block w-full placeholder-gray-400/70 rounded-lg border border-gray-200 bg-white px-4 py-2 md:px-5 md:py-2.5 text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40"
                            />
                        </div>
                        <label className="block text-sm font-medium text-gray-700 mb-2 mt-4">
                            Building/Suite/Apt
                        </label>

                        <div>
                            <input
                                type="text"
                                value={buildingInfo}
                                onChange={handleBuildingChange}
                                placeholder="Enter Building/Suite/Apt"
                                className="block w-full placeholder-gray-400/70 rounded-lg border border-gray-200 bg-white px-4 py-2 md:px-5 md:py-2.5 text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40"
                            />
                        </div>
                        <button
                            onClick={saveAddress}
                            className="btn btn-success text-white w-full mt-4">
                            CONTINUE FOR DELIVERY
                        </button>
                    </div>
                )}
            </div>
            <div className="mt-4 hidden">
                <h2 className="text-lg font-semibold">My Locations</h2>
                <p>Carryout: {savedCarryoutAddress || "No carryout location saved"}</p>
                <p>Delivery: {savedDeliveryAddress || "No delivery address saved"}</p>
            </div>
        </div>
    );
};

export default FindLocation;
