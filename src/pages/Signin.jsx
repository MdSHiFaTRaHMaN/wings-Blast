import { useContext, useState } from "react";
import { BsApple } from "react-icons/bs";
import { FaGoogle } from "react-icons/fa";
import { BiMobile } from "react-icons/bi";
import { AuthContext } from "../authprovider/AuthProvider";
import OtpInput from 'react-otp-input';
import { CgSpinner } from "react-icons/cg";
import { API } from "../api/api";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
 

const Signin = () => {
    const { handleGoogle } = useContext(AuthContext);
    const [showMobileLogin, setShowMobileLogin] = useState(false);
    const [showOtpModal, setShowOtpModal] = useState(false);
    const [loginLoading, setLoginLoading] = useState(false);
    const [mobile, setMobile] = useState("");
    const [otp, setOtp] = useState("");
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate(); // Initialize useNavigate
 
    const handleLogin = async (e) => {
        e.preventDefault();
        setLoginLoading(true)
        const form = new FormData(e.currentTarget);
        const email = form.get('email');
        const password = form.get('password');


        try {
            const response = await API.post("/user/login", {
                email,
                password
            });

            // Store token in localStorage
            localStorage.setItem("token", response.data.data.token);
            // Show success message and navigate home
            Swal.fire({
                title: 'Login Successful!',
                text: 'Welcome back!',
                icon: 'success',
                confirmButtonText: 'OK'
            }).then(() => {
                window.location.href = '/';
                 // Redirect to home page after confirmation
            });

        } catch (error) {
            // Show error message if login fails
            Swal.fire({
                title: 'Login Failed',
                text: 'Please check your credentials.',
                icon: 'error',
                confirmButtonText: 'Try Again'
            });
        } finally {
            setLoading(false);
            setLoginLoading(false);
        }
    };


    // ================
    const handleSendOtp = (e) => {
        e.preventDefault();
        setShowMobileLogin(false); // Close the mobile input modal
        setShowOtpModal(true); // Open the OTP modal
    };

    const handleVerifyOtp = (e) => {
        e.preventDefault();
        console.log("Verifying OTP:", otp);
        // Logic to verify OTP
    };

    return (
        <section className="bg-gray-400 py-5 lg:py-[20px]">
            <div className="container mx-auto">
                <div className="-mx-4 flex flex-wrap">
                    <div className="w-full px-4">
                        <div className="relative mx-auto max-w-[525px] overflow-hidden rounded-lg bg-white px-10 py-16 text-center dark:bg-dark-2 sm:px-12 md:px-[60px]">
                            <div className="mb-10 text-center md:mb-16">
                                <a href="/#" className="mx-auto inline-block max-w-[160px]">
                                    <img
                                        src="https://cdn.tailgrids.com/2.0/image/assets/images/logo/logo-primary.svg"
                                        alt="logo"
                                    />
                                </a>
                            </div>
                            <form
                                onSubmit={handleLogin}
                            >
                                <input
                                    className="w-full rounded-md border border-stroke bg-transparent px-5 py-3 text-base text-body-color outline-none focus:border-primary focus-visible:shadow-none"
                                    type="email"
                                    name="email"
                                    placeholder="Email"
                                />
                                <input
                                    className="w-full my-3 rounded-md border border-stroke bg-transparent px-5 py-3 text-base text-body-color outline-none focus:border-primary focus-visible:shadow-none"
                                    type="password"
                                    name="password"
                                    placeholder="Password"
                                />
                                <div className="mb-10">
                                    <input
                                        type="submit"
                                        value="Sign In"
                                        disabled={loginLoading}
                                        className={`w-full cursor-pointer rounded-md border border-primary bg-primary px-5 py-3 text-base font-medium text-white transition hover:bg-opacity-90 ${loginLoading ? "opacity-50 cursor-not-allowed" : ""
                                            }`}
                                    />


                                </div>
                            </form>
                            <div className="divider divider-info">OR</div>
                            <ul className="-mx-2 mb-12 flex justify-between">
                                <li className="w-full px-2">
                                    <button
                                        onClick={() => setShowMobileLogin(true)}
                                        className="flex h-11 w-full items-center justify-center rounded-md bg-[#4064AC] hover:bg-opacity-90"
                                    >
                                        <BiMobile className="text-white" />
                                    </button>
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
                                    <a onClick={handleGoogle}
                                        className="flex h-11 items-center justify-center rounded-md bg-[#D64937] hover:bg-opacity-90"
                                    >
                                        <FaGoogle className="text-white" />
                                    </a>
                                </li>
                            </ul>
                            <p className="text-base text-body-color dark:text-dark-6">
                                <span className="pr-0.5">Not a member yet?</span>
                                <a href="/#" className="text-primary hover:underline">
                                    Sign Up
                                </a>
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Mobile Login Form Modal */}
            {showMobileLogin && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
                    <div className="bg-emerald-700 rounded-lg p-8 max-w-md w-full">
                        <h2 className="text-2xl mb-4 text-white">Mobile Login</h2>
                        <form onSubmit={handleSendOtp}>
                            <input
                                className="w-full rounded-md border border-stroke bg-transparent px-5 py-3 mb-4 text-base text-white outline-none focus:border-primary focus-visible:shadow-none"
                                type="tel"
                                name="mobile"
                                placeholder="Enter your mobile number"
                                value={mobile}
                                onChange={(e) => setMobile(e.target.value)}
                            />
                            <button
                                type="submit"
                                className="px-5 py-2 bg-primary text-white rounded-md w-full"
                            >
                                Send OTP
                            </button>
                            <button
                                type="button"
                                onClick={() => setShowMobileLogin(false)}
                                className="mt-3 px-5 py-2 bg-gray-500 text-white rounded-md w-full"
                            >
                                Cancel
                            </button>
                        </form>
                    </div>
                </div>
            )}

            {/* OTP Verification Modal */}
            {showOtpModal && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
                    <div className="bg-emerald-700 rounded-lg p-8 max-w-md w-full">
                        <h2 className="text-2xl mb-4">Enter OTP</h2>
                        <form onSubmit={handleVerifyOtp}>
                            <OtpInput
                                value={otp}
                                onChange={setOtp}
                                numInputs={6}
                                renderSeparator={<span className="">-</span>}
                                renderInput={(props) => <input {...props} />}
                                inputStyle={{
                                    width: "2rem",
                                    height: "2rem",
                                    margin: "0 0.5rem",
                                    fontSize: "1.5rem",
                                    borderRadius: "4px",
                                    border: "1px solid #ccc",
                                    textAlign: "center",
                                }}
                                autoFocus
                            />
                            <button
                                type="submit"
                                className="mt-4 px-5 py-2 bg-primary text-white rounded-md w-full"
                            >
                                {
                                    loading && <CgSpinner className="mt-1 animate-spin" />
                                }
                                <span>Verify OTP</span>
                            </button>
                            <button
                                type="button"
                                onClick={() => setShowOtpModal(false)}
                                className="mt-3 px-5 py-2 bg-gray-500 text-white rounded-md w-full"
                            >
                                Cancel
                            </button>
                        </form>
                    </div>
                </div>
            )}
        </section>
    );
};

export default Signin;
