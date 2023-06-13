import "./App.css";
import { useState } from "react";
import Escena from "./components/Escena";
import Boton from "./components/Boton";
import { Frases } from "./data";
import Modal from "./components/Modal";
function App() {
  // Logica aplicada a la funcionalidad de los botones 
  const [indiceActual, setIndiceActual] = useState(0);

  const clicAnterior = () => {
    setIndiceActual(indiceActual - 1)
  };
  const clicSiguiente = () => {
    setIndiceActual(indiceActual + 1) 
  }
  //Logica aplicada al modal de bienvenida

  const [verModal, setVerModal ] = useState(true)

  const clicAceptar = () => {
    setVerModal(false)
  }

  // Datos para el modal
  const titulo = 'Bienvenido o bienvenida'
  const contenidoModal = 'Para disfrutar de tu historia haz clic'
  

  return (
    <>
      {verModal && (
        <Modal titulo={titulo} contenido={contenidoModal} contenidoBoton="Aceptar" funcionBoton={clicAceptar} />
      )}
      <Boton contenido="Anterior" onClick={clicAnterior} />
      <Boton contenido="Siguiente" onClick={clicSiguiente} />
      <Escena frases={Frases} indiceActual={indiceActual} />
    </>
  );
}

export default App;
