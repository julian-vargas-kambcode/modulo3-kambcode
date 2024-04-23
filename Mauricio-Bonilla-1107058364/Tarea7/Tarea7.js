// Punto 1: Acceso y Modificación Básica de Datos
let estudiantes = [
    { nombre: "Juan", edad: 20, promedio: 8.5 },
    { nombre: "María", edad: 22, promedio: 9.0 },
    { nombre: "Pedro", edad: 21, promedio: 8.8 }
];

console.log("Nombre del segundo estudiante:", estudiantes[1].nombre);

estudiantes[0].edad = 25;
console.log("Información del primer estudiante después de la actualización:", estudiantes[0]);

// Punto 2: Cálculo de Estadísticas Básicas
let sumaEdades = 0;
for (let i = 0; i < estudiantes.length; i++) {
    sumaEdades += estudiantes[i].edad;
}
let promedioEdades = sumaEdades / estudiantes.length;
console.log("Suma de edades:", sumaEdades);
console.log("Promedio de edades:", promedioEdades);

// Punto 3: Búsqueda y Filtrado de Datos (Opcional)
let estudianteMaxPromedio = estudiantes[0];
for (let i = 1; i < estudiantes.length; i++) {
    if (estudiantes[i].promedio > estudianteMaxPromedio.promedio) {
        estudianteMaxPromedio = estudiantes[i];
    }
}
console.log("Estudiante con el promedio más alto:", estudianteMaxPromedio.nombre, "-", estudianteMaxPromedio.edad);

let estudiantesMayores = estudiantes.filter(estudiante => estudiante.edad > 20);
console.log("Estudiantes mayores de 20 años:", estudiantesMayores);
