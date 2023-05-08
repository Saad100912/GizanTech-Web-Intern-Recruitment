import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <div className="bg-black/50 fixed top-0 left-0 right-0 z-10">
            <div className="max-w-[1140px] mx-auto navbar">
                <div className="flex-1">
                    <img
                        src="https://i.ibb.co/NKd9Nhb/logo.png"
                        alt="logo"
                        className="w-[180px]"
                    />
                </div>
                <div className="flex-none">
                    <ul className="menu menu-horizontal px-1">
                        <li tabIndex={0}>
                            <Link>
                                Learn
                                <svg
                                    className="fill-current"
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="20"
                                    height="20"
                                    viewBox="0 0 24 24"
                                >
                                    <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
                                </svg>
                            </Link>
                            <ul className="p-2 bg-base-100">
                                <li>
                                    <p>Submenu 1</p>
                                </li>
                                <li>
                                    <p>Submenu 2</p>
                                </li>
                            </ul>
                        </li>
                        <li tabIndex={0}>
                            <Link>
                                Build
                                <svg
                                    className="fill-current"
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="20"
                                    height="20"
                                    viewBox="0 0 24 24"
                                >
                                    <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
                                </svg>
                            </Link>
                            <ul className="p-2 bg-base-100">
                                <li>
                                    <p>Submenu 1</p>
                                </li>
                                <li>
                                    <p>Submenu 2</p>
                                </li>
                            </ul>
                        </li>
                        <li tabIndex={0}>
                            <Link>
                                Network
                                <svg
                                    className="fill-current"
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="20"
                                    height="20"
                                    viewBox="0 0 24 24"
                                >
                                    <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
                                </svg>
                            </Link>
                            <ul className="p-2 bg-base-100">
                                <li>
                                    <p>Submenu 1</p>
                                </li>
                                <li>
                                    <p>Submenu 2</p>
                                </li>
                            </ul>
                        </li>
                        <li tabIndex={0}>
                            <Link>
                                Community
                                <svg
                                    className="fill-current"
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="20"
                                    height="20"
                                    viewBox="0 0 24 24"
                                >
                                    <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
                                </svg>
                            </Link>
                            <ul className="p-2 bg-base-100">
                                <li>
                                    <p>Submenu 1</p>
                                </li>
                                <li>
                                    <p>Submenu 2</p>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
