// import React from "react";
import './App.css';
import NavbarFrame from "./components/navbar";
import Footer from "./components/footer";
import MyProfile from "./components/MyProfile";

function App(props) {
    return (
        <div>
            <NavbarFrame/>
            <MyProfile/>
            <Footer/>
        </div>
    );
}

export default App;
