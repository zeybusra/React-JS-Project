import React from "react";
// import ReactDOM from 'react-dom'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import Container from 'react-bootstrap/Container';
import 'bootstrap/dist/css/bootstrap.min.css';
import TextField from '@mui/material/TextField';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from '@mui/material/Button';
import "./login.css";

const Login = () => {
    return (
        <div>

            <Container >
                <Row style={{justifyContent:"center", marginTop:"12%"}}>
                    <Col md={{ span: 5 }}><TextField fullWidth label="Mail" size="normal" color="secondary" focused /></Col>
                </Row>

                <Row style={{justifyContent:"center", marginTop:"30px"}}>
                    <Col md={{ span: 5}}><TextField fullWidth label="Password" size="normal" color="secondary" focused /></Col>
                    {/*<FontAwesomeIcon style={{color:"black"}} icon="fa-solid fa-eye-slash fa-lg" />*/}
                </Row>

                <Row style={{justifyContent:"center", marginTop:"30px"}}>
                    <Col className={"buttonElement"}><Button className={"loginButton"} style={{ paddingLeft:"30px", paddingRight:"30px" }} size="large" color="secondary" variant="contained">Login</Button></Col>
                </Row>
            </Container>

        </div>
    );
};
export default Login;

