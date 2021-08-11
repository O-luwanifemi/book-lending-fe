    import { Card, Button, DropdownButton, Dropdown} from 'react-bootstrap'
    import books from './bookSample.js'
    import './booklistComponent.css'

    const BookList = () => {
        return (
    <>
    <div className="page-container">

        <div className="product">
        <ul>
        <h5>PRODUCT CATEGORIES</h5>
        <hr className='line-1'/>
        {/* eslint-disable-next-line */}
        <li><a href="#">Comics <span>(3)</span></a></li>
        <hr className='line'/>
        {/* eslint-disable-next-line */}
        <li><a href="#">Fiction <span>(4)</span></a></li>
        <hr className='line'/>
        {/* eslint-disable-next-line */}
        <li><a href="#">Science <span>(5)</span></a></li>
        <hr className='line'/>
        {/* eslint-disable-next-line */}
        <li><a href="#">Non-Ficiton <span>(6)</span></a></li>
        <hr className='line'/>
        {/* eslint-disable-next-line */}
        <li><a href="#">Business <span>(10)</span></a></li>
        <hr className='line'/>
        {/* eslint-disable-next-line */}
        <li><a href="#">Sports <span>(12)</span></a></li>
        <hr className='line'/>
        {/* eslint-disable-next-line */}
        <li><a href="#">Finance <span>(3)</span></a></li>
        <hr className='line'/>
        {/* eslint-disable-next-line */}
        <li><a href="#">Health <span>(6)</span></a></li>
        <hr className='line'/>
        {/* eslint-disable-next-line */}
        <li><a href="#">Novel <span>(3)</span></a></li>
        <hr className='line'/>
        {/* eslint-disable-next-line */}
        <li><a href="#">Others <span>(8)</span></a></li>
        <hr className='line'/>
        </ul>
        </div>

    
    <div className= "book-container">
        <div className="pagination-row">
            <div>
                <hr />
                    <div className='list-icon'>
                    <div className='b'>
                    <i className="fas fa-list" ></i>
                    </div>
                    <div className='b'>
                        <p>Showing 1–12 of 40 results</p>
                    </div>
                    
                    <div className='b'>
                        <div>
                            <p className='sort-by'>Sort By </p>
                        </div>

                        <div>
                            <DropdownButton id="dropdown-basic-button" title="Default Sorting" variant="outline-secondary" size="sm" className="ddbtn">
                            <Dropdown.Item href="#/action-1">Books</Dropdown.Item>
                            <Dropdown.Item href="#/action-2">News</Dropdown.Item>
                            <Dropdown.Item href="#/action-3">Blogs</Dropdown.Item>
                            </DropdownButton>
                        </div>  
                    </div>
                    </div>
                <hr />
                </div>
            </div>
            

        <div className="book-row">

            <div className="book-img">
            <Card style={{ width: '12rem' }}>
            <Card.Img variant="top" src="https://orion-uploads.openroadmedia.com/sm_85085962b6b1-knight-secrets.jpg" />  
            </Card>
            </div>

            <div className="book-caption">
                <Card.Body>
                <Card.Title>Knight Secrets</Card.Title>
                <ul>
                    <li><i className="far fa-star checked"></i></li>
                    <li><i className="far fa-star checked"></i></li>
                    <li><i className="far fa-star checked"></i></li>
                    <li><i className="far fa-star"></i></li>
                    <li><i className="far fa-star"></i></li>
                </ul>
                <Card.Text>John Smith</Card.Text>
                <Card.Text>Fiction</Card.Text>
                <Card.Text>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                commodo consequat. 
                </Card.Text>
                <Card.Text>2021</Card.Text>
                <div className='wish-icon'>
                <Button variant="outline-secondary" className='btn '>BORROW NOW</Button>
                <a href="http://" target="_blank" rel="noopener noreferrer"><span className="far fa-heart book-icon"></span> </a>
                <a href="http://" target="_blank" rel="noopener noreferrer"><span className="fab fa-opencart book-icon"></span> </a>
                
                </div>
                
            </Card.Body>
            </div>

            <div className="book-img">
            <Card style={{ width: '12rem' }}>
            <Card.Img variant="top" src="https://orion-uploads.openroadmedia.com/sm_85085962b6b1-knight-secrets.jpg" />  
            </Card>
            </div>

            <div className="book-caption">
                <Card.Body>
                <Card.Title>Knight Secrets</Card.Title>
                <Card.Text>{books.author}</Card.Text>
                <Card.Text>{books.category}</Card.Text>
                <Card.Text>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                commodo consequat. 
                </Card.Text>
                <Card.Text>{books.year}</Card.Text>
                <Button variant="outline-secondary" className='btn '>ADD TO WISHLIST</Button>
            </Card.Body>
            </div>
            
            <div className="book-img">
            <Card style={{ width: '12rem' }}>
            <Card.Img variant="top" src="https://orion-uploads.openroadmedia.com/sm_85085962b6b1-knight-secrets.jpg" />  
            </Card>
            </div>

            <div className="book-caption">
                <Card.Body>
                <Card.Title>Knight Secrets</Card.Title>
                <Card.Text>{books.author}</Card.Text>
                <Card.Text>{books.category}</Card.Text>
                <Card.Text>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                commodo consequat. 
                </Card.Text>
                <Card.Text>{books.year}</Card.Text>
                <Button variant="outline-secondary" className='btn '>ADD TO WISHLIST</Button>
            </Card.Body>
            </div>
        </div>

    </div>
    </div>
    </>
)
}

    export default BookList
