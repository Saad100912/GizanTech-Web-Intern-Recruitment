import "./App.css";
import { RouterProvider } from "react-router-dom";
import router from "./Routes/Routes";

function App() {
    return (
        <div className="max-w-[1440px] px-20 mx-auto">
            <RouterProvider router={router}></RouterProvider>
        </div>
    );
}

export default App;
