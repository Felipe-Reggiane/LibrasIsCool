import VLibras from "@djpfs/react-vlibras";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "./screens/homeScreen";
import ButtonsScreen from "./screens/buttonsScreen";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/buttons" element={<ButtonsScreen />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
