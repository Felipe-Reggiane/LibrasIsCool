import React from "react";
import styles from "./tutorial.module.css";
import images from "../../assets";
import { ParsedText } from "react-substring-styler";

const TutorialModal = ({ isOpen, onClose }) => {
  const defaultProps = {
    patterns: [
      {
        pattern: /\|(.*?)\|/,
        renderText: (matchingString: string) =>
          matchingString.replace(/\|/g, "").replace(/}/g, ""),
        style: { color: "#DBE9FF", fontWeight: "bolder", fontSize: 20 },
      },
    ],
  };

  const handleClose = () => {
    if (onClose) {
      onClose();
    }
  };

  return (
    <>
      {isOpen && (
        <div className={styles.modalOverlay} onClick={handleClose}>
          <div
            className={styles.modalContainer}
            onClick={(e) => e.stopPropagation()}
          >
            <div className={styles.modalHeader}>
              <div className={styles.spaceHeader}></div>
              <h1 className={styles.modalTitle}>Tutorial de uso</h1>
              <img
                src={images.closeModalIcon}
                alt="Fechar"
                onClick={handleClose}
                className={styles.modalClose}
              />
            </div>
            <div className={styles.modalBody}>
              <p className={styles.modalBodyTitle}>
                Existem 2 opções de chat, que podem ser alternadas pelo par de
                botões no topo da conversa:
              </p>
              <div className={styles.modalBodyInnerContainer}>
                <ParsedText {...defaultProps} className={styles.modalBodytext}>
                  1. |Digitar Texto| - você pode digitar qualquer frase que
                  quiser e enviar como uma mensagem. Com a interface de tradução
                  aberta, selecione uma palavra ou frase de suas mensagens e ela
                  será traduzida para LIBRAS.
                </ParsedText>
              </div>
              <div className={styles.modalBodyInnerContainer}>
                <ParsedText {...defaultProps} className={styles.modalBodytext}>
                  2. |Ler botões| - quando encontrar um botão que represente uma
                  palavra que tenha interesse em traduzir, clique nele com a
                  interface de tradução aberta.
                </ParsedText>
              </div>
              <p className={styles.modalBodyFooter}>
                Para abrir a interface de tradução, clique no ícone na direita
                da tela, abaixo do botão de Tutorial.
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default TutorialModal;
