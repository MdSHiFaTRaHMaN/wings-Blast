import { useState } from "react";
import Swal from "sweetalert2"; // Import SweetAlert2
import { BiUser } from "react-icons/bi";
import { FaCamera } from "react-icons/fa";
import { FiEdit } from "react-icons/fi";
import Profile from '../assets/images/userprofile.jpg';
import { API, useUserProfile } from "../api/api";

const UserProfile = () => {
    const {  user, isLoading, isError, error, refetch } = useUserProfile();
    const [isEditing, setIsEditing] = useState(false);
    const [isUser, setIsUser] = useState(user);

    if (isLoading) {
        return <span className="loading loading-bars w-[200px] ml-[700px] "></span>;
    }


    if (isError) {
        return <div className="text-red-600">Error: {error}</div>;
    }

    const userInfo = {
        first_name: user?.first_name,
        last_name: user?.last_name,
        phone: user?.phone,
        street_address: user?.street_address,
        city: user?.city,
        postal_or_zip_code: user?.postal_or_zip_code,
        state_or_region: user?.state_or_region,
        country: user?.country,
        birth_day: user?.birth_day
    };

    
    // Toggle editing mode
    const handleEditClick = () => {
        setIsEditing(!isEditing);
    };

    // Handle form input changes
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setIsUser({ ...isUser, [name]: value });
    };

    // Handle save action
    const handleSave = async () => {
        try {
             await API.put("/user/update", isUser);
            refetch();

            // Show success alert and switch back to view mode
            Swal.fire({
                icon: "success",
                title: "Profile updated!",
                text: "Your profile has been successfully updated.",
                confirmButtonText: "OK",
            }).then(() => {
                setIsEditing(false); // Return to view mode after saving
            });
        } catch (error) {
            console.error("Profile update failed", error);
            Swal.fire({
                icon: "error",
                title: "Update Failed",
                text: "There was an issue updating your profile. Please try again.",
            });
        }
    };

    return (
        <div className="bg-gray-50 flex justify-center items-center">
            <div className="bg-white shadow-lg rounded-lg overflow-hidden w-full md:w-11/12 lg:w-10/12 mx-auto mt-3 lg:mt-10">
                <div className="grid md:flex lg:flex items-center p-5 md:p-8">
                    {/* Profile Card */}
                    <div className="flex flex-col items-center md:w-4/12 border-b md:border-b-0 md:border-r md:pr-8">
                        <div className="relative">
                            <img
                                className="h-32 w-32 rounded-full object-cover mb-4 border-4 border-gray-200"
                                src={Profile}
                                alt="Profile"
                            />
                            <FaCamera className="absolute top-20 right-1 text-gray-700 bg-white p-1 rounded-full text-2xl cursor-pointer hover:text-gray-900 hover:bg-gray-100 transition" />
                        </div>
                        <h1 className="text-lg lg:text-xl font-bold text-gray-800">
                            {user?.first_name} {user?.last_name}
                        </h1>
                        <p className="text-gray-500 mb-3 text-sm">{user.email}</p>
                        <ul className="w-full text-gray-600 space-y-1 mt-4">
                            <li className="flex justify-between items-center py-2">
                                <span>Status</span>
                                <span className="bg-green-500 text-white py-1 px-3 rounded-full text-xs">
                                    {user.status}
                                </span>
                            </li>
                        </ul>
                        <ul className="w-full text-gray-600 space-y-1 mt-2">
                            <li className="flex justify-between items-center py-2">
                                <span>Birthday:</span>
                                <span className=" py-1 px-3 rounded-full text-lg">
                                    {user.birth_day}
                                </span>
                            </li>
                        </ul>
                    </div>

                    {/* Profile Details */}
                    <div className="flex-1 md:w-8/12 py-6 md:pl-8">
                        <div className="flex items-center justify-between mb-4">
                            <h2 className="text-lg font-semibold text-gray-800 flex items-center gap-2">
                                <BiUser className="text-green-500" />
                                About
                            </h2>
                            <div className="flex items-center justify-between">
                                <button
                                    onClick={handleEditClick}
                                    className="flex items-center space-x-2 bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition"
                                >
                                    <span>{isEditing ? "Cancel" : "Edit"}</span>
                                    {!isEditing && <FiEdit className="text-lg" />}
                                </button>
                            </div>
                        </div>

                        {/* Display/Edit Mode */}
                        {!isEditing ? (
                            <div className="grid md:grid-cols-2 gap-4">
                                {Object.keys(userInfo).map((key) => (
                                    <div key={key} className="text-sm">
                                        <div className="font-semibold text-gray-600 capitalize">
                                            {key.replace(/([A-Z])/g, " $1")}
                                        </div>
                                        <div className="text-gray-800 mt-1">{userInfo[key]}</div>
                                    </div>
                                ))}
                            </div>
                        ) : (
                            <div className="grid md:grid-cols-2 gap-4">
                                {Object.keys(userInfo).map((key) => (
                                    <div key={key} className="text-sm">
                                        <label className="block font-semibold text-gray-600 capitalize">
                                            {key.replace(/([A-Z])/g, " $1")}
                                        </label>
                                        <input
                                            type="text"
                                            name={key}
                                            defaultValue={userInfo[key]}
                                            onChange={handleInputChange}
                                            className="mt-1 px-4 py-2 border rounded-md w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                                        />
                                    </div>
                                ))}
                            </div>
                        )}

                        {/* Save Button */}
                        {isEditing && (
                            <button
                                onClick={handleSave}
                                className="w-full bg-blue-600 text-white font-bold py-2 px-4 rounded mt-4 hover:bg-blue-700 transition duration-200"
                            >
                                Save Changes
                            </button>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UserProfile;
