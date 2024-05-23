// Paso 1: Definir la URL del archivo local
const archivoLocalURL = 'ejercicio17datos.json'; // El archivo está en la misma carpeta que el script

// Paso 2: Realizar una solicitud HTTP GET para obtener el contenido del archivo local
fetch(archivoLocalURL)
  .then(response => {
    // Paso 3: Verificar si la solicitud fue exitosa
    if (!response.ok) {
      throw new Error('No se pudo obtener el archivo.');
    }
    // Paso 4: Devolver los datos en formato JSON
    return response.json();
  })
  .then(data => {
    // Paso 5: Mostrar los datos obtenidos en la consola
    console.log('Datos obtenidos:', data);
  })
  .catch(error => {
    // Paso 6: Manejar cualquier error que pueda ocurrir durante la solicitud
    console.error('Error:', error);
  });
