import { useState } from "react";
import { BsFillTrashFill } from "react-icons/bs";
import AddTxBtn from "./AddTxBtn";
import AddForm from "./AddForm";
import styles from "./style.module.css";

const Coin = ({ coin, onDelete, updateCoin }) => {
  const [showForm, setShowForm] = useState(false);

  // Accounting
  let totalValue = coin.current_price * coin.amount;
  let totalCost = coin.cost * coin.amount;
  let profitOrLoss = totalValue - totalCost;
  let ROI = (100 * profitOrLoss) / totalCost;

  const toggleForm = () => {
    setShowForm(!showForm);
  };

  return (
    <>
      <div
        onClick={() => {
          // Opens up AddForm again to edit coin amount and cost if needed.
          if ((coin.cost !== undefined) | (coin.amount !== undefined)) {
            toggleForm();
          }
        }}
        className={styles.coinC}
      >
        <div className={styles.coin}>
          <img
            src={coin.image}
            alt=""
            style={{ height: "30px", width: "30px" }}
          />
          <p>{coin.name}</p>

          <div>
            <span>Current Price</span>
            <p title="Hooray!">
              {new Intl.NumberFormat("en-IN", {
                style: "currency",
                currency: "INR",
              }).format(coin.current_price)}
            </p>
          </div>
          {/* Current value of coins */}
          {(coin.cost !== undefined) | (coin.amount !== undefined) ? (
            <div>
              <span>Total Value</span>
              <p>
                {new Intl.NumberFormat("en-IN", {
                  style: "currency",
                  currency: "INR",
                }).format(totalValue)}
              </p>
              <span>No of Coin</span>
              <p>{new Intl.NumberFormat().format(coin.amount)}</p>
            </div>
          ) : (
            ""
          )}

          {/* Profit or Loss */}
          {(coin.cost !== undefined) | (coin.amount !== undefined) ? (
            <div>
              <span>Profit / Loss</span>
              <p>
                {new Intl.NumberFormat("en-IN", {
                  style: "currency",
                  currency: "INR",
                }).format(profitOrLoss)}
              </p>
              <span>Profit / Loss Percent</span>
              <p>{new Intl.NumberFormat().format(ROI)}%</p>
            </div>
          ) : (
            ""
          )}

          {/* Add coins button */}
          {(coin.cost === undefined) & (coin.amount === undefined) ? (
            <AddTxBtn setShowForm={setShowForm} showForm={showForm} />
          ) : (
            ""
          )}

          <BsFillTrashFill
            onClick={() => {
              onDelete(coin.id);
            }}
            size="30"
          />
        </div>
      </div>
      {showForm && (
        <AddForm updateCoin={updateCoin} coin={coin} toggleForm={toggleForm} />
      )}
    </>
  );
};

export default Coin;
