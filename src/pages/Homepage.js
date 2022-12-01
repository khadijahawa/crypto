import React from "react";
import { Link } from "react-router-dom";
import styles from "../components/style.module.css";

const Homepage = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.header}>Crypto Currencies</h1>
      <div>
        <div className={styles.btnPart}>
          <p className={styles.homeText}>
            Coins are classified according to their risk status.
            <br /> It is divided into three groups as high risk, medium risk and
            low risk.
          </p>
          <button className={styles.homeButton}>
            <Link
              to="/Loader"
              style={{ color: "#0071bd", textDecoration: "none" }}
            >
              Coin Revenues
            </Link>
          </button>
        </div>
        <div className={styles.btnPart}>
          <p className={styles.homeText}>
            What is a monthly income? <br />
            The return of the coins according to the definition of risk changes,
            the profit rate per month
          </p>
          <button className={styles.homeButton}>
            <Link
              to="/SearchBar"
              style={{ color: "#0071bd", textDecoration: "none" }}
            >
              Risk Analysis
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
