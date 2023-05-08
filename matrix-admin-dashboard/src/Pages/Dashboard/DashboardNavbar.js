import React from "react";
import { HiChevronDown } from "react-icons/hi";
import { BsFillBellFill } from "react-icons/bs";

const DashboardNavbar = () => {
    return (
        <div>
            <div className="navbar justify-between bg-[#141619]">
                <div className="ml-2">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        className="inline-block w-5 h-5 stroke-current text-white"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M4 6h16M4 12h16M4 18h16"
                        ></path>
                    </svg>
                    <div className="text-white ml-5 flex items-center">
                        Create New{" "}
                        <HiChevronDown className="font-bold text-lg" />
                    </div>
                    <button className="btn btn-circle bg-transparent border-none ml-3">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                            />
                        </svg>
                    </button>
                </div>
                <div className="flex-none">
                    <button className="btn btn-circle bg-transparent border-none">
                        <BsFillBellFill />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default DashboardNavbar;
