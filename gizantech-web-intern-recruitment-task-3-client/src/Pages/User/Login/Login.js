import React, { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../context/AuthProvider";

const Login = () => {
    const { signIn } = useContext(AuthContext);
    const [formData, setFormData] = useState({});
    const [loginError, setLoginError] = useState("");
    const location = useLocation();
    const navigate = useNavigate();

    const from = location.state?.from?.pathname || "/";

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormData((prevFormData) => ({
            ...prevFormData,
            [name]: value,
        }));
    };

    const handleLogin = (e) => {
        e.preventDefault();
        setLoginError("");
        signIn(formData.email, formData.password)
            .then((result) => {
                const user = result.user;
                console.log(user);
                navigate(from, { replace: true });
            })
            .catch((error) => {
                setLoginError(error.message);
            });
    };

    return (
        <div className="flex justify-center">
            <div className="border border-black rounded w-fit flex flex-col items-center px-2 py-4">
                <div>
                    <h1 className="text-xl font-medium">Login</h1>
                </div>
                <div>
                    <form onSubmit={handleLogin}>
                        <div>
                            <label htmlFor="email">Email Address:</label>
                            <input
                                id="email"
                                type="email"
                                name="email"
                                className="block border border-black rounded px-2 py-1"
                                onChange={handleInputChange}
                            />
                        </div>
                        <div>
                            <label htmlFor="password">Password:</label>
                            <input
                                id="password"
                                type="password"
                                name="password"
                                className="block border border-black rounded px-2 py-1"
                                onChange={handleInputChange}
                            />
                        </div>
                        <div>
                            {loginError && (
                                <p className="text-sm text-red-600">
                                    {loginError}
                                </p>
                            )}
                        </div>
                        <div className="text-center my-2">
                            <input
                                type="submit"
                                value="Login"
                                className="border border-black rounded bg-green-400 px-3 py-1 cursor-pointer"
                            />
                        </div>
                    </form>
                </div>
                <div>
                    <p>
                        Don't have an account?{" "}
                        <Link to="/signup" className="text-blue-600">
                            Sign Up
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Login;
