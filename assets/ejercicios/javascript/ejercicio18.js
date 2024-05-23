// Realizar una llamada a un archivo local en formato JSON
fetch('ejercicio18datos.json')
  .then(response => response.json())
  .then(data => {
    // Filtrar los datos para mostrar solo los nombres que comienzan con "A"
    const nombresConA = data.filter(item => item.nombre.startsWith('A')).map(item => item.nombre);

    // Mostrar los nombres filtrados en la consola
    console.log(nombresConA);
  })
  .catch(error => console.error('Se produjo un error al cargar el archivo JSON:', error));
