import React, { useState, useEffect } from "react";

const ListOfEquipment = () => {
    const [equipmentList, setEquipmentList] = useState([]);

    useEffect(() => {
        fetch("http://localhost:5000/allEquipmentList")
            .then((res) => res.json())
            .then((data) => setEquipmentList(data));
    }, []);

    return (
        <div className="my-10">
            <h1 className="text-xl font-medium text-center">
                List of Equipments
            </h1>
            <div>
                <ul className="list-disc list-inside">
                    {equipmentList.map((data, i) => (
                        <li key={i}>{data}</li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default ListOfEquipment;
