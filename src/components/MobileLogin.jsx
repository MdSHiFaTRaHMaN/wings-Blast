import { useState } from "react";

export default function MobileLogin() {
    const [isSelected, setIsSelected] = useState(false);
    const [wings, setWings] = useState(20);

    const handleWingsChange = (value) => {
        // Set boundaries between 0 and 100
        setWings(Math.max(0, Math.min(value, 100)));
    };

    return (
        <div className="border rounded-lg p-4  items-center gap-4 shadow-md">
            {/* Icon and Title */}
            <div className="flex items-center gap-2">
                <div className="bg-red-500 text-white rounded-full p-2">
                    <img src="" alt="LOGO" />
                </div>
                <div>
                    <h2 className="text-lg font-bold">ATOMIC</h2>
                    <div className="text-red-500 text-xl flex">
                        {Array.from({ length: 5 }).map((_, index) => (
                            <span key={index}>🔥</span>
                        ))}
                    </div>
                </div>
                <div>
                    <input
                        type="checkbox"
                        checked={isSelected}
                        onChange={() => {
                            setIsSelected((prev) => !prev);
                            if (isSelected) setWings(20); // Reset wings count if deselected
                        }}
                        className="w-6 h-6 accent-green-500"
                    />
                </div>
            </div>

            {/* Input Field (conditionally shown) */}
            {isSelected && (
                <div className=" items-center gap-2">
                    <span className="font-medium">Number of Wings:</span>
                    <div className="flex items-center border rounded-md overflow-hidden">
                        <button
                            className="px-2 py-1 bg-gray-200 hover:bg-gray-300"
                            onClick={() => handleWingsChange(wings - 1)}
                            disabled={wings <= 0}
                        >
                            -
                        </button>
                        <input
                            type="number"
                            value={wings}
                            onChange={(e) => handleWingsChange(Number(e.target.value))}
                            className="w-16 text-center border-l border-r outline-none"
                        />
                        <button
                            className="px-2 py-1 bg-gray-200 hover:bg-gray-300"
                            onClick={() => handleWingsChange(wings + 1)}
                            disabled={wings >= 100}
                        >
                            +
                        </button>
                    </div>
                </div>
            )}

            {/* Select Button */}

        </div>
    );
}
