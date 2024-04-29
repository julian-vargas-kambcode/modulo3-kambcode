/////     EJERCICIO 1     /////

// Utiliza un bucle for para multiplicar cada número por 2 y almacenar el resultado en un nuevo array. Luego, imprime el nuevo array.

let numeros = [1, 2, 3, 4, 5];
let nuevoArray1 = [];

for (let i = 0; i < numeros.length; i++){
    nuevoArray1.push(numeros[i] * 2);
}

// console.table(nuevoArray1);


/////     EJERCICIO 2     /////

// Utiliza un bucle for para encontrar el producto con el precio más bajo. Luego, imprime el nombre y el precio de ese producto.

let productos = [
    { nombre: "Camisa", precio: 20 },
    { nombre: "Pantalón", precio: 30 },
    { nombre: "Zapatos", precio: 50 },
];

let temp = 0;

for (let i = 0; i < productos.length; i++){
    if (productos[i].precio < productos[i++].precio){
        temp = productos[i];
    }
}

// console.log (productos[temp]);
// console.table (Object.entries(productos[temp]));


/////     EJERCICIO 3     /////


// Utiliza un bucle for para incrementar la edad de cada estudiante en 1 año. Luego, imprime el array modificado.

let estudiantes = [
    { nombre: "Juan", edad: 20 },
    { nombre: "María", edad: 22 },
    { nombre: "Pedro", edad: 19 },
];

for (let i = 0; i < estudiantes.length; i++){
    estudiantes[i].edad++;
}

// console.log(estudiantes);


/////     EJERCICIO 4     /////
// Utiliza un bucle for para encontrar todos los libros cuyo título contenga la palabra "El". Luego, imprime estos libros.


let libros = [
    { titulo: "El principito", autor: "Antoine de Saint-Exupéry" },
    { titulo: "Don Quijote de la Mancha", autor: "Miguel de Cervantes" },
    { titulo: "Cien años de soledad", autor: "Gabriel García Márquez" },
];

for (let i = 0; i < libros.length; i++){
    let stepOne =  libros[i].titulo.toLocaleLowerCase();
    // let stepTwo = stepOne.split();

    for (let a = 0; a < stepOne.length; a++){
        let stepThree = stepOne[a].replace(" ","");
        // console.log(stepThree);
        if (stepThree == "e" && stepOne[a++] == "l"){
            console.log(libros[i]);
        }
    }
}


/////     EJERCICIO 5     /////
// Utiliza un bucle for para concatenar frutas2 al final de frutas1. Luego, imprime el array resultante.

let frutas1 = ["Manzana", "Plátano", "Naranja"];
let frutas2 = ["Fresa", "Uva", "Piña"];

let frutas3 = frutas1.concat(frutas2);

console.table(frutas3);