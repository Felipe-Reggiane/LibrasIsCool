import { Link } from "react-router-dom";
import React, { useState, useContext } from "react";
import styles from "./slideButton.module.css";

import { MeuContexto } from "../../context/context";

const SlideButton = () => {
  const [currentScreen, setCurrentScreen] = useContext(MeuContexto);
  const [selected, setSelected] = useState("left");

  const handleClick = () => {
    setCurrentScreen(selected === "left" ? "buttons" : "home");
    setSelected(selected === "left" ? "right" : "left");
  };

  return (
    <div className={styles["slide-button-container"]}>
      <Link
        to="/"
        className={`${styles["slide-button-option"]} ${
          selected === "left" ? styles.selected : ""
        }`}
        onClick={handleClick}
      >
        Digitar texto
      </Link>
      <Link
        to="/buttons"
        className={`${styles["slide-button-option"]} ${
          selected === "right" ? styles.selected : ""
        }`}
        onClick={handleClick}
      >
        Botões
      </Link>
    </div>
  );
};

export default SlideButton;
