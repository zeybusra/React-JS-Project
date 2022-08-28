import React from 'react';
import TextField from '@mui/material/TextField';

const Input = props => {
    const { label, name } = props;

    return (
        <div className="input-text">
            <TextField
                fullWidth
                color="secondary"
                id="outlined-mail-input"
                label={label}
                name={name}
                size="small"
            />
        </div>
    );
};
export default Input;
