import VLibras from "@djpfs/react-vlibras";
import Sidebar from "../sidebar/sidebar";
import SlideButton from "../slideButton/slideButton";
import { useContext } from "react";
import { MeuContexto } from "../../context/context";

import styles from "./layout.module.css";

const Layout = ({ children }) => {
  const [currentScreen, setCurrentScreen] = useContext(MeuContexto);

  const renderSidebar = () => {
    return <Sidebar />;
  };

  return (
    <div className={styles.layoutContainer}>
      <VLibras forceOnload={true} />
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
