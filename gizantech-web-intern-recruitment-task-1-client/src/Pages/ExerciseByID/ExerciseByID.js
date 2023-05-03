import React, { useEffect, useState } from "react";

const ExerciseByID = () => {
    const [exerciseID, setExerciseID] = useState(0);
    const [searchedExercise, setSearchedExercise] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:5000/exerciseByID/${exerciseID}`)
            .then((res) => res.json())
            .then((data) => {
                setSearchedExercise(data);
            });
    }, [exerciseID]);

    const handleSearch = (event) => {
        event.preventDefault();
        const inputField = document.getElementById("exerciseIDInput");
        setExerciseID(inputField.value.toString(4));
    };

    return (
        <div className="my-10">
            <h1 className="text-xl font-medium text-center">
                Exercise by its ID
            </h1>
            <div className="mb-5">
                <h5 className="mb-2 font-medium">Write exercise ID: </h5>
                <form onSubmit={handleSearch}>
                    <input
                        type="number"
                        className="border border-black rounded p-1"
                        id="exerciseIDInput"
                    />
                    <input
                        type="submit"
                        value="Search"
                        className="block mt-2 py-1 px-2 border border-black rounded cursor-pointer"
                    />
                </form>
            </div>
            {searchedExercise?.name && (
                <div className="inline-block border border-black rounded-xl p-2">
                    <div>
                        <img src={searchedExercise.gifUrl} alt="exercise" />
                    </div>
                    <div className="">
                        <p>
                            <span className="font-medium">Name:</span>{" "}
                            {searchedExercise.name}
                        </p>
                        <p>
                            <span className="font-medium">Body Part:</span>{" "}
                            {searchedExercise.bodyPart}
                        </p>
                        <p>
                            <span className="font-medium">Target:</span>{" "}
                            {searchedExercise.target}
                        </p>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ExerciseByID;
