import './App.css'
import CardUsuario from './components/CardUsuario'
import Header from './components/Header'
import { useState } from 'react'

function App() {
  
  // const nomeDoCurso = "React +PraTi"
  const [concluidas, serConcluidas] = useState(0);


  return(
    <>
     <Header />

     <CardUsuario nome="Marcelo" curso="REACT" />
     <CardUsuario nome="Junior Jr." curso="JAVA" />
     <CardUsuario nome="João" curso="PYTHON" />
    
    <p>Tarefas concluidas: {concluidas}</p>
    <button onClick={ () => serConcluidas(concluidas + 1)}>
      Concluir Tarefa
    </button>    
    
    </>
  )

}

export default App
