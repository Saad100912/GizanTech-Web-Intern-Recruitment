import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <div className="flex justify-around mt-2">
            <div>
                <Link to="/home" className="link text-xl font-medium">
                    Home
                </Link>
            </div>
            <div>
                <Link to="/dashboard" className="link text-xl font-medium">
                    Dashboard
                </Link>
            </div>
        </div>
    );
};

export default Navbar;
