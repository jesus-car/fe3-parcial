import React from 'react'

const Registro = ({ usuario }) => {
  return (
    <div>
      <p>Bienvenido {usuario.name}</p>
      <p>Te has registrado con el email: {usuario.email}</p>
    <p>Y tu color favorito es: {usuario.clrFavorito}</p>

    </div>
  )
}

export default Registro
