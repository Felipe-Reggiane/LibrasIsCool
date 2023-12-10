import VLibras from "@djpfs/react-vlibras";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { registerUser } from "../../services/UserService";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import VisibilityOffOutlinedIcon from "@mui/icons-material/VisibilityOffOutlined";
import styles from "./createAccount.module.css";

const CreateAccount = () => {
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();
  const [confirmPassword, setConfirmPassword] = useState();

  const [hidePassword, setHidePassword] = useState("password");
  const [hideConfirmPassword, setHideConfirmPassword] = useState("password");

  const navigate = useNavigate();

  const changeTypePassword = () => {
    if (hidePassword === "password") {
      setHidePassword("text");
    } else {
      setHidePassword("password");
    }
  };

  const changeTypeConfirmPassword = () => {
    if (hideConfirmPassword === "password") {
      setHideConfirmPassword("text");
    } else {
      setHideConfirmPassword("password");
    }
  };

  const handleCreateAccount = async () => {
    if (password !== confirmPassword) {
      const resposta = window.confirm(
        "A senha deve ser a mesma nos dois campos"
      );

      if (resposta) {
        setConfirmPassword("");
      }
      return;
    } else {
      try {
        const data = await registerUser(username, password);
        if (data) {
          window.alert("Conta criada com sucesso");
          setTimeout(function () {
            navigate("/");
          }, 0);
        } else {
          throw new Error("Username ja em uso, por favor escolha outro.");
        }
      } catch (error) {
        const resposta = window.confirm(
          "Username ja em uso, por favor escolha outro."
        );

        if (resposta) {
          setUsername("");
        }
      }
    }
  };

  return (
    <div className={styles.overlay}>
      <VLibras forceOnload={true} />
      <div className={styles.container}>
        <h1 className={styles.title}>Crie sua conta</h1>
        <div className={styles.forms}>
          <p className={styles.formTitle}>Username</p>
          <input
            type="text"
            className={styles.formInput}
            value={username}
            onChange={(e) => setUsername(e.target.value)}
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
          <p className={styles.formTitle}>Confirmar Senha</p>
          <div className={styles.inputContainer}>
            <input
              type={hideConfirmPassword}
              className={styles.passwordInput}
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
            {hideConfirmPassword === "password" ? (
              <VisibilityOutlinedIcon
                className={styles.eyeVisibility}
                onClick={changeTypeConfirmPassword}
              />
            ) : (
              <VisibilityOffOutlinedIcon
                className={styles.eyeVisibility}
                onClick={changeTypeConfirmPassword}
              />
            )}
          </div>
          <p className={styles.warning}>
            A senha e a confirmação devem estar idênticas.
          </p>
        </div>
        <button className={styles.button} onClick={handleCreateAccount}>
          Criar Conta
        </button>
      </div>
    </div>
  );
};

export default CreateAccount;
