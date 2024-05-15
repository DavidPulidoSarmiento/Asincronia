function takeWhile(array, callback) {
  // Encontrar el índice del primer elemento que no cumple la condición
  let takeIndex = array.findIndex((element, index) => !callback(element, index));

  // Si todos los elementos cumplen la condición, devolver el array original
  if (takeIndex === -1) {
    return array;
  }

  // Devolver los elementos hasta el primer elemento que no cumple la condición
  return array.slice(0, takeIndex);
}

// Ejemplo de uso:
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const taken = takeWhile(numbers, function (num) {
  return num < 5; // Devuelve true si el número es menor que 5
});

console.log(taken); // [1, 2, 3, 4], elementos hasta el primer número >= 5
