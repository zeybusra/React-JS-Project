import React from "react";
import "./signup.css";
import Input from "./inputs/input";
import PasswordInput from "./inputs/passwordInput";
import ActionButton from "./inputs/actionButtom";
import GoogleButton from "./inputs/googleButton";
import {Link} from 'react-router-dom';

const Signup = () => {
    const textStyle = {
        justifyContent: "center",
        display: "flex",
        color: "gray",
        fontWeight: "normal"
    }
    const alignItemStyle = {
        justifyContent: "center",
        display: "flex"
    }
    return (
        <div>
            <div className={"row"}>
                <div className={"col-6"}>
                    <div className={"leftSideImage"}></div>
                </div>

                <div style={alignItemStyle} className={"col-6"}>
                    <div className={"background"}>
                        <h3 className="title">Welcome to Chanel</h3>
                        <div className="row" style={alignItemStyle}>
                            <div className="col-6">
                                <Input name="name" label="Name"/>
                            </div>

                            <div className="col-6">
                                <Input name="surname" label="Surname"/>
                            </div>
                        </div>

                        <div className="row" style={alignItemStyle}>
                            <div className="col-12">
                                <Input name="mail" label="Mail"/>
                                <Input name="phone" label="Phone"/>
                                <PasswordInput name="password" label="Password"/>
                                <ActionButton title="SIGN UP"/>
                                <GoogleButton title="Sign up With Google"/>

                                <div style={{marginTop: "40px"}}>
                                    <h6 style={textStyle}>Already have an account?
                                        <Link style={{textDecoration:"none", color:"#9c27b0", paddingLeft:"10px"}} to="/login">Login</Link>
                                    </h6>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default Signup;
