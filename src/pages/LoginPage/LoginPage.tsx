import React, { useCallback, useContext, useEffect, useState } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { useHistory } from "react-router-dom";

import { AuthContext } from "providers/AuthProvider";

const LoginPage = () => {
  const { setIsAuth } = useContext(AuthContext);
  const history = useHistory();
  const [loginValue, setLoginValue] = useState<string>("");
  const [passwordValue, setPasswordValue] = useState<string>("");

  const isValidUser = useCallback(() => {
    return loginValue === "user" && passwordValue === "111";
  }, [loginValue, passwordValue]);

  const onSubmit = useCallback(() => {
    if (isValidUser()) {
      setIsAuth(true);
      window.localStorage.setItem("isAuth", "true");
      history.push("/admin");
    }
  }, [isValidUser, history, setIsAuth]);

  useEffect(() => {
    const submitOnEnter = (e: KeyboardEvent) => {
      if (e.key === "Enter") {
        onSubmit();
      }
    };
    document.addEventListener("keypress", submitOnEnter);

    return () => {
      document.removeEventListener("keypress", submitOnEnter);
    };
  }, [onSubmit]);

  return (
    <section className="mt-5">
      <Container>
        <Row className="justify-content-center">
          <Col md={6}>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Login</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter login"
                value={loginValue}
                onChange={(e) => setLoginValue(e.target.value)}
              />
            </Form.Group>
            <Form.Group controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Password"
                value={passwordValue}
                onChange={(e) => setPasswordValue(e.target.value)}
              />
            </Form.Group>
            <Button variant="primary" onClick={onSubmit}>
              Submit
            </Button>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default LoginPage;
