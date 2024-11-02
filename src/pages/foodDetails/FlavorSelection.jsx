import { useState, useEffect } from "react";
import { Disclosure } from "@headlessui/react";
import Fire from '../../assets/images/fire.png';
import { useFlavor } from "../../api/api";

const FlavorSelection = ({ flavorReq, choiceFlavorReq }) => {
    const [selectedCount, setSelectedCount] = useState(0);
    const [selectedOptions, setSelectedOptions] = useState({});
    const [wingsDistribution, setWingsDistribution] = useState({});
    const { flavor, loading, error } = useFlavor();
    const [choiceItem, setChoiceItem] = useState(0);

    // Function to calculate initial wings distribution based on selected count
    const getWingsDistribution = (count) => {
        if (count === 0) return [];
        const base = Math.floor(choiceFlavorReq / count);
        const remainder = choiceFlavorReq % count;
        return Array(count).fill(base).map((val, idx) => idx < remainder ? val + 1 : val);
    };

    // Update wings distribution whenever options are selected or deselected
    const updateWingsDistribution = (newSelectedOptions) => {
        const selectedKeys = Object.keys(newSelectedOptions).filter(key => newSelectedOptions[key]);
        const distribution = getWingsDistribution(selectedKeys.length);
        const newDistribution = {};
        selectedKeys.forEach((key, index) => {
            newDistribution[key] = distribution[index];
        });
        setWingsDistribution(newDistribution);
    };

    const handleSelection = (optionName, checked) => {
        setSelectedOptions((prev) => {
            const newSelectedOptions = { ...prev, [optionName]: checked };
            const newCount = Object.values(newSelectedOptions).filter(Boolean).length;
            setSelectedCount(newCount);
            updateWingsDistribution(newSelectedOptions);
            return newSelectedOptions;
        });
    };

    // Adjust the wings distribution when the user changes any option's value
    const handleWingsChange = (optionName, newValue) => {
        setWingsDistribution((prev) => {
            const newDistribution = { ...prev, [optionName]: Math.max(0, Math.min(newValue, choiceFlavorReq)) };

            // Calculate total after the new change
            const totalSelected = Object.values(newDistribution).reduce((sum, val) => sum + val, 0);
            let excess = totalSelected - choiceFlavorReq;

            // Adjust other values if total exceeds choiceFlavorReq
            if (excess > 0) {
                const keys = Object.keys(newDistribution).filter((key) => key !== optionName);
                for (let key of keys) {
                    if (excess <= 0) break;
                    const reduceBy = Math.min(newDistribution[key], excess);
                    newDistribution[key] -= reduceBy;
                    excess -= reduceBy;
                }
            }

            // Fill deficit if total is less than choiceFlavorReq
            let deficit = choiceFlavorReq - Object.values(newDistribution).reduce((sum, val) => sum + val, 0);
            if (deficit > 0) {
                const keys = Object.keys(newDistribution).filter((key) => key !== optionName);
                for (let key of keys) {
                    if (deficit <= 0) break;
                    const increaseBy = Math.min(choiceFlavorReq - newDistribution[key], deficit);
                    newDistribution[key] += increaseBy;
                    deficit -= increaseBy;
                }
            }

            return newDistribution;
        });
    };

    // Update wings distribution whenever choiceFlavorReq changes
    useEffect(() => {
        updateWingsDistribution(selectedOptions);
    }, [choiceFlavorReq]);

    // Update choiceItem based on total selected wings
    useEffect(() => {
        const totalSelectedWings = Object.values(wingsDistribution).reduce((sum, num) => sum + num, 0);
        setChoiceItem(totalSelectedWings);
    }, [wingsDistribution]);

    if (loading) {
        return <p className="text-center text-lg font-medium"><span className="loading loading-bars loading-lg"></span></p>;
    }

    return (
        <div className="w-full lg:w-10/12 mx-auto my-3 p-2 bg-white rounded-lg shadow-lg">
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
                            <div className="text-gray-500">
                                <h2 className="text-lg font-bold mb-4">
                                    <span className="text-sm text-gray-500">( {choiceItem} of {choiceFlavorReq} Selected)</span>
                                    <span className="text-red-500"> Required</span>
                                </h2>
                            </div>
                        </Disclosure.Button>
                        {error && <p className="text-red-500">Error loading flavors.</p>}
                        <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-700">
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
                                                {selectedOptions[category.name] && (
                                                    <div className="mt-3 ml-[90px] mx-auto items-center gap-2 text-gray-700">
                                                        <span className="font-medium">Number of Wings:</span>
                                                        <div className="flex items-center border p-2 w-[148px] rounded-md overflow-hidden">
                                                            <button
                                                                className="px-3 py-2 bg-gray-100 hover:bg-gray-200 transition"
                                                                onClick={() => handleWingsChange(category.name, wingsDistribution[category.name] - 1)}
                                                                disabled={wingsDistribution[category.name] <= 0}
                                                            >
                                                                -
                                                            </button>
                                                            <input
                                                                type="number"
                                                                value={wingsDistribution[category.name] || 0}
                                                                onChange={(e) => handleWingsChange(category.name, Number(e.target.value))}
                                                                className="w-16 text-center text-lg border-l border-r outline-none"
                                                            />
                                                            <button
                                                                className="px-3 py-2 bg-gray-100 hover:bg-gray-200 transition"
                                                                onClick={() => handleWingsChange(category.name, wingsDistribution[category.name] + 1)}
                                                                disabled={wingsDistribution[category.name] >= choiceFlavorReq}
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
