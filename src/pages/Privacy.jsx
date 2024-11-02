import { useEffect, useRef, useState } from "react";

const Privacy = () => {
    const [dropdownOpen, setDropdownOpen] = useState(false);

    // Custom hook to handle clicks outside of dropdown
    const useClickOutside = (handler) => {
        let domNode = useRef();

        useEffect(() => {
            const maybeHandler = (event) => {
                if (domNode.current && !domNode.current.contains(event.target)) {
                    handler();
                }
            };

            document.addEventListener("mousedown", maybeHandler);
            return () => document.removeEventListener("mousedown", maybeHandler);
        });

        return domNode;
    };

    // Reference for dropdown close on outside click
    const domNode = useClickOutside(() => setDropdownOpen(false));

    // Dropdown item as a functional component
    const DropdownItem = ({ label, href }) => {
        return (
            <a
                href={href}
                className='text-body-color dark:text-dark-6 hover:bg-secondary/5 hover:text-secondary block px-5 py-2 text-base'
            >
                {label}
            </a>
        );
    };

    return (
        <div>
            <div className="bg-gradient-to-r from-sky-100 to-indigo-100 h-36 text-center">
                <h1 className="text-5xl font-bold pt-12 text-black">PRIVACY</h1>
            </div>
            <div className=" w-full lg:w-10/12 mx-auto border mt-6">
                <section className="block lg:hidden pt-20 pb-10 lg:pt-[120px] lg:pb-20 dark:bg-dark">
                    <div className="container">
                        <div className="flex flex-wrap -mx-4">
                            <div ref={domNode} className="w-full px-4">
                                <div className="py-8 text-center">
                                    <div className="relative inline-block mb-8 text-left">
                                        <button
                                            onClick={() => setDropdownOpen(!dropdownOpen)}
                                            className="bg-gray-100 flex items-center rounded-[5px] px-5 py-[13px] text-base font-medium text-black"
                                        >
                                            Introduction
                                            <span className="pl-4">
                                                <svg
                                                    width={20}
                                                    height={20}
                                                    viewBox="0 0 20 20"
                                                    fill="none"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    className="fill-current"
                                                >
                                                    <path d="M10 14.25C9.8125 14.25 9.65625 14.1875 9.5 14.0625L2.3125 7C2.03125 6.71875 2.03125 6.28125 2.3125 6C2.59375 5.71875 3.03125 5.71875 3.3125 6L10 12.5312L16.6875 5.9375C16.9688 5.65625 17.4063 5.65625 17.6875 5.9375C17.9687 6.21875 17.9687 6.65625 17.6875 6.9375L10.5 14C10.3437 14.1563 10.1875 14.25 10 14.25Z" />
                                                </svg>
                                            </span>
                                        </button>
                                        <div
                                            className={`shadow-1  absolute left-0 z-40 mt-2 w-[500px] -ml-[150px] rounded-md bg-gray-200 py-[10px] transition-all ${dropdownOpen
                                                ? "top-full opacity-100 visible"
                                                : "top-[110%] invisible opacity-0"
                                                }`}
                                        >
                                            <DropdownItem label="What Information Do we Collect About You and Why?" className='block' href="#fast" />
                                            <DropdownItem label="How long Do We Retain Personal Information" href="#second" />
                                            <DropdownItem label="Changes to This Policy" href="#third" />
                                            <DropdownItem label="Cookies and Other Tracking Mechanisms" href="#four" />
                                            <DropdownItem label="Children Under 13" href="#second" />
                                            <DropdownItem label="How To Contact This Policy" href="#four" />
                                            <DropdownItem label="How Do we Secure Information" href="#fist" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="w-7/12 mx-auto hidden lg:block  bg-gray-100 p-7 m-7">
                    <div className="flex flex-wrap gap-2 gap-y-6 justify-center list-none ">
                        <li><a className="bg-gray-300 p-2 rounded-none my-3" href="#fist">What Information Do we Collect About You and Why?</a></li>
                        <li><a className="bg-gray-300 p-2 rounded-none my-3" href="#second">How long Do We Retain Personal Information</a></li>
                        <li><a className="bg-gray-300 p-2 rounded-none my-3" href="#third">Changes to This Policy</a></li>
                        <li><a className="bg-gray-300 p-2 rounded-none my-3" href="#four">Terms of Use</a></li>
                        <li><a className="bg-gray-300 p-2 rounded-none my-3" href="#fist">Cookies and Other Tracking Mechanisms</a></li>
                        <li><a className="bg-gray-300 p-2 rounded-none my-3" href="#second">Children Under 13</a></li>
                        <li><a className="bg-gray-300 p-2 rounded-none my-3" href="#four">How To Contact This Policy</a></li>
                        <li><a className="bg-gray-300 p-2 rounded-none my-3" href="#fist">How Do we Secure Information</a></li>
                    </div>
                </section>
            </div>
            <div className="w-9/12 mx-auto" id="#fist">
                <h1 className="text-center text-lg font-semibold my-4">What Information Do We Collect About You and Why?</h1>
                <p>We collect information from you when you visit our Site and use our Application and our Services, including the following:</p>
            </div>
            <div className="w-9/12 mx-auto" id="second">
                <h1 className="text-center text-lg font-semibold my-4">How long Do We Retain Personal Information</h1>
                <p>In general, we store your personal information for as long as needed to fulfil the purposes for which we collected it and to comply with laws that apply to us. When deciding how long to keep your information, we consider:</p>
                <li>
                    Whether you have an account or other business relationship with us -- if so, we generally keep your personal information for as long as you have an account or business relationship with us so that we can continue to provide our Services to you;
                </li>
                <li className="my-5">
                    Whether we are subject to any legal obligations to retain your personal information (e.g., any laws that require us to keep transaction records for a certain period of time before we can delete them); and
                </li>
                <li>
                    Whether we need to retain your personal information to defend our legal interests or exercise our legal rights, such as in the context of a legal proceeding.
                </li>
            </div>
            <div className="w-9/12 mx-auto" id="third">
                <h1 className="text-center text-lg font-semibold my-4">Changes to This Policy</h1>
                <p>We collect information from you when you visit our Site and use our Application and our Services, including the following:</p>
            </div>
            <div className="w-9/12 mx-auto" id="four">
                <h1 className="text-center text-lg font-semibold my-4">How To Contact Us About Privacy</h1>
                <p>We collect information from you when you visit our Site and use our Application and our Services, including the following:</p>
                <div className="text-left">
                    <p className="my-2">WingsBlast Restaurants Inc</p>
                    <p className="my-2">15505 Wright Brothers Drive</p>
                    <p className="my-2">Addison, TX 75001</p>
                    <p className="my-2">Attn: Wingstop Privacy  </p>
                    <h4 className="my-5">Contact US: <span className="text-green-500 font-semibold">wingsblast.com</span></h4>
                </div>
            </div>
        </div>
    );
};

export default Privacy;