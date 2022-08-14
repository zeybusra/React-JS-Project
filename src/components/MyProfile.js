import React from 'react';
import Container from 'react-bootstrap/Container';
import CardTemplate from './Card';


function MyProfile(props) {
    return (

        <Container>
            <h2 style={{textDecorationColor: "black", fontSize: "25px", paddingTop: "80px"}}>Hoşgeldin Zeynep Ünal;</h2>

            <div className={"row"}>
                <CardTemplate/>
                <CardTemplate/>
                <CardTemplate/>
                <CardTemplate/>
                <CardTemplate/>
                <CardTemplate/>
            </div>
        </Container>

    );
}

export default MyProfile;
