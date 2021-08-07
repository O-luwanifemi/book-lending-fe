import React from 'react'
// import {Link} from 'react-router-dom'
import {Container, Navbar, Nav, NavDropdown} from 'react-bootstrap'

const HeaderComponent = () => {
    return (
        <Container fluid id="hero">
        <Navbar className="navbar-dark navbar-expand-md mx-5 text-white border-bottom">
            <Container fluid>
                <Navbar.Brand href="/">BLA</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mx-auto">
                    <Nav.Link href="/">Home</Nav.Link>
                    <Nav.Link href="/books">Books</Nav.Link>
                    <Nav.Link href="/about">About</Nav.Link>

                    <NavDropdown title="User" id="basic-nav-dropdown">
                        <NavDropdown.Item href="#">Profile</NavDropdown.Item>
                        <NavDropdown.Item href="#">Dashboard</NavDropdown.Item>
                        <NavDropdown.Item href="#">Something</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item className="text-danger">Logout</NavDropdown.Item>
                    </NavDropdown>
                    
                </Nav>
                <Nav className="font-weight-bold">
                    <Nav.Item className="nav-item"><span><i class="fas fa-search"></i></span></Nav.Item>
                    <Nav.Item className="nav-item"><span><i class="far fa-heart"></i></span></Nav.Item>
                    <Nav.Item className="nav-item"><span><i class="fas fa-shopping-cart"></i></span></Nav.Item>
                    
                    <Nav.Item className="nav-item"><span><i class="far fa-user"></i></span></Nav.Item>
                </Nav>
                </Navbar.Collapse>
            </Container>
            </Navbar>
        </Container>
    )
}

export default HeaderComponent;