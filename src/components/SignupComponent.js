import { useState, useMemo } from "react";
import { Container, Form, Button, Row, Col } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";

import { useHistory } from "react-router-dom";
import HeaderComponent from "./layouts/HeaderComponent";
import { loginAsync } from "../redux/actions/loginAction";
import { signupAsync } from "../redux/actions/signupAction";

const SignupComponent = () => {
  const dispatch = useDispatch();
  const [signupData, setSignupData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  // implement login
  const history = useHistory();
  const { auth } = useSelector((state) => state);
  const [loginCredentials, setLoginCredentials] = useState({
    email: "",
    password: "",
  });
  useMemo(() => {
    if (auth.isAuthenticated) {
      history.push("/dashboard");
    }
  }, [auth, history]);

  const [error, setError] = useState({});

  const handleFormChanges = (event) => {
    event.preventDefault();
    const { name, value } = event.target;
    setSignupData({
      ...signupData,
      [name]: value,
    });
    setLoginCredentials({ ...loginCredentials, [name]: value });
  };

  const validateCP = () => {
    if (signupData.password === signupData.confirmPassword) {
      return {
        isMatch: true,
        cPassword: "match",
      };
    }
    return {
      isMatch: false,
      cPassword: "Password does not match",
    };
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    event.stopPropagation();
    const passwordMatch = validateCP();

    if (!passwordMatch.isMatch) {
      return setError({
        ...error,
        passwordMatch,
      });
    }

    dispatch(signupAsync(signupData));
    dispatch(loginAsync(loginCredentials));

    // clear form fields
    setSignupData({});
    document.getElementById("signup-form").reset();
  };

  return (
    <>
      <HeaderComponent title="Sign up" />

      <Container
        style={{
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          minHeight: "100%",
        }}
      >
        <Row
          style={{
            width: "100%",
          }}
        >
          <Col md="6" className="offset-3 my-3">
            <Form onSubmit={handleSubmit} id="signup-form">
              <Form.Group className="mb-3" controlId="formBasicLastname">
                <Form.Label>Lastname</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter Lastname"
                  name="lastname"
                  onChange={handleFormChanges}
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicFirstname">
                <Form.Label>First Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter firstname"
                  name="firstname"
                  onChange={handleFormChanges}
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Enter email"
                  name="email"
                  onChange={handleFormChanges}
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Password"
                  name="password"
                  onChange={handleFormChanges}
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicConfirmPassword">
                <Form.Label>Confirm Password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Confirm Password"
                  name="confirmPassword"
                  onChange={handleFormChanges}
                />
              </Form.Group>

              <Button variant="primary" type="submit">
                Submit
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default SignupComponent;
