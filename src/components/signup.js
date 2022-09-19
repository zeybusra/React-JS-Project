import React from 'react';
import './signup.css';
import Input from './inputs/input';
import PasswordInput from './inputs/passwordInput';
import ActionButton from './inputs/actionButton';
import GoogleButton from './inputs/googleButton';
import { Link } from 'react-router-dom';
import LeftSideImage from './inputs/leftSideImage';
import BasicAlerts from './small-components/alert';

const Signup = props => {
    const { setToken } = props;
    const [username, setUsername] = React.useState();
    const [password, setPassword] = React.useState();
    const [firstName, setFirstName] = React.useState();
    const [lastName, setLastName] = React.useState();
    const [email, setEmail] = React.useState();
    const [message, setMessage] = React.useState();
    const [severity, setSeverity] = React.useState();
    const [open, setOpen] = React.useState(false);

    const textStyle = {
        justifyContent: 'center',
        display: 'flex',
        color: 'gray',
        fontWeight: 'normal',
    };
    const alignItemStyle = {
        justifyContent: 'center',
        display: 'flex',
    };

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        setOpen(false);
    };

    const handleSubmit = async e => {
        e.preventDefault();
        const token = await signupUser({
            username,
            password,
            firstName,
            lastName,
            email,
        });
        setToken(token);
    };

    async function signupUser(body) {
        return await fetch('https://express-js-api.vercel.app/api/v1/signup/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(body),
        })
            .then(data => data.json())
            .then(json => {
                console.log(json);
                if (json.success) {
                    setOpen(true);
                    setSeverity('success');
                } else {
                    setOpen(true);
                    setSeverity('error');
                }
                setMessage(json.message);
                return json;
            })
            .catch(err => {
                console.log('something went wrong, please try again later');
                return undefined;
            });
    }

    // TODO: if user is already logged in, redirect to profile page
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
                            <div className="row" style={alignItemStyle}>
                                <div className="col-6">
                                    <Input
                                        onChangeEvent={setFirstName}
                                        name="name"
                                        label="Name"
                                        required={true}
                                    />
                                </div>

                                <div className="col-6">
                                    <Input
                                        onChangeEvent={setLastName}
                                        name="surname"
                                        label="Surname"
                                        required={true}
                                    />
                                </div>
                            </div>

                            <div className="row" style={alignItemStyle}>
                                <div className="col-12">
                                    <Input
                                        onChangeEvent={setEmail}
                                        name="email"
                                        label="Mail"
                                        type={'email'}
                                        required={true}
                                    />
                                    <Input
                                        onChangeEvent={setUsername}
                                        name="username"
                                        label="Username"
                                        required={true}
                                    />
                                    <PasswordInput
                                        onChangeEvent={setPassword}
                                        name="password"
                                        label="Password"
                                        required={true}
                                    />
                                    <ActionButton actionType={'submit'} title="SIGN UP" />
                                    <GoogleButton title="Sign up With Google" />

                                    <div style={{ marginTop: '40px' }}>
                                        <h6 style={textStyle}>
                                            Already have an account?
                                            <Link
                                                style={{
                                                    textDecoration: 'none',
                                                    color: '#9c27b0',
                                                    paddingLeft: '10px',
                                                }}
                                                to="/login"
                                            >
                                                Login
                                            </Link>
                                        </h6>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <BasicAlerts severity={severity} text={message} open={open} onClose={handleClose} />
        </div>
    );
};
export default Signup;
