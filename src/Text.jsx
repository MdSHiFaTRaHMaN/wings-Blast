import { useState } from "react";
import { Disclosure } from "@headlessui/react";
import { FaPlus } from "react-icons/fa";
import Fire from '../../assets/images/fire.png'
import { useFlavor } from "../../api/api";



const FlavorSelection = ({flavorReq}) => {
    const [selectedCount, setSelectedCount] = useState(0);
    const [selectedOptions, setSelectedOptions] = useState({});
    const { flavor, loading, error } = useFlavor();

    const flavorRequired = flavorReq; // Required selection count (or dynamically set this)

    const handleSelection = (optionName, checked) => {
        setSelectedOptions((prev) => {
            const newSelectedOptions = { ...prev, [optionName]: checked };
            const newCount = Object.values(newSelectedOptions).filter(Boolean).length;
            setSelectedCount(newCount);
            return newSelectedOptions;
        });
    };
    const flavors2 = [

        {
            category: "Some Heat",
            options: [
                { name: "Hot Honey Rub", heat: 3, tag: "" },
                { name: "Original Hot", heat: 3, tag: "" },
                { name: "Spicy Korean Q", heat: 3 },
                { name: "Louisiana Rub", heat: 2 },
                { name: "Hickory Smoked BBQ", heat: 1 },
            ],
        }
    ];
    const flavors3 = [

        {
            category: "No Heat",
            options: [
                { name: "Lemon Pepper", heat: 0, tag: "Popular" },
                { name: "Garlic Parmesan", heat: 0 },
                { name: "Plain", heat: 0 },
                { name: "Hawaiian", heat: 0 },
            ],
        },
    ];

    if (loading) {
        return <p className="text-center text-lg font-medium"><span className="loading loading-bars loading-lg"></span></p>;
    }

   
    return (
        <div className="w-full lg:w-10/12 mx-auto p-4">
            {/* Fast Collases section  */}
            <Disclosure defaultOpen>
                {({ open }) => (
                    <>
                        <Disclosure.Button className="grid lg:flex w-full justify-between rounded-lg bg-gray-100 px-4 py-2 text-left text-sm font-medium text-black hover:bg-gray-200 focus:outline-none focus-visible:ring focus-visible:ring-opacity-75">
                            <span className="text-lg lg:text-3xl font-semibold">Choose Flavors</span>
                            <span className={`${open} text-gray-500`}>
                                <h2 className="text-lg font-bold mb-4">
                                    <span className="text-sm text-gray-500">({selectedCount} of {flavorReq}  Selected)</span>
                                    <span className="text-red-500">Required</span>
                                </h2>
                            </span>

                        </Disclosure.Button>
                        {error && <p>Error loading flavors.</p>}
                        <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
                            <div className="flavor-selection grid lg:grid-cols-3 gap-5 w-full">
                                {!loading && flavor.map((category, index) => (
                                    <div key={index} className="w-full">
                                        <h3 className="text-md font-semibold mb-2">{category.category}</h3>
                                        <div className=" w-full">
                                            <label
                                                className="flex items-center justify-between border p-2 rounded space-x-2 cursor-pointer"
                                            >
                                                <div className="flex items-center space-x-2">
                                                    <img className="w-14" src="https://i.ibb.co.com/7WWcJCW/Screenshot-2024-10-21-234915-removebg-preview.png" alt="" />
                                                    <div>
                                                        <p className="font-medium">{category.name}</p>
                                                        <p className="text-xs text-gray-500">
                                                            <div className="rating flex">
                                                                {[...Array(category.flavor_rating)].map((_, i) => (
                                                                    <img key={i} src={Fire} type="radio" name={`rating-${index}`} className={`h-4 w-4 ${i < category.flavor_rating ? '' : ''}`} />
                                                                ))}
                                                                {[...Array(5 - category.flavor_rating)].map((_, i) => (
                                                                    <img key={i} src={Fire} type="radio" name={`rating-${index}`} className={`opacity-30 h-4 w-4 ${i < category.flavor_rating ? '' : ''}`} />
                                                                ))}
                                                            </div>
                                                        </p>
                                                    </div>
                                                </div>
                                                <input
                                                    type="checkbox"
                                                    className="form-checkbox h-5 w-5 text-green-600"
                                                    onChange={(e) => handleSelection( e.target.checked)}
                                                />
                                            </label>
                                        </div>
                                    </div>
                                ))}
                            </div>

                        </Disclosure.Panel>
                    </>
                )}
            </Disclosure>
            {/* Seceond Collases section  */}
            <Disclosure>
                {({ open }) => (
                    <>
                        <Disclosure.Button className="grid lg:flex w-full justify-between rounded-lg my-3 bg-gray-100 px-4 py-2 text-left text-sm font-medium text-black hover:bg-gray-200 focus:outline-none focus-visible:ring focus-visible:ring-opacity-75">
                            <span className="text-lg lg:text-3xl font-semibold">
                                Choose Large Side</span>
                            <span className={`${open} text-gray-500`}>
                                <h2 className="text-lg font-bold mb-4">
                                    <span className="text-sm text-gray-500">({selectedCount} Only 1 Select)</span>
                                    <span className="text-red-500">Required</span>
                                </h2>
                            </span>
                        </Disclosure.Button>
                        <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
                            {flavors2.map((category, index) => (
                                <div key={index}>
                                    <h3 className="text-md font-semibold mb-2">{category.category}</h3>
                                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 my-5">
                                        {category.options.map((option, idx) => (
                                            <label
                                                key={idx}
                                                className="flex items-center justify-between border p-2 rounded space-x-2 cursor-pointer"
                                            >
                                                <div className="flex items-center space-x-2">
                                                    <img className="w-12" src="https://i.ibb.co.com/7WWcJCW/Screenshot-2024-10-21-234915-removebg-preview.png" alt="" />
                                                    <div>
                                                        <p className="font-medium">{option.name}</p>
                                                        <p className="text-xs text-gray-500">
                                                            {option.tag && <span>{option.tag} · </span>}
                                                            <div className="rating rating-sm">
                                                                <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" />
                                                                <input
                                                                    type="radio"
                                                                    name="rating-6"
                                                                    className="mask mask-star-2 bg-orange-400"
                                                                    defaultChecked />
                                                                <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" />
                                                                <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" />
                                                                <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" />
                                                            </div>
                                                        </p>
                                                    </div>
                                                </div>
                                                <input
                                                    type="checkbox"
                                                    className="form-checkbox h-5 w-5 text-green-600"
                                                    onChange={(e) => handleSelection(option.name, e.target.checked)}
                                                />
                                            </label>

                                        ))}
                                    </div>
                                </div>
                            ))}

                        </Disclosure.Panel>
                    </>
                )}
            </Disclosure>
            {/* Third Collases section  */}
            <Disclosure>
                {({ open }) => (
                    <>
                        <Disclosure.Button className="grid lg:flex w-full justify-between rounded-lg bg-gray-100 px-4 py-2 text-left text-sm font-medium text-black hover:bg-gray-200 focus:outline-none focus-visible:ring focus-visible:ring-opacity-75">
                            <span className="text-lg lg:text-3xl font-semibold">Choose 1st Dip</span>
                            <span className={`${open} text-gray-500`}>
                                <h2 className="text-lg font-bold mb-4">
                                    <span className="text-sm text-gray-500">({selectedCount} of 20 Selected)</span>
                                    <span className="text-red-500">Required</span>
                                </h2>
                            </span>
                        </Disclosure.Button>
                        <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
                            {flavors3.map((category, index) => (
                                <div key={index}>
                                    <h3 className="text-md font-semibold mb-2">{category.category}</h3>
                                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                                        {category.options.map((option, idx) => (
                                            <label
                                                key={idx}
                                                className="flex items-center justify-between border p-2 rounded space-x-2 cursor-pointer"
                                            >
                                                <div className="flex items-center space-x-2">
                                                    <img className="w-12" src="https://i.ibb.co.com/P14Bnm8/Screenshot-2024-10-21-235657-removebg-preview.png" alt="" />
                                                    <div>
                                                        <p className="font-medium">{option.name}</p>
                                                        <p className="text-xs text-gray-500">
                                                            {option.tag && <span>{option.tag} · </span>}
                                                            <div className="rating rating-sm">
                                                                <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" />
                                                                <input
                                                                    type="radio"
                                                                    name="rating-6"
                                                                    className="mask mask-star-2 bg-orange-400"
                                                                    defaultChecked />
                                                                <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" />
                                                                <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" />
                                                                <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" />
                                                            </div>
                                                        </p>
                                                    </div>
                                                </div>
                                                <input
                                                    type="checkbox"
                                                    className="form-checkbox h-5 w-5 text-green-600"
                                                    onChange={(e) => handleSelection(option.name, e.target.checked)}
                                                />
                                            </label>

                                        ))}
                                    </div>
                                </div>
                            ))}

                        </Disclosure.Panel>
                    </>
                )}
            </Disclosure>
            {/* Button section  */}
            <div className="mt-4 text-center">
                <button
                    className={`w-full lg:w-3/6 py-2 px-4 rounded ${selectedCount > 0 ? "bg-green-600 text-white" : "bg-gray-400 text-gray-200"}`}
                    disabled={selectedCount === 0}
                >
                    Done
                </button>
            </div>
            <div
                className="hero mt-7"
                style={{
                    backgroundImage: "url(https://img.daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.webp)",
                }}>
                <div className="hero-overlay bg-opacity-80"></div>
                <div className="hero-content text-neutral-content text-center">
                    <div className="max-w-md flex items-center ">
                        <FaPlus className="text-4xl font-bold"></FaPlus>
                        <h1 className="mb-5 text-4xl font-bold">Add Special Requests</h1>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FlavorSelection;
