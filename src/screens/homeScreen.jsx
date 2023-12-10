import Layout from "../components/layout/layout";
import images from "../assets";

import styles from "./homeScreen.module.css";

import { MeuContexto } from "../context/context";
import { useContext, useState } from "react";
import { getAllChatsTitles, postChatMessage } from "../services/ChatsService";
import { useEffect } from "react";
import { AgruparChatsPorData } from "../utils/messageGroups";
import { ChatsContext } from "../context/chatsContext";
import { useNavigate } from "react-router-dom";

function Home() {
  const { arrow } = images;

  const [inputValue, setInputValue] = useState("");

  const [chatEmUso, setChatEmUso] = useContext(MeuContexto);

  const [chats, setChats, newChat, setNewChat] = useContext(ChatsContext);

  const navigate = useNavigate();

  const Authorization = localStorage.getItem("authorization");
  const userLogged = localStorage.getItem("userLogged");

  const getChats = async () => {
    const data = await getAllChatsTitles(Authorization);
    if (data) {
      const dataFiltered = AgruparChatsPorData(data);
      setChats(dataFiltered);
      setNewChat(false);
      return;
    }
  };

  const initialRoutine = () => {
    if (userLogged && Authorization) {
      getChats();
      return;
    } else {
      navigate("/");
    }
  };

  useEffect(() => {
    initialRoutine();
  }, [newChat, Authorization, userLogged]);

  const onSendMessage = async () => {
    try {
      chatEmUso
        ? await postChatMessage(1, chatEmUso.id, inputValue, Authorization)
        : console.log("sem chat");
      const chatToSet = {
        id: chatEmUso.id,
        messages: [
          ...chatEmUso.messages,
          {
            id: chatEmUso.messages.length,
            content: inputValue,
            order: chatEmUso.messages.length,
            chat_id: chatEmUso.id,
          },
        ],
      };
      setChatEmUso(chatToSet);
      setInputValue("");
      return;
    } catch (error) {
      console.log(error);
      return;
    }
  };

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  return (
    <Layout>
      <div className={styles.container}>
        <div className={styles.chatContainer}>
          <div className={styles.chatContainerInner}>
            {chatEmUso &&
              chatEmUso.messages.length > 0 &&
              chatEmUso.messages.map((message) => (
                <>
                  <p className={styles.message} key={message.id}>
                    {message.content}
                  </p>
                </>
              ))}
          </div>
        </div>
        <div className={styles.inputContainer}>
          <input
            type="text"
            placeholder="Escreva sua mensagem..."
            className={styles.input}
            value={inputValue}
            onChange={handleChange}
          />
          <button className={styles.button} onClick={onSendMessage}>
            <img
              src={arrow}
              alt="icone"
              width={25}
              height={25}
              className={styles.arrowIcon}
            />
          </button>
        </div>
      </div>
    </Layout>
  );
}

export default Home;
