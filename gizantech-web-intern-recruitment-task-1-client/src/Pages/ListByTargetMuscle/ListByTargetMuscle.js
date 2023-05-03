import React, { useEffect, useState } from "react";
import SingleExercise from "../ListOfAllExercise/SingleExercise";

const ListByTargetMuscle = () => {
    const [targetMusclesList, setTargetMusclesList] = useState([]);
    const [selectedTarget, setSelectedTarget] = useState();
    const [exercisesToDisplay, setExercisesToDisplay] = useState([]);

    useEffect(() => {
        fetch("http://localhost:5000/targetMuscleList")
            .then((res) => res.json())
            .then((data) => setTargetMusclesList(data));
    }, []);

    useEffect(() => {
        fetch(`http://localhost:5000/listByTargetMuscle/${selectedTarget}`)
            .then((res) => res.json())
            .then((data) => {
                setExercisesToDisplay(data);
            });
    }, [selectedTarget]);

    return (
        <div className="my-10">
            <h1 className="text-xl font-medium text-center">
                Exercise list by target muscle
            </h1>
            <div className="mb-5">
                <h4 className="font-medium">Select target muscle</h4>
                <select
                    className="border border-black rounded p-1"
                    onChange={(e) => setSelectedTarget(e.target.value)}
                >
                    <option disabled selected value>
                        select an option
                    </option>
                    {targetMusclesList.map((data, i) => (
                        <option key={i} value={data}>
                            {data}
                        </option>
                    ))}
                </select>
            </div>
            <div className="grid grid-cols-5 gap-5">
                {exercisesToDisplay.map((data) => (
                    <SingleExercise key={data.id} data={data} />
                ))}
            </div>
        </div>
    );
};

export default ListByTargetMuscle;
