let frutas1 = ["Manzana", "Plátano", "Naranja"];
let frutas2 = ["Fresa", "Uva", "Piña"];

for (let i = 0; i < frutas2.length; i++) {
  frutas1.push(frutas2[i]); //push() Me Ayuda, agregar cada elemento del array frutas1 al final del array frutas2
}

console.log(frutas1);

console.log("segundo ejemplo");

let frutas3 = ["Manzana", "Plátano", "Naranja"];
let frutas4 = ["Fresa", "Uva", "Piña"];

for (let i = 0; i < frutas3.length; i++) {
  frutas4.push(frutas3[i]); 
}

console.log(frutas4);