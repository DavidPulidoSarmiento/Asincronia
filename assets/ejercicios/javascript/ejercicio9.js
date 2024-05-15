function dropWhile(array, callback) {
  // Encontrar el índice del primer elemento que no cumple la condición
  let dropIndex = array.findIndex((element, index) => !callback(element, index));

  // Si todos los elementos cumplen la condición, devolver un array vacío
  if (dropIndex === -1) {
    return [];
  }

  // Devolver los elementos a partir del primer elemento que no cumple la condición
  return array.slice(dropIndex);
}

// Ejemplo de uso:
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const dropped = dropWhile(numbers, function (num) {
  return num < 5; // Devuelve true si el número es menor que 5
});

console.log(dropped); // [5, 6, 7, 8, 9], elementos a partir del primer número >= 5
