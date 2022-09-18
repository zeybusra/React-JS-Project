import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './helper/navbar';
import Footer from './helper/footer';

const UserLayout = () => {
    return (
        <>
            <Navbar />
            <div>
                <Outlet />
            </div>
            <Footer />
        </>
    );
};

export default UserLayout;
