// import styles from "./style.module.css";

const ToggleBtn = ({ toggle, toggleSearch }) => {
  return (
    <div onClick={toggle}>
      {toggleSearch ? <button> Add New</button> : <button> Add New</button>}
    </div>
  );
};

export default ToggleBtn;
