function every(array, callback) {
  // Recorrer cada elemento del array
  for (let i = 0; i < array.length; i++) {
    // Ejecutar el callback con el elemento actual como argumento
    const result = callback(array[i]);

    // Si el resultado del callback es false, devolver false
    if (result === false) {
      return false;
    }
  }

  // Si todas las llamadas al callback devolvieron true, devolver true
  return true;
}

// Ejemplo de uso:
const numbers = [1, 2, 3, 4, 5];
const allEven = every(numbers, function (num) {
  return num % 2 === 0; // Devuelve true si el número es par
});

console.log(allEven); // false, no todos los números son pares
