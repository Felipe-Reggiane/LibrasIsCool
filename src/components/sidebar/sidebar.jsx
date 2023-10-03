import mockFiltered from "../mock";
import styles from "./sidebar.module.css";
import images from "../../assets";
import { useContext, useState } from "react";
import { MeuContexto } from "../../context/context";

const Sidebar = () => {
  console.log(mockFiltered);
  const { userIcon, logoutIcon } = images;

  return (
    <div className={styles.conteiner}>
      <button className={styles.buttonNewChat}>Novo Chat</button>
      <div className={styles.chatContainer}>
        <Messages />
      </div>
      <div className={styles.footerContainer}>
        <div className={styles.divisoria}></div>
        <div className={styles.footer}>
          <img src={userIcon} alt="icone" width={60} height={60} />
          <span className={styles.username}>Username</span>
          <img src={logoutIcon} alt="icone" width={30} height={30} />
        </div>
      </div>
    </div>
  );
};

const Messages = () => {
  const { chatIcon } = images;

  const onChatClick = (chat) => {
    setActiveKey(chat.id);
    setChatEmUso(chat);
  };

  const [chatEmUso, setChatEmUso] = useContext(MeuContexto);

  const [activeKey, setActiveKey] = useState();
  return (
    <>
      {mockFiltered.map((category, index) => {
        return (
          <div key={index}>
            <h1>{category.title}</h1>
            {category.chats.map((chat) => (
              <div
                className={`${styles.chat} ${
                  chat.id === activeKey ? styles.chatSelected : ""
                }`}
                key={chat.id}
                onClick={() => onChatClick(chat)}
              >
                <img src={chatIcon} alt="icone" width={20} height={20} />
                <p>{chat.title}</p>
              </div>
            ))}
          </div>
        );
      })}
    </>
  );
};

export default Sidebar;
