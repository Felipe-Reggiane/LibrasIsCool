import { useNavigate } from "react-router-dom";
import React, { useState, useContext } from "react";
import styles from "./slideButton.module.css";

import { ScreenContext } from "../../context/screenContext";

const SlideButton = () => {
  const [currentScreen, setCurrentScreen] = useContext(ScreenContext);
  const [selected, setSelected] = useState("left");

  const navigate = useNavigate();

  const handleLeftClick = () => {
    if (currentScreen === "buttons") {
      setSelected("left");
      setCurrentScreen("home");
      navigate("/");
    }
  };

  const handleRightClick = () => {
    if (currentScreen === "home") {
      setSelected("right");
      setCurrentScreen("buttons");
      navigate("/buttons");
    }
  };

  return (
    <div className={styles["slide-button-container"]}>
      <div
        onClick={handleLeftClick}
        className={`${styles["slide-button-option"]} ${
          currentScreen === "home" ? styles.selected : ""
        }`}
      >
        Digitar texto
      </div>
      <div
        onClick={handleRightClick}
        className={`${styles["slide-button-option"]} ${
          currentScreen === "buttons" ? styles.selected : ""
        }`}
      >
        Botões
      </div>
    </div>
  );
};

export default SlideButton;
