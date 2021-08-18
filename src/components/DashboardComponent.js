import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import HeaderComponent from "./layouts/HeaderComponent";


const DashboardComponent = () => {
    return (
        <>
        <HeaderComponent title="Your Dashboard"/>
            <Container>
                <Row>
                    <Col className="col-md-6 my-2">
                        <h3>Books on Shelf</h3>
                        <hr/>
                        <Link to="/shelf">view all books on shelf</Link>
                    </Col>

                    <Col className="col-md-6 my-2">
                        <h3>Books Borrow History</h3>

                        <hr/>
                        <Link to="/history">view all history</Link>
                    </Col>
                    
                    <Col className="col-md-6 my-2">

                        <h3>Create A New Book</h3>
                        <hr/>
                        <Link to="/createbook">create a new book</Link>
                    </Col>
                </Row>
            </Container>
        </>
    );
}

export default DashboardComponent;