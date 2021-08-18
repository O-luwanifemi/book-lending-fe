import HistoryComponent from "./HistoryComponent";
import ShelfComponent from "./ShelfComponent";
import { Container, Row, Col } from "react-bootstrap";
import BookCreationComponent from "./BookCreationComponent";

const DashboardComponent = () => (
    <>
        <h1 className="d-flex justify-content-center"><span>Dashboard</span></h1>
        <Container>
            <Row>
                <Col className="col-md-6 my-2">
                    <ShelfComponent />
                    <BookCreationComponent/>
                </Col>
                <Col className="col-md-6 my-2">
                    <HistoryComponent />
                </Col>
            </Row>
        </Container>
    </>
);

export default DashboardComponent;