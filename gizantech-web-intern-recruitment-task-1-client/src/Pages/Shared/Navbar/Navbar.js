import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <div>
            <ul className="flex gap-5 text-center mt-5">
                <li>
                    <Link to="/bodyPartList">List of body Parts</Link>
                </li>
                <li>
                    <Link to="/listByBodyParts">List by body Parts</Link>
                </li>
                <li>
                    <Link to="/exerciseByID">Exercise by ID</Link>
                </li>
                <li>
                    <Link to="/listByExerciseName">List by exercise name</Link>
                </li>
                <li>
                    <Link to="/targetMuscleList">Target Muscle List</Link>
                </li>
                <li>
                    <Link to="/listByTargetMuscle">List by target muscle</Link>
                </li>
                <li>
                    <Link to="/listOfAllExercise">List of all exercises</Link>
                </li>
                <li>
                    <Link to="/listOfEquipment">list of equipment</Link>
                </li>
                <li>
                    <Link to="/listByEquipment">List by equipment</Link>
                </li>
            </ul>
        </div>
    );
};

export default Navbar;
