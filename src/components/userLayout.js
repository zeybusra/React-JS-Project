import React from 'react';
import { Outlet } from 'react-router-dom';
import NavbarFrame from './helper/navbar';
import Footer from './helper/footer';

const UserLayout = props => {
    const { setAuthenticated, setUserId, setToken } = props;

    return (
        <>
            <NavbarFrame setAuthenticated={setAuthenticated} setUserId={setUserId} setToken={setToken} />
            <div>
                <Outlet />
            </div>
            <Footer />
        </>
    );
};

export default UserLayout;
