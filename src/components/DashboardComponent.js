import { Container, Row, Col } from "react-bootstrap";

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
                        <ShelfComponent />
                    </Col>
                    <Col className="col-md-6 my-2">
                        <HistoryComponent />
                    </Col>
                </Row>
            </Container>
        </>
    );
}

export default DashboardComponent;