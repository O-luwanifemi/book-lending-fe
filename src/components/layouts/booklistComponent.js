    import { Card, Button} from 'react-bootstrap'
    import books from './bookSample.js'
    import './booklistComponent.css'

    const BookList = () => {
        return (
    <>
    <div className="page-container">
        <div>
        <h5 className="product">Product Categories</h5>
        <hr />
        </div>
    
    <div className= "book-container">
        <div className= "book-img">
        <Card style={{ width: '12rem' }}>
        <Card.Img variant="top" src="https://orion-uploads.openroadmedia.com/sm_85085962b6b1-knight-secrets.jpg" />  
    </Card>
        </div>
        <div className= "book-caption">
            <Card.Body>
            <Card.Title>Knight Secrets</Card.Title>
            <Card.Text>{books.author}</Card.Text>
            <Card.Text>{books.category}</Card.Text>
            <Card.Text>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
            commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
            velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
            cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
            est laborum.
            </Card.Text>
            <Card.Text>{books.year}</Card.Text>
            <Button variant="primary">ADD TO WISHLIST</Button>
        </Card.Body>
        </div>
    </div>
    </div>
    </>
    )
    }


    export default BookList
