let frutas1 = ["Manzana", "Plátano", "Naranja"];
let frutas2 = ["Fresa", "Uva", "Piña"];

for (let index = 0; index < frutas2.length; index++) {
  frutas1.push(frutas2[index]);
}

console.log(frutas1);