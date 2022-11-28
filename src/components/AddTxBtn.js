// import styles from "./style.module.css";

const AddTxBtn = ({ setShowForm, showForm }) => {
  return (
    <div
      onClick={() => {
        setShowForm(!showForm);
      }}
    >
      <button>Add coins</button>
    </div>
  );
};

export default AddTxBtn;
