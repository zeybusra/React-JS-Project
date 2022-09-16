import React from 'react';
import TextField from '@mui/material/TextField';

const Input = props => {
    const { label, name, onChangeEvent } = props;

    return (
        <div className="input-text">
            <TextField
                fullWidth
                color="secondary"
                id="outlined-mail-input"
                label={label}
                name={name}
                size="small"
                onChange={e => onChangeEvent(e.target.value)}
            />
        </div>
    );
};
export default Input;
