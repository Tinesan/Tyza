import React, { useCallback, useContext, useEffect, useState } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import { useToasts } from "react-toast-notifications";

import { useAuthenticateQuery } from "generated/graphql";
import { AuthContext } from "providers/AuthProvider";

const LoginPage = () => {
  const history = useHistory();
  const { addToast } = useToasts();
  const { setAuthData } = useContext(AuthContext);
  const { refetch: userAuth } = useAuthenticateQuery({ skip: true });
  const [loginValue, setLoginValue] = useState<string>("");
  const [passwordValue, setPasswordValue] = useState<string>("");

  const onSubmit = useCallback(async () => {
    try {
      const {
        data: { authenticate },
      } = await userAuth({
        username: loginValue,
        password: passwordValue,
      });
      if (authenticate) {
        setAuthData(authenticate);
        history.push("/admin");
      }
    } catch (error) {
      addToast("Неверный логин или пароль", { appearance: "error" });
    }
  }, [loginValue, passwordValue, history, setAuthData, userAuth, addToast]);

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
