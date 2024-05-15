// Promesa 1: Resuelta después de 1 segundo con el número 5
const promise1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(5);
  }, 1000);
});

// Promesa 2: Resuelta después de 1 segundo con el número 7
const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(7);
  }, 1000);
});

// Promesa 3: Resuelta después de 1 segundo con el número 10
const promise3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(10);
  }, 1000);
});

// Encadenar las tres promesas para sumar los resultados
promise1
  .then((result1) => {
    return promise2.then((result2) => result1 + result2);
  })
  .then((sum) => {
    return promise3.then((result3) => sum + result3);
  })
  .then((finalResult) => {
    console.log("El resultado final es:", finalResult);
  });
