import React from "react";
import { Link } from "react-router-dom";
import styles from "./style.module.css";

const Navbar = () => {
  return (
    <Link to="/">
      <div className={styles.container}></div>
    </Link>
  );
};

export default Navbar;
