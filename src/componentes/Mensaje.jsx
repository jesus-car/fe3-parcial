import React from 'react'

const Mensaje = ( {error} ) => {
  return (
    <div>
      {error.name === '' ? '' : <p>{error.name}</p>}
      {error.email === '' ? '' : <p>{error.email}</p>}
    </div>
  )
}

export default Mensaje
