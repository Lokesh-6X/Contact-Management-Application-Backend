import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css'
import Header from "./Components/Header";;
import Landing from "./pages/Landing/Landing";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";


function App() {

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path ="/" element={<Landing/>}/>
        <Route path ="/login" element={<Login/>}/>
        <Route path ="/register" element={<Register/>}/>
      </Routes>
    </BrowserRouter>
  );
};

export default App
