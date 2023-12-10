import VLibras from "@djpfs/react-vlibras";
import images from "../../assets";
import Sidebar from "../sidebar/sidebar";
import SlideButton from "../slideButton/slideButton";
import { useContext, useState } from "react";

import styles from "./layout.module.css";
import TutorialModal from "../tutorial";
import { useLocation } from "react-router-dom";

const Layout = ({ children }) => {
  const [modalOpen, setModalOpen] = useState(false);

  const location = useLocation();

  return (
    <div className={styles.layoutContainer}>
      <img
        src={images.tutorialIcon}
        alt="tutorial"
        className={styles.tutorial}
        onClick={() => setModalOpen(true)}
      />
      <TutorialModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
      <VLibras forceOnload={true} />
      {location.pathname === "/home" && <Sidebar />}
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
