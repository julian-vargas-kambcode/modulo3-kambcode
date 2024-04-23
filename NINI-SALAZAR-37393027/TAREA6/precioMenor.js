const { off } = require("process");

let x = 0;
const menor = 0;
let productos = [
    { nombre: "Camisa", precio: 20 },
    { nombre: "Pantalón", precio: 30 },
    { nombre: "Zapatos", precio: 50 },
    
];

/*for(const key  in productos ){
  */
for(const yee of  productos){
    menor = yee.precio;
}
console.log(menor);