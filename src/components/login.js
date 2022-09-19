import React, { useState } from 'react';
import './signup.css';
import Input from './inputs/input';
import PasswordInput from './inputs/passwordInput';
import ActionButton from './inputs/actionButton';
import GoogleButton from './inputs/googleButton';
import { Link, Navigate } from 'react-router-dom';
import LeftSideImage from './inputs/leftSideImage';
import PropTypes from 'prop-types';
import BasicAlerts from './small-components/alert';
import { useNavigate } from 'react-router-dom';

const Login = props => {
    const navigate = useNavigate();
    const { setToken, authenticated, setAuthenticated, setUserId } = props;
    const [usernameOrEmail, setUsernameOrEmail] = useState();
    const [password, setPassword] = useState();
    const [message, setMessage] = useState();
    const [severity, setSeverity] = useState();
    const [open, setOpen] = useState(false);
    const [isDisabled, setIsDisabled] = useState(false);
    const [loading, setLoading] = useState(false);

    const handleSubmit = async e => {
        e.preventDefault();
        setIsDisabled(true);
        setLoading(true);

        return await fetch('https://express-js-api.vercel.app/api/v1/login/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ usernameOrEmail, password }),
        })
            .then(data => data.json())
            .then(json => {
                if (json.success) {
                    if (json.credentials.accessToken) {
                        setToken(json.credentials.accessToken);
                        localStorage.setItem('accessToken', json.credentials.accessToken);

                        setUserId(json.data._id);
                        localStorage.setItem('userId', json.data._id);

                        setAuthenticated(true);
                        localStorage.setItem('authenticated', true);

                        navigate('/profile');
                    }
                } else {
                    setOpen(true);
                    setSeverity('error');
                }
                setMessage(json.message);
            })
            .catch(err => {
                setOpen(true);
                setSeverity('error');
                setMessage('Something went wrong, please try again later');
            })
            .then(() => {
                setIsDisabled(false);
                setLoading(false);
            });
    };

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        setOpen(false);
    };

    //Style Start
    const textStyle = {
        justifyContent: 'center',
        display: 'flex',
        color: 'gray',
        fontWeight: 'normal',
    };
    const forgetPassword = {
        justifyContent: 'flex-end',
        display: 'flex',
        marginTop: '10px',
        color: '#5d5d5d',
        cursor: 'pointer',
        textDecoration: 'none',
        paddingLeft: '10px',
    };
    const alignItemStyle = {
        justifyContent: 'center',
        display: 'flex',
    };
    //Style End

    // TODO: create forgot password link and page
    if (authenticated) {
        return <Navigate replace to="/profile" />;
    } else {
        return (
            <div>
                <div className={'row'}>
                    <div className={'col-6'}>
                        <LeftSideImage />
                    </div>

                    <div style={alignItemStyle} className={'col-6'}>
                        <div className={'authFormContainer'}>
                            <h3 className="title">Welcome to Chanel</h3>
                            <form onSubmit={handleSubmit}>
                                <div className="col-12">
                                    <Input
                                        onChangeEvent={setUsernameOrEmail}
                                        name="usernameOrEmail"
                                        label="Username or Email"
                                        isDisabled={isDisabled}
                                    />
                                </div>
                                <div className="col-12">
                                    <PasswordInput
                                        onChangeEvent={setPassword}
                                        name="password"
                                        label="Password"
                                        isDisabled={isDisabled}
                                    />
                                </div>

                                <Link style={forgetPassword} to="/">
                                    Forget Your Password?
                                </Link>
                                <ActionButton
                                    actionType={'submit'}
                                    title="LOGIN"
                                    isDisabled={isDisabled}
                                    loading={loading}
                                />
                                <GoogleButton title="Login With Google" />
                            </form>
                            <div style={{ marginTop: '40px' }}>
                                <p style={textStyle}>
                                    Don't have an account?
                                    <Link
                                        style={{
                                            textDecoration: 'none',
                                            color: '#9c27b0',
                                            paddingLeft: '10px',
                                        }}
                                        to="/signup"
                                    >
                                        Sign up
                                    </Link>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <BasicAlerts severity={severity} text={message} open={open} onClose={handleClose} />
            </div>
        );
    }
};

Login.propTypes = {
    setToken: PropTypes.func.isRequired,
};

export default Login;
