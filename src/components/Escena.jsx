import styled from 'styled-components'


  const StyledP = styled.p`
    padding: 1rem;
    border: 3px solid #000;
    border-radius: 20px;
    background-color: ${(props) => (props.coloreado ? "pink" : "white")};
  `


const Escena = ({ frases, indiceActual }) => {
  return(
    <div>
      {frases.map((frase,index) => (
        <StyledP key={index} coloreado={index === indiceActual}>
          {frase}
        </StyledP>
      ))}
    </div>
  )
}

export default Escena
