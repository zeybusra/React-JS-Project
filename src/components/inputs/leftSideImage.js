import React from 'react';

const LeftSideImage = props => {
    const leftSideImage = {
        position: 'relative',
        width: '100%',
        objectFit: 'cover',
    };

    const resizeContainer = e => {
        const windowHeight = window.innerHeight;
        const containerHeight = document.querySelector('.authFormContainer').offsetHeight;
        const differenceCont = windowHeight - containerHeight;

        document.querySelector('.authFormContainer').style.marginTop = `${differenceCont / 2}px`;
        document.querySelector('.image').style.height = `${windowHeight * 0.98}px`;
    };
    window.addEventListener('load', event => {
        resizeContainer();
    });
    window.addEventListener('resize', event => {
        resizeContainer();
    });
    return (
        <div>
            <img
                className={'image'}
                src={require('../Image/e63c595dd1ad68d9699c73ffb7343d91.jpg')}
                alt="logo"
                style={leftSideImage}
            />
        </div>
    );
};
export default LeftSideImage;
