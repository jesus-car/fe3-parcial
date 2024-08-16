import formStyle from '../styles/form.module.css'
import { useState } from 'react'
import Registro from './Registro'
import Mensaje from './Mensaje'

const Form = () => {
  const [customer, setCustomer] = useState({ name: '', email: '', clrFavorito: '' });
  const [errores, setErrores] = useState({ name: '', email: '' });
  const [flag, setFlag] = useState(false);

  const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;

  const validarName = (name) => {
    // Implementar la validación del nombre
    return name.length > 4;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newErrores = { ...errores };

    emailRegex.test(customer.email) ? newErrores.email = '' : newErrores.email = 'Email incorrecto';
    !validarName(customer.name) ? newErrores.name = 'Nombre incorrecto' : newErrores.name = '';

    setErrores(newErrores);

    if (newErrores.email === '' && newErrores.name === '') {
      setFlag(true);
    } else {
      setFlag(false);
    }
  };

  const handleName = (e) => {
    setCustomer({ ...customer, name: e.target.value });
  };

  const handleEmail = (e) => {
    setCustomer({ ...customer, email: e.target.value });
  };

  const handleClrFavorito = (e) => {
    setCustomer({ ...customer, clrFavorito: e.target.value });
  };

  return (
    <div className={formStyle.form}>
      <h1>Formulario DH</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input type="text" value={customer.name} onChange={handleName} placeholder='Ingrese su nombre' />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input type="text" value={customer.email} onChange={handleEmail} placeholder='Ingrese su email' />
        </div>
        <div>
          <label>Color Favorito:</label>
          <input type="text" value={customer.clrFavorito} onChange={handleClrFavorito} placeholder='Ingrese su color favorito' />
        </div>
        <button type="submit">Submit</button>
      </form>
      {flag ? <Registro usuario={customer} /> : <Mensaje error={errores} />}
    </div>
  );
};

export default Form;