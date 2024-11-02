// import { FaFacebook, FaGoogle, FaTwitter } from "react-icons/fa";

import { useState } from "react";
import { BsApple } from "react-icons/bs";
import { FaFacebookF, FaGoogle } from "react-icons/fa";
import { Link } from "react-router-dom";
import { API } from "../api/api";
import Swal from "sweetalert2";

const Signup = () => {
    const [signUpLoading, setSignUpLoading] = useState(false);
    // const [loading, setLoading] = useState(false);

    const handleSignUp = async (e) => {
        e.preventDefault();
        setSignUpLoading(true)
        const form = new FormData(e.currentTarget);
        const first_name = form.get('fastname');
        const last_name = form.get('lastname');
        const phone = form.get('number');
        const email = form.get('email');
        const password = form.get('password');
        const confirmPassword = form.get('confirmPassword');
        console.log(first_name, last_name, phone, password, email, confirmPassword)
        try {
            const response = await API.post("/user/signup", {
                first_name,
                last_name,
                phone,
                email,
                password,
                confirmPassword
            });
            localStorage.setItem("token", response.data.token);
            setSignUpLoading(false)
            Swal.fire({
                position: "top-end",
                icon: "success",
                title: "Your work has been saved",
                showConfirmButton: false,
                timer: 1500
              });
        } catch (error) {
            console.error("login Fail", error)
            setSignUpLoading(false)
        } finally {
            setSignUpLoading(false)
        }
    }


    return (
        <div className="flex bg-gray-100">
            <div className="w-full  lg:w-4/6 flex items-center justify-center">
                <div className="w-full lg:w-4/6 p-6">
                    <h1 className="text-3xl font-semibold mb-6 text-black text-center">Sign Up</h1>
                    <h1 className="text-sm font-semibold mb-6 text-gray-500 text-center">Join to Our Community with all time access and free </h1>

                    <form
                        onSubmit={handleSignUp}
                        className="">
                        <div className="grid lg:grid-cols-2 gap-5 w-full">
                            <div>
                                <label className="block text-sm font-medium text-gray-700">Fast name</label>
                                <input type="text" id="username" name="fastname" className="mt-1 p-2 w-full  border rounded-md focus:border-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-300 transition-colors duration-300" />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700">Last name</label>
                                <input type="text" id="username" name="lastname" className="mt-1 p-2 w-full border rounded-md focus:border-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-300 transition-colors duration-300" />
                            </div>
                        </div>

                        <div className="grid lg:grid-cols-2 gap-5 w-full">
                            <div>
                                <label className="block text-sm font-medium text-gray-700">Email Address</label>
                                <input type="email" id="username" name="email" className="mt-1 p-2 w-full  border rounded-md focus:border-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-300 transition-colors duration-300" />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700">Phone Number(Optional)</label>
                                <input type="number" id="username" name="number" className="mt-1 p-2 w-full border rounded-md focus:border-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-300 transition-colors duration-300" />
                            </div>
                        </div>
                        <div className="grid lg:grid-cols-2 gap-5 w-full">
                            <div>
                                <label className="block text-sm font-medium text-gray-700">Password</label>
                                <input type="password" id="username" name="password" className="mt-1 p-2 w-full  border rounded-md focus:border-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-300 transition-colors duration-300" />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700">Confirm Password</label>
                                <input type="password" id="username" name="confirmPassword" className="mt-1 p-2 w-full border rounded-md focus:border-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-300 transition-colors duration-300" />
                            </div>
                        </div>
                        <div>
                            <button type="submit" disabled={signUpLoading} className="w-full bg-sky-700 text-white p-2 my-5 rounded-md hover:bg-sky-500  focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 transition-colors duration-300">Sign Up</button>
                        </div>
                    </form>
                    <div className=" text-sm text-gray-600 text-center">
                        <p>Already have an account? <Link to="/signin"><span className="text-green-600 hover:underline">SIGN IN</span></Link>
                        </p>
                    </div>


                    <ul className="-mx-2 mt-5 flex justify-between">
                        <li className="w-full px-2">
                            <a
                                href="/#"
                                className="flex h-11 items-center justify-center rounded-md bg-[#4064AC] hover:bg-opacity-90"
                            >
                                <FaFacebookF className="text-white" />
                            </a>
                        </li>
                        <li className="w-full px-2">
                            <a
                                href="/#"
                                className="flex h-11 items-center justify-center rounded-md bg-[#1C9CEA] hover:bg-opacity-90"
                            >
                                <BsApple className="text-white" />
                            </a>
                        </li>
                        <li className="w-full px-2">
                            <a
                                href="/#"
                                className="flex h-11 items-center justify-center rounded-md bg-[#D64937] hover:bg-opacity-90"
                            >
                                <FaGoogle className="text-white" />
                            </a>
                        </li>
                    </ul>

                </div>
            </div>
            <div className="hidden lg:flex items-center w-2/6 justify-center text-black">
                <div className=" text-center">
                    <img src="https://i.ibb.co/JKXwpr2/Screenshot-2024-10-21-125229.png" alt="" />
                </div>
            </div>
        </div>
    );
};

export default Signup;