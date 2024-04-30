const miPrimeraPromesa = new Promise((resolve, reject) => {
    const opreacionExitosa = true;
    if (opreacionExitosa){
        resolve('El proseso se genero exitosamente')
    }else{
        reject('Se presento un error')
    }
});
console.log("Hola mundo1");
console.log("Hola mundo2");
miPrimeraPromesa
.then((resultado) => console.log(resultado))
.catch((error) => console.log(error))
.finally(() => console.log("Esto susede siempre"));
console.log("Hola mundo3");