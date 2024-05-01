///// Punto 2: Acceso y Modificación Básica de Datos: Crea un array llamado estudiantes que contenga objetos representando a tres estudiantes. Ejemplo
const estudiantes = [
    { nombre: "max", edad: 10, promedio: 10 },
    { nombre: "Julio", edad: 30, promedio: 6 },
    { nombre: "Jose", edad: 29, promedio: 8.7 },
];
//Cada objeto debe tener las siguientes propiedades: nombre, edad, y promedio.//
const estudiantes = [
    { nombre: "max", edad: 33, promedio: 10 },
    { nombre: "Julio", edad: 30, promedio: 6 },
    { nombre: "jose", edad: 29, promedio: 8.7 },
];

estudiantes.forEach(estudiante => console.log(estudiante.nombre));


// Imprime en la consola el nombre del segundo estudiante.
const estudiantes = [
    { nombre: "Camilo", edad: 33, promedio: 10 },
    { nombre: "Juan", edad: 30, promedio: 6 },
    { nombre: "Andres", edad: 29, promedio: 8.7 },
];

const segundoNombre = estudiantes[1].nombre;
console.log("El segundo nombre en la lista de estudiantes es: " + segundoNombre);


// Actualiza la edad del primer estudiante a 25 años. Imprime en la consola la información completa del primer estudiante después de la actualización.
const estudiantes = [
    { nombre: "Camilo", edad: 33, promedio: 10 },
    { nombre: "Juan", edad: 30, promedio: 6 },
    { nombre: "Andres", edad: 29, promedio: 8.7 },
];

// Actualizar la edad del primer estudiante a 25 años
estudiantes[0].edad = 25;

// Imprimir la información completa del primer estudiante después de la actualización
console.log("Información completa del primer estudiante después de la actualización:");
console.log(estudiantes[0]);

*****