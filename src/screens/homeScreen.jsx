import Layout from "../components/layout/layout";
import images from "../assets";

import styles from "./homeScreen.module.css";

import { MeuContexto } from "../context/context";
import { useContext } from "react";

function Home() {
  const { arrow } = images;

  const [chatEmUso, setChatEmUso] = useContext(MeuContexto);

  console.log(chatEmUso);

  return (
    <Layout>
      <div className={styles.container}>
        <div className={styles.chatContainer}>
          {chatEmUso.messages.map((message) => (
            <>
              <p className={styles.message} key={message.id}>
                {message.content}
              </p>
            </>
          ))}
        </div>
        <form className={styles.inputContainer}>
          <input
            type="text"
            placeholder="Escreva sua mensagem..."
            className={styles.input}
          />
          <button type="submit" className={styles.button}>
            <img
              src={arrow}
              alt="icone"
              width={25}
              height={25}
              className={styles.arrowIcon}
            />
          </button>
        </form>
      </div>
    </Layout>
  );
}

export default Home;
