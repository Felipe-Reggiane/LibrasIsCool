import styles from "./buttons.module.css";

const Buttons = (image, title) => {
  return (
    <div className="ButtonsScreen">
      <img className={styles.Button} src={image} alt={title} />
    </div>
  );
};

export default Buttons;
