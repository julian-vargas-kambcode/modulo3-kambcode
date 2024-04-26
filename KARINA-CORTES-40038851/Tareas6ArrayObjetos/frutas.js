

let frutas1 = ["Manzana", "Plátano", "Naranja"];
let frutas2 = ["Fresa", "Uva", "Piña"];
let nuevo=[];
let cont=0;

//let arregloCompleto=frutas1.concat(frutas2);
//console.log(arregloCompleto);

for(i=0; i< frutas1.length;i++){
    nuevo.push(frutas1[i]);
 }
for(i=0; i< frutas2.length;i++){
    nuevo.push(frutas2[i]);
   }
console.log(`El Arreglo final es: ${nuevo}`);