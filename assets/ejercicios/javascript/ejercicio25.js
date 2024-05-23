// Objeto original que será proxied
const datos = {
  numero: 0,
  alfanumerico: '',
  email: '',
  fecha: ''
};

// Definición de las reglas de validación
const reglas = {
  numero: 'num',
  alfanumerico: 'alpha',
  email: 'email',
  fecha: 'date'
};

// Handler con trampas para validar las propiedades
const handler = {
  // Trampa para interceptar escrituras de propiedades
  set: function (target, prop, value) {
    // Eliminar espacios en blanco al inicio y al final
    value = value.trim();

    // Verificar que la propiedad exista en el objeto reglas
    if (prop in reglas) {
      // Validar según la regla asociada a la propiedad
      switch (reglas[prop]) {
        case 'num':
          if (!/^\d+$/.test(value)) {
            console.error(`Error: La propiedad "${prop}" solo puede contener números.`);
            return false;
          }
          break;
        case 'alpha':
          if (!/^[a-zA-Z]+$/.test(value)) {
            console.error(`Error: La propiedad "${prop}" solo puede contener letras.`);
            return false;
          }
          break;
        case 'email':
          if (!/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/.test(value)) {
            console.error(`Error: La propiedad "${prop}" debe ser un correo válido.`);
            return false;
          }
          break;
        case 'date':
          if (!/^\d{4}-\d{2}-\d{2}$/.test(value)) {
            console.error(`Error: La propiedad "${prop}" debe ser una fecha válida (YYYY-MM-DD).`);
            return false;
          }
          break;
        default:
          console.error(`Error: Tipo de validación desconocido para la propiedad "${prop}".`);
          return false;
      }
      // Asignar el valor validado a la propiedad del objeto
      target[prop] = value;
      return true;
    } else {
      // Si la propiedad no está definida en las reglas, no se permite su asignación
      console.error(`Error: La propiedad "${prop}" no está definida en las reglas de validación.`);
      return false;
    }
  }
};

// Creación del proxy
const datosProxy = new Proxy(datos, handler);

// Uso del proxy

// Ejemplos correctos
datosProxy.numero = '123'; // Correcto
datosProxy.alfanumerico = 'Hola'; // Correcto
datosProxy.email = 'example@example.com'; // Correcto
datosProxy.fecha = '2024-05-23'; // Correcto

// Ejemplos incorrectos
datosProxy.numero = '123'; // Error: La propiedad "numero" solo puede contener números.
datosProxy.alfanumerico = '123'; // Error: La propiedad "alfanumerico" solo puede contener letras.
datosProxy.email = 'not-an-email'; // Error: La propiedad "email" debe ser un correo válido.
datosProxy.fecha = '23-05-2024'; // Error: La propiedad "fecha" debe ser una fecha válida (YYYY-MM-DD).
datosProxy.fecha = ' 2024-05-23 '; // Correcto: Los espacios en blanco al inicio y al final son eliminados

// Verificar valores finales
console.log(datos);
