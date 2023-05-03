import React, { useState, useEffect } from "react";

const ListByExerciseName = () => {
    const [exerciseName, setExerciseName] = useState();
    const [searchedExercise, setSearchedExercise] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:5000/exerciseByName/${exerciseName}`)
            .then((res) => res.json())
            .then((data) => {
                setSearchedExercise(data);
            });
    }, [exerciseName]);

    const handleSearch = (event) => {
        event.preventDefault();
        const inputField = document.getElementById("exerciseNameInput");
        setExerciseName(inputField.value);
    };

    return (
        <div className="my-10">
            <h1 className="text-xl font-medium text-center">
                Exercise by Name
            </h1>
            <div className="mb-5">
                <h5 className="mb-2 font-medium">Write exercise name: </h5>
                <form onSubmit={handleSearch}>
                    <input
                        type="text"
                        className="border border-black rounded p-1"
                        id="exerciseNameInput"
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

export default ListByExerciseName;
