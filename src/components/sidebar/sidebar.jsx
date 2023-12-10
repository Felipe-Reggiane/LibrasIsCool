import styles from "./sidebar.module.css";
import images from "../../assets";
import { useContext, useState } from "react";
import { MeuContexto } from "../../context/context";
import { ChatsContext } from "../../context/chatsContext";
import { getChatMessages, createChat } from "../../services/ChatsService";
import { getUserInfo } from "../../services/UserService";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Sidebar = () => {
  const [modalNewChatOpen, setModalNewChatOpen] = useState(false);
  const [modalLogout, setModalLogout] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [userInfo, setUserInfos] = useState();

  const [chatEmUso, setChatEmUso, activeKey, setActiveKey] =
    useContext(MeuContexto);

  const [chats, setChats, newChat, setNewChat] = useContext(ChatsContext);

  const Authorization = localStorage.getItem("authorization");

  const userInfos = async () => {
    if (Authorization) {
      const data = await getUserInfo(Authorization);
      setUserInfos(data);

      return data;
    }
  };

  useEffect(() => {
    userInfos();
  }, [Authorization]);

  const navigate = useNavigate();

  const openModal = () => {
    setChatEmUso();
    setActiveKey();
    setModalNewChatOpen(true);
  };

  const setActiveChat = async (chat) => {
    setActiveKey(chat.id);
    const chatToSet = {
      id: chat.id,
      messages: [],
    };
    setChatEmUso(chatToSet);
  };

  //cria novo chat
  const onCreateChat = async () => {
    const newChat = await createChat(inputValue, Authorization);
    setInputValue("");
    setNewChat(true);
    setActiveChat(newChat);
    setModalNewChatOpen(false);
  };

  //cancela a criação do chat
  const handleOverlayClick = (e) => {
    if (e.target.classList.contains(styles.modalContainer)) {
      setModalNewChatOpen(false);
    }
  };

  const handleOverlayLogoutClick = (e) => {
    setModalLogout(false);
  };

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleOpenModalLogout = () => {
    setModalLogout(true);
  };

  const onLogout = () => {
    navigate("/login");
    localStorage.removeItem("authorization");
    localStorage.removeItem("userLogged");
  };

  const { userIcon, logoutIcon, arrow } = images;

  return (
    <div className={styles.conteiner}>
      <button className={styles.buttonNewChat} onClick={openModal}>
        Novo Chat
      </button>
      {modalNewChatOpen && (
        <div className={styles.modalContainer} onClick={handleOverlayClick}>
          <div className={styles.modalContent}>
            <p className={styles.newChatTitle}>
              Informe um título para o novo chat:
            </p>
            <div className={styles.inputContainer}>
              <input
                type="text"
                placeholder="Escreva seu título..."
                className={styles.input}
                value={inputValue}
                onChange={handleChange}
              />
              <button className={styles.button} onClick={onCreateChat}>
                <img
                  src={arrow}
                  alt="icone"
                  width={15}
                  height={15}
                  className={styles.arrowIcon}
                />
              </button>
            </div>
          </div>
        </div>
      )}
      {modalLogout && (
        <div
          className={styles.modalContainer}
          onClick={handleOverlayLogoutClick}
        >
          <div className={styles.modalContent}>
            <p className={styles.newChatTitle}>
              Tem certeza que deseja deslogar?
            </p>
            <div className={styles.buttonsLogoutContainer}>
              <button className={styles.logoutButtom} onClick={onLogout}>
                Sim
              </button>
              <button
                className={styles.logoutNoButtom}
                onClick={handleOverlayLogoutClick}
              >
                Não
              </button>
            </div>
          </div>
        </div>
      )}
      <div className={styles.chatContainer}>
        <Messages />
      </div>
      <div className={styles.footerContainer}>
        <div className={styles.divisoria}></div>
        <div className={styles.footer}>
          {userInfo && (
            <>
              <img
                src={userIcon}
                alt="icone"
                width={60}
                height={60}
                className={styles.image}
              />
              <span className={styles.username}>{userInfo.name}</span>
              <img
                src={logoutIcon}
                alt="icone"
                width={30}
                height={30}
                onClick={handleOpenModalLogout}
              />
            </>
          )}
        </div>
      </div>
    </div>
  );
};

const Messages = () => {
  const { chatIcon } = images;

  const Authorization = localStorage.getItem("authorization");

  const getMessages = async (chatId) => {
    const data = await getChatMessages(chatId, Authorization);
    return data;
  };

  const onChatClick = async (chat) => {
    setActiveKey(chat.id);
    const messages = await getMessages(chat.id);
    const chatToSet = {
      id: chat.id,
      messages: messages,
    };
    setChatEmUso(chatToSet);
  };

  const [chatEmUso, setChatEmUso, activeKey, setActiveKey] =
    useContext(MeuContexto);

  const [chats, setChats, newChat, setNewChat] = useContext(ChatsContext);

  return (
    <>
      {chats.map((group, index) => {
        return (
          <div key={`${group.groupTitle}${index}`}>
            <h1>{group.groupTitle}</h1>
            {group.chats.map((chat, index) => (
              <div
                className={`${styles.chat} ${
                  chat.id === activeKey ? styles.chatSelected : ""
                }`}
                key={`${group.title}${index}`}
                onClick={() => onChatClick(chat)}
              >
                <img src={chatIcon} alt="icone" width={20} height={20} />
                <p className={styles.chatTitle}>{chat.title}</p>
              </div>
            ))}
          </div>
        );
      })}
    </>
  );
};

export default Sidebar;
