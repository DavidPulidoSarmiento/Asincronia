async function procesarDatos() {
  try {
    // Realizar una llamada a un archivo local en formato JSON
    const response = await fetch('ejercicio19datos.json');
    const data = await response.json();

    // Manipular los datos recibidos
    // Por ejemplo, calcular el promedio de edades
    const edades = data.map(item => item.edad);
    const promedioEdades = edades.reduce((total, edad) => total + edad, 0) / edades.length;

    // Mostrar la información específica
    console.log('Promedio de edades:', promedioEdades);

    // Otro ejemplo de manipulación de datos
    // Por ejemplo, encontrar el nombre más largo
    const nombreMasLargo = data.reduce((nombreMasLargo, item) => {
      return item.nombre.length > nombreMasLargo.length ? item.nombre : nombreMasLargo;
    }, '');

    // Mostrar la información específica
    console.log('Nombre más largo:', nombreMasLargo);
  } catch (error) {
    console.error('Se produjo un error al cargar o manipular el archivo JSON:', error);
  }
}

// Llamar a la función para ejecutarla
procesarDatos();
