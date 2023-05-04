import React, { useState } from "react";

const AddExercise = () => {
    const [formData, setFormData] = useState({});

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormData((prevFormData) => ({
            ...prevFormData,
            [name]: value,
        }));
    };

    const handleAddExercise = (event) => {
        event.preventDefault();
        const proceed = window.confirm(
            "Are you sure you want to add this exercise?"
        );
        if (proceed) {
            fetch("http://localhost:5000/addExercise", {
                method: "POST",
                headers: {
                    "content-type": "application/json",
                },
                body: JSON.stringify(formData),
            })
                .then((res) => res.json())
                .then((data) => {
                    if (data.insertedId) {
                        alert("Added a exercise successfully");
                    }
                });
        }
    };

    return (
        <div className="text-center mb-5">
            <div>
                <h1 className="my-5 text-xl font-medium">Add new exercise</h1>
            </div>
            <div>
                <form
                    onSubmit={handleAddExercise}
                    className="border border-black rounded w-fit mx-auto p-2"
                >
                    <div className="my-1">
                        <label htmlFor="name" className="block">
                            Name
                        </label>
                        <input
                            id="name"
                            name="name"
                            type="text"
                            className="block border border-black rounded px-2 py-1"
                            onChange={handleInputChange}
                        />
                    </div>
                    <div className="my-1">
                        <label htmlFor="bodyPart">Body Part</label>
                        <input
                            id="bodyPart"
                            type="text"
                            name="bodyPart"
                            className="block border border-black rounded px-2 py-1"
                            onChange={handleInputChange}
                        />
                    </div>
                    <div className="my-1">
                        <label htmlFor="equipment">Equipment</label>
                        <input
                            id="equipment"
                            type="text"
                            name="equipment"
                            className="block border border-black rounded px-2 py-1"
                            onChange={handleInputChange}
                        />
                    </div>
                    <div className="my-1">
                        <label htmlFor="target">Target Muscle</label>
                        <input
                            id="target"
                            type="text"
                            name="target"
                            className="block border border-black rounded px-2 py-1"
                            onChange={handleInputChange}
                        />
                    </div>
                    <div className="my-1">
                        <label htmlFor="img">Image</label>
                        <input
                            id="img"
                            type="text"
                            name="gifUrl"
                            className="block border border-black rounded px-2 py-1"
                            onChange={handleInputChange}
                        />
                    </div>
                    <div className="mt-2">
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

export default AddExercise;
