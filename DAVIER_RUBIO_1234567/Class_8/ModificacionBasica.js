const estudiantes = [
    { nombre: "Camilo", edad: 33, promedio: 10 },
    { nombre: "Juan", edad: 30, promedio: 6 },
    { nombre: "Andres", edad: 29, promedio: 8.7 },
];
console.log("Nombre del segundo estudiante : ", estudiantes[1].nombre)

estudiantes[0].edad = 25;

console.log("El primer estudiante con la edad actualizada es  ", estudiantes[0]);