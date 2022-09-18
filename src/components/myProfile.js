import React from 'react';
import Container from 'react-bootstrap/Container';
import CardTemplate from './card';
import ProgressTemp from './small-components/progress';
import { Navigate } from 'react-router-dom';

const MyProfile = props => {
    const { token, authenticated } = props;

    if (!authenticated) {
        return <Navigate replace to="/login" />;
    } else {
        return (
            <Container>
                <h2 style={{ textDecorationColor: 'black', fontSize: '25px', paddingTop: '80px' }}>
                    Hoşgeldin Zeynep Ünal;
                </h2>

                <div style={{ justifyContent: 'center' }} className={'row'}>
                    <div className={'col-6'} style={{ marginTop: '50px' }}>
                        <ProgressTemp />
                    </div>
                    <div className={'col-6'} style={{ marginTop: '50px' }}>
                        <ProgressTemp />
                    </div>
                </div>

                <div className={'row'}>
                    <CardTemplate key={1232} name={'zey'} surname={'zeyb'} />
                    {/*{this.state.users.map(user => {*/}
                    {/*    return <CardTemplate key={1232} name={'zey'} surname={'zeyb'} />;*/}
                    {/*})}*/}
                </div>
            </Container>
        );
    }
};

export default MyProfile;
