import React, { useEffect, useState } from "react";
import { auth, googleProvider } from "../firebaseConfig";
import { signInWithPopup } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import checkGuest from "./auth/checkGuest";

const GoogleLogin = () => {
    const [user, setUser] = useState("");
    const navigate = useNavigate()

    const handleGoogleLogin = async () => {
        try {
            const result = await signInWithPopup(auth, googleProvider);
            console.log("User logged in:", result.user);
            setUser(result.user)
            localStorage.setItem('user', JSON.stringify(result.user))
            navigate('/home')
        } catch (error) {
            console.error("Error during Google login:", error.message);
        }
    };

    return (
        <div className="flex justify-center items-center bg-gray-100" style={{ height: '250px' }}>
            <div className="bg-white p-8 rounded-lg shadow-md text-center">
                <h2 className="text-2xl font-semibold mb-6">Login with Google</h2>
                <button
                    onClick={handleGoogleLogin}
                    className="flex items-center justify-center px-6 py-3 bg-red-500 text-white font-semibold rounded-lg shadow-md hover:bg-red-600 transition duration-300 ease-in-out"
                >
                    <i className="bx bxl-google text-2xl mr-2"></i>Sign in with Google
                </button>
            </div>
        </div>
    );
};

export default checkGuest(GoogleLogin);