import React from "react";
import {
    BrowserRouter,
    Routes,
    Route,
} from "react-router-dom";
import Home from "../components/Home"
import Login from "../components/Login"
import SignUp from "../components/SignUp";

export default function NavigationRoutes() {
    return (
        <BrowserRouter>
            <Routes>

                    <Route path="/home" element={<Home/>}/>

                    <Route path="/login" element={<Login/>}/>
                    <Route path="/signup" element={<SignUp/>}/>

            </Routes>
        </BrowserRouter>
    );
}