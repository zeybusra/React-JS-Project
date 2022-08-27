import React from "react";
import './App.css';
import Layout from "./components/layout";
import Login from "./components/login";
import Signup from "./components/signup";
import {BrowserRouter, Routes, Route} from "react-router-dom";


export default function App() {
    return (
        <BrowserRouter>
            <Routes>

                <Route path="/" element={<Layout />}>
                    {/*<Route index element={<Login />} />*/}
                    <Route path="login" element={<Login />} />
                    <Route path="signup" element={<Signup />} />
                </Route>

                {/*<Route path="/" element={<Layout_LoggedIn />}>*/}
                {/*    /!*<Route index element={<Login />} />*!/*/}
                {/*    <Route path="account" element={<Account />} />*/}
                {/*</Route>*/}

            </Routes>
        </BrowserRouter>
    );
}
