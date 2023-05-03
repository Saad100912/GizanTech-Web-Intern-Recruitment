import React, { useEffect, useState } from "react";
import SingleExercise from "../ListOfAllExercise/SingleExercise";

const ListByEquipment = () => {
    const [equipmentList, setEquipmentList] = useState([]);
    const [selectedEquipment, setSelectedEquipment] = useState();
    const [exercisesToDisplay, setExercisesToDisplay] = useState([]);

    useEffect(() => {
        fetch("http://localhost:5000/allEquipmentList")
            .then((res) => res.json())
            .then((data) => setEquipmentList(data));
    }, []);

    useEffect(() => {
        fetch(`http://localhost:5000/listByEquipment/${selectedEquipment}`)
            .then((res) => res.json())
            .then((data) => {
                setExercisesToDisplay(data);
            });
    }, [selectedEquipment]);

    return (
        <div className="my-10">
            <h1 className="text-xl font-medium text-center">
                Exercise list by Equipment
            </h1>
            <div className="mb-5">
                <h4 className="font-medium">Select Equipment</h4>
                <select
                    className="border border-black rounded p-1"
                    onChange={(e) => setSelectedEquipment(e.target.value)}
                >
                    <option disabled selected value>
                        select an option
                    </option>
                    {equipmentList.map((data, i) => (
                        <option key={i} value={data}>
                            {data}
                        </option>
                    ))}
                </select>
            </div>
            <div className="grid grid-cols-5 gap-5">
                {exercisesToDisplay.map((data) => (
                    <SingleExercise key={data.id} data={data} />
                ))}
            </div>
        </div>
    );
};

export default ListByEquipment;
