import React from "react";
import styles from "./buttons.module.css";

const Buttons = ({ props }) => {
  return (
    <div className="ButtonsScreen">
      <img className={styles.Button} src={props.image} alt={props.title} />
    </div>
  );
};

export default Buttons;
