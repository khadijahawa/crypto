import styles from "./style.module.css";

const SearchCoin = ({ searchCoin, toggle, onAdd }) => {
  return (
    <div
      className={styles.searchListCoin}
      onClick={() => {
        onAdd(searchCoin);
        toggle();
      }}
    >
      <img
        src={searchCoin.image}
        style={{ height: "30px", width: "30px", alignSelf: "center" }}
        alt=""
      />

      <p>{searchCoin.name}</p>

      <p>{searchCoin.symbol.toUpperCase()}</p>
      <p>
        {new Intl.NumberFormat("en-IN", {
          style: "currency",
          currency: "INR",
        }).format(searchCoin.current_price)}
      </p>
    </div>
  );
};

export default SearchCoin;
