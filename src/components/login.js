import React from 'react';
import './signup.css';
import Input from './inputs/input';
import PasswordInput from './inputs/passwordInput';
import ActionButton from './inputs/actionButton';
import GoogleButton from './inputs/googleButton';
import { Link } from 'react-router-dom';
import LeftSideImage from './inputs/leftSideImage';
import PropTypes from 'prop-types';
import BasicAlerts from './small-components/alert';

const Login = props => {
    const { setToken } = props;
    const [usernameOrEmail, setUsernameOrEmail] = React.useState();
    const [password, setPassword] = React.useState();
    const [message, setMessage] = React.useState();
    const [severity, setSeverity] = React.useState();
    const [open, setOpen] = React.useState(false);

    const handleSubmit = async e => {
        e.preventDefault();
        const token = await loginUser({
            usernameOrEmail,
            password,
        });
        setToken(token);
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

    async function loginUser(credentials) {
        return fetch('https://express-js-api.vercel.app/api/v1/login/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(credentials),
        })
            .then(data => data.json())
            .then(json => {
                if (json.success) {
                    setOpen(true);
                    setSeverity('success');
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
            });
    }

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
                                />
                            </div>
                            <div className="col-12">
                                <PasswordInput onChangeEvent={setPassword} name="password" label="Password" />
                            </div>

                            <Link style={forgetPassword} to="/">
                                Forget Your Password?
                            </Link>
                            <ActionButton actionType={'submit'} onClickEvent={handleSubmit} title="LOGIN" />
                            <GoogleButton title="Login With Google" />
                        </form>
                        <div style={{ marginTop: '40px' }}>
                            <h6 style={textStyle}>
                                Don't have an account?
                                <Link
                                    style={{ textDecoration: 'none', color: '#9c27b0', paddingLeft: '10px' }}
                                    to="/signup"
                                >
                                    Sign up
                                </Link>
                            </h6>
                        </div>
                    </div>
                </div>
            </div>
            <BasicAlerts severity={severity} text={message} open={open} onClose={handleClose} />
        </div>
    );
};
export default Login;
Login.propTypes = {
    setToken: PropTypes.func.isRequired,
};
