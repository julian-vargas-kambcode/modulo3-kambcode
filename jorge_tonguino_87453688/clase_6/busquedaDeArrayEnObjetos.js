let productos = [
  { nombre: "Camisa", precio: 2000 }, // puedo cambiar el valor y esta en autonatico el resultado.
  { nombre: "Pantalón", precio: 3010 },
  { nombre: "Zapatos", precio: 500 },
];

function encontrarElProductoMasBarato(productos) {
  if (productos.length === 0) {
    return "No hay productos disponibles";
  }

  let productoMasBarato = productos[0];

  for (let i = 1; i < productos.length; i++) {
    if (productos[i].precio < productoMasBarato.precio) {
      productoMasBarato = productos[i];
    }
  }

  return `El producto más barato es ${productoMasBarato.nombre} con un precio de ${productoMasBarato.precio} dólares.`;
}
console.log(encontrarElProductoMasBarato(productos));