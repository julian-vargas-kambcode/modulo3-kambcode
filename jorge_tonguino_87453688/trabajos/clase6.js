let edades = [];
let sumaEdades = 0;

let edad = 1;
while (edad <= 50) {
    edades.push(edad);
    sumaEdades += edad; // Sumar la edad actual a la suma total
    edad++;
}

console.log("Las edades son:", edades.join(", "));
console.log("La suma de todas las edades es:", sumaEdades);