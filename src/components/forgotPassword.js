import React, { useState } from 'react';
import './signup.css';
import Input from './inputs/input';
import ActionButton from './inputs/actionButton';
import BasicAlerts from './small-components/alert';
import { useNavigate } from 'react-router-dom';

const ForgotPassword = props => {
    const navigate = useNavigate();
    const [message, setMessage] = useState();
    const [severity, setSeverity] = useState();
    const [usernameOrEmail, setUsernameOrEmail] = useState();

    const [isDisabled, setIsDisabled] = useState(false);
    const [loading, setLoading] = useState(false);
    const { handleClose, open, setOpen } = props;

    const resetPassword = async e => {
        e.preventDefault();
        setIsDisabled(true);
        setLoading(true);

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
                if (json.success === 'success') {
                    navigate('/new-password');
                }

                setMessage(json.message);
                setOpen(true);
            })
            .catch(err => {
                setSeverity('error');
                setMessage('Something went wrong, please try again later');
                setOpen(true);
            })
            .then(() => {
                setIsDisabled(false);
                setLoading(false);
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
                                    isDisabled={isDisabled}
                                    name="usernameOrEmail"
                                    onChangeEvent={setUsernameOrEmail}
                                    label="Username or Email"
                                />
                                <ActionButton
                                    isDisabled={isDisabled}
                                    actionType={'submit'}
                                    title={'Reset Password'}
                                    loading={loading}
                                />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <BasicAlerts
                severity={severity}
                text={message}
                open={open}
                setOpen={setOpen}
                onClose={handleClose}
            />
        </div>
    );
};

export default ForgotPassword;
