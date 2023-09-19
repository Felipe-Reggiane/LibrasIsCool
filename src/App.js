import "./App.css";
import VLibras from "@djpfs/react-vlibras";

import images from "./assets";

function App() {
  const { gatinho } = images;

  return (
    <div>
      <VLibras forceOnload={true} />
      <h1>Meu exemplo de uso do vlibras</h1>
      <button>{"Enviar"}</button>

      <p>
        Este é um exemplo simples de como você pode criar uma página HTML com
        uma lista de 50 palavras aleatórias. Lembre-se de que a formatação e o
        estilo podem ser ajustados de acordo com suas preferências.
      </p>
      <div>
        <img
          src={gatinho}
          alt="gato"
          width={200}
          height={200}
          style={{ borderRadius: "50%", border: "1px solid black" }}
        />
      </div>

      <p>Montanha</p>
      <p>Livro</p>
      <p>Sol</p>
      <p>Praia</p>
      <p>Caneta</p>
      <p>Chocolate</p>
      <p>Avião</p>
      <p>Cachorro</p>
      <p>Maçã</p>
      <p>Guitarra</p>
      <p>Árvore</p>
      <p>Felicidade</p>
      <p>Felino</p>
      <p>Flor</p>
      <p>Futebol</p>
      <p>Felicidade</p>
      <p>Lápis</p>
      <p>Lua</p>
      <p>Amizade</p>
      <p>Pizza</p>
      <p>Chuva</p>
      <p>Smartphone</p>
      <p>Sorriso</p>
      <p>Estrela</p>
      <p>Relógio</p>
      <p>Mar</p>
      <p>Café</p>
      <p>Viagem</p>
      <p>Música</p>
      <p>Oceano</p>
      <p>Coelho</p>
      <p>Internet</p>
      <p>Tigre</p>
      <p>Televisão</p>
      <p>Piano</p>
      <p>Neve</p>
      <p>Cavalo</p>
      <p>Espaço</p>
      <p>Riso</p>
      <p>Cores</p>
      <p>Gato</p>
      <p>Bicicleta</p>
      <p>Arco-íris</p>
      <p>Criança</p>
      <p>Planeta</p>
      <p>Aventura</p>
      <p>Sapato</p>
      <p>Doce</p>
    </div>
  );
}

export default App;
