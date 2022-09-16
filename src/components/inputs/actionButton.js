import React from 'react';
import Button from '@mui/material/Button';

const ActionButton = props => {
    const { title, onClickEvent, actionType } = props;

    return (
        <div>
            <div className={'signupButton'}>
                {/*<a style={{ textDecoration: 'none' }}>*/}
                <Button
                    onClick={onClickEvent}
                    style={{ paddingLeft: '30px', paddingRight: '30px', marginTop: '30px' }}
                    size="large"
                    color="secondary"
                    type={actionType}
                    variant="contained"
                >
                    {title}
                </Button>
                {/*</a>*/}
            </div>
        </div>
    );
};
export default ActionButton;
