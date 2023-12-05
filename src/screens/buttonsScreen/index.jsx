import styles from "./buttonsScreen.module.css";
import Layout from "../../components/layout/layout";
import Buttons from "../../components/buttons/buttons";
import images from "../../assets";

import { useState } from "react";

function ButtonsScreen() {
  const [currentButtons, setCurrentButtons] = useState("Cores");

  const handleLeftArrowClick = () => {
    if (currentButtons != "Cores") {
      currentButtons === "Animais"
        ? setCurrentButtons("Cores")
        : setCurrentButtons("Animais");
    }
  };

  const handleRightArrowClick = () => {
    if (currentButtons != "Objetos") {
      currentButtons === "Animais"
        ? setCurrentButtons("Objetos")
        : setCurrentButtons("Animais");
    }
  };

  const renderColors = () => {
    return (
      <div className={styles.buttonsContainer}>
        {images.colors.map((color, index) => (
          <div className={styles.buttom}>
            <Buttons props={color} />
          </div>
        ))}
      </div>
    );
  };

  // const renderAnimals = () => {
  //   return (
  //     <div className={styles.buttonsContainer}>
  //       {images.colors.map((color, index) => ( ALTERAR MAP E OBJETO DO MAP
  //         <div className={styles.buttom}>
  //           <Buttons props={color} />  ALTERAR PROPS
  //         </div>
  //       ))}
  //     </div>
  //   );
  // };

  return (
    <Layout>
      <div className={styles.navigateContainer}>
        <img
          className={styles.arrowIcon}
          src={images.arrowLeftIcon}
          alt="seta esquerda"
          onClick={handleLeftArrowClick}
        />
        <p className={styles.currentButtons}>{currentButtons}</p>
        <img
          className={styles.arrowIcon}
          src={images.arrowRightIcon}
          alt="seta direita"
          onClick={handleRightArrowClick}
        />
      </div>
      <div className={styles.container}>
        {images && currentButtons === "Cores" && renderColors()}
        {/* {images && currentButtons === "Animais" && renderAnimals()} EXEMPLO */}
      </div>
    </Layout>
  );
}

export default ButtonsScreen;
