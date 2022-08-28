import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogle } from '@fortawesome/free-brands-svg-icons';

const GoogleButton = props => {
    const { title } = props;
    const buttonStyle = {
        marginTop: '50px',
        width: '100%',
        padding: '10px',
        borderRadius: '10px',
        backgroundColor: 'white',
        border: '1px solid #ccc',
    };
    return (
        <div>
            <Link to="/">
                <button style={buttonStyle}>
                    <FontAwesomeIcon style={{ marginRight: '20px' }} icon={faGoogle} />
                    {title}
                </button>
            </Link>
        </div>
    );
};
export default GoogleButton;
