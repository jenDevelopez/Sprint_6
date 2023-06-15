import { StyledP } from "./styledComponets";



const Escena = ({ array,indiceActual }) => {
  const contenido = array.map((obj,index) => (
    <StyledP key={obj} coloreado={index === indiceActual}>
      {obj.txt}
    </StyledP>
  ))
  

  return (
    <>
      {contenido}
    </>
  );
};

export default Escena;
