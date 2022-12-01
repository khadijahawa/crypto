import Coin from "./Coin";
import styles from "./style.module.css";

const CoinList = ({ coins, onDelete, updateCoin }) => {
  // console.log("coins", coins);
  return (
    <div className={styles.CoinList}>
      {coins.map((coin) => {
        return (
          <Coin
            updateCoin={updateCoin}
            coin={coin}
            key={coin.id}
            onDelete={onDelete}
          />
        );
      })}
    </div>
  );
};

export default CoinList;
