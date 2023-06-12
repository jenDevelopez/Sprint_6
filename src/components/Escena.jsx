import { Frases } from "../data"

export function Escena() {

  let parrafo =Frases.map((frase) => (
    <p>
      {frase}
    </p>
  ))

  return(
    <>
      <p>
        {parrafo}
      </p>
    </>
  )
}
