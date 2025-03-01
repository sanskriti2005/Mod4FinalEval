import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Register from "./pages/Register";
import MyBooks from "./pages/MyBooks";
import Login from "./pages/Login";

function App() {
  const [count, setCount] = useState(0);
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/mybooks" element={<MyBooks/>}/>
      </Routes>
    </>
  );
}

export default App;
