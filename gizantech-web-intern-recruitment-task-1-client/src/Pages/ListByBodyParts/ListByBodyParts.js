import React, { useEffect, useState } from "react";
import SingleExercise from "../ListOfAllExercise/SingleExercise";

const ListByBodyParts = () => {
    const [bodyParts, setBodyParts] = useState([]);
    const [selectedPart, setSelectedPart] = useState("");
    const [exerciseToDisplay, setExerciseToDisplay] = useState([]);

    useEffect(() => {
        fetch("http://localhost:5000/bodyPartList")
            .then((res) => res.json())
            .then((data) => {
                setBodyParts(data);
            });
    }, []);

    useEffect(() => {
        fetch(`http://localhost:5000/listByBodyPart/${selectedPart}`)
            .then((res) => res.json())
            .then((data) => setExerciseToDisplay(data));
    }, [selectedPart]);

    return (
        <div className="my-10">
            <h1 className="text-xl font-medium text-center">
                Exercise list by body part
            </h1>
            <div className="mb-5">
                <h4 className="font-medium">Select body part</h4>
                <select
                    className="border border-black rounded p-1"
                    onChange={(e) => setSelectedPart(e.target.value)}
                >
                    <option disabled selected>
                        select an option
                    </option>
                    {bodyParts.map((data, i) => (
                        <option key={i} value={data}>
                            {data}
                        </option>
                    ))}
                </select>
            </div>
            <div className="grid grid-cols-5 gap-5">
                {exerciseToDisplay.map((data) => (
                    <SingleExercise key={data.id} data={data} />
                ))}
            </div>
        </div>
    );
};

export default ListByBodyParts;
