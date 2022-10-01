import React, { useState } from 'react';
import './signup.css';
import Input from './inputs/input';
import ActionButton from './inputs/actionButton';
import BasicAlerts from './small-components/alert';

const ForgotPassword = props => {
    const [message, setMessage] = useState();
    const [severity, setSeverity] = useState();
    const [usernameOrEmail, setUsernameOrEmail] = useState();
    const [open, setOpen] = useState(false);

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        setOpen(false);
    };

    const resetPassword = async e => {
        e.preventDefault();

        return await fetch('https://express-js-api.vercel.app/api/v1/reset_password_request/?lang=en', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ usernameOrEmail }),
        })
            .then(data => data.json())
            .then(json => {
                setSeverity(json.success ? 'success' : 'error');
                setMessage(json.message);
                setOpen(true);
            })
            .catch(err => {
                setSeverity('error');
                setMessage('Something went wrong, please try again later');
                setOpen(true);
            });
    };

    return (
        <div>
            <div className="container">
                <div className="row" style={{ justifyContent: 'center', marginTop: '200px' }}>
                    <div className="authFormContainer">
                        <h3 className="title">Forgot Password</h3>
                        <form onSubmit={resetPassword}>
                            <div className="col-12">
                                <Input
                                    name="usernameOrEmail"
                                    onChangeEvent={setUsernameOrEmail}
                                    label="Username or Email"
                                />
                                <ActionButton actionType={'submit'} title={'Reset Password'} />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <BasicAlerts severity={severity} text={message} open={open} onClose={handleClose} />
        </div>
    );
};

export default ForgotPassword;
