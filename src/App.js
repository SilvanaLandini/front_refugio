import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom"

import Header from "./components/layout/Header";
import Nav from "./components/layout/Nav";
import Footer from "./components/layout/Footer";

import Adopciones from './pages/Adopciones';
import Ayudar from './pages/Ayudar';
import Contacto from './pages/Contacto';
import Index from './pages/Index';
import Manada from './pages/Manada';
import Manada2 from './pages/Manada2';
import React from "react";
// import background from ".fondo.jpg";


function App() {
  return (
    <div className="App" style={{ backgroundImage: 'url(/fondo.jpg)' }}>
      <Header />
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="adopciones" element={<Adopciones />} />
          <Route path="ayudar" element={<Ayudar />} />
          <Route path="contacto" element={<Contacto />} />
          <Route path="manada" element={<Manada />} />
          <Route path="manada2" element={<Manada2 />} />
        </Routes>
      </BrowserRouter>

      <Footer />
    </div>
  );
}

export default App;
