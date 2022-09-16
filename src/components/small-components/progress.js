import React from 'react';
import ProgressBar from 'react-bootstrap/ProgressBar';

function ProgressTemp() {
    return (
        <div>
                <ProgressBar style={{marginTop:'5px'}} variant="danger" now={40}/>
                <ProgressBar style={{marginTop:'5px'}} variant="danger" now={20}/>
                <ProgressBar style={{marginTop:'5px'}} variant="danger" now={60}/>
                <ProgressBar style={{marginTop:'5px'}} variant="danger" now={80}/>
        </div>
    );
}


export default ProgressTemp;