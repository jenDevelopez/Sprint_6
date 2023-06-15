import styled from 'styled-components'

export const StyledP = styled.p`
  width: 90%;
  padding: 1rem;
  border: 3px solid #000;
  border-radius: 20px;
  background-color: ${(props) => (props.coloreado ? "pink" : "white").toString()};
`;

export const FondoHistoria = styled.div`
/* width: 100%; */
  height: 60vh;
  background-image: url(${(props) => props.fondo });
  background-repeat: no-repeat;
  background-size: cover;
  padding: 1rem .5rem;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
`;