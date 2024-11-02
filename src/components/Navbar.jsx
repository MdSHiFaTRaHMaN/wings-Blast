import { useState, useEffect } from 'react';
import { FaSearch } from 'react-icons/fa';
import { FaBagShopping } from 'react-icons/fa6';
import { MdLanguage, MdLocationPin, MdOutlineAssignmentInd, MdOutlineBorderColor, MdRestaurantMenu } from 'react-icons/md';
import { Link, NavLink } from 'react-router-dom';
import Language from './Language';
import WingsBlast from '../assets/images/wingsBlast.png';
import Search from './Search';
import ProfileIcon from '../assets/images/profile.png';
import { signOutUser, useUserProfile } from '../api/api';
import { IoFastFood } from 'react-icons/io5';
import { GrLanguage } from 'react-icons/gr';
import { LuUserCog } from 'react-icons/lu';
import { CgLogOut, CgSpinner } from 'react-icons/cg';
import { BsFillSignIntersectionFill } from 'react-icons/bs';

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [savedAddress, setSavedAddress] = useState("");
    const { user, isLoading } = useUserProfile()

    // Load saved address and token from local storage on component mount
    useEffect(() => {
        const carryout = localStorage.getItem("carryoutAddress");
        const delivery = localStorage.getItem("deliveryAddress");

        // If carryout address exists, prioritize it; otherwise, use the delivery address
        setSavedAddress(carryout || delivery || "");
    }, []);

    // Define character limit for address display
    const maxAddressLength = 20;
    const displayAddress = savedAddress.length > maxAddressLength
        ? `${savedAddress.slice(0, maxAddressLength)} [...]`
        : savedAddress;

    const handleSignOut = () => {
        signOutUser();
    };

    return (
        <nav className="bg-white w-full shadow-lg fixed top-0 !z-50 bg-opacity-32">
            <div className="container flex justify-between items-center py-3 px-4 w-full lg:w-10/12 mx-auto">
                {/* Left side: Logo */}
                <div className="flex items-center space-x-4">
                    <Link to='/'>
                        <img className="w-auto h-12 lg:h-14" src={WingsBlast} alt="WingsBlast Logo" />
                    </Link>
                    <div className="hidden md:flex space-x-5 text-lg lg:text-xl">
                        <Link to='/foodmenu'><span className="text-black font-semibold hover:text-green-500">MENU</span></Link>
                        <Link to='/flavors'><span className="text-black font-semibold hover:text-green-500">FLAVORS</span></Link>
                        <Link to='/myLocation'><span className="text-black font-semibold hover:text-green-500">LOCATIONS</span></Link>
                    </div>
                </div>

                {/* Right side: Address, icons, profile dropdown */}
                <div className="flex items-center space-x-1 md:space-x-6 lg:space-x-4">
                    {savedAddress && (
                        <div className="hidden lg:grid items-center text-sm text-gray-700">
                            <span>{localStorage.getItem("carryoutAddress") ? "CARRYOUT ADDRESS" : "DELIVERY ADDRESS"}</span>
                            <a className="ml-1 font-semibold text-green-600 hover:underline cursor-pointer">
                                {displayAddress}
                                <Link to='/myLocation'><span className='text-rose-500 hover:no-underline'>(Change)</span></Link>
                            </a>
                        </div>
                    )}

                    <button className="text-black hover:text-green-500" onClick={() => document.getElementById('search').showModal()}>
                        <FaSearch className="text-xl md:text-2xl lg:text-3xl" />
                    </button>

                    <button className="hidden md:flex flex-col items-center text-black hover:text-green-500 cursor-pointer" onClick={() => document.getElementById('language_model').showModal()}>
                        <MdLanguage className="text-2xl md:text-3xl" />
                        <span className="text-xs">Language</span>
                    </button>

                    <Link to='/myCart' className="relative text-black hover:text-green-500">
                        <FaBagShopping className="text-xl md:text-2xl lg:text-3xl" />
                        <span className="absolute top-0 right-0 bg-red-700 text-white rounded-full px-1 text-xs">9</span>
                    </Link>

                    {/* Profile Dropdown */}
                    <div className="dropdown dropdown-end">
                        <button tabIndex={0} className="focus:outline-none">
                            <img src={ProfileIcon} className="w-7 mt-1 lg:w-10 md:w-12" alt="Profile" />
                        </button>
                        <ul tabIndex={0} className="dropdown-content menu bg-gray-200 rounded w-52 p-2 shadow-lg mt-2">
                            {isLoading ? (
                                <li className="text-center p-2">
                                    <CgSpinner className="animate-spin text-green-500 bg-green-800" /> {/* Loading Spinner */}
                                </li>
                            ) : !user.id ? (
                                <>
                                    <li>
                                        <NavLink to="/signin" className="text-base font-semibold flex items-center">
                                            <MdOutlineAssignmentInd /> Login
                                        </NavLink>
                                    </li>
                                    <li>
                                        <NavLink to="/signup" className="text-base font-semibold flex items-center">
                                            <BsFillSignIntersectionFill /> Sign Up
                                        </NavLink>
                                    </li>
                                </>
                            ) : (
                                <>
                                    <li>
                                        <NavLink to="/userprofile" className="text-base font-semibold flex items-center">
                                            <LuUserCog /> User Profile
                                        </NavLink>
                                    </li>
                                    <li>
                                        <NavLink to="/myorder" className="text-base font-semibold flex items-center">
                                            <MdOutlineBorderColor /> My Order
                                        </NavLink>
                                    </li>
                                    <li onClick={handleSignOut}>
                                        <span className="text-base font-semibold flex items-center cursor-pointer">
                                            <CgLogOut /> Log Out
                                        </span>
                                    </li>
                                </>
                            )}
                        </ul>
                    </div>

                    <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-black focus:outline-none">
                        {isOpen ? (
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        ) : (
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M4 8h16M4 16h16" />
                            </svg>
                        )}
                    </button>
                </div>
            </div>

            {isOpen && (
                <div className="md:hidden bg-white py-4 px-6">
                    <div className="">
                        <Link to='/foodmenu'><span className="text-black text-xl mb-2 border-b shadow-md font-bold flex gap-2 items-center">
                            <MdRestaurantMenu /> MENU
                        </span></Link>
                        <Link to='/flavors'><span className="text-black text-xl mb-2 border-b shadow-md font-bold flex gap-2 items-center">
                            <IoFastFood /> FLAVORS
                        </span></Link>
                        <Link to='/myLocation'><span className="text-black text-xl mb-2 border-b shadow-md font-bold flex gap-2 items-center">
                            <MdLocationPin /> LOCATIONS
                        </span></Link>
                        <span className="text-black text-xl mb-2 border-b shadow-md font-bold flex gap-2 items-center" onClick={() => document.getElementById('language_model').showModal()}>
                            <GrLanguage /> LANGUAGE
                        </span>
                    </div>
                </div>
            )}
            <Language />
            <Search />
        </nav>
    );
}

export default Navbar;
