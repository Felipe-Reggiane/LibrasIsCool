import mock from "../mock";
import styles from "./sidebar.module.css";
import images from "../../assets";

const Sidebar = () => {
  console.log(mock);
  const { userIcon, logoutIcon } = images;

  return (
    <div className={styles.conteiner}>
      <div className={styles.chatContainer}>
        <Messages />
      </div>
      <div className={styles.divisoria}></div>
      <div className={styles.footer}>
        <img src={userIcon} alt="icone" width={60} height={60} />
        <spam className={styles.username}>Username</spam>
        <img src={logoutIcon} alt="icone" width={30} height={30} />
      </div>
    </div>
  );
};

const Messages = () => {
  const { chatIcon } = images;
  return (
    <>
      {mock.map((date, index) => {
        return (
          <div key={index}>
            <h1>{date.title}</h1>
            {date.data.map((messagesPerDay) =>
              messagesPerDay.messages.map((message) => (
                <div className={styles.chat} key={message.id}>
                  <img src={chatIcon} alt="icone" width={20} height={20} />
                  <p>{message.title}</p>
                </div>
              ))
            )}
          </div>
        );
      })}
    </>
  );
};

export default Sidebar;
