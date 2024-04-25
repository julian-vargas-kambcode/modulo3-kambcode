const estudiantes = [
    { nombre: "Camilo", edad: 33, promedio: 10 },
    { nombre: "Juan", edad: 30, promedio: 6 },
    { nombre: "Andres", edad: 29, promedio: 8.7 },
];

 let sumaEdades = 0; 

 estudiantes.forEach(estudiantes => {
    sumaEdades += estudiantes.edad;
 })
const promedioEdad = sumaEdades / estudiantes.length;

 console.log("La suam de edades es ",sumaEdades);
 console.log("El promedio de la edad de los estudiantes es ",promedioEdad);