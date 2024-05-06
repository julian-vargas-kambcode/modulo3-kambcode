const estudiantes = [
    { nombre: "Camilo", edad: 33, promedio: 10 },
    { nombre: "Juan", edad: 30, promedio: 6 },
    { nombre: "Andres", edad: 29, promedio: 8.7 },
];

 let sumaEdades = 0; 

 estudiantes.map(estudiantes => {
    sumaEdades += estudiantes.edad;
 })
const promedioEdad = sumaEdades / estudiantes.length;

 console.log(" Suma de edades ",sumaEdades);
 console.log("El promedio de edad de los estudiantes  ",promedioEdad);