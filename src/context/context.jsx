import React, { createContext, useState } from "react";

const MeuContexto = createContext();

const MeuContextoProvider = ({ children }) => {
  const [chatEmUso, setChatEmUso] = useState({
    id: 0,
    messages: [
      {
        id: 0,
        content: "",
        order: 0,
        chat_id: 0,
      },
    ],
  });

  const [currentScreen, setCurrentScreen] = useState("home");

  const [currentButtons, setCurrentButtons] = useState("");

  const [activeKey, setActiveKey] = useState();

  const value = [
    chatEmUso,
    setChatEmUso,
    activeKey,
    setActiveKey,
    currentScreen,
    setCurrentScreen,
  ];

  return <MeuContexto.Provider value={value}>{children}</MeuContexto.Provider>;
};

export { MeuContexto, MeuContextoProvider };
