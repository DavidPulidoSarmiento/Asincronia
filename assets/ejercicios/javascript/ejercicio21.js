// Definir la primera promesa que se resuelve
const promise1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('Primera promesa resuelta');
  }, 2000);
});

// Definir la segunda promesa que se rechaza
const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject('Segunda promesa rechazada');
  }, 4000);
});

// Definir la tercera promesa que se resuelve
const promise3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('Tercera promesa resuelta');
  }, 3000);
});

// Utilizar Promise.allSettled() para obtener información sobre el estado de todas las promesas
Promise.allSettled([promise1, promise2, promise3])
  .then(resultados => {
    // Mostrar información sobre el estado de cada promesa
    console.log('Información sobre el estado de todas las promesas:');
    resultados.forEach(resultado => {
      if (resultado.status === 'fulfilled') {
        console.log('Promesa resuelta:', resultado.value);
      } else if (resultado.status === 'rejected') {
        console.log('Promesa rechazada:', resultado.reason);
      }
    });
  })
  .catch(error => {
    // Manejar cualquier error que pueda ocurrir durante el proceso
    console.error('Se produjo un error:', error);
  });
