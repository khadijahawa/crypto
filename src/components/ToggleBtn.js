import styles from "./style.module.css";

const ToggleBtn = ({ toggle, toggleSearch }) => {
  return (
    <div onClick={toggle} className={styles.homeButton}>
      {toggleSearch ? (
        <button
          style={{ color: "#0071bd", textDecoration: "none" }}
          className={styles.toggle}
        >
          Add New
        </button>
      ) : (
        <button
          style={{ color: "#0071bd", textDecoration: "none" }}
          className={styles.toggle}
        >
          Add New
        </button>
      )}
    </div>
  );
};

export default ToggleBtn;
