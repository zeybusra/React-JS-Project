import React from "react";
import "./signup.css";
import Input from "./inputs/input";
import PasswordInput from "./inputs/passwordInput";
import ActionButton from "./inputs/actionButtom";
import GoogleButton from "./inputs/googleButton";
import {Link} from "react-router-dom";


const Login = () => {
    const textStyle = {
        justifyContent: "center",
        display: "flex",
        color: "gray",
        fontWeight: "normal"
    }
    const forgetPassword = {
        justifyContent: "flex-end",
        display: "flex",
        marginTop: "10px",
        color: "#5d5d5d",
        cursor: "pointer",
        textDecoration: "none",
        paddingLeft: "10px"
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
                        <div className="title"><h3>Welcome to Chanel</h3></div>
                        <div className="col-12">
                            <Input name="mail" label="Mail"/>
                        </div>
                        <div className="col-12">
                            <PasswordInput name="password" label="Password"/>
                        </div>

                        <Link style={forgetPassword}
                              to="/">Forget Your Password?</Link>
                        <ActionButton title="LOGIN"/>
                        <GoogleButton title="Login With Google"/>

                        <div style={{marginTop: "40px"}}>
                            <h6 style={textStyle}>Don't have an account?
                                <Link style={{textDecoration: "none", color: "#9c27b0", paddingLeft: "10px"}}
                                      to="/signup">Sign up</Link>
                            </h6>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};
export default Login;

