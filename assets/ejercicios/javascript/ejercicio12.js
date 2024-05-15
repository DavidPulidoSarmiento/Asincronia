function delay(ms) {
  return new Promise(resolve => {
    setTimeout(resolve, ms);
  });
}

// Ejemplo de uso:
console.log('Inicio');

delay(2000).then(() => {
  console.log('Pasaron 2 segundos');
});

console.log('Fin');

