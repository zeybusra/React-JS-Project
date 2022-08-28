import React from 'react';
import './footer.css';

function Footer(props) {
    const url = 'https://zeynepbusra.com';
    return (
        <div>
            <footer className="footer fixed-bottom">
                <a className={'text'} href={url}>
                    Zeynep Büşra Ünal
                </a>
            </footer>
        </div>
    );
}

export default Footer;
