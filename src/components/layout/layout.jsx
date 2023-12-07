import Sidebar from "../sidebar/sidebar";
import SlideButton from "../slideButton/slideButton";
import { useContext } from "react";
import { MeuContexto } from "../../context/context";

import styles from "./layout.module.css";
import { ScreenContext } from "../../context/screenContext";

const Layout = ({ children }) => {
  const [chatEmUso, setChatEmUso] = useContext(MeuContexto);

  const [currentScreen, setCurrentScreen] = useContext(ScreenContext);

  const renderSidebar = () => {
    return <Sidebar />;
  };

  return (
    <div className={styles.layoutContainer}>
      {currentScreen === "home" && renderSidebar()}
      <div className={styles.childrenContainer}>
        <div className={styles.slideButtonContainer}>
          <SlideButton />
        </div>
        <div className={styles.children}>{children}</div>
      </div>
    </div>
  );
};

export default Layout;
