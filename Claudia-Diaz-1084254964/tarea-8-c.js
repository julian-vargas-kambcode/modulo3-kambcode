///Punto 3: Cálculo de Estadísticas Básicas: Calcula la suma de las edades de todos los estudiantes en el array (puedes utilizar un map o foreach). 
const estudiantes = [
    { nombre: "Camilo", edad: 33, promedio: 10 },
    { nombre: "Juan", edad: 30, promedio: 6 },
    { nombre: "Andres", edad: 29, promedio: 8.7 },
];

let sumaEdades = 0;

// Sumar todas las edades
for (let i = 0; i < estudiantes.length; i++) {
    sumaEdades += estudiantes[i].edad;
}

// Calcular el promedio de edad
const promedioEdad = sumaEdades / estudiantes.length;

console.log("El promedio de edad de los estudiantes es:", promedioEdad);


//////Imprime en la consola tanto la suma como el promedio de edad de los estudiantes.




