import React from "react";
import { Container } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { Col } from "react-bootstrap";
import { Row } from "react-bootstrap";
import { Image } from "react-bootstrap";
import "./Favorite.css";

const BookArray = [
  {
    BookName: "riding Hood",
    Description: "Comics",
    Availability: "Available",
    BookImage:
      "https://www.pexels.com/photo/book-surrounded-with-shells-2228582",
  },
  {
    BookName: "Sleeping Beauty",
    Description: "Comics",
    Availability: "Available",
    BookImage:
      "https://www.pexels.com/photo/little-black-book-surrounded-with-pink-click-pen-red-lipstick-and-black-wayfarer-eyeglasses-734968/ ",
  },
  {
    BookName: "Tom and Jerry",
    Description: "Comics",
    Availability: "Available",
    BookImage:
      "https://images.pexels.com/photos/1181599/pexels-photo-1181599.jpeg/",
  },
];

function Favorite(props) {
  const Favorite = BookArray.map((ba, i) => {
    return (
      <div>
        <Container className="favTable">
          <Row>
            <Col className="img_frame">
              <Image src={ba.BookImage} rounded />
            </Col>
            <Col>{ba.BookName}</Col>
            <Col>{ba.Description}</Col>
            <Col>
              {" "}
              <Button variant="primary sm">Remove from favourites </Button>
            </Col>
          </Row>
        </Container>
      </div>
    );
  });

  return (
    <div className="favoritePage">
      <div className="favoriteMenu">{Favorite}</div>
    </div>
  );
}
export default Favorite;
