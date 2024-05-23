// Función simulada que representa una llamada asincrónica, como una solicitud a un servidor
async function procesarElemento(elemento) {
  // Simula una espera de 1 segundo (1000 milisegundos)
  await new Promise(resolve => setTimeout(resolve, 1000));
  // Devuelve el elemento procesado (aquí simplemente lo devuelve sin cambios)
  return `Elemento procesado: ${elemento}`;
}

// Función principal que procesa una lista de elementos uno por uno
async function procesarLista(lista) {
  // Itera sobre cada elemento en la lista
  for (let elemento of lista) {
    // Espera a que la función asincrónica termine de procesar el elemento
    let resultado = await procesarElemento(elemento);
    // Imprime el resultado del procesamiento del elemento
    console.log(resultado);
  }
}

// Lista de ejemplo con elementos a procesar
const listaDeElementos = ['Elemento 1', 'Elemento 2', 'Elemento 3'];

// Llamada a la función principal para procesar la lista
procesarLista(listaDeElementos)
  .then(() => {
    // Mensaje opcional que se muestra cuando todos los elementos han sido procesados
    console.log('Todos los elementos han sido procesados.');
  })
  .catch(error => {
    // Manejo de errores en caso de que alguna llamada asincrónica falle
    console.error('Hubo un error al procesar la lista:', error);
  });
