import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";
import BodyPartList from "../Pages/BodyPartList/BodyPartList";
import ListByBodyParts from "../Pages/ListByBodyParts/ListByBodyParts";
import ExerciseByID from "../Pages/ExerciseByID/ExerciseByID";
import ListByExerciseName from "../Pages/ListByExerciseName/ListByExerciseName";
import TargetMuscleList from "../Pages/TargetMuscleList/TargetMuscleList";
import ListByTargetMuscle from "../Pages/ListByTargetMuscle/ListByTargetMuscle";
import ListOfAllExercise from "../Pages/ListOfAllExercise/ListOfAllExercise";
import ListByEquipment from "../Pages/ListByEquipment/ListByEquipment";
import ListOfEquipment from "../Pages/ListOfEquipment/ListOfEquipment";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Main />,
        children: [
            {
                path: "/",
                element: <Home />,
            },
            {
                path: "/home",
                element: <Home />,
            },
            {
                path: "/bodyPartList",
                element: <BodyPartList />,
            },
            {
                path: "/listByBodyParts",
                element: <ListByBodyParts />,
            },
            {
                path: "/exerciseByID",
                element: <ExerciseByID />,
            },
            {
                path: "/listByExerciseName",
                element: <ListByExerciseName />,
            },
            {
                path: "/targetMuscleList",
                element: <TargetMuscleList />,
            },
            {
                path: "/listByTargetMuscle",
                element: <ListByTargetMuscle />,
            },
            {
                path: "/listOfAllExercise",
                element: <ListOfAllExercise />,
            },
            {
                path: "/listByEquipment",
                element: <ListByEquipment />,
            },
            {
                path: "/listOfEquipment",
                element: <ListOfEquipment />,
            },
        ],
    },
]);

export default router;
