import { useState } from "react";
import { BsXCircleFill } from "react-icons/bs";
import { useTransition } from "react-spring";
import styles from "./style.module.css";

const AddForm = ({ toggleForm, coin, updateCoin }) => {
  // Set the cost of each coin and the amount bought of said coin.

  const [cost, setCost] = useState();
  const [amount, setAmount] = useState("");

  const transition = useTransition(toggleForm, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
  });

  // Check max length on inputs
  const maxLengthCheck = (input) => {
    if (input.target.value.length > input.target.maxLength) {
      input.target.value = input.target.value.slice(0, input.target.maxLength);
    }
  };

  const displayWorth = (e) => {
    e.preventDefault();

    if (!cost | !amount) {
      alert("You forgot to input something!");
    } else {
      toggleForm();

      // Adds cost and amount to coin.
      updateCoin({ coin, cost, amount });

      // Input values back to default
      setCost(coin.current_price);
      setAmount("");
    }
  };

  return transition(
    (style, item) =>
      item && (
        <div className={styles.coin} style={{ width: "94%", padding: "3%" }}>
          <form
            style={style}
            onSubmit={displayWorth}
            className={styles.containerzz}
          >
            <BsXCircleFill onClick={toggleForm} size="30" />
            <p
              style={{
                fontWeight: "bold",
                color: "#0071bd",
                fontSize: "30px",
              }}
            >
              {coin.name}
            </p>
            <label style={{ fontWeight: "bold" }}>Cost per coin:</label>
            <input
              step="any"
              type="number"
              maxLength="10"
              value={cost}
              onInput={maxLengthCheck}
              onChange={(e) => {
                setCost(e.target.value);
              }}
              className={styles.btnPart}
            />
            <label style={{ fontWeight: "bold" }}>Amount bought:</label>
            <input
              type="number"
              maxLength="10"
              value={amount}
              step="any"
              onInput={maxLengthCheck}
              onChange={(e) => {
                setAmount(e.target.value);
              }}
              className={styles.btnPart}
            />
            <input type="submit" value="Add coin" className={styles.addCoin} />
          </form>
        </div>
      )
  );
};

export default AddForm;
