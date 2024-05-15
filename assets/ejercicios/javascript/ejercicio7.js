function find(array, callback) {
  // Recorrer cada elemento del array
  for (let i = 0; i < array.length; i++) {
    // Ejecutar el callback con el elemento actual como argumento
    const result = callback(array[i]);

    // Si el resultado del callback es true, devolver ese elemento
    if (result === true) {
      return array[i];
    }
  }

  // Si ningún callback devuelve true, devolver undefined
  return undefined;
}

// Ejemplo de uso:
const numbers = [1, 2, 3, 4, 5];
const firstEven = find(numbers, function (num) {
  return num % 2 === 0; // Devuelve true si el número es par
});

console.log(firstEven); // 2, el primer número par encontrado
