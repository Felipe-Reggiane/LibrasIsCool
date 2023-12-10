import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./screens/homeScreen";
import ButtonsScreen from "./screens/buttonsScreen";
import Login from "./screens/loginScreen";
import CreateAccount from "./screens/createAccount";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<CreateAccount />} />
        <Route path="/home" element={<Home />} />
        <Route path="/buttons" element={<ButtonsScreen />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
