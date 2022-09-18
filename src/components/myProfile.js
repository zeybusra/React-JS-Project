import React, { useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container';
import CardTemplate from './card';
import ProgressTemp from './small-components/progress';
import { Navigate } from 'react-router-dom';

const MyProfile = props => {
    const { token, authenticated, userId } = props;
    const [firstName, setFirstName] = useState();
    const [lastName, setLastName] = useState();
    const [userName, setUserName] = useState();
    const [profilePictureLocation, setProfilePictureLocation] = useState();

    useEffect(() => {
        // TODO: Create a request service for all the requests in the app
        fetch('https://express-js-api.vercel.app/api/v1/users/' + userId, {
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${token}`,
            },
        })
            .then(response => response.json())
            .then(json => {
                setFirstName(json.data[0].firstName);
                setLastName(json.data[0].lastName);
                setUserName(json.data[0].username);
                setProfilePictureLocation(json.data[0].profilePictureLocation);
            })
            .catch(error => console.log('error', error));
    }, []);

    if (!authenticated) {
        return <Navigate replace to="/login" />;
    } else {
        return (
            <Container>
                <h2 style={{ textDecorationColor: 'black', fontSize: '25px', paddingTop: '80px' }}>
                    Welcome {firstName}
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
                    <CardTemplate
                        userName={userName}
                        firstName={firstName}
                        lastName={lastName}
                        profilePictureLocation={profilePictureLocation}
                    />
                    {/*{this.state.users.map(user => {*/}
                    {/*    return <CardTemplate key={1232} name={'zey'} surname={'zeyb'} />;*/}
                    {/*})}*/}
                </div>
            </Container>
        );
    }
};

export default MyProfile;
