import VLibras from "@djpfs/react-vlibras";

import Sidebar from "../components/sidebar/sidebar";

import styles from "./homeScreen.module.css";

function Home() {
  return (
    <div className={styles.container}>
      <VLibras forceOnload={true} />
      <Sidebar />
    </div>
  );
}

export default Home;
