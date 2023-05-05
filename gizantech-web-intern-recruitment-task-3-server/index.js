const express = require("express");
const cors = require("cors");
const { MongoClient } = require("mongodb");
const ObjectId = require("mongodb").ObjectId;

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const uri = `mongodb+srv://gizantechuser:x4ND5XLrSUX6mJl7@cluster0.801m1.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;

const client = new MongoClient(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

async function run() {
    try {
        await client.connect();
        const database = client.db("gizanTech");
        const exerciseCollection = database.collection("exercise");

        // Get all exercises
        app.get("/allExercises", async (req, res) => {
            const data = await exerciseCollection.find({}).toArray();
            res.json(data);
        });

        // Get an exercise by ID
        app.get("/exerciseByID/:id", async (req, res) => {
            const id = req.params.id;
            const query = { _id: new ObjectId(id) };
            const result = await exerciseCollection.findOne(query);
            res.json(result);
        });

        // Get all filter options
        app.get("/filterOptions", async (req, res) => {
            Promise.all([
                exerciseCollection.distinct("bodyPart"),
                exerciseCollection.distinct("equipment"),
                exerciseCollection.distinct("target"),
            ]).then((results) => {
                const filterOptions = {
                    bodyPart: results[0],
                    equipment: results[1],
                    target: results[2],
                };

                res.json(filterOptions);
            });
        });

        app.get("/filterExercise", async (req, res) => {
            try {
                const { bodyPart, equipment, target } = req.query;
                const query = {};
                if (bodyPart !== "") {
                    query.bodyPart = bodyPart;
                }
                if (equipment !== "") {
                    query.equipment = equipment;
                }
                if (target !== "") {
                    query.target = target;
                }
                const result = await exerciseCollection.find(query).toArray();
                res.json(result);
            } catch (err) {
                console.error(err);
                res.status(500).json({ message: "Server error" });
            }
        });

        // Add a new exercise in the database
        app.post("/addExercise", async (req, res) => {
            const exerciseData = req.body;
            const result = await exerciseCollection.insertOne(exerciseData);
            res.json(result);
        });

        // Delete an exercise based on ID
        app.delete("/deleteExercise/:id", async (req, res) => {
            const id = req.params.id;
            const query = { _id: new ObjectId(id) };
            const result = await exerciseCollection.deleteOne(query);
            res.json(result);
        });

        // Update and exercise
        app.put("/updateExercise/:id", async (req, res) => {
            const id = req.params.id;
            const query = { _id: new ObjectId(id) };
            const updatedData = req.body;
            const updateInfo = {
                $set: {
                    name: updatedData.name,
                    bodyPart: updatedData.bodyPart,
                    equipment: updatedData.equipment,
                    target: updatedData.target,
                    gifUrl: updatedData.gifUrl,
                },
            };
            const result = await exerciseCollection.updateOne(
                query,
                updateInfo
            );
            res.json(result);
        });
    } finally {
        // await client.close();
    }
}

run().catch(console.dir);

app.get("/", (req, res) => {
    res.send("Server is running");
});

app.listen(port, () => {
    console.log("Server is running on: ", port);
});
