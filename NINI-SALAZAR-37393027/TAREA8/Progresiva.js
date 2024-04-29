/***Punto 1: Obteniendo estadisticas de productos:** Dado el siguiente array de productos.
  ```javascript
      const productos = [
          { nombre: "Camiseta", precio: 20, stock: 10 },
          { nombre: "Pantalón", precio: 30, stock: 5 },
          { nombre: "Zapatos", precio: 50, stock: 0 },
          { nombre: "Bufanda", precio: 15, stock: 8 },
     ];
  ```

  - Utilizando filter, genera un nuevo array que contenga los productos en stock (todos 
    los productos cuyo stock es mayor a cero).
  - Utilizando map, genera un nuevo array con solo los nombres de los productos, ejemplo 
  `["Camiseta", "Pantalón", "Zapatos", "Bufanda" ]`
  - (Opcional) Escribe un programa que calcule el precio total de los productos 
  disponibles, para ello debes recorrer todos los productos y obtener la suma de el 
  precio de todos ellos*/
console.log(`Punto 1: Obteniendo estadisticas de productos:** Dado el siguiente array de productos.`)
const productos = [
  { nombre: "Camiseta", precio: 20, stock: 10 },
  { nombre: "Pantalón", precio: 30, stock: 5 },
  { nombre: "Zapatos", precio: 50, stock: 0 },
  { nombre: "Bufanda", precio: 15, stock: 8 },
];

const stock = productos.filter(
  (productos) => productos.stock > 0
);
console.log(`nuevo arrays con todos los productos cuyo stock es mayor a cero`)
console.log(stock);
console.log(`************************************************`)

console.log(`Utilizando map, genera un nuevo array con solo los nombres de los productos, ejemplo 
`)


const NewArray = productos.map((productos) => productos.nombre);
console.log(NewArray)


/**Punto 2: Acceso y Modificación Básica de Datos:** Crea un array llamado estudiantes 
que contenga objetos representando a tres estudiantes. Ejemplo
    ```javascript
      const estudiantes = [
          { nombre: "Camilo", edad: 33, promedio: 10 },
          { nombre: "Juan", edad: 30, promedio: 6 },
          { nombre: "Andres", edad: 29, promedio: 8.7 },
     ];
  ```
  - Cada objeto debe tener las siguientes propiedades: nombre, edad, y promedio.
  - Imprime en la consola el nombre del segundo estudiante.
  - Actualiza la edad del primer estudiante a 25 años.
    Imprime en la consola la información completa del primer estudiante después de la 
    actualización.*/
console.log(`************************************************`)

console.log(`Punto 2: Acceso y Modificación Básica de Datos:** Crea un array llamado 
        estudiantes `)
const estudiantes = [
  { nombre: "Camilo", edad: 33, promedio: 10 },
  { nombre: "Juan", edad: 30, promedio: 6 },
  { nombre: "Andres", edad: 29, promedio: 8.7 },
];
console.log(estudiantes)


const Prueba = estudiantes.filter((estudiantes) => estudiantes.nombre=== "Juan");
console.log("SEGUNDO ESTUDIANTE: ", Prueba)

//const edad = estudiantes.filter((estudiantes) => estudiantes.nombre ==="camilo" );

/*- **Punto 3: Cálculo de Estadísticas Básicas:** Calcula la suma de las edades de todos
 los estudiantes en el array (puedes utilizar un `map` o `foreach`).

  - Calcula el promedio de edad de los estudiantes.
  - Imprime en la consola tanto la suma como el promedio de edad de los estudiantes.*/
  console.log(`************************************************`)

  console.log(`Punto 3: Cálculo de Estadísticas Básicas: 
  `)
  let sumaedad=0;
  estudiantes.forEach( function(estudiantes){
    sumaedad    += estudiantes.edad;
})
console.log("SUMA DE EDADES DE TODOS LOS ESTUDIANTES : ",sumaedad)



let promedio = sumaedad/ estudiantes.length; 

console.log("PROMEDIO DE LAS EDADES DE LOS ESTUDIANTES", promedio)


/*- **Punto 4: Búsqueda y Filtrado de Datos:** Utiliza filter para encontrar al 
estudiante con el promedio más alto en el array.
  - Imprime en la consola el nombre y la edad del estudiante con el promedio más alto.
  - Filtra los estudiantes mayores de 20 años en un nuevo array llamado estudiantesMayores.
  - Imprime en la consola la información completa de los estudiantes mayores de 20 años.

```javascript*/
console.log(`************************************************`)

  console.log(`Punto 4: Búsqueda y Filtrado de Datos:
  `)
const estudiantess = [
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


/*const mayorPromedio = estudiantess.filter(
  (estudiantess) => estudiantess.promedio > 0
);
console.log("MAYOR PROMEDIO", mayorPromedio)*/

const mayorEdad = estudiantess.filter(
  (estudiantess) => estudiantess.edad > 20
);

console.log("MAYORES DE EDAD", mayorEdad)
