import * as React from 'react';
import Snackbar from '@mui/material/Snackbar';
import Stack from '@mui/material/Stack';
import MuiAlert from '@mui/material/Alert';

const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export default function BasicAlerts(props) {
    const { open, text, severity, onClose } = props;

    return (
        <div>
            <Stack spacing={2} sx={{ width: '100%' }}>
                <Snackbar
                    open={open}
                    autoHideDuration={6000}
                    onClose={onClose}
                    anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                >
                    <Alert onClose={onClose} severity={severity} sx={{ width: '100%' }}>
                        {text}
                    </Alert>
                </Snackbar>
            </Stack>
        </div>
    );
}
