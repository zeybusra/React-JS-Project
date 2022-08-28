import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import 'bootstrap/dist/css/bootstrap.min.css';
import './navbar.css';

function NavbarFrame(props) {
    return (
        <Navbar className={'navbarComponent'} collapseOnSelect expand="lg" variant="dark">
            <Container>
                <Navbar.Brand href="#home">Anasayfa</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className=" me-auto">
                        <Nav.Link href="#features">Özellikler</Nav.Link>
                        <Nav.Link href="#pricing">Hakkımızda</Nav.Link>
                        <NavDropdown title="Etkinliklerimiz" id="collasible-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Şirket Organizasyonları</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Düğün</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Nişan</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                    <Nav>
                        <Nav.Link href="#deets">İletişim</Nav.Link>
                        <Nav.Link eventKey={2} href="#memes">
                            Üye girişi
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavbarFrame;
