import React from "react";
import { Row, Col, Card } from "react-bootstrap";
import { cardsData } from "./cardsData";

const Cards = () => {
  return (
    <Row xs={1} md={4} className="g-4">
      {cardsData.map((item) => {
        return (
          <Col>
            <Card>
              <Card.Img
                variant="top"
                src={item.img}
                alt="cardImage"
                className="cardImages"
              />
            </Card>
            <Card.Body>
              <Card.Title>{item.title}</Card.Title>
              <Card.Text>
                <h3>{item.author}</h3>
                <h4>&#8358;{item.price}</h4>
              </Card.Text>
            </Card.Body>
          </Col>
        );
      })}
    </Row>
  );
};

export default Cards;
