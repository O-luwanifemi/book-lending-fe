import React from 'react'
// import {Link, Route, Switch} from 'react-router-dom'
import {Container, Navbar, Nav, NavDropdown, Row, Col} from 'react-bootstrap'

const path = window.location.pathname;
const title = path.split('/')[1];
const page = { title };

const FooterComponent = () => {
    return (
        <Container fluid className="bg-dark text-white text-center py-3">
            <Row>
                <Col>
                    <h3>Footer</h3>
                </Col>
            </Row>
        </Container>
    )
}

export default FooterComponent;