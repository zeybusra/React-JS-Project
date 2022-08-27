import React from "react";
// import Container from 'react-bootstrap/Container';
import {Outlet} from "react-router-dom";
import Navbar from "./helper/navbar";
import Footer from "./helper/footer";

const Layout = () => {
    return (
        <>
            <Navbar/>
            <div className="container">
                <Outlet/>
            </div>
            <Footer/>

        </>
    )
};

export default Layout;