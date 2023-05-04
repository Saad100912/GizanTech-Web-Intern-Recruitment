import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <div className="mt-2 mb-10">
            <ul className="flex gap-20 justify-center">
                <li>
                    <Link to="/addExercise">Add Exercise</Link>
                </li>
                <li>
                    <Link to="/updateExercise">Update Exercise</Link>
                </li>
                <li>
                    <Link to="/deleteExercise">Delete Exercise</Link>
                </li>
            </ul>
        </div>
    );
};

export default Navbar;
