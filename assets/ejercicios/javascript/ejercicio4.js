function filter(array, callback) {
  // Crear un nuevo array vacío para almacenar los elementos filtrados
  const filteredArray = [];

  // Recorrer cada elemento del array original
  for (let i = 0; i < array.length; i++) {
    // Ejecutar el callback con el elemento actual como argumento
    const result = callback(array[i]);

    // Si el callback devuelve true, añadir el elemento al nuevo array
    if (result === true) {
      filteredArray.push(array[i]);
    }
  }

  // Devolver el nuevo array con los elementos filtrados
  return filteredArray;
}

// Ejemplo de uso:
const numbers = [1, 2, 3, 4, 5];
const evenNumbers = filter(numbers, function (num) {
  return num % 2 === 0; // Devuelve true si el número es par
});

console.log(evenNumbers); // [2, 4]
