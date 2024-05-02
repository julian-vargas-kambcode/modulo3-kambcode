// Ejercicio de Bucle para con Arrays:

let numeros = [1, 2, 3, 4, 5];
let matriz = [];

for (let iterator of numeros) {
    iterator *= 2;
    matriz.push(iterator);
}
console.log(matriz);
console.log("------Ejercicio de Bucle para con Arrays---------");

// Ejercicio de Búsqueda en Arrays de Objetos:

let productos = [
    { nombre1: "Camisa", precio: 20 },
    { nombre1: "Pantalón", precio: 30 },
    { nombre1: "Zapatos", precio: 50 },
  ]; 

  let minimo = productos[0].precio;
  let productosMini = [];

  for (let i = 0; i < productos.length; i++){
        if (productos[i].precio <= minimo) {
            productosMini = productos[i];
        }
    }
console.log("el precio mas bajo es",productosMini.edad);
console.log(productosMini);
console.log("-----Ejercicio de Búsqueda en Arrays de Objetos------");

// Ejercicio de Modificación de Propiedades de Objetos en un Array:

let estudiantes = [
    { nombre: "Juan", edad: 20 },
    { nombre: "María", edad: 22 },
    { nombre: "Pedro", edad: 19 },
  ];
  
  
  for (let index = 0; index < estudiantes.length; index++) {
      estudiantes[index].edad ++;
      
  }
  
  console.log(estudiantes);

console.log("----Ejercicio de Modificación de Propiedades de Objetos en un Array:------");

// Ejercicio de Filtrado de Arrays de Objetos:

let libros = [
    { titulo: "El principito", autor: "Antoine de Saint-Exupéry" },
    { titulo: "Don Quijote de la Mancha", autor: "Miguel de Cervantes" },
    { titulo: "Cien años de soledad", autor: "Gabriel García Márquez" },
  ];

  let librosEl = [];

  libros.forEach(element => {
    if (element.titulo.includes('El')){
        librosEl.push(element);
    }
  });

console.log(librosEl);
console.log("----Ejercicio de Filtrado de Arrays de Objetos:-------------------------");

// Ejercicio de Concatenación de Arrays:

let frutas1 = ["Manzana", "Plátano", "Naranja"];
let frutas2 = ["Fresa", "Uva", "Piña"];
let frutas = frutas1;

console.log(frutas);
for (i = 0; i < frutas2.length; i++){
    frutas.push(frutas2[i]);
}
console.log(frutas);
console.log("----Ejercicio de Concatenación de Arrays:-----------------------------");