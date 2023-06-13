import  styled from 'styled-components'

const StyledButton = styled.button`
    width: 50%;
    padding: 1rem;
    `


const Boton = ({contenido, onClick}) => {
  return <StyledButton onClick={onClick}>
    {contenido}
  </StyledButton>
}
export default Boton