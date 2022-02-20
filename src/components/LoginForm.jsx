import Styles from "./LoginForm.module.css";

import { useRef } from "react";
import { Container, Row, Form, Button } from "react-bootstrap";

const LoginForm = ({ data }) => {
  const usernameRef = useRef();
  const passwordRef = useRef();

  const authHandler = (e) => {
    e.preventDefault();
    const credentials = {
      username: usernameRef.current.value,
      password: passwordRef.current.value
    };

    data.users.forEach((user) => {
      if (user.name === credentials.username) {
        if (user.password === credentials.password) {
          data.setAuth(true);
          data.setCurrentUser(user);
        } else data.setAuth(false);
      }
    });
  };

  return (
    <>
      <div>
        <h1 className={Styles.heading__h1}>Canada Bank</h1>
        <p>Username: Arman Bhatia, Password: 1111</p>
        <p>Username: Tanish Arora, Password: 2222</p>
      </div>
      <Container className={Styles.form__container}>
        <Row>
          <h1 className={Styles.Heading__Login}>Login</h1>
        </Row>
        <Row>
          <Form onSubmit={authHandler}>
            <Form.Group>
              <Form.Control
                className={Styles.form__control__input}
                type="input"
                placeholder="Username"
                ref={usernameRef}
              ></Form.Control>
            </Form.Group>

            <Form.Group>
              <Form.Control
                className={Styles.form__control__input}
                type="password"
                placeholder="Password"
                ref={passwordRef}
              ></Form.Control>
            </Form.Group>

            <Button className={Styles.loginBtn} variant="primary" type="submit">
              Login
            </Button>
            <p>
              <a className={Styles.forgot__password} href="/">
                Forgot Password ?
              </a>
            </p>
          </Form>
        </Row>
      </Container>
    </>
  );
};

export default LoginForm;
