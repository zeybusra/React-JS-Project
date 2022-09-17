import React from 'react';
import TextField from '@mui/material/TextField';

const Input = props => {
    const { label, name, onChangeEvent, type, required } = props;

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
                type={type ? type : 'text'}
                required={required}
                inputProps={{ maxLength: 256, minLength: 3 }}
            />
        </div>
    );
};
export default Input;
