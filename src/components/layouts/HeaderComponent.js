import React from 'react'
// import {Link, Route, Switch} from 'react-router-dom'
import {Container, Navbar, Nav, NavDropdown, Row, Col} from 'react-bootstrap'

const path = window.location.pathname;
const title = path.split('/')[1];
const page = { title };

const HeaderComponent = () => {
    return (
        <Container fluid id="hero">
        <Navbar className="navbar-dark navbar-expand-md mx-5 text-white border-bottom">
            <Container fluid>
                <Navbar.Brand href="/">BLA</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mx-auto d -none d -sm-block">
                    <Nav.Link href="/">Home</Nav.Link>
                    <Nav.Link href="/books">Books</Nav.Link>

                    {!localStorage.token ? (
                        <>
                        <Nav.Link href="/login">Login</Nav.Link>
                        <Nav.Link href="/register">Register</Nav.Link>
                        </>
                    ) : (
                        <>
                        <NavDropdown title="💁🏻‍♂️ User" id="basic-nav-dropdown">
                            <NavDropdown.Item href="/profile">👤 Profile</NavDropdown.Item>
                            <NavDropdown.Item href="/dashboard">🧭 Dashboard</NavDropdown.Item>
                            <NavDropdown.Item href="/shelf">📚 Book Shelf</NavDropdown.Item>
                            <NavDropdown.Item href="/history">🧐 Book History</NavDropdown.Item>
                            <NavDropdown.Item href="/favorites">🤍 Favorites</NavDropdown.Item>
                            <NavDropdown.Item href="/wishlist">🛒 Wishlist</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item className="text-danger">😞 Logout</NavDropdown.Item>
                        </NavDropdown>
                        </>
                    )}
                    
                </Nav>
                <Nav className="font-weight-bold" id="icon-link">
                    <Nav.Item className="nav-item"><span><i className="fas fa-search"></i></span></Nav.Item>
                    <Nav.Item className="nav-item"><span><i className="fas fa-shopping-cart"></i></span></Nav.Item>
                    
                    {!!localStorage.token && (
                        <>
                        <Nav.Item className="nav-item"><span><i className="far fa-heart"></i></span></Nav.Item>
                        <Nav.Item className="nav-item"><span><i className="far fa-user"></i></span></Nav.Item>
                        </>
                    )}
                </Nav>
                </Navbar.Collapse>
            </Container>
            </Navbar>
            <Container className="h-100 text-center d-flex justify-content-center align-items-center align-content-center">
                <Row>
                    <Col>
                        <h2 className="brdcrumb-title">{page.title}</h2>
                        <nav className="brdcrumb-content">
                            <a className="brdcrumb_item" href="/">Home</a>
                            <span className="brdcrumb_sep">/</span>
                            <span className="brdcrumb_item brdcrumb_item_2">{page.title}</span>
                        </nav>
                    </Col>
                </Row>
            </Container>
        </Container>
    )
}

export default HeaderComponent;