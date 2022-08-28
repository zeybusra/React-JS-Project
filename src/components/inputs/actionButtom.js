import React from 'react';
import Button from '@mui/material/Button';

const ActionButton = props => {
    const { title } = props;
    return (
        <div>
            <div className={'signupButton'}>
                <a style={{ textDecoration: 'none' }} href={'/signup'}>
                    <Button
                        style={{ paddingLeft: '30px', paddingRight: '30px', marginTop: '30px' }}
                        size="large"
                        color="secondary"
                        variant="contained"
                    >
                        {title}
                    </Button>
                </a>
            </div>
        </div>
    );
};
export default ActionButton;
