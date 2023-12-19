export const validationForm = (campo, valor) => {
  const errores = {};

  switch (campo) {
    case "username":
      if (!valor) {
        errores[campo] = "El campo de usuario no puede estar vacío.";
      } else if (valor.length < 3) {
        errores[campo] = "El usuario debe tener al menos 3 caracteres.";
      } else {
        errores[campo] = undefined;
      }
      break;
    case "email":
      if (!/\S+@\S+\.\S+/.test(valor)) {
        errores[campo] = "El email no es válido.";
      } else {
        errores[campo] = undefined;
      }
      break;
    case "password":
      if (!valor) {
        errores[campo] = "El campo de contraseña no puede estar vacío.";
      } else if (valor.length < 8) {
        errores[campo] = "La contraseña debe tener al menos 8 caracteres.";
      } else {
        errores[campo] = undefined;
      }
      break;
    default:
  }

  return errores;
};
