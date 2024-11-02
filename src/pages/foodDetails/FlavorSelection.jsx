import { useState } from "react";
import { Disclosure } from "@headlessui/react";
import Fire from '../../assets/images/fire.png';
import { useFlavor } from "../../api/api";

const FlavorSelection = ({ flavorReq, choiceFlavorReq }) => {
    const [selectedCount, setSelectedCount] = useState(0);
    const [selectedOptions, setSelectedOptions] = useState({});
    const [wings, setWings] = useState(choiceFlavorReq);
    const { flavor, loading, error } = useFlavor();
    const { choiceItem, setChoiceItem } = useState();

    // console.log(flavor)
    const handleWingsChange = (value) => {
        const validValue = Math.max(0, Math.min(value, choiceFlavorReq));
        setWings(validValue);
        setChoiceItem(validValue); // Update choiceItem based on valid wings count
    };


    // console.log(choiceItem)

    const handleSelection = (optionName, checked) => {
        setSelectedOptions((prev) => {
            const newSelectedOptions = { ...prev, [optionName]: checked };
            const newCount = Object.values(newSelectedOptions).filter(Boolean).length;
            setSelectedCount(newCount);
            if (!checked) setWings(20);
            return newSelectedOptions;
        });
    };

    if (loading) {
        return <p className="text-center text-lg font-medium"><span className="loading loading-bars loading-lg"></span></p>;
    }
    // const popularFlavors = flavor.filter(f => f.ispopular);
    // const wetFlavors = flavor.filter(f => f.isWet);
    // const dryFlavors = flavor.filter(f => f.isDry);
    // const honeyFlavors = flavor.filter(f => f.isHoney);


    return (
        <div className="w-full lg:w-10/12 mx-auto my-3 p-2 bg-white rounded-lg shadow-lg">
            {/* Flavor Selection Disclosure */}
            <Disclosure defaultOpen>
                {({ open }) => (
                    <>
                        <Disclosure.Button className="grid md:flex lg:flex w-full justify-between items-center rounded-lg bg-gradient-to-r from-blue-100 via-blue-50 to-blue-100 px-6 py-3 text-left text-sm font-medium text-black hover:bg-blue-200 focus:outline-none focus-visible:ring focus-visible:ring-opacity-75 shadow-lg">
                            <div>
                                <span className="text-lg lg:text-2xl font-semibold">Choose Flavors</span>
                                <h2 className="font-bold mb-4">
                                    <span className="text-base text-gray-500">Up To Select: <span className="text-black ">({selectedCount} of {flavorReq} Selected)</span></span>
                                </h2>
                            </div>
                            {/* select wings  */}
                            <div className="text-gray-500">
                                <h2 className="text-lg font-bold mb-4">
                                    <span className="text-sm text-gray-500">( {choiceItem} of {choiceFlavorReq} Selected)</span>
                                    <span className="text-red-500"> Required</span>
                                </h2>
                            </div>
                        </Disclosure.Button>
                        {error && <p className="text-red-500">Error loading flavors.</p>}
                        <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-700">
                            {/* all  populer cart */}
                            {/* All Wet Cart  */}
                            <div className="flavor-selection grid md:grid-cols-2 lg:grid-cols-3 gap-5 w-full">
                                {!loading && flavor.map((category, index) => (
                                    <div key={index} className="w-full">
                                        <h3 className="text-md font-semibold mb-2 text-blue-600">{category.category}</h3>
                                        <div className="w-full">
                                            <label className="block border border-gray-300 p-3 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 cursor-pointer">
                                                <div className="flex items-center justify-between">
                                                    <div className="flex items-center space-x-3">
                                                        <img className="w-16 rounded-full" src="https://i.ibb.co.com/5rgTFxh/icon-removebg-preview.png" alt="" />
                                                        <div>
                                                            <p className="font-medium text-gray-800">{category.name}</p>
                                                            <div className="rating flex">
                                                                {[...Array(category.flavor_rating)].map((_, i) => (
                                                                    <img key={i} src={Fire} className="h-4 w-4" />
                                                                ))}
                                                                {[...Array(5 - category.flavor_rating)].map((_, i) => (
                                                                    <img key={i} src={Fire} className="opacity-30 h-4 w-4" />
                                                                ))}
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <input
                                                        type="checkbox"
                                                        className="form-checkbox h-5 w-5 text-green-600 transition duration-200 ease-in-out transform hover:scale-110"
                                                        onChange={(e) => handleSelection(category.name, e.target.checked)}
                                                        checked={selectedOptions[category.name] || false}
                                                        disabled={!selectedOptions[category.name] && selectedCount >= flavorReq}
                                                    />
                                                </div>

                                                {/* Input Field (conditionally shown) */}
                                                {selectedOptions[category.name] && (
                                                    <div className="mt-3 ml-[90px] mx-auto items-center gap-2 text-gray-700">
                                                        <span className="font-medium">Number of Wings:</span>
                                                        <div className="flex items-center border p-2 w-[148px]  rounded-md overflow-hidden">
                                                            <button
                                                                className="px-3 py-2 bg-gray-100 hover:bg-gray-200 transition"
                                                                onClick={() => handleWingsChange(wings - 1)}
                                                                disabled={wings <= 0}
                                                            >
                                                                -
                                                            </button>
                                                            <input
                                                                type="number"
                                                                value={wings}
                                                                onChange={(e) => handleWingsChange(Number(e.target.value))}
                                                                className="w-16 text-center text-lg border-l border-r outline-none"
                                                            />
                                                            <button
                                                                className="px-3 py-2 bg-gray-100 hover:bg-gray-200 transition"
                                                                onClick={() => handleWingsChange(wings + 1)}
                                                                disabled={wings >= 100}
                                                            >
                                                                +
                                                            </button>
                                                        </div>
                                                    </div>
                                                )}
                                            </label>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </Disclosure.Panel>
                    </>
                )}
            </Disclosure>
           
        </div>
    );
};

export default FlavorSelection;
