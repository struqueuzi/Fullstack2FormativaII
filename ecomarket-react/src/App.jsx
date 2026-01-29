import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBarPrincipal from "./components/navbar";
import FooterPrincipal from "./components/footer";
import Home from "./pages/home";
import Contacts from "./pages/contacts";
import Products from "./pages/products";

function App() {
  return (
    <Router>

      <NavBarPrincipal />

      
      <Routes>
        
        <Route path="/" element={<Home />} />
        <Route path="/" element={<Contacts />} />
        <Route path="/" element={<Products />} />

      </Routes>

      
      <FooterPrincipal />
    </Router>
  );
}

export default App;