import React, { useEffect, useState } from "react";

const TargetMuscleList = () => {
    const [targetMuscleList, setTargetMuscleList] = useState([]);

    useEffect(() => {
        fetch("http://localhost:5000/targetMuscleList")
            .then((res) => res.json())
            .then((data) => setTargetMuscleList(data));
    }, []);

    return (
        <div className="my-10">
            <h1 className="text-xl font-medium text-center">
                List of muscle targets
            </h1>
            <div>
                <ul className="list-disc list-inside">
                    {targetMuscleList.map((data, i) => (
                        <li key={i}>{data}</li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default TargetMuscleList;
