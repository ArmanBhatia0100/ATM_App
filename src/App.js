import LoginForm from "./components/LoginForm";
import HomePage from "./components/HomePage";
import "bootstrap/dist/css/bootstrap.min.css";
import Styles from "./styles.module.css";

import { Container } from "react-bootstrap";
import { useState } from "react";

const users = [
  {
    name: "Arman Bhatia",
    password: "1111",
    balance: 3500.0
  },
  {
    name: "Tanish Arora",
    password: "2222",
    balance: 5000.2
  }
];

export default function App() {
  const [auth, setAuth] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);

  return (
    <Container className={`${Styles.App} App`}>
      <Container className={Styles.main__container}>
        {auth ? (
          <HomePage currentUser={currentUser} setAuth={setAuth} />
        ) : (
          <LoginForm
            className={Styles.form__container}
            data={{
              users: users,
              setAuth: setAuth,
              setCurrentUser: setCurrentUser
            }}
          />
        )}
      </Container>
    </Container>
  );
}
