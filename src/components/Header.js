import styles from "./style.module.css";

const Header = ({ coins }) => {
  let total = 0;

  const getTotal = () => {
    if (coins.length > 0) {
      coins.map((coin) => {
        if (coin.amount !== undefined) {
          return (total = total + coin.amount * coin.current_price);
        } else {
          return null;
        }
      });
    }
  };

  getTotal();

  return (
    <div className={styles.total}>
      <h1>
        {new Intl.NumberFormat("en-IN", {
          style: "currency",
          currency: "INR",
        }).format(total)}
      </h1>
    </div>
  );
};

export default Header;
