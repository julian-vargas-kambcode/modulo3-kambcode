let areglosNumeros = [];

let numero = 1;
while (numero <= 100){
    areglosNumeros.push(numero);
    numero++;
}

let numeroMayor = areglosNumeros[0];
for (let index = 0; index < areglosNumeros.length; index++){
    if (areglosNumeros[index] % 2 === 0){
        console.log(areglosNumeros[index]);
    }
    if (areglosNumeros[index] > numeroMayor) {
        numeroMayor = areglosNumeros[index];
    }
}

console.log("El número mayor es:", numeroMayor);
