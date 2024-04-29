const estudiantes = [
    { nombre: "Camilo", edad: 33, promedio: 10 },
    { nombre: "Juan", edad: 30, promedio: 6 },
    { nombre: "Andres", edad: 29, promedio: 8.7 },
];

let x=0;
let sumedades=estudiantes.forEach((value) =>{ 
    x+= value.edad;
     return x;
},0);
console.log(`La suma de las edades es: ${x} y el promedio de esta es:${x/estudiantes.length}`);

