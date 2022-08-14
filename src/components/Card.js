// import React from "react";
import Card from 'react-bootstrap/Card';


function CardTemplate(props) {
    return (
        <div className={"col-6"}>
            <Card style={{marginTop: "70px"}}>
                <Card.Img
                    style={{
                        width: "120px",
                        height: "120px",
                        marginLeft: "auto",
                        marginRight: "auto",
                        marginTop: "20px"
                    }}
                    variant="top" src={require('./Image/facebook-icon-circle-logo-09F32F61FF-seeklogo.com.png')}/>
                <Card.Body>
                    <Card.Title style={{display: "flex", justifyContent: "center"}}>Facebook</Card.Title>
                    <Card.Text>
                        <h6 style={{marginTop:"30px"}}>Kullanıcı adı:</h6>

                    </Card.Text>
                </Card.Body>
            </Card>
        </div>
    );
}

export default CardTemplate;