import React from 'react'
// import {Link, Route, Switch} from 'react-router-dom'
import {Container, Row, Col} from 'react-bootstrap'

const FooterComponent = () => {
    return (
        <Container fluid className="bg-dark text-white text-center py-3">
            <Row>
                <Col>
                    <h3>Footer</h3>
                    <p>...</p>
                </Col>
            </Row>
        </Container>
    )
}

export default FooterComponent;