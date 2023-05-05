import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../context/AuthProvider";

const Signup = () => {
    const { createUser, updateUser } = useContext(AuthContext);
    const [formData, setFormData] = useState({});
    const [signUpError, setSignUPError] = useState("");

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormData((prevFormData) => ({
            ...prevFormData,
            [name]: value,
        }));
    };

    const handleSignUp = (event) => {
        event.preventDefault();
        console.log(formData);
        setSignUPError("");
        createUser(formData.email, formData.password)
            .then((result) => {
                const user = result.user;
                alert("User Created Successfully.");
                const userInfo = {
                    displayName: formData.name,
                };
                updateUser(user, userInfo)
                    .then(() => {
                        window.location.reload();
                    })
                    .catch((err) => console.log(err));
            })
            .catch((error) => {
                setSignUPError(error.message);
            });
    };

    return (
        <div className="flex justify-center">
            <div className="border border-black rounded w-fit flex flex-col items-center px-2 py-4">
                <div>
                    <h1 className="text-xl font-medium">Sign Up</h1>
                </div>
                <div>
                    <form onSubmit={handleSignUp}>
                        <div>
                            <label htmlFor="name">Your name:</label>
                            <input
                                id="name"
                                name="name"
                                type="text"
                                required
                                className="block border border-black rounded px-2 py-1"
                                onChange={handleInputChange}
                            />
                        </div>
                        <div>
                            <label htmlFor="email">Email address:</label>
                            <input
                                id="email"
                                name="email"
                                type="email"
                                required
                                className="block border border-black rounded px-2 py-1"
                                onChange={handleInputChange}
                            />
                        </div>
                        <div>
                            <label htmlFor="password">Password:</label>
                            <input
                                id="password"
                                name="password"
                                type="password"
                                required
                                className="block border border-black rounded px-2 py-1"
                                onChange={handleInputChange}
                            />
                        </div>
                        <div>
                            {signUpError && (
                                <p className="text-sm text-red-600">
                                    {signUpError}
                                </p>
                            )}
                        </div>
                        <div className="text-center my-2">
                            <input
                                type="submit"
                                value="Sign Up"
                                className="border border-black rounded bg-green-400 px-3 py-1 cursor-pointer"
                            />
                        </div>
                    </form>
                </div>
                <div>
                    <p>
                        Already have an account?{" "}
                        <Link to="/login" className="text-blue-600">
                            Login
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Signup;
