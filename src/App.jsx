import "./App.css";
import { useState } from "react";
import Escena from "./components/Escena";
import Boton from "./components/Boton";
import { Frases } from "./data";

function App() {

  const [indiceActual, setIndiceActual] = useState(0);

  const clicAnterior = () => {
    setIndiceActual(indiceActual - 1)
  };
  const clicSiguiente = () => {
    setIndiceActual(indiceActual + 1) 
  }
  return (
    <>
      <Boton contenido="Anterior" onClick={clicAnterior} />
      <Boton contenido="Siguiente" onClick={clicSiguiente} />
      <Escena frases={Frases} indiceActual={indiceActual} />
      <p>{indiceActual}</p>
    </>
  );
}

export default App;
