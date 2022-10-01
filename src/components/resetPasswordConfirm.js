import React, { useState, useEffect } from 'react';
import './signup.css';
import Input from './inputs/input';
import ActionButton from './inputs/actionButton';
import BasicAlerts from './small-components/alert';
import { createSearchParams, useNavigate, useSearchParams } from 'react-router-dom';

const ResetPasswordConfirm = props => {
    const navigate = useNavigate();
    const [message, setMessage] = useState();
    const [severity, setSeverity] = useState();
    const [open, setOpen] = useState(false);
    const [isDisabled, setIsDisabled] = useState(true);
    const [loading, setLoading] = useState(true);
    const [newPassword, setNewPassword] = useState(false);
    const [newPasswordAgain, setNewPasswordAgain] = useState(false);
    const [searchParams, setSearchParams] = useSearchParams();
    const token = searchParams.get('token');
    const userId = searchParams.get('userId');

    useEffect(() => {
        if (!token && !userId) {
            navigate('/reset-password-done');
        }
        fetch(
            `https://express-js-api.vercel.app/api/v1/reset_password_confirm?token=${token}&userId=${userId}&lang=en`
        )
            .then(data => data.json())
            .then(json => {
                if (json.success) {
                    setIsDisabled(false);
                    setLoading(false);
                } else {
                    navigate('/reset-password-done');
                }
            })
            .catch(err => {
                console.log(err);
                navigate('/reset-password-done');
            });
    }, []);

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        setOpen(false);
    };

    const createNewPassword = async e => {
        e.preventDefault();
        setIsDisabled(true);
        setLoading(true);

        return await fetch('https://express-js-api.vercel.app/api/v1/reset_password/?lang=en', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ newPassword, newPasswordAgain }),
        })
            .then(data => data.json())
            .then(json => {
                if (json.success) {
                    navigate({
                        pathname: '/reset-password-done',
                        search: createSearchParams({
                            success: 'true',
                        }).toString(),
                    });
                }
                setSeverity('error');
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
                        <h3 className="title">New Password</h3>
                        <form onSubmit={createNewPassword}>
                            <div className="col-12">
                                <Input
                                    isDisabled={isDisabled}
                                    name="New Password"
                                    onChangeEvent={setNewPassword}
                                    label="New Password"
                                />
                                <Input
                                    isDisabled={isDisabled}
                                    name="Password Again"
                                    onChangeEvent={setNewPasswordAgain}
                                    label="Password Again!"
                                />
                                <ActionButton
                                    isDisabled={isDisabled}
                                    actionType={'submit'}
                                    title={'Change Password'}
                                    loading={loading}
                                />
                            </div>
                        </form>
                    </div>
                </div>
                <BasicAlerts severity={severity} text={message} open={open} onClose={handleClose} />
            </div>
        </div>
    );
};

export default ResetPasswordConfirm;
