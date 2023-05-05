import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../context/AuthProvider";

const Navbar = () => {
    const { user, logOut } = useContext(AuthContext);

    const handleLogOut = () => {
        logOut()
            .then(() => {})
            .catch((err) => console.log(err));
    };
    return (
        <div className="mt-2 mb-10">
            <ul className="flex gap-20 justify-center">
                <li>
                    <Link to="/home">Home</Link>
                </li>
                <li>
                    <Link to="/demoPath">Demo Page</Link>
                </li>
                <li>
                    <Link to="/addExercise">Add Exercise</Link>
                </li>
                <li>
                    <Link to="/updateExercise">Update Exercise</Link>
                </li>
                <li>
                    <Link to="/deleteExercise">Delete Exercise</Link>
                </li>
                <li>
                    <Link to="/filterExercise">Filter Exercise</Link>
                </li>
                {user?.uid ? (
                    <div>
                        <p>{user.displayName}</p>
                        <button
                            onClick={handleLogOut}
                            className="border border-black px-2 py-1 bg-red-600 rounded text-white font-medium"
                        >
                            Logout
                        </button>
                    </div>
                ) : (
                    <li>
                        <Link to="/login">Login/Signup</Link>
                    </li>
                )}
            </ul>
        </div>
    );
};

export default Navbar;
