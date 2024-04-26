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

console.log("El promedio de la edad de los estudiantes es ",promedioEdad, "con forEatch");

console.log("Profe perdoneme la vida pero soy curioso y lo implemente con los dos, se que dijo utilice uno pero ya ve que es muy importante explorar.");

const sumaEdades1 = estudiantes.map(estudiante => estudiante.edad).reduce((acumulador, edad) => acumulador + edad, 0);

const promedioEdad1 = sumaEdades / estudiantes.length;

console.log("El promedio de la edad de los estudiantes es ",promedioEdad1, "map");

console.log("Profe perdoneme la vida pero soy curioso y lo implemente con los dos, se que dijo utilice uno pero ya ve que es muy importante explorar.");