let numeros = [1, 2, 3, 4, 5];
let resultados = [];

for (let i = 0; i < numeros.length; i++) {
    resultados.push(numeros[i] * 2);
}

console.log("Array resultado:", resultados);

let productos = [
    { nombre: "Camisa", precio: 20 },
    { nombre: "Pantalón", precio: 30 },
    { nombre: "Zapatos", precio: 50 },
];

let precioMinimo = productos[0].precio;
let productoMasBarato = productos[0];
  
  for (let i = 1; i < productos.length; i++) {
      if (productos[i].precio < precioMinimo) {
          precioMinimo = productos[i].precio;
          productoMasBarato = productos[i];
      }
  }
  
  console.log("Producto más barato:", productoMasBarato.nombre, "- Precio:", productoMasBarato.precio);

let estudiantes = [
    { nombre: "Juan", edad: 20 },
    { nombre: "María", edad: 22 },
    { nombre: "Pedro", edad: 19 },
  ];
  
  for (let i = 0; i < estudiantes.length; i++) {
      estudiantes[i].edad++;
  }
  
  console.log("Estudiantes con edades incrementadas:", estudiantes);

  let libros = [
    { titulo: "El principito", autor: "Antoine de Saint-Exupéry" },
    { titulo: "Don Quijote de la Mancha", autor: "Miguel de Cervantes" },
    { titulo: "Cien años de soledad", autor: "Gabriel García Márquez" },
  ];
  
  let librosConEl = [];
  
  for (let i = 0; i < libros.length; i++) {
      if (libros[i].titulo.includes("El")) {
          librosConEl.push(libros[i]);
      }
  }
  
  console.log("Libros cuyo título contiene 'El':", librosConEl);

  
  let frutas1 = ["Manzana", "Plátano", "Naranja"];
let frutas2 = ["Fresa", "Uva", "Piña"];

for (let i = 0; i < frutas2.length; i++) {
    frutas1.push(frutas2[i]);
}

console.log("Array resultante de la concatenación:", frutas1);

