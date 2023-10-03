import React, { useState } from "react";
import styles from "./slideButton.module.css";

const SlideButton = () => {
  const [selected, setSelected] = useState("left");

  const handleClick = () => {
    setSelected(selected === "left" ? "right" : "left");
  };

  return (
    <div className={styles["slide-button-container"]}>
      <div
        className={`${styles["slide-button-option"]} ${
          selected === "left" ? styles.selected : ""
        }`}
        onClick={handleClick}
      >
        Digitar texto
      </div>
      <div
        className={`${styles["slide-button-option"]} ${
          selected === "right" ? styles.selected : ""
        }`}
        onClick={handleClick}
      >
        Botões
      </div>
    </div>
  );
};

export default SlideButton;
