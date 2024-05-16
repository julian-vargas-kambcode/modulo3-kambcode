function suma(a, b){
    return a + b;
}
function resta(a, b){
    return a - b;
}
function multiplicacion(a, b){
    return a * b;
}
function division(a, b){
    return a / b;
}
function calculadora(numA, numB, callback){
    return callback(numA, numB);
}
function resultadoTotal(numA, numB){
    const resultado = suma(numA, numB) + resta(numA, numB) + multiplicacion(numA, numB) + division(numA, numB);
    return resultado;
}

const a = 20;
const b = 5;

console.log("Suma:", calculadora(a, b, suma));
console.log("Resta:", calculadora(a, b, resta));
console.log("Multiplicación:", calculadora(a, b, multiplicacion));
console.log("División:", calculadora(a, b, division));
console.log("Resultado Total:", resultadoTotal(a, b));
console.log("Resultado Total:", resultadoTotal(a, b) + suma(a, b));
console.log("Resultado Total:", resultadoTotal(a, b) + suma(a, b) - resta(a, b));
console.log("Resultado Total:", resultadoTotal(a, b) * suma(a, b) - resta(a, b) + multiplicacion(a, b) * division(a, b));