import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

import HistoryComponent from "./HistoryComponent";
import HeaderComponent from "./layouts/HeaderComponent";
import ShelfComponent from "./ShelfComponent";

const DashboardComponent = () => {
    return (
        <>
            <HeaderComponent title="Your Dashboard"/>

            <Container>
                <Row>
                    <Col className="col-md-6 my-2">
                        <h3>Books on Shelf</h3>
                        <ShelfComponent />

                        <hr/>
                        <Link to="/shelf">view all books on shelf</Link>
                    </Col>
                    <Col className="col-md-6 my-2">
                        <h3>Books Borrow History</h3>
                        <HistoryComponent />

                        <hr/>
                        <Link to="/history">view all history</Link>
                    </Col>
                </Row>
            </Container>
        </>
    );
}

export default DashboardComponent;