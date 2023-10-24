import React, { createContext, useState } from "react";

const ChatsContext = createContext();

const ChatsContextProvider = ({ children }) => {
  const [chats, setChats] = useState([]);

  const [newChat, setNewChat] = useState(false);

  const value = [chats, setChats, newChat, setNewChat];

  return (
    <ChatsContext.Provider value={value}>{children}</ChatsContext.Provider>
  );
};

export { ChatsContext, ChatsContextProvider };
