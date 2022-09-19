import React from 'react';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import LoadingButton from '@mui/lab/LoadingButton';
import SaveIcon from '@mui/icons-material/Save';

const ActionButton = props => {
    const { title, actionType, isDisabled, loading } = props;

    return (
        <div>
            {loading ? (
                <div className={'signupButton'}>
                    <Stack direction="row" spacing={2}>
                        <LoadingButton
                            style={{
                                paddingLeft: '30px',
                                paddingRight: '30px',
                                marginTop: '30px',
                            }}
                            size="large"
                            loading
                            loadingPosition="start"
                            startIcon={<SaveIcon />}
                            variant="outlined"
                        >
                            {title}
                        </LoadingButton>
                    </Stack>
                </div>
            ) : (
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
            )}
        </div>
    );
};
export default ActionButton;
