import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "./../Pages/Home/Home";
import AddExercise from "./../Pages/AddExercise/AddExercise";
import UpdateExercise from "./../Pages/UpdateExercise/UpdateExercise";
import DeleteExercise from "./../Pages/DeleteExercise/DeleteExercise";
import UpdateSingleExercise from "../Pages/UpdateExercise/UpdateSingleExercise";

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
                path: "/addExercise",
                element: <AddExercise />,
            },
            {
                path: "/updateExercise",
                element: <UpdateExercise />,
            },
            {
                path: "/updateExercise/:id",
                element: <UpdateSingleExercise />,
            },
            {
                path: "/deleteExercise",
                element: <DeleteExercise />,
            },
        ],
    },
]);

export default router;
