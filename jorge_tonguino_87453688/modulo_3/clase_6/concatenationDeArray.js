let frutas1 = ["Manzana", "Plátano", "Naranja"];
let frutas2 = ["Fresa", "Uva", "Piña"];

for (let i = 0; i < frutas2.length; i++) {
  frutas1.push(frutas2[i]);//push() Me Ayuda, agregar cada elemento del array frutas1 al final del array frutas2
}

console.log(frutas1);
