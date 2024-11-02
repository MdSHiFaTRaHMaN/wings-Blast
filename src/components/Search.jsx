import { FaSearch } from "react-icons/fa";

const Search = () => {
    return (
        <dialog id="search" className="modal -mt-[110px] lg:-mt-[240px]">
            <div className="modal-box rounded -my-5">
                <div className="relative ">
                    {/* <label htmlFor="Search" className="sr-only"> Search </label> */}
                    <input
                        type="text"
                        id="Search"
                        placeholder="Search Food Items..."
                        className="w-full focus:outline-none"
                    />

                    <span className="absolute inset-y-0 end-0 grid w-10 place-content-center">
                        <button type="button" className="text-gray-600 hover:text-gray-700">
                            <span className="sr-only">Search</span>
                            <FaSearch></FaSearch>
                        </button>
                    </span>
                </div>
            </div>
            <form method="dialog" className="modal-backdrop">
                <button>close</button>
            </form>

        </dialog>
    );
};

export default Search;