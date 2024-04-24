
// Tarea 7.1 - Acceso y Modificación Básica de Datos

let estudiantes = [
    {
        nombre: "Camilo",
        edad: 30,
        promedio: 4.5
    },
    {
        nombre: "Andrea",
        edad: 28,
        promedio: 4.7
    },
    {
        nombre: "Sebastian",
        edad: 32,
        promedio: 4
    }
];

console.log(estudiantes[1].nombre);

estudiantes[0].edad = 25;

console.log(estudiantes[0]);

// Tarea 7.2 - Cálculo de Estadísticas Básicas:

let sumaEdad = estudiantes[0].edad;

for (let i = 1; i < estudiantes.length; i++){
    sumaEdad += estudiantes[i].edad;
  
} 
console.log(sumaEdad);

let average = sumaEdad / estudiantes.length;
console.log(average);

let summary = [
    {
        Total: sumaEdad,
        Promedio: average,
    }
];

console.log(summary);

// Tarea 7.3 - Búsqueda y Filtrado de Datos

const estudiantes2 = [
    {
        nombre: "Ana",
        edad: 20,
        promedio: 85,
        genero: "Femenino",
        carrera: "Ingeniería Civil",
        ciudad: "Bogotá"
    },
    {
        nombre: "Juan",
        edad: 22,
        promedio: 78,
        genero: "Masculino",
        carrera: "Medicina",
        ciudad: "Medellín"
    },
    {
        nombre: "María",
        edad: 21,
        promedio: 90,
        genero: "Femenino",
        carrera: "Administración de Empresas",
        ciudad: "Cali"
    },
    {
        nombre: "Pedro",
        edad: 23,
        promedio: 82,
        genero: "Masculino",
        carrera: "Derecho",
        ciudad: "Barranquilla"
    },
    {
        nombre: "Laura",
        edad: 24,
        promedio: 88,
        genero: "Femenino",
        carrera: "Arquitectura",
        ciudad: "Cartagena"
    },
    {
        nombre: "Carlos",
        edad: 20,
        promedio: 75,
        genero: "Masculino",
        carrera: "Ingeniería de Sistemas",
        ciudad: "Santa Marta"
    },
    {
        nombre: "Sofía",
        edad: 22,
        promedio: 95,
        genero: "Femenino",
        carrera: "Psicología",
        ciudad: "Pereira"
    }
];

let highestAverage = 0;
let highestAverageInfo = [];

for (const key in estudiantes2) {
    if (estudiantes2[key].promedio > highestAverage){
        highestAverage = estudiantes2[key].promedio;
        highestAverageInfo = [estudiantes2[key].nombre, estudiantes2[key].edad];
    }
}
console.log(highestAverage);
console.log(highestAverageInfo);

let estudiantesMayores = [];

estudiantes2.forEach(element => {
    if (element.edad > 20){
        estudiantesMayores.push(element);
    }
});

console.log(estudiantesMayores);