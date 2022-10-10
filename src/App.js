import React, { useState } from 'react';
import './App.css';
import UserLayout from './components/userLayout';
import AuthLayout from './components/authLayout';
import OnLoadingUseEffect from './components/onLoadingUseEffect';
import ClickButtonUseEffect from './components/clickButtonUseEffect';
import Login from './components/login';
import Signup from './components/signup';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MyProfile from './components/myProfile';
import { Component } from './TEST';
import ForgotPassword from './components/forgotPassword';
import ResetPasswordConfirm from './components/resetPasswordConfirm';
import ResetPasswordDone from './components/resetPasswordDone';
import DataTable from './components/user';

export default function App() {
    const [token, setToken] = useState(localStorage.getItem('accessToken'));
    const [authenticated, setAuthenticated] = useState(localStorage.getItem('authenticated') || false);
    const [userId, setUserId] = useState(localStorage.getItem('userId'));
    const [open, setOpen] = useState(false);

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        setOpen(false);
    };

    return (
        <BrowserRouter>
            <Routes>
                <Route
                    path="/"
                    element={
                        <UserLayout
                            setAuthenticated={setAuthenticated}
                            setUserId={setUserId}
                            setToken={setToken}
                        />
                    }
                >
                    {/* TODO 7: add login required middleware for this route */}
                    {/* TODO 5: remove unnecessary pages from routes */}
                    <Route path="dashboard" element={<OnLoadingUseEffect />} />
                    <Route path="dashboard2" element={<ClickButtonUseEffect />} />
                    <Route
                        path="user-list"
                        element={<DataTable token={token} userId={userId} authenticated={authenticated} />}
                    />
                    <Route
                        path="forgot-password"
                        element={<ForgotPassword handleClose={handleClose} setOpen={setOpen} open={open} />}
                    />
                    <Route path="reset-password-done" element={<ResetPasswordDone />} />
                    <Route
                        path="reset-password-confirm"
                        element={
                            <ResetPasswordConfirm handleClose={handleClose} setOpen={setOpen} open={open} />
                        }
                    />
                    <Route
                        path="profile"
                        element={<MyProfile token={token} userId={userId} authenticated={authenticated} />}
                    />
                    <Route path="test" element={<Component />} />
                </Route>

                <Route path="/" element={<AuthLayout />}>
                    <Route
                        path="login"
                        element={
                            <Login
                                authenticated={authenticated}
                                setAuthenticated={setAuthenticated}
                                setToken={setToken}
                                setUserId={setUserId}
                                handleClose={handleClose}
                                setOpen={setOpen}
                                open={open}
                            />
                        }
                    />

                    <Route
                        path="signup"
                        element={
                            <Signup
                                authenticated={authenticated}
                                setAuthenticated={setAuthenticated}
                                setToken={setToken}
                                setUserId={setUserId}
                            />
                        }
                    />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}
