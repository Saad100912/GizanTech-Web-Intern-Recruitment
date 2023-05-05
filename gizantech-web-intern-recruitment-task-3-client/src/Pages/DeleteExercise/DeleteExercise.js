import React, { useEffect, useState } from "react";

const DeleteExercise = () => {
    const [allExercises, setAllExercises] = useState([]);

    useEffect(() => {
        fetch("http://localhost:5000/allExercises")
            .then((res) => res.json())
            .then((data) => setAllExercises(data));
    }, []);

    const handleDeleteBtn = (id) => {
        const proceed = window.confirm(
            "Are you sure you want to delete this exercise?"
        );
        if (proceed) {
            fetch(`http://localhost:5000/deleteExercise/${id}`, {
                method: "DELETE",
            })
                .then((res) => res.json())
                .then((data) => {
                    if (data.deletedCount) {
                        alert("Exercise deleted successfully");
                    }
                    const rest = allExercises.filter(
                        (exercise) => exercise._id !== id
                    );
                    setAllExercises(rest);
                });
        }
    };

    return (
        <div className="mb-5">
            <div className="text-center mb-5">
                <h1 className="my-5 text-xl font-medium">Delete an exercise</h1>
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
                            <button
                                className="border border-black px-2 py-1 rounded bg-red-500"
                                onClick={() => handleDeleteBtn(data._id)}
                            >
                                Delete
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default DeleteExercise;
