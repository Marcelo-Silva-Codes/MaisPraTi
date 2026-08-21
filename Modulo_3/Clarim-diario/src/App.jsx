import { useState, useEffect  } from "react";
import {Routes, Route} from 'react-router-dom'
import Header from "./components/Header/Header.jsx";
import Home from './pages/Home/Home.jsx'
import Materia from './pages/Materia/Materia.jsx'
import Footer from "./components/Footer/Footer.jsx";

import './App.css'

function App() {
  const [tema, setTema] = useState(() => {
    const salvo = localStorage.getItem('tema') || 'light'
    if(salvo) return salvo

    const preferenciaEscuro = window.matchMedia('(preferes-color-scheme: dark)').matches

    if(preferenciaEscuro) return 'dark'

    return 'light'
  })



  function alternarTema(){
    setTema(t => (t=== 'light' ? 'dark' : 'light'))
  }

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', tema)
    localStorage.setItem('tema', tema)
  }, [tema])

  return (
    <>
      <Header tema={tema} aoAlternarTema={alternarTema} />
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/materia/:id" element={<Materia />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
