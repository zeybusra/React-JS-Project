import React from 'react';
import TextField from '@mui/material/TextField';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';

const PasswordInput = props => {
    const { label, name } = props;
    const [passwordType, setPasswordType] = useState('password');
    const [passwordInput, setPasswordInput] = useState('');
    const handlePasswordChange = evnt => {
        setPasswordInput(evnt.target.value);
    };
    const togglePassword = e => {
        if (passwordType === 'password') {
            setPasswordType('text');
        } else {
            setPasswordType('password');
        }
    };
    return (
        <div className="input-text">
            <TextField
                fullWidth
                color="secondary"
                id="outlined-password-input"
                autoComplete="current-password"
                onChange={handlePasswordChange}
                value={passwordInput}
                label={label}
                name={name}
                type={passwordType}
                size="small"
            />
            {passwordType === 'password' ? (
                <FontAwesomeIcon onClick={togglePassword} icon={faEyeSlash} fixedWidth shake />
            ) : (
                <FontAwesomeIcon onClick={togglePassword} icon={faEye} fixedWidth shake />
            )}
        </div>
    );
};
export default PasswordInput;
