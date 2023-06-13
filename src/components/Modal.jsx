import styled from 'styled-components'

const ModalBienvenida = styled.div`
  width: 500px;
  height:300px;
  background-color: #fff;
  border-radius:20px;
  box-shadow: 5px 5px 20px #888;
  padding:1em;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
`
const TituloModal = styled.h1`
  font-size: 1.1em;
  color: #BA55D3;
  font-family: Roboto, sans-serif;
`

const Contenido = styled.p`
  font-family: Roboto, sans-serif;
`
const BotonModal = styled.button`
  margin-top: 2rem;
  width: 25%;
  padding:.75em .25em;
  border-radius: 5px;
  border:none;
  color: #fff;
  background-color: #BA55D3;
  font-size: 1rem;
  font-weight: bold;
  font-family: Roboto, sans-serif;
  cursor:pointer;
  

  &:hover{
    opacity: .7;
  }
`
const Fondo = styled.div`
  display: flex;
  justify-content: center;
  align-items: start; 
  margin:0;
  padding: 0;
  width: 100%;
  height: 100vh;
  background-color: #fff;
`
export default function AbrirModal({titulo,contenido,contenidoBoton,funcionBoton}) {
  return(
    <>
    <Fondo>
      <ModalBienvenida>
        <TituloModal>{titulo}</TituloModal>
        <Contenido>{contenido}</Contenido>
        <BotonModal onClick={funcionBoton}>{contenidoBoton}</BotonModal>
      </ModalBienvenida>
    </Fondo>
    </>
  )
}

