import React, { createContext, useState } from "react";

const MeuContexto = createContext();

const MeuContextoProvider = ({ children }) => {
  const [chatEmUso, setChatEmUso] = useState({
    id: 0,
    title: "",
    date: new Date(),
    messages: [],
  });

  const value = [chatEmUso, setChatEmUso];

  return <MeuContexto.Provider value={value}>{children}</MeuContexto.Provider>;
};

export { MeuContexto, MeuContextoProvider };
