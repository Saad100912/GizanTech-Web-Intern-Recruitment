import React, { useState, useEffect } from "react";
import * as XLSX from "xlsx";
import jsPDF from "jspdf";
import "jspdf-autotable";
import { CSVLink } from "react-csv";

const FilterExercise = () => {
    const [filterOptions, setFilterOptions] = useState({});
    const [formData, setFormData] = useState({
        bodyPart: "",
        equipment: "",
        target: "",
    });
    const [filteredExercise, setFilteredExercise] = useState([]);

    useEffect(() => {
        fetch("http://localhost:5000/filterOptions")
            .then((res) => res.json())
            .then((data) => setFilterOptions(data));
    }, []);

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleFilter = (event) => {
        event.preventDefault();

        fetch(
            `http://localhost:5000/filterExercise/?bodyPart=${formData.bodyPart}&equipment=${formData.equipment}&target=${formData.target}`
        )
            .then((res) => res.json())
            .then((data) => {
                if (data.length > 0) {
                    setFilteredExercise(data);
                } else {
                    setFilteredExercise("");
                }
            });
    };

    // Download data in Excel format
    const handleExportExcel = () => {
        const worksheet = XLSX.utils.json_to_sheet(filteredExercise);
        const workbook = XLSX.utils.book_new();
        XLSX.utils.book_append_sheet(workbook, worksheet, "Filtered Exercises");
        XLSX.writeFile(workbook, "filtered-exercises.xlsx");
    };

    // Download data in PDF format
    const handleExportPDF = () => {
        const columns = ["Exercise Name", "Body Part", "Equipment", "Target"];
        const rows = filteredExercise.map(
            ({ name, bodyPart, equipment, target }) => [
                name,
                bodyPart,
                equipment,
                target,
            ]
        );

        const doc = new jsPDF();

        doc.autoTable({ columns, body: rows });
        doc.save("filtered-exercises.pdf");
    };

    // Download data in CSV format
    const headers = [
        {
            label: "Body Part",
            key: "bodyPart",
        },
        {
            label: "Equipment",
            key: "equipment",
        },
        {
            label: "GIF/Image",
            key: "gifUrl",
        },
        {
            label: "Name",
            key: "name",
        },
        {
            label: "Target",
            key: "target",
        },
    ];

    const csvLink = {
        filename: "exercise-data.csv",
        headers: headers,
        data: filteredExercise,
    };

    return (
        <div className="my-10">
            <div>
                <h1 className="text-xl text-center font-medium mb-5">
                    Filter Exercise
                </h1>
            </div>
            <div>
                <form
                    onSubmit={handleFilter}
                    className="border border-black p-3 rounded flex justify-between items-center"
                >
                    <div>
                        <label htmlFor="bodyPart" className="font-medium mr-2">
                            Body Part:
                        </label>
                        <select
                            className="border border-black rounded p-1"
                            name="bodyPart"
                            id="bodyPart"
                            onChange={handleInputChange}
                            value={formData.bodyPart}
                        >
                            <option value="" disabled>
                                Select an option
                            </option>
                            {filterOptions?.bodyPart?.map((value, i) => (
                                <option key={i} value={value}>
                                    {value}
                                </option>
                            ))}
                        </select>
                    </div>
                    <div>
                        <label htmlFor="equipment" className="font-medium mr-2">
                            Equipment:
                        </label>
                        <select
                            className="border border-black rounded p-1"
                            name="equipment"
                            id="equipment"
                            onChange={handleInputChange}
                            value={formData.equipment}
                        >
                            <option value="" disabled>
                                Select an option
                            </option>
                            {filterOptions?.equipment?.map((value, i) => (
                                <option key={i} value={value}>
                                    {value}
                                </option>
                            ))}
                        </select>
                    </div>
                    <div>
                        <label htmlFor="target" className="font-medium mr-2">
                            Target:
                        </label>
                        <select
                            className="border border-black rounded p-1"
                            name="target"
                            id="target"
                            onChange={handleInputChange}
                            value={formData.target}
                        >
                            <option value="" disabled>
                                Select an option
                            </option>
                            {filterOptions?.target?.map((value, i) => (
                                <option key={i} value={value}>
                                    {value}
                                </option>
                            ))}
                        </select>
                    </div>
                    <div>
                        <input
                            type="submit"
                            value="Filter"
                            className="border border-black rounded px-8 py-1 bg-green-500 font-medium cursor-pointer"
                        />
                    </div>
                </form>
            </div>
            {filteredExercise.length > 0 && (
                <div className="border border-black p-3 rounded my-2 flex justify-between items-center">
                    <div className="flex items-center gap-6">
                        <p className="font-medium">Download Data:</p>
                        <button
                            className="border border-black rounded px-10 py-1 bg-gradient-to-bl from-green-500 to-green-600 text-white font-medium"
                            onClick={() => handleExportExcel()}
                        >
                            Excel
                        </button>
                        <button
                            className="border border-black rounded px-10 py-1 bg-gradient-to-bl from-red-500 to-red-600 text-white font-medium"
                            onClick={() => handleExportPDF()}
                        >
                            PDF
                        </button>
                        <CSVLink
                            {...csvLink}
                            className="border border-black rounded px-10 py-1 bg-gradient-to-bl from-cyan-500 to-cyan-600 text-white font-medium"
                        >
                            CSV
                        </CSVLink>
                    </div>
                    <div>
                        <p className="font-medium ">
                            Total exercise found: {filteredExercise.length}
                        </p>
                    </div>
                </div>
            )}
            {filteredExercise === "" && (
                <div className="flex justify-center my-20 text-xl font-medium">
                    <p>No exercise found based on the options selected</p>
                </div>
            )}
            <div className="grid grid-cols-5 gap-2 my-3">
                {filteredExercise.length > 0 &&
                    filteredExercise.map((data) => (
                        <div
                            className="border border-black rounded-xl p-2 flex flex-col justify-between"
                            key={data._id}
                        >
                            <div className="">
                                <img src={data.gifUrl} alt="" />
                                <p>
                                    <span className="font-medium">Name:</span>{" "}
                                    {data.name}
                                </p>
                                <p>
                                    <span className="font-medium">
                                        Body Part:
                                    </span>{" "}
                                    {data.bodyPart}
                                </p>
                                <p>
                                    <span className="font-medium">Target:</span>{" "}
                                    {data.target}
                                </p>
                                <p>
                                    <span className="font-medium">
                                        Equipment:
                                    </span>{" "}
                                    {data.equipment}
                                </p>
                            </div>
                        </div>
                    ))}
            </div>
        </div>
    );
};

export default FilterExercise;
