import VLibras from "@djpfs/react-vlibras";
import Sidebar from "../sidebar/sidebar";
import SlideButton from "../slideButton/slideButton";

import styles from "./layout.module.css";

const Layout = ({ children }) => {
  return (
    <div className={styles.layoutContainer}>
      <VLibras forceOnload={true} />
      <Sidebar />
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
