import React from 'react';
import Button from '@mui/material/Button';

const ActionButton = props => {
    const { title, actionType, isDisabled } = props;

    return (
        <div>
            <div className={'signupButton'}>
                <Button
                    style={{ paddingLeft: '30px', paddingRight: '30px', marginTop: '30px' }}
                    size="large"
                    color="secondary"
                    type={actionType}
                    variant="contained"
                    disabled={isDisabled}
                >
                    {title}
                </Button>
            </div>
        </div>
    );
};
export default ActionButton;
