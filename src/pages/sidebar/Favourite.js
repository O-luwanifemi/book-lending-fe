import React from 'react'
// import {Component} from 'react'
// function Favorite extends React.Component
import { Container } from 'react-bootstrap'
import { Card } from 'react-bootstrap'
import { Button } from 'react-bootstrap'
import { Col } from 'react-bootstrap'
import { Row } from 'react-bootstrap'
import { Image } from 'react-bootstrap'
import "./Favorite.css"

const BookArray = [
    {
        BookName : 'riding Hood', Description:'Comics', Availability: 'Available', BookImage : 'https://www.pexels.com/photo/book-surrounded-with-shells-2228582'
    },
    {
        BookName : 'Sleeping Beauty',Description:'Comics', Availability: 'Available', BookImage : 'https://www.pexels.com/photo/little-black-book-surrounded-with-pink-click-pen-red-lipstick-and-black-wayfarer-eyeglasses-734968/ '
    },
    {
        BookName : 'Tom and Jerry',Description:'Comics', Availability: 'Available', BookImage : 'https://images.pexels.com/photos/1181599/pexels-photo-1181599.jpeg/'
    }
]



function Favorite(props) {
    const Favorite= BookArray.map((ba, i)=>{
        return(
            <div>
                <Container className= 'favTable'>
  <Row>
    <Col className = 'img_frame'><Image src={ba.BookImage} rounded /></Col>
    <Col>{ba.BookName}</Col>
    <Col>{ba.Description}</Col>
   <Col> <Button variant="primary sm">Remove from favourites </Button></Col>
  </Row>
  </Container>

                {/* <ul>
                    <ol>{ba.BookImage}</ol>
                    <ol>{ba.BookName}</ol>
                    <ol>{ba.Description}</ol>
                    <Button variant="primary">Remove from favourites </Button>
                </ul> */}

            </div>
//             <div className='favCard col' >
               
//                <Card  >
//                <Card.Img variant="top" src={pt.BookImage}/>
//     <Card.Body>
//         <Card.Title>Favorites</Card.Title>
//         <Card.Subtitle className="mb-2 text-muted">{pt.Description}</Card.Subtitle>
//         <Card.Text>
//         {pt.productName} <br/>
//         {pt.Description}
//         </Card.Text>
//         <Button variant="primary">Remove from favourites </Button>
        
//     </Card.Body>
// </Card>
//                {/* {pt.productName}  {pt.Description}  {pt.Availability}  */}
//             </div>
        )
        
    })

   return(
  
    <div className = 'favoritePage'>
      
       <div className = 'favoriteMenu'>
           
           {Favorite}
       {/* <Container>
            <Row md={2} sm={1} lg={4}>
                {Product}
            </Row>
            
        </Container> */}
       </div>
      
   </div>

   )
}
export default Favorite