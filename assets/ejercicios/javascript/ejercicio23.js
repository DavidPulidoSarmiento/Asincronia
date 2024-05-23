// Función asincrónica para cargar el archivo JSON
async function cargarArchivoJSON(ruta) {
  try {
    // Hacer la solicitud fetch al archivo JSON local
    let respuesta = await fetch(ruta);

    // Comprobar si la respuesta es exitosa (código de estado 200-299)
    if (!respuesta.ok) {
      throw new Error(`Error al cargar el archivo: ${respuesta.statusText}`);
    }

    // Convertir la respuesta a JSON
    let datos = await respuesta.json();

    // Devolver los datos JSON
    return datos;
  } catch (error) {
    // Manejar cualquier error que ocurra durante la carga o el procesamiento del JSON
    console.error('Hubo un error al cargar el archivo JSON:', error.message);
  }
}

// Función principal para utilizar los datos del archivo JSON
async function procesarArchivoJSON() {
  // Ruta del archivo JSON
  const rutaArchivo = 'ejercicio23datos.json';

  // Cargar los datos del archivo JSON
  let datos = await cargarArchivoJSON(rutaArchivo);

  // Si los datos se cargaron correctamente, procesarlos
  if (datos) {
    console.log('Datos cargados del archivo JSON:', datos);
    // Aquí puedes agregar más lógica para procesar los datos como necesites
  } else {
    console.log('No se pudieron cargar los datos del archivo JSON.');
  }
}

// Llamar a la función principal para cargar y procesar el archivo JSON
procesarArchivoJSON();
