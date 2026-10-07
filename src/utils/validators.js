const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
const POSTAL_CODE_PATTERN = /^[A-Za-z0-9][A-Za-z0-9 -]{2,9}$/;

export const validateCheckout = ({ name, email, address, city, postalCode }) => {
  const errors = {};
  if (name.trim().length < 3) errors.name = 'Ingresa tu nombre completo.';
  if (!EMAIL_PATTERN.test(email.trim())) errors.email = 'Ingresa un email válido, por ejemplo nombre@correo.com.';
  if (address.trim().length < 5) errors.address = 'Ingresa tu dirección de entrega.';
  if (city.trim().length < 2) errors.city = 'Ingresa tu ciudad.';
  if (!POSTAL_CODE_PATTERN.test(postalCode.trim())) errors.postalCode = 'Ingresa un código postal válido.';
  return errors;
};

export const validateContact = ({ name, email, message }) => {
  const errors = {};
  if (name.trim().length < 3) errors.name = 'Ingresa tu nombre.';
  if (!EMAIL_PATTERN.test(email.trim())) errors.email = 'Ingresa un email válido, por ejemplo nombre@correo.com.';
  if (message.trim().length < 10) errors.message = 'Cuéntanos un poco más (mínimo 10 caracteres).';
  return errors;
};
