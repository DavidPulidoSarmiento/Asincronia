// Definir la primera promesa que se resolverá después de 2 segundos
const promise1 = new Promise((resolve) => {
  setTimeout(() => {
    resolve('Primera promesa resuelta');
  }, 2000);
});

// Definir la segunda promesa que se resolverá después de 4 segundos
const promise2 = new Promise((resolve) => {
  setTimeout(() => {
    resolve('Segunda promesa resuelta');
  }, 4000);
});

// Definir la tercera promesa que se resolverá después de 3 segundos
const promise3 = new Promise((resolve) => {
  setTimeout(() => {
    resolve('Tercera promesa resuelta');
  }, 3000);
});

// Utilizar Promise.all() para esperar a que todas las promesas se resuelvan
Promise.all([promise1, promise2, promise3])
  .then(resultados => {
    // Mostrar un mensaje cuando todas las promesas se hayan resuelto
    console.log('Todas las promesas se han resuelto:');
    resultados.forEach(resultado => {
      console.log(resultado);
    });
  })
  .catch(error => {
    // Manejar cualquier error que pueda ocurrir durante el proceso
    console.error('Se produjo un error:', error);
  });
