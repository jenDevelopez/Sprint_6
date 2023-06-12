import { Frases } from "../data"
import styled from 'styled-components'
export function Escena() {
  const StyledP = styled.p`
    padding: 1rem;
    border: 3px solid #000;
    border-radius: 20px;
  `
  let parrafo =Frases.map((frase) => (
    <StyledP key={frase}>
      {frase}
    </StyledP>
  ))
  

  return(
    <>
      {parrafo}
    </>
  )
}
