function findIndex(array, callback) {
  // Recorrer cada elemento del array
  for (let i = 0; i < array.length; i++) {
    // Ejecutar el callback con el elemento actual como argumento
    const result = callback(array[i], i); // También pasamos el índice

    // Si el resultado del callback es true, devolver el índice
    if (result === true) {
      return i;
    }
  }

  // Si ningún callback devuelve true, devolver undefined
  return undefined;
}

// Ejemplo de uso:
const numbers = [1, 2, 3, 4, 5];
const index = findIndex(numbers, function (num) {
  return num % 2 === 0; // Devuelve true si el número es par
});

console.log(index); // 1, el índice del primer número par encontrado
