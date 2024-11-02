import { useState } from "react";
import { BsClock } from "react-icons/bs";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { SiFampay } from "react-icons/si";
import { Link } from "react-router-dom";

const CheckOut = () => {

    const [showPassword, setShowPassword] = useState(false);
    const [showPasswordConfirmation, setShowPasswordConfirmation] = useState(false);

    const togglePasswordVisibility = () => setShowPassword(!showPassword);
    const togglePasswordConfirmationVisibility = () => setShowPasswordConfirmation(!showPasswordConfirmation);


    return (
        <section className="text-gray-600 body-font  mx-auto">
            <div className="container px-5 py-12 w-full lg:w-10/12 mx-auto flex flex-wrap ">
                {/* Left side section  */}
                <div className="lg:w-4/6 md:w-1/2 md:pr-16 shadow-lg rounded-lg lg:pr-0 pr-0 p-">
                    <div className=" rounded-t-md">
                        <h1 className="title-font font-bold text-4xl text-gray-900 pt-5 ml-3 mb-6">
                            CHECKOUT
                        </h1>
                        <div className="divider"></div>
                    </div>
                    <div className="my-7 mx-4 text-black">
                        <p>NOTE: Fields marked with an asterisk (*) are required.</p>
                        <div className="divider"></div>
                        <div className="flex justify-between text-center text-2xl">
                            <h1>CONTACT INFO</h1>
                            <Link to='/signin' className="text-green-500 text-xl font-semibold">
                                LOG IN
                            </Link>
                        </div>
                    </div>
                    <div className="max-w-4xl p-6 mx-auto bg-white rounded-md">
                        <form>
                            <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
                                <div>
                                    <label className="text-gray-700" >Fast Name *</label>
                                    <input
                                        id="FastName"
                                        type="text"
                                        required
                                        placeholder="Fast Name"
                                        className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-800 rounded-md focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring" />
                                </div>
                                <div>
                                    <label className="text-gray-700" >Last Name *</label>
                                    <input
                                        id="LastName"
                                        required
                                        placeholder="Last Name"
                                        type="text"
                                        className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-800 rounded-md focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring" />
                                </div>

                                <div>
                                    <label className="text-gray-700" >Email Address *</label>
                                    <input
                                        id="emailAddress"
                                        required
                                        placeholder="Email Address"
                                        type="email"
                                        className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-800 rounded-md focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring" />
                                </div>

                                <div>
                                    <label className="text-gray-700" >Phone *</label>
                                    <input
                                        id="phone"
                                        required
                                        placeholder="xxx xxx xxxx"
                                        type="text"
                                        className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-800 rounded-md focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring" />
                                </div>
                                <div className="relative">
                                    <label className="text-gray-700">Password *</label>
                                    <input
                                        id="password"
                                        required
                                        type={showPassword ? "text" : "password"}
                                        className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-800 rounded-md focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring"
                                    />
                                    <div className="absolute inset-y-0 right-0 pr-2 pt-7 flex items-center cursor-pointer" onClick={togglePasswordVisibility}>
                                        {showPassword ? <FaEyeSlash /> : <FaEye />}
                                    </div>
                                </div>

                                <div className="relative">
                                    <label className="text-gray-700">Password Confirmation *</label>
                                    <input
                                        id="passwordConfirmation"
                                        required
                                        type={showPasswordConfirmation ? "text" : "password"}
                                        className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-800 rounded-md focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring"
                                    />
                                    <div className="absolute inset-y-0 right-0 pr-2 pt-7 flex items-center cursor-pointer" onClick={togglePasswordConfirmationVisibility}>
                                        {showPasswordConfirmation ? <FaEyeSlash /> : <FaEye />}
                                    </div>
                                </div>
                            </div>
                            <div className="flex mt-5 gap-2">
                                <input
                                    type="checkbox"
                                    defaultChecked
                                    required
                                    className="checkbox [--chkbg:oklch(var(--a))] [--chkfg:oklch(var(--p))]" />
                                <p>Yes, bring me in the know with exclusive flavor news and offers.</p>
                            </div>
                        </form>
                    </div>
                    <div className="w-full">
                        <div className="flex justify-center w-full gap-5">
                            <button className="bg-yellow-400 flex items-center text-black font-semibold py-3 px-28 rounded"><SiFampay />
                                <span className="text-sky-500">Pay</span> pal
                            </button>
                            <button className="bg-black flex items-center text-white font-semibold py-3 px-28 rounded"><FcGoogle /> Pay</button>
                        </div>
                        <div className="divider mt-6">OR</div>
                        <fieldset >
                            <div className="space-y-2 mx-5 my-6">
                                <label
                                    htmlFor="Option1"
                                    className="flex cursor-pointer items-start gap-4 rounded-lg border border-gray-500 px-4 py-6 transition hover:bg-gray-50"
                                >
                                    <div className="flex items-center">
                                        &#8203;
                                        <input type="checkbox" className="size-4 rounded border-gray-300" id="Option1" />
                                    </div>

                                    <div>
                                        <strong className="font-medium text-gray-900"> Add a Wingstop gift card</strong>
                                    </div>
                                </label>

                                <label
                                    htmlFor="Option2"
                                    className="flex cursor-pointer items-start gap-4 rounded-lg border border-gray-500 px-4 py-6 transition hover:bg-gray-50"
                                >
                                    <div className="flex items-center">
                                        &#8203;
                                        <input type="checkbox" className="size-4 rounded border-gray-300" id="Option2" />
                                    </div>

                                    <div>
                                        <strong className="font-medium text-gray-900"> Add a credit/debit card </strong>
                                    </div>
                                </label>
                            </div>
                        </fieldset>
                    </div>
                </div>

                {/* Right Side section  */}

                <div className="lg:w-2/6 md:w-1/2 border border-gray-300 rounded-lg  flex flex-col md:ml-auto w-full mt-10 md:mt-0">
                    <div className="px-4 pt-4">
                        <div className="flex items-center justify-between">
                            <h2 className="text-gray-900 text-2xl font-medium title-font mb-5">Carryout from: </h2>
                        </div>
                        <h2 className="font-semibold text-green-700 text-xl">Castomer Current Location</h2>
                        <h2 className="text-green-700">Costomer Street</h2>
                        <h2 className="text-green-700">House No</h2>
                        <h2 className="text-green-700">Coustomer City</h2>
                        {/* order time  */}
                        <div className="mt-3 flex items-center gap-2 text-black">
                            <BsClock></BsClock>
                            <span>10:30 AM to Midnight</span>
                        </div>
                    </div>
                    <div className="divider"></div>
                    <div className="p-4 text-black">
                        <h2 className="text-2xl font-semibold">10 pc Classic Combo</h2>
                        <p>Sweet BBQ Blaze x 5</p>
                        <p>Atomic x 5</p>
                        <p>Ranch</p>
                        <p>Seasoned Fries</p>
                        <p>Self-Serve Fountain</p>
                        <p>Regular Amount of Seasoning</p>
                        <p>Regular Ranch (+$1.99)</p>
                    </div>
                    <div className="flex justify-between text-black px-4">
                        <h3 className=""><span className="font-semibold">Quantity:</span> 4</h3>
                        <span>$ 78.05</span>
                    </div>
                    <div className="divider"></div>
                    <div>
                        <table className="w-full text-xl text-left text-black ">
                            <thead className="text-2xl text-black uppercase bg-gray-50 ">
                                <tr>
                                    <th scope="col" className="py-3 px-6">Total Price</th>
                                    <th scope="col" className="py-3 px-6"></th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="bg-white  justify-around text-base ">
                                    <td className="py-2 px-6">Subtotal</td>
                                    <td className="py-2 px-6">$ 78.00</td>
                                </tr>
                                <tr className="bg-white text-base ">
                                    <td className="py-2 px-6">Tax</td>
                                    <td className="py-2 px-6">$ 2.05</td>
                                </tr>
                                <tr className="bg-white text-base ">
                                    <td className="py-2 px-6">Total</td>
                                    <td className="py-2 px-6">$ 80.85</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div className="divider"></div>
                    <button className="btn btn-outline btn-success mx-16 mb-4">
                        <span >[3]</span>  Order Now  <span>$ 80.85</span>
                    </button>
                </div>

            </div>
        </section>
    );
};

export default CheckOut;