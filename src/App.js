import React from 'react';
import './App.css';
import Layout from './components/layout';
import OnLoadingUseEffect from './components/onLoadingUseEffect';
import ClickButtonUseEffect from './components/clickButtonUseEffect';
import Login from './components/login';
import Signup from './components/signup';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MyProfile from './components/myProfile';
import { Component } from './TEST';

export default function App() {
    const [token, setToken] = React.useState();

    // if (!token) {
    //     return <Redirect setToken={setToken} />;
    // }

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout />}>
                    {/*<Route index element={<Login />} />*/}
                    <Route path="login" element={<Login setToken={setToken} />} />
                    <Route path="signup" element={<Signup />} />
                    <Route path="dashboard" element={<OnLoadingUseEffect />} />
                    <Route path="dashboard2" element={<ClickButtonUseEffect />} />
                    <Route path="profile" element={<MyProfile />} />
                    <Route path="test" element={<Component />} />
                </Route>

                {/*<Route path="/" element={<Layout_LoggedIn />}>*/}
                {/*    /!*<Route index element={<Login />} />*!/*/}
                {/*    <Route path="account" element={<Account />} />*/}
                {/*</Route>*/}
            </Routes>
        </BrowserRouter>
    );
}
