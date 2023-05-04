import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const UpdateSingleExercise = () => {
    const { id } = useParams();
    const [exerciseToUpdate, setExerciseToUpdate] = useState([]);
    const [updatedData, setUpdatedData] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:5000/exerciseByID/${id}`)
            .then((res) => res.json())
            .then((data) => setExerciseToUpdate(data));
    }, [id]);

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setUpdatedData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleUpdateBtn = (event) => {
        event.preventDefault();
        const proceed = window.confirm(
            "Are you sure you want to update this exercise?"
        );
        if (proceed) {
            fetch(
                `http://localhost:5000/updateExercise/${exerciseToUpdate._id}`,
                {
                    method: "PUT",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(updatedData),
                }
            )
                .then((res) => res.json())
                .then((data) => {
                    if (data.modifiedCount) {
                        alert("Exercise updated successfully");
                    }
                });
        }
    };

    return (
        <div className="mb-5">
            <div className="text-center mb-5">
                <h1 className="my-5 text-xl font-medium">
                    Update single exercise
                </h1>
            </div>
            <div>
                <form
                    onSubmit={handleUpdateBtn}
                    className="border border-black rounded w-fit mx-auto p-2"
                >
                    <div className="my-2">
                        <label htmlFor="name" className="block">
                            Name
                        </label>
                        <input
                            id="name"
                            type="text"
                            name="name"
                            className="block border border-black rounded px-2 py-1"
                            onChange={handleInputChange}
                        />
                        <p className="text-sm">
                            Previous name: {exerciseToUpdate.name}
                        </p>
                    </div>
                    <div className="my-2">
                        <label htmlFor="bodyPart">Body Part</label>
                        <input
                            id="bodyPart"
                            type="text"
                            name="bodyPart"
                            className="block border border-black rounded px-2 py-1"
                            onChange={handleInputChange}
                        />
                        <p className="text-sm">
                            Previous body part: {exerciseToUpdate.bodyPart}
                        </p>
                    </div>
                    <div className="my-2">
                        <label htmlFor="equipment">Equipment</label>
                        <input
                            id="equipment"
                            type="text"
                            name="equipment"
                            className="block border border-black rounded px-2 py-1"
                            onChange={handleInputChange}
                        />
                        <p className="text-sm">
                            Previous equipment: {exerciseToUpdate.equipment}
                        </p>
                    </div>
                    <div className="my-2">
                        <label htmlFor="target">Target Muscle</label>
                        <input
                            id="target"
                            type="text"
                            name="target"
                            className="block border border-black rounded px-2 py-1"
                            onChange={handleInputChange}
                        />
                        <p className="text-sm">
                            Previous target: {exerciseToUpdate.target}
                        </p>
                    </div>
                    <div className="my-2">
                        <label htmlFor="img">Image</label>
                        <input
                            id="img"
                            type="text"
                            name="gifUrl"
                            className="block border border-black rounded px-2 py-1"
                            onChange={handleInputChange}
                        />
                        <p className="text-sm">
                            Previous gifUrl: {exerciseToUpdate.gifUrl}
                        </p>
                    </div>
                    <div className="mt-2 flex justify-center">
                        <input
                            type="submit"
                            value="Submit"
                            className="border border-black rounded bg-green-400 px-3 py-1 cursor-pointer"
                        />
                    </div>
                </form>
            </div>
        </div>
    );
};

export default UpdateSingleExercise;
