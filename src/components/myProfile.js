import React, { useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container';
import CardTemplate from './card';
import { Navigate } from 'react-router-dom';
import EmptyCardTemplate from './emptyCard';
import ProgressTemp from './small-components/progress';
import CalendarTemp from './small-components/calendar';
import DoughnutChart from './small-components/doughnutChart';
import ColumnChart from './small-components/columnChart';
import ScatterChart from './small-components/scatterChart';

const MyProfile = props => {
    const { token, authenticated, userId } = props;
    const [firstName, setFirstName] = useState();
    const [lastName, setLastName] = useState();
    const [userName, setUserName] = useState();
    const [profilePictureLocation, setProfilePictureLocation] = useState();

    useEffect(() => {
        // TODO 6: Create a request service for all the requests in the app
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
                <h2
                    style={{
                        textDecorationColor: 'black',
                        fontSize: '25px',
                        paddingTop: '80px',
                        marginBottom: '80px',
                        fontFamily: 'sans-serif',
                        textTransform: 'uppercase',
                        color: '#6a647a',
                    }}
                >
                    WELCOME {firstName}
                </h2>

                <div className={'row'} style={{ marginBottom: '20px', justifyContent: 'center' }}>
                    <div className={'col-12'}>
                        <EmptyCardTemplate
                            title={'Etkinliğe Kaç Gün Kaldı?'}
                            childrenComponent={<CalendarTemp />}
                        />
                    </div>
                </div>

                <div style={{ marginBottom: '20px', justifyContent: 'center' }} className={'row'}>
                    <div className={'col-6'}>
                        <EmptyCardTemplate
                            title={'Etkinlik Detayları'}
                            childrenComponent={<DoughnutChart />}
                        />
                    </div>

                    <div className={'col-6'}>
                        <EmptyCardTemplate title={'Kaç kişi geliyor?'} childrenComponent={<ProgressTemp />} />
                    </div>
                </div>

                <div style={{ justifyContent: 'center' }} className={'row'}>
                    <div className={'col-4'}>
                        <EmptyCardTemplate title={'Kaç kişi geliyor?'} childrenComponent={<ColumnChart />} />
                    </div>

                    <div style={{ justifyContent: 'center' }} className={'col-4'}>
                        <EmptyCardTemplate title={'Kaç kişi geliyor?'} childrenComponent={<ScatterChart />} />
                    </div>

                    <div className={'col-4'}>
                        <EmptyCardTemplate title={'Kaç kişi geliyor?'} childrenComponent={<ColumnChart />} />
                    </div>
                </div>

                <div className={'row'}>
                    <CardTemplate
                        userName={userName}
                        firstName={firstName}
                        lastName={lastName}
                        profilePictureLocation={profilePictureLocation}
                        token={token}
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
