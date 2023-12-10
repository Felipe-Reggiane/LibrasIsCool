import VLibras from "@djpfs/react-vlibras";
import React, { useEffect } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ParsedText } from "react-substring-styler";
import { loginUser } from "../../services/UserService";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import VisibilityOffOutlinedIcon from "@mui/icons-material/VisibilityOffOutlined";
import styles from "./loginScreen.module.css";

const Login = () => {
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();
  const [hasError, setHasError] = useState(false);
  const [hidePassword, setHidePassword] = useState("password");

  const navigate = useNavigate();

  const changeTypePassword = () => {
    if (hidePassword === "password") {
      setHidePassword("text");
    } else {
      setHidePassword("password");
    }
  };

  const createAccount = () => {
    navigate("/register");
  };

  const paternDefaultProps = {
    patterns: [
      {
        pattern: /\|(.*?)\|/,
        renderText: (matchingString) =>
          matchingString.replace(/\|/g, "").replace(/}/g, ""),
        style: { color: "#107EBC", fontSize: "20px", cursor: "pointer" },
        onClick: () => navigate("/register"),
      },
    ],
  };

  const paternButtonsProps = {
    patterns: [
      {
        pattern: /\|(.*?)\|/,
        renderText: (matchingString) =>
          matchingString.replace(/\|/g, "").replace(/}/g, ""),
        style: { color: "#107EBC", fontSize: "20px", cursor: "pointer" },
        onClick: () => navigate("/buttons"),
      },
    ],
  };

  const handleLogin = async () => {
    try {
      const data = await loginUser(username, password);
      const logged = true;
      if (data) {
        localStorage.setItem("authorization", data);
        localStorage.setItem("userLogged", logged);
        navigate("/home");
      } else {
        throw new Error("Username ou Senha inválida");
      }
    } catch (error) {
      setHasError(true);
    }
  };

  return (
    <div className={styles.overlay}>
      <VLibras forceOnload={true} />
      <div className={styles.container}>
        <h1 className={styles.title}>Seja bem vindo</h1>
        <div className={styles.forms}>
          <p className={styles.formTitle}>Username</p>
          <input
            type="text"
            className={styles.formInput}
            value={username}
            onChange={(e) => (setUsername(e.target.value), setHasError(false))}
          />
          <p className={styles.formTitle}>Senha</p>
          <div className={styles.inputContainer}>
            <input
              type={hidePassword}
              className={styles.passwordInput}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            {hidePassword === "password" ? (
              <VisibilityOutlinedIcon
                className={styles.eyeVisibility}
                onClick={changeTypePassword}
              />
            ) : (
              <VisibilityOffOutlinedIcon
                className={styles.eyeVisibility}
                onClick={changeTypePassword}
              />
            )}
          </div>
          {hasError && (
            <p className={styles.error}>Username ou Senha inválida</p>
          )}
        </div>
        <button className={styles.button} onClick={handleLogin}>
          Login
        </button>
        <div>
          <ParsedText {...paternDefaultProps} className={styles.footer}>
            Não tem conta? |Cadastre-se aqui|
          </ParsedText>
        </div>
        <div className={styles.footerButtons}>
          <ParsedText {...paternButtonsProps} className={styles.footer}>
            Quer usar apenas a tela de botões? |Tela de botões|
          </ParsedText>
        </div>
      </div>
    </div>
  );
};

export default Login;
