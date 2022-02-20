import { useReducer, useRef, useState } from "react";
import { Button } from "react-bootstrap";
import Styles from "./HomePage.module.css";

const accountReducer = (state, action) => {
  switch (action.TYPE) {
    case "DEPOSIT": {
      return (state = state + action.payload);
    }
    case "WITHDRAW": {
      return (state = state - action.payload);
    }
    default: {
      return state;
    }
  }
};

const HomePage = ({ currentUser, setAuth }) => {
  const [inputState, setInputState] = useState("");
  const amountInputRef = useRef();
  const [balance, dispatch] = useReducer(
    accountReducer,
    Number(currentUser.balance)
  );

  return (
    <>
      <div>
        <header className={Styles.header__container}>
          <div>
            <h3>Canada Bank</h3>
          </div>
          <div>
            <h4>{currentUser.name}</h4>
          </div>
          <div>
            <Button
              variant="info"
              className={Styles.btns}
              type="click"
              onClick={() => {
                setAuth(false);
              }}
            >
              Logout
            </Button>
          </div>
        </header>

        <main>
          <div className="account__details">
            <h3>Total Balance</h3>
            <h6>
              <span>$</span>
              {balance}
            </h6>
          </div>

          <form className="amount__forms">
            <input
              ref={amountInputRef}
              type="number"
              value={inputState}
              onChange={(e) => {
                setInputState(e.target.value);
              }}
              min="0"
            ></input>
          </form>

          <div className="account__actions">
            <Button
              className={Styles.btns}
              type="click"
              onClick={() => {
                setInputState("");
                dispatch({
                  TYPE: "DEPOSIT",
                  payload: Number(amountInputRef.current.value)
                });
              }}
            >
              Deposit
            </Button>
            <Button
              variant="danger"
              type="click"
              onClick={() => {
                setInputState("");
                dispatch({
                  TYPE: "WITHDRAW",
                  payload: Number(amountInputRef.current.value)
                });
              }}
            >
              Withdraw
            </Button>
          </div>
        </main>
      </div>
    </>
  );
};

export default HomePage;
