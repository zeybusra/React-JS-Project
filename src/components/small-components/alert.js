import * as React from 'react';
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';

const BasicAlerts = props => {
    const { severity, text } = props;
    return text ? (
        <Stack style={{ marginTop: '10px' }} sx={{ width: '100%' }} spacing={2}>
            <Alert severity={severity}>{text}</Alert>
        </Stack>
    ) : null;
};
export default BasicAlerts;
