function imprimirNumeros(desde, hasta) {
  let numeroActual = desde;

  const intervalo = setInterval(() => {
    console.log(numeroActual);
    if (numeroActual === hasta) {
      clearInterval(intervalo);
    } else {
      numeroActual++;
    }
  }, 1000);
}

// Llamada a la función
imprimirNumeros(1, 5);


function imprimirNumeros(desde, hasta) {
  let numeroActual = desde;

  function imprimir() {
    if (numeroActual <= hasta) {
      console.log(numeroActual);
      numeroActual++;
      setTimeout(imprimir, 1000);
    }
  }

  imprimir();
}

// Llamada a la función
imprimirNumeros(1, 5);

