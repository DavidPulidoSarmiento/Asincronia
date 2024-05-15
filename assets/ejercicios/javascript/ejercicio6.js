function some(array, callback) {
  // Recorrer cada elemento del array
  for (let i = 0; i < array.length; i++) {
    // Ejecutar el callback con el elemento actual como argumento
    const result = callback(array[i]);

    // Si el resultado del callback es true, devolver true
    if (result === true) {
      return true;
    }
  }

  // Si ninguna llamada al callback devolvió true, devolver false
  return false;
}

// Ejemplo de uso:
const numbers = [1, 2, 3, 4, 5];
const anyEven = some(numbers, function (num) {
  return num % 2 === 0; // Devuelve true si el número es par
});

console.log(anyEven); // true, al menos un número es par
