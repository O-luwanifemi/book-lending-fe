import { useState, useMemo } from 'react';
import { Container, Form, Button, Row, Col } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { loginAsync } from '../redux/actions/loginAction';
import { useHistory } from 'react-router-dom';

const LoginComponent = () => {
    const dispatch = useDispatch();
    const history = useHistory();

    const [loginCredentials, setLoginCredentials] = useState({
        email: '',
        password: '',
    })
    
    const { auth } = useSelector((state) => state);

    useMemo(() => {
        if (auth.isAuthenticated) {
            history.push('/dashboard');
        }
    }, [auth, history]);

    const handleFormChanges = (event) => {
        event.preventDefault();
        event.stopPropagation();
        const {name, value} = event.target;

        setLoginCredentials({ ...loginCredentials, [name]: value })
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        event.stopPropagation();
        
        dispatch(loginAsync(loginCredentials));
    };
    
    return (
        <Container>
        <Row>
            <Col md={{ span: 6, offset: 3 }} className="my-3">
                <h1>Login</h1>
                <Form onSubmit={handleSubmit}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" 
                            name="email" onChange={handleFormChanges} />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasiePassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" 
                            name="password" onChange={handleFormChanges} />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Form> 
            </Col>
        </Row>
        </Container>
    );
};

export default LoginComponent;