const myPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Promesa resuelta");
  }, 3000);
});

myPromise.then((message) => {
  console.log(message);
});
