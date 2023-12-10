import { useLocation, useNavigate } from "react-router-dom";
import React from "react";
import styles from "./slideButton.module.css";

const SlideButton = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleLeftClick = () => {
    if (location.pathname === "/buttons") {
      navigate("/home");
    }
  };

  const handleRightClick = () => {
    if (location.pathname === "/home") {
      navigate("/buttons");
    }
  };

  return (
    <div className={styles["slide-button-container"]}>
      <div
        onClick={handleLeftClick}
        className={`${styles["slide-button-option"]} ${
          location.pathname === "/home" ? styles.selected : ""
        }`}
      >
        Digitar texto
      </div>
      <div
        onClick={handleRightClick}
        className={`${styles["slide-button-option"]} ${
          location.pathname === "/buttons" ? styles.selected : ""
        }`}
      >
        Botões
      </div>
    </div>
  );
};

export default SlideButton;
