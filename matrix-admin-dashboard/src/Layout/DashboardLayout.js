import React from "react";
import { Outlet, Link } from "react-router-dom";
import { RiLayoutMasonryFill } from "react-icons/ri";
import { IoBarChartSharp } from "react-icons/io5";
import { MdBubbleChart } from "react-icons/md";
import { AiOutlineBorderInner } from "react-icons/ai";
import { CgDisplayFullwidth } from "react-icons/cg";
import { TiDocumentText } from "react-icons/ti";
import { GoKeyboard } from "react-icons/go";
import { MdFace } from "react-icons/md";
import { HiPencil } from "react-icons/hi";
import { BsBoxArrowInDownRight } from "react-icons/bs";
import { FaUserLock } from "react-icons/fa";
import { MdError } from "react-icons/md";
import { BsChevronRight } from "react-icons/bs";
import "./DashboardLayout.css";
import DashboardNavbar from "../Pages/Dashboard/DashboardNavbar";

const DashboardLayout = () => {
    return (
        <div className="drawer drawer-mobile">
            <input id="sidebar" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content">
                <DashboardNavbar />
                <Outlet />
                <label
                    htmlFor="sidebar"
                    className="btn btn-primary drawer-button lg:hidden"
                >
                    Open drawer
                </label>
            </div>
            <div className="drawer-side">
                {/* <label htmlFor="sidebar" className="drawer-overlay"></label> */}
                <div className="menu w-[245px] bg-[#1F262D] pl-1">
                    <img
                        src="https://i.ibb.co/pPKcqNz/logo.png"
                        alt=""
                        className="w-[86%] -ml-1 mb-8"
                    />
                    <li className="hover:bg-[#27A9E3] mb-[3px]">
                        <Link
                            to="/dashboard"
                            className="text-gray-400 font-medium hover:text-white"
                        >
                            <div className="flex items-center text-sm">
                                <RiLayoutMasonryFill className="text-2xl mr-2" />
                                Dashboard
                            </div>
                        </Link>
                    </li>
                    <li className="hover:bg-[#27A9E3] my-[3px]">
                        <Link
                            to="/charts"
                            className="text-gray-400 font-medium hover:text-white"
                        >
                            <div className="flex items-center text-sm">
                                <IoBarChartSharp className="text-2xl mr-2" />
                                Charts
                            </div>
                        </Link>
                    </li>
                    <li className="hover:bg-[#27A9E3] my-[3px]">
                        <Link
                            to="/widget"
                            className="text-gray-400 font-medium hover:text-white"
                        >
                            <div className="flex items-center text-sm">
                                <MdBubbleChart className="text-2xl mr-2" />
                                Widgets
                            </div>
                        </Link>
                    </li>
                    <li className="hover:bg-[#27A9E3] my-[3px]">
                        <Link
                            to="/table"
                            className="text-gray-400 font-medium hover:text-white"
                        >
                            <div className="flex items-center text-sm">
                                <AiOutlineBorderInner className="text-2xl mr-2 font-bold" />
                                Tables
                            </div>
                        </Link>
                    </li>
                    <li className="hover:bg-[#27A9E3] my-[3px]">
                        <Link
                            to="/fullWidth"
                            className="text-gray-400 font-medium hover:text-white"
                        >
                            <div className="flex items-center text-sm">
                                <CgDisplayFullwidth className="text-2xl mr-2 font-bold" />
                                Full Width
                            </div>
                        </Link>
                    </li>
                    <li className="hover:bg-[#27A9E3] my-[3px]">
                        <Link
                            to="/form"
                            className="text-gray-400 font-medium hover:text-white w-full flex justify-between"
                        >
                            <div className="flex items-center text-sm">
                                <TiDocumentText className="text-2xl mr-2 font-bold" />
                                Forms
                            </div>
                            <BsChevronRight />
                        </Link>
                    </li>
                    <li className="hover:bg-[#27A9E3] my-[3px]">
                        <Link
                            to="/button"
                            className="text-gray-400 font-medium hover:text-white"
                        >
                            <div className="flex items-center text-sm">
                                <GoKeyboard className="text-2xl mr-2 font-bold" />
                                Buttons
                            </div>
                        </Link>
                    </li>
                    <li className="hover:bg-[#27A9E3] my-[3px]">
                        <Link
                            to="/icon"
                            className="text-gray-400 font-medium hover:text-white w-full flex justify-between"
                        >
                            <div className="flex items-center text-sm">
                                <MdFace className="text-2xl mr-2 font-bold" />
                                Icons
                            </div>
                            <BsChevronRight />
                        </Link>
                    </li>
                    <li className="hover:bg-[#27A9E3] my-[3px]">
                        <Link
                            to="/element"
                            className="text-gray-400 font-medium hover:text-white"
                        >
                            <div className="flex items-center text-sm">
                                <HiPencil className="text-2xl mr-2 font-bold" />
                                Elements
                            </div>
                        </Link>
                    </li>
                    <li className="hover:bg-[#27A9E3] my-[3px]">
                        <Link
                            to="/addon"
                            className="text-gray-400 font-medium hover:text-white w-full flex justify-between"
                        >
                            <div className="flex items-center text-sm">
                                <BsBoxArrowInDownRight className="text-2xl mr-2 font-bold" />
                                Addons
                            </div>
                            <BsChevronRight />
                        </Link>
                    </li>
                    <li className="hover:bg-[#27A9E3] my-[3px]">
                        <Link
                            to="/authentication"
                            className="text-gray-400 font-medium hover:text-white w-full flex justify-between"
                        >
                            <div className="flex items-center text-sm">
                                <FaUserLock className="text-2xl mr-2 font-bold" />
                                Authentication
                            </div>
                            <BsChevronRight />
                        </Link>
                    </li>
                    <li className="hover:bg-[#27A9E3] my-[3px]">
                        <Link
                            to="/error"
                            className="text-gray-400 font-medium hover:text-white w-full flex justify-between"
                        >
                            <div className="flex items-center text-sm">
                                <MdError className="text-2xl mr-2 font-bold" />
                                Errors
                            </div>
                            <BsChevronRight />
                        </Link>
                    </li>
                </div>
            </div>
        </div>
    );
};

export default DashboardLayout;
