import { FondoHistoria } from "./styledComponets";



const Fondo = ({ children, array, indiceActual }) => {
  return (
    <>
        <FondoHistoria fondo={array[indiceActual].img}>
          {children}
        </FondoHistoria>
      
    </>
  );
};

export default Fondo