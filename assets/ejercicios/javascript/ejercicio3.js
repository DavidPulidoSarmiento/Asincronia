function map(array, callback) {
  // Crear un nuevo array vacío para almacenar los resultados
  const resultArray = [];

  // Recorrer cada elemento del array original
  for (let i = 0; i < array.length; i++) {
    // Ejecutar el callback con el elemento actual como argumento
    const result = callback(array[i]);

    // Almacenar el resultado en el nuevo array
    resultArray.push(result);
  }

  // Devolver el nuevo array con los resultados
  return resultArray;
}

// Ejemplo de uso:
const numbers = [1, 2, 3, 4, 5];
const doubled = map(numbers, function (num) {
  return num * 2;
});

console.log(doubled); // [2, 4, 6, 8, 10]
