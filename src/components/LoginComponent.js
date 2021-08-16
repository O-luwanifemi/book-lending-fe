import { useState } from 'react';
import { Container, Form, Button, Row, Col } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { loginAsync } from '../redux/actions/loginAction';

const LoginComponent = () => {
    const dispatch = useDispatch();
    const [loginData, setLoginData] = useState({
        email: '',
        password: '',
    })

    // useMemo(() => {
    //     if (auth.isAuthenticated) {
    //         history.push('/');
    //     }
    // }, [auth, history]);

    const handleFormChanges = (event) => {
        event.preventDefault();
        const {name, value} = event.target;
        setLoginData({
            ...loginData,
            [name]: value
        })
    }
    
    const validateEP = () => {
        if (loginData.password === '') {
            return {
                isEmpty: false,
                ePassword: 'Password cannot be empty',
            };
        }
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        event.stopPropagation();
        
        validateEP();

        //call login action
        dispatch(loginAsync(loginData));
    };
    
    return (
        <Container>
        <Row>
            <Col md="6" className="offset-3 my-3">
                <h1>Sign Up</h1>
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