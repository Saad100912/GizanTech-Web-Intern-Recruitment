const express = require("express");
const cors = require("cors");
const fs = require("fs");

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const database = JSON.parse(fs.readFileSync("./files/exercise.json", "utf-8"));

async function run() {
    try {
        // 1. Get all body parts
        app.get("/bodyPartList", async (req, res) => {
            const filteredData = [
                ...new Set(database.map((obj) => obj.bodyPart)),
            ];
            res.json(filteredData);
        });

        // 2. Get exercise by selected body part
        app.get("/listByBodyPart/:selectedPart", async (req, res) => {
            const selectedPart = req.params.selectedPart;
            const filteredData = database.filter(
                (exercise) => exercise.bodyPart === selectedPart
            );
            res.json(filteredData);
        });

        // 3. Get exercise by ID number
        app.get("/exerciseByID/:exerciseID", async (req, res) => {
            const exerciseID = req.params.exerciseID;
            const filteredData = database.find(
                (exercise) => exercise.id === exerciseID
            );
            res.json(filteredData);
        });

        // 4. Get exercise by name
        app.get("/exerciseByName/:exerciseName", async (req, res) => {
            const exerciseName = req.params.exerciseName;
            const filterData = database.find(
                (exercise) => exercise.name === exerciseName
            );
            res.json(filterData);
        });

        // 5. Get all muscle targets
        app.get("/targetMuscleList", async (req, res) => {
            const filteredData = [
                ...new Set(database.map((obj) => obj.target)),
            ];
            res.json(filteredData);
        });

        // 6. Get exercise by selected target muscle
        app.get("/listByTargetMuscle/:selectedTarget", async (req, res) => {
            const selectedTarget = req.params.selectedTarget;
            const filteredData = database.filter(
                (exercise) => exercise.target === selectedTarget
            );
            res.json(filteredData);
        });

        // 7. Get list of all exercises
        app.get("/allExerciseList", async (req, res) => {
            res.json(database);
        });

        // 8. Get list of all equipments
        app.get("/allEquipmentList", async (req, res) => {
            const filteredData = [
                ...new Set(database.map((obj) => obj.equipment)),
            ];
            res.json(filteredData);
        });

        // 9. Get exercise by selected equipment
        app.get("/listByEquipment/:selectedEquipment", async (req, res) => {
            const selectedEquipment = req.params.selectedEquipment;
            const filteredData = database.filter(
                (exercise) => exercise.equipment === selectedEquipment
            );
            res.json(filteredData);
        });
    } finally {
    }
}
run().catch(console.dir);

app.get("/", (req, res) => {
    res.send("Server is running");
});

app.listen(port, () => {
    console.log("Server is running on:", port);
});
