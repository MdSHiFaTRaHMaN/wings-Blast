import FoodImage from '../assets/images/Screenshot 2024-10-23 155612.png'
const MyOrder = () => {
    return (
        <div className="w-full lg:w-10/12 mt-[72px] mx-auto px-4 lg:px-0">
            <div className="flex flex-wrap -mx-3 mb-5">
                <div className="w-full max-w-full px-3 mb-6 mx-auto">
                    <div className="relative flex flex-col break-words bg-clip-border rounded-lg bg-gray-100 shadow-md my-5">
                        <div className="relative flex flex-col break-words border border-dashed bg-clip-border rounded-2xl border-stone-200 bg-light/30">
                            <div className="px-6 pt-5 flex justify-between items-center flex-wrap min-h-[70px] pb-3 bg-transparent">
                                <h3 className="font-medium text-lg text-dark">My Order</h3>
                            </div>
                            <div className="flex-auto py-8 pt-4 px-6">
                                <div className="overflow-x-auto">
                                    <table className="w-full text-dark border-neutral-200">
                                        <thead className="text-secondary-dark">
                                            <tr className="text-xs md:text-sm font-semibold">
                                                <th className="pb-3 text-start min-w-[175px]">Title</th>
                                                <th className="pb-3 text-end min-w-[100px]">Price</th>
                                                <th className="pb-3 text-end min-w-[100px]">Status</th>
                                                <th className="pb-3 text-end min-w-[175px]">Status</th>
                                                <th className="pb-3 text-end min-w-[100px]">Order Date</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr className="border-b border-dashed last:border-b-0 text-xs md:text-sm">
                                                <td className="p-3 pl-0">
                                                    <div className="flex items-center">
                                                        <img src={FoodImage} className="w-[40px] h-[40px] md:w-[50px] md:h-[50px] rounded-lg" alt="" />
                                                        <div className="ml-3">
                                                            <a href="#" className="font-semibold text-secondary-inverse hover:text-primary">6 PC Wing Combo</a>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td className="p-3 pr-0 text-end">
                                                    <span className="font-semibold text-md">$35.69</span>
                                                </td>
                                                <td className="p-3 pr-0 text-end">
                                                    <span className="inline-flex items-center font-semibold text-green-500 bg-green-100 rounded-lg px-2 py-1">
                                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-5 h-5 mr-1">
                                                            <path d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941" />
                                                        </svg>
                                                        6.5%
                                                    </span>
                                                </td>
                                                <td className="p-3 text-end">
                                                    <span className="text-primary bg-primary-light font-semibold py-2 rounded-lg">In Progress</span>
                                                </td>
                                                <td className="pr-0 text-end">
                                                    <span className="font-semibold text-md">2023-08-23</span>
                                                </td>
                                            </tr>
                                            
                                        </tbody>
                                        <tbody>
                                            <tr className="border-b border-dashed last:border-b-0 text-xs md:text-sm">
                                                <td className="p-3 pl-0">
                                                    <div className="flex items-center">
                                                        <img src={FoodImage} className="w-[40px] h-[40px] md:w-[50px] md:h-[50px] rounded-lg" alt="" />
                                                        <div className="ml-3">
                                                            <a href="#" className="font-semibold text-secondary-inverse hover:text-primary">6 PC Wing Combo</a>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td className="p-3 pr-0 text-end">
                                                    <span className="font-semibold text-md">$35.69</span>
                                                </td>
                                                <td className="p-3 pr-0 text-end">
                                                    <span className="inline-flex items-center font-semibold text-green-500 bg-green-100 rounded-lg px-2 py-1">
                                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-5 h-5 mr-1">
                                                            <path d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941" />
                                                        </svg>
                                                        6.5%
                                                    </span>
                                                </td>
                                                <td className="p-3 text-end">
                                                    <span className="text-primary bg-primary-light font-semibold py-2 rounded-lg">In Progress</span>
                                                </td>
                                                <td className="pr-0 text-end">
                                                    <span className="font-semibold text-md">2023-08-23</span>
                                                </td>
                                            </tr>
                                            
                                        </tbody>
                                        <tbody>
                                            <tr className="border-b border-dashed last:border-b-0 text-xs md:text-sm">
                                                <td className="p-3 pl-0">
                                                    <div className="flex items-center">
                                                        <img src={FoodImage} className="w-[40px] h-[40px] md:w-[50px] md:h-[50px] rounded-lg" alt="" />
                                                        <div className="ml-3">
                                                            <a href="#" className="font-semibold text-secondary-inverse hover:text-primary">6 PC Wing Combo</a>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td className="p-3 pr-0 text-end">
                                                    <span className="font-semibold text-md">$35.69</span>
                                                </td>
                                                <td className="p-3 pr-0 text-end">
                                                    <span className="inline-flex items-center font-semibold text-green-500 bg-green-100 rounded-lg px-2 py-1">
                                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-5 h-5 mr-1">
                                                            <path d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941" />
                                                        </svg>
                                                        6.5%
                                                    </span>
                                                </td>
                                                <td className="p-3 text-end">
                                                    <span className="text-primary bg-primary-light font-semibold py-2 rounded-lg">In Progress</span>
                                                </td>
                                                <td className="pr-0 text-end">
                                                    <span className="font-semibold text-md">2023-08-23</span>
                                                </td>
                                            </tr>
                                            
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyOrder;
