import React, {useState} from 'react';
import {useDispatch} from 'react-redux';
import { Form, Button, Row, Col} from 'react-bootstrap';
import {getBooksAsync} from '../redux/actions/book/getBooksAction';
import './layouts/booklistComponent.css'
import HeaderComponent from './layouts/HeaderComponent';

const BookCreationComponent = () => {
    const dispatch = useDispatch();
    const [books, setBooks] = useState({
        title: '', 
        author: '', 
        category: '', 
        description: '', 
        year: ''
    });

        const [error, setError] = useState({});

    const handleBookCreation = (event) => {
        event.preventDefault();
        const {name, value} = event.target;
        setBooks({
            ...books,
            [name]: value
        })
    }
    
    const validateCP = () => {
        if (books.user === books.admin) {
            return {
                role: true,
                creator: 'admin',
            };
        }
        return {
        role: false,
        creator: 'notAdmin',
        };
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        event.stopPropagation();
        const confirmRole = validateCP();
        
            if (!confirmRole.role) {
            return setError({
                ...error,
                confirmRole,
            });
        }

        dispatch(getBooksAsync(books));
    };
    return (
    <>
    <HeaderComponent title="Create A Book"/>
    <div>
        <p>* Indicates required field.</p>
            <Row>
            <Col md="6" className="offset-3 my-3">
                <h1>CREATE A NEW BOOK</h1>
                <Form onSubmit={handleSubmit} id="bookkcreation-form">
                <Form.Group as={Row} className="mb-3" controlId="exampleForm.ControlTextarea">
                    <Form.Label column sm="2">
                    Title&nbsp;*
                    </Form.Label>
                    <Col sm="10">
                    <Form.Control required type="text" placeholder="Enter Book Title" onChange={handleBookCreation} />
                    </Col>
                </Form.Group>
                    
                <Form.Group as={Row} className="mb-3" controlId="exampleForm.ControlTextarea">
                    <Form.Label column sm="2">
                    Author&nbsp;*
                    </Form.Label>
                    <Col sm="10">
                    <Form.Control required type="text" placeholder="Enter Author's Name" onChange={handleBookCreation} />
                    </Col>
                </Form.Group>
                
                <Form.Group as={Row} className="mb-3" controlId="exampleForm.ControlTextarea">
                    <Form.Label column sm="2">
                    Category&nbsp;*
                    </Form.Label>
                    <Col sm="10">
                    <Form.Select aria-label="Default select example">
                    <Form.Control required type="text" placeholder="Enter Book Category" onChange={handleBookCreation} />
                    <option>Select Category</option>
                    <option value="1">Comics</option>
                    <option value="2">Fiction</option>
                    <option value="4">Science</option>
                    <option value="5">Non-Ficiton </option>
                    <option value="6">Business</option>
                    <option value="7">Sports</option>
                    <option value="8">Finance</option>
                    <option value="9">Health</option>
                    <option value="10">Novel</option>
                    <option value="1">Others</option>   
                    </Form.Select>
                    </Col>
                </Form.Group>

                <Form.Group as={Row} className="mb-3" controlId="exampleForm.ControlTextarea1">
                    <Form.Label column sm="2">Description&nbsp;*</Form.Label>
                    <Col sm="10">
                    <Form.Control required as="textarea" rows={4} type="text" placeholder="" onChange={handleBookCreation} />
                    </Col>
                </Form.Group>

                <Form.Group as={Row} className="mb-3" controlId="exampleForm.ControlTextarea">
                    <Form.Label column sm="2">
                    Year&nbsp;*
                    </Form.Label>
                    <Col sm="10">
                    <Form.Control required type="number" onChange={handleBookCreation} />
                    </Col>
                </Form.Group>

                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>
            </Col>
            </Row>
    </div>
    </>
    );
};
export default BookCreationComponent;