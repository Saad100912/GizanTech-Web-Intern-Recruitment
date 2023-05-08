import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import LandingPage1 from "../Pages/LandingPage1/LandingPage1";
import LandingPage2 from "../Pages/LandingPage2/LandingPage2";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Main />,
        children: [
            {
                path: "/",
                element: <LandingPage1 />,
            },
            {
                path: "/page1",
                element: <LandingPage1 />,
            },
            {
                path: "/page2",
                element: <LandingPage2 />,
            },
        ],
    },
]);

export default router;
