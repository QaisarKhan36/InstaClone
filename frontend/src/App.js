import "./App.css";
import Home from "../src/pages/home/home";
import Profile from "../src/pages/profile/profile";
import Login from "./pages/Login/Login";
import Register from "./pages/register/register";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </div>
  );
}

export default App;
