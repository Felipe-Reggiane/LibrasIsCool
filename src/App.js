import { BrowserRouter, Route, Routes } from "react-router-dom";
import VLibras from "@moreiraste/react-vlibras";
import Home from "./screens/homeScreen";
import ButtonsScreen from "./screens/buttonsScreen";

function App() {
  return (
    <>
      <VLibras forceOnload={true} />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/buttons" element={<ButtonsScreen />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
