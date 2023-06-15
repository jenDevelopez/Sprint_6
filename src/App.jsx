import "./App.css";
import { useState } from "react";
import Escena from "./components/Escena";
import Boton from "./components/Boton";
import { Frases } from "./data";
import Modal from "./components/Modal";
import Fondo from "./components/Fondo";

function App() {
  // Logica aplicada a la funcionalidad de los botones
  const [indiceActual, setIndiceActual] = useState(0);

  const clicAnterior = () => {
    indiceActual > 0 ? setIndiceActual(indiceActual - 1) : null;
  };
  const clicSiguiente = () => {
    indiceActual < Frases.length - 1 ? setIndiceActual(indiceActual + 1) : null;
  };
  //Logica aplicada al modal de bienvenida

  const [verModal, setVerModal] = useState(true);

  const clicAceptar = () => {
    setVerModal(false);
  };

  // Datos para el modal
  const titulo = "Bienvenido o bienvenida";
  const contenidoModal = "Para disfrutar de tu historia haz clic";

  return (
    <>
      {verModal && (
        <Modal
          titulo={titulo}
          contenido={contenidoModal}
          contenidoBoton="Aceptar"
          funcionBoton={clicAceptar}
        />
      )}
      <Boton contenido="Anterior" onClick={clicAnterior} />
      <Boton contenido="Siguiente" onClick={clicSiguiente} /> 
      <Fondo array={Frases} indiceActual={indiceActual}>
        <Escena array={Frases} indiceActual={indiceActual} />
      </Fondo>
      {/* <p>{Frases.length}</p> */}
    </>
  );
}

export default App;
