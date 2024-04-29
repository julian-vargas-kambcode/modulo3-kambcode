
// Tarea 8.1 - Obteniendo estadisticas de productos

const productos = [
    { nombre: "Camiseta", precio: 20, stock: 10 },
    { nombre: "Pantalón", precio: 30, stock: 5 },
    { nombre: "Zapatos", precio: 50, stock: 0 },
    { nombre: "Bufanda", precio: 15, stock: 8 },
];

const stockMayorCero = productos.filter(
    (stock) => stock.stock > 0
)

console.log(stockMayorCero);

const nombresProd = productos.map((value) => {
    return value.nombre;
});

console.log(nombresProd);

const precioTotal = productos.reduce((acumulador, value) => 
acumulador + (value.precio * value.stock), 0
);

console.log(precioTotal);

// Tarea 8.2 - Acceso y Modificación Básica de Datos

const estudiantes = [
    { nombre: "Camilo", edad: 33, promedio: 10 },
    { nombre: "Juan", edad: 30, promedio: 6 },
    { nombre: "Andres", edad: 29, promedio: 8.7 },
];

console.log(estudiantes[1].nombre);

estudiantes[0].edad = 25;

console.log(estudiantes[0]);

// Tarea 8.3 - Cálculo de Estadísticas Básicas

let edades = 0;
const sumaEdades = estudiantes.map((value) => {
    edades += value.edad
    return edades
});

console.log(edades);

let average = edades / estudiantes.length;

console.log(average);

let summary = [
    {
        Total: edades,
        Promedio: average,
    }
];

console.log(summary);

// Tarea 8.4 - Búsqueda y Filtrado de Datos

const estudiantes2 = [
    {
      nombre: "Ana",
      edad: 20,
      promedio: 85,
      genero: "Femenino",
      carrera: "Ingeniería Civil",
      ciudad: "Bogotá",
    },
    {
      nombre: "Juan",
      edad: 22,
      promedio: 78,
      genero: "Masculino",
      carrera: "Medicina",
      ciudad: "Medellín",
    },
    {
      nombre: "María",
      edad: 21,
      promedio: 90,
      genero: "Femenino",
      carrera: "Administración de Empresas",
      ciudad: "Cali",
    },
    {
      nombre: "Pedro",
      edad: 23,
      promedio: 82,
      genero: "Masculino",
      carrera: "Derecho",
      ciudad: "Barranquilla",
    },
    {
      nombre: "Laura",
      edad: 24,
      promedio: 88,
      genero: "Femenino",
      carrera: "Arquitectura",
      ciudad: "Cartagena",
    },
    {
      nombre: "Carlos",
      edad: 20,
      promedio: 75,
      genero: "Masculino",
      carrera: "Ingeniería de Sistemas",
      ciudad: "Santa Marta",
    },
    {
      nombre: "Sofía",
      edad: 22,
      promedio: 95,
      genero: "Femenino",
      carrera: "Psicología",
      ciudad: "Pereira",
    },
];
  
  let promedioAlto = 0;
  let infoAlto = [];
  let estudiantesMayores = [];

  const promedioMasAlto = estudiantes2.filter(
    (promediodEstudiante) => {
   if(promediodEstudiante.promedio > promedioAlto){
    promedioAlto = promediodEstudiante.promedio;
    infoAlto = [
      {
        Nombre: promediodEstudiante.nombre, 
        Edad: promediodEstudiante.edad
      }
      ]
   }
});

const mayores = estudiantes2.filter(
  (value) => value.edad > 20
)

console.log(promedioAlto);
console.log(infoAlto);
console.log(mayores);

