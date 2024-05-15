async function operacionAsincronica() {
  // Esperar 1 segundo
  await new Promise(resolve => setTimeout(resolve, 1000));

  // Devolver el mensaje
  return "Operación completada";
}

// Ejemplo de uso:
async function ejecutarOperacion() {
  const resultado = await operacionAsincronica();
  console.log(resultado);
}

ejecutarOperacion();
