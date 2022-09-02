import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Register from "./pages/Register";
import Profile from "./pages/Profile";
import Login from "./pages/Login";
import SetProfile from "./pages/SetProfile";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/register" element={<Register />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/setProfile" element={<SetProfile />}></Route>
        <Route path="/" element={<Profile />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
