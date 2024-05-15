/////     EJERCICIO 1     /////

let arrayPrueba = [1,2,3,4,5,6,7,8,9,10];

const print = (valor) => console.log(valor); 

const sumadorArrays = (arr, callback) => {
    let sum = arr.reduce((acum, value) => acum + value, 0);
    callback(sum);
};

sumadorArrays(arrayPrueba, print);



//////     EJERCICIO 2     /////

const filtrarPares = (arr, callback) => {
    let filter = arr.filter((value) => value % 2 === 0)
    callback(filter);
}

filtrarPares(arrayPrueba, print);


