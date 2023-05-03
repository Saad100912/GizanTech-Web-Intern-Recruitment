import React from "react";

const SingleExercise = ({ data }) => {
    const { bodyPart, name, gifUrl, target, equipment } = data;
    return (
        <div className="border border-black rounded-xl p-2">
            <div>
                <img src={gifUrl} alt="exercise" />
            </div>
            <div className="">
                <p>
                    <span className="font-medium">Name:</span> {name}
                </p>
                <p>
                    <span className="font-medium">Body Part:</span> {bodyPart}
                </p>
                <p>
                    <span className="font-medium">Target:</span> {target}
                </p>
                <p>
                    <span className="font-medium">Equipment:</span> {equipment}
                </p>
            </div>
        </div>
    );
};

export default SingleExercise;
