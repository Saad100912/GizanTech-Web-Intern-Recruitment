import React, { useState, useEffect } from "react";
import SingleExercise from "./SingleExercise";

const ListOfAllExercise = () => {
    const [allExercise, setAllExercise] = useState([]);

    useEffect(() => {
        fetch("http://localhost:5000/allExerciseList")
            .then((res) => res.json())
            .then((data) => setAllExercise(data));
    }, []);

    console.log(allExercise);
    return (
        <div className="my-10">
            <h1 className="text-xl text-center font-medium mb-5">
                List Of All Exercise
            </h1>
            <div className="grid grid-cols-5 gap-5">
                {allExercise.map((data) => (
                    <SingleExercise key={data.id} data={data}></SingleExercise>
                ))}
            </div>
        </div>
    );
};

export default ListOfAllExercise;
