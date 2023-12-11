import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import App from "./App";

import { MeuContextoProvider } from "./context/context";
import { ChatsContextProvider } from "./context/chatsContext";
import Vlibras from "./components/VLibras";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Vlibras />
    <ChatsContextProvider>
      <MeuContextoProvider>
        <App />
      </MeuContextoProvider>
    </ChatsContextProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
