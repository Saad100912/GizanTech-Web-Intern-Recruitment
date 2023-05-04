import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const UpdateExercise = () => {
    const [allExercises, setAllExercises] = useState([]);

    useEffect(() => {
        fetch("http://localhost:5000/allExercises")
            .then((res) => res.json())
            .then((data) => setAllExercises(data));
    }, []);

    return (
        <div className="mb-5">
            <div className="text-center mb-5">
                <h1 className="my-5 text-xl font-medium">Update an exercise</h1>
            </div>
            <div className="grid grid-cols-5 gap-2">
                {allExercises.map((data) => (
                    <div
                        className="border border-black rounded-xl p-2 flex flex-col justify-between"
                        key={data._id}
                    >
                        <div className="">
                            <p>
                                <span className="font-medium">Name:</span>{" "}
                                {data.name}
                            </p>
                            <p>
                                <span className="font-medium">Body Part:</span>{" "}
                                {data.bodyPart}
                            </p>
                            <p>
                                <span className="font-medium">Target:</span>{" "}
                                {data.target}
                            </p>
                            <p>
                                <span className="font-medium">Equipment:</span>{" "}
                                {data.equipment}
                            </p>
                        </div>
                        <div className="flex justify-center mt-2">
                            <Link
                                className="border border-black px-2 py-1 rounded bg-blue-500"
                                to={`/updateExercise/${data._id}`}
                            >
                                Update
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default UpdateExercise;
