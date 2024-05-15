const myPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject("Promise rechazada");
  }, 2000);
});

myPromise.catch((error) => {
  console.log("Error: " + error);
});
