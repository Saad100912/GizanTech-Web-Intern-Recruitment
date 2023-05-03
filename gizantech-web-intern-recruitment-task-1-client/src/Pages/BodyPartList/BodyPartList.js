import React, { useState, useEffect } from "react";

const BodyPartList = () => {
    const [bodyParts, setBodyParts] = useState([]);

    useEffect(() => {
        fetch("http://localhost:5000/bodyPartList")
            .then((res) => res.json())
            .then((data) => setBodyParts(data));
    }, []);

    return (
        <div className="my-10">
            <h1 className="text-xl font-medium text-center">
                List of available body parts
            </h1>
            <div>
                <ul className="list-disc list-inside">
                    {bodyParts.map((data, i) => (
                        <li key={i}>{data}</li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default BodyPartList;
