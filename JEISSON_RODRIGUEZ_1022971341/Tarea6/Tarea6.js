
// Tarea 6.1 - Bucle For con Arrays

let numeros = [1, 2, 3, 4, 5];
let newArray = [];

for (let iterator of numeros) {
    iterator *= 2;
    console.log(iterator);
    newArray.push(iterator);
}
console.log(newArray);

// Tarea 6.2 - Búsqueda en Arrays de objetos

let productos = [
    { nombre: "Camisa", precio: 80 },
    { nombre: "Pantalón", precio: 20 },
    { nombre: "Zapatos", precio: 40 },
  ]; 

  let menor = productos[0].precio;
  let productosMenor = [];

  for (let i = 0; i < productos.length; i++){
        if (productos[i].precio < menor) {
            menor = productos[i].precio;
            productosMenor = productos[i];
        }
        
    }
console.log(menor);
console.log(productosMenor);

// Tarea 6.3 - Modificación de Arrays de Objetos

let libros = [
    { titulo: "El principito", autor: "Antoine de Saint-Exupéry" },
    { titulo: "Don Quijote de la Mancha", autor: "Miguel de Cervantes" },
    { titulo: "Cien años de soledad", autor: "Gabriel García Márquez" },
  ];

  let titleWithEl = [];

  libros.forEach(element => {
    if (element.titulo.includes('El')){
        titleWithEl.push(element);
    }
  });

console.log(titleWithEl);

// Tarea 6.4 - Concatenación de arrays

let frutas1 = ["Manzana", "Plátano", "Naranja"];
let frutas2 = ["Fresa", "Uva", "Piña"];
let newArrayFruits = frutas1;

console.log(newArrayFruits);
for (i = 0; i < frutas2.length; i++){
    newArrayFruits.push(frutas2[i]);
}
console.log(newArrayFruits);