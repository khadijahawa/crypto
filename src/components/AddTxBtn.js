import styles from "./style.module.css";

const AddTxBtn = ({ setShowForm, showForm }) => {
  return (
    <div
      onClick={() => {
        setShowForm(!showForm);
      }}
      className={styles.btnPart}
    >
      <button className={styles.toggle}>Add coins</button>
    </div>
  );
};

export default AddTxBtn;
