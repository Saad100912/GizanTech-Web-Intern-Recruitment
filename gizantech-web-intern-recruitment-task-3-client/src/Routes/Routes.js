import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "./../Pages/Home/Home";
import AddExercise from "./../Pages/AddExercise/AddExercise";
import UpdateExercise from "./../Pages/UpdateExercise/UpdateExercise";
import DeleteExercise from "./../Pages/DeleteExercise/DeleteExercise";
import UpdateSingleExercise from "../Pages/UpdateExercise/UpdateSingleExercise";
import Login from "../Pages/User/Login/Login";
import Signup from "../Pages/User/Signup/Signup";
import DemoPage from "../Pages/DemoPage/DemoPage";
import PrivateRoute from "./PrivateRoute";
import FilterExercise from "../Pages/FilterExercise/FilterExercise";

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
                element: (
                    <PrivateRoute>
                        <AddExercise />
                    </PrivateRoute>
                ),
            },
            {
                path: "/updateExercise",
                element: (
                    <PrivateRoute>
                        <UpdateExercise />
                    </PrivateRoute>
                ),
            },
            {
                path: "/updateExercise/:id",
                element: (
                    <PrivateRoute>
                        <UpdateSingleExercise />
                    </PrivateRoute>
                ),
            },
            {
                path: "/deleteExercise",
                element: (
                    <PrivateRoute>
                        <DeleteExercise />
                    </PrivateRoute>
                ),
            },
            {
                path: "/filterExercise",
                element: (
                    <PrivateRoute>
                        <FilterExercise />
                    </PrivateRoute>
                ),
            },
            {
                path: "/login",
                element: <Login />,
            },
            {
                path: "/signup",
                element: <Signup />,
            },
            {
                path: "/demoPath",
                element: <DemoPage />,
            },
        ],
    },
]);

export default router;
