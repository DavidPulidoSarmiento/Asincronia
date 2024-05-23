// Objeto original que será proxied
const persona = {
  nombre: 'Juan',
  edad: 30
};

// Handler con trampas (traps) para interceptar operaciones sobre el objeto
const handler = {
  // Trampa para interceptar lecturas de propiedades
  get: function (target, prop) {
    if (prop in target) {
      console.log(`Accediendo a la propiedad "${prop}": ${target[prop]}`);
      return target[prop];
    } else {
      console.log(`La propiedad "${prop}" no existe.`);
      return undefined;
    }
  },
  // Trampa para interceptar escrituras de propiedades
  set: function (target, prop, value) {
    console.log(`Estableciendo la propiedad "${prop}" a ${value}`);
    target[prop] = value;
    return true;
  },
  // Trampa para interceptar la eliminación de propiedades
  deleteProperty: function (target, prop) {
    if (prop in target) {
      console.log(`Eliminando la propiedad "${prop}"`);
      delete target[prop];
      return true;
    } else {
      console.log(`No se puede eliminar la propiedad "${prop}" porque no existe.`);
      return false;
    }
  }
};

// Creación del proxy
const personaProxy = new Proxy(persona, handler);

// Uso del proxy

// Acceso a propiedades
console.log(personaProxy.nombre); // Accediendo a la propiedad "nombre": Juan
console.log(personaProxy.edad); // Accediendo a la propiedad "edad": 30
console.log(personaProxy.ciudad); // La propiedad "ciudad" no existe.

// Escritura de propiedades
personaProxy.nombre = 'Carlos'; // Estableciendo la propiedad "nombre" a Carlos
personaProxy.ciudad = 'Giron'; // Estableciendo la propiedad "ciudad" a Madrid

// Eliminación de propiedades
delete personaProxy.edad; // Eliminando la propiedad "edad"
delete personaProxy.pais; // No se puede eliminar la propiedad "pais" porque no existe.
