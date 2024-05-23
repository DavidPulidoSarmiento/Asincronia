let mapa = new Map();

function mapita(mapa, callback) {
  const nuevoarray = [];
  for (let [key, value] of mapa) {
    console.log(`Key: ${key} Value: ${value}`)
    const result = callback(value)
    nuevoarray.push(result);
  }
  return nuevoarray;
}

mapa.set("n1", 1);
mapa.set("n2", 2);
mapa.set("n3", 3);
mapa.set("n4", 4);

const cuadrado = mapita(mapa, function (num) {
  return num * num;
});

console.log(cuadrado);



const arreglo = [8, 9, 2, 3, 6, 5]

const consulat = x => x % 2 === 0

const rest = arreglo.map(consulat)

console.log(rest)

const newArray = arreglo.filter(consulat);

console.log(newArray)