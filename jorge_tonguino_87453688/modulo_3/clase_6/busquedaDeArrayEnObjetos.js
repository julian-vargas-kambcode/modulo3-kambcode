let productos = [
  { nombre: "Camisa", talla: 5, precio: 2000 }, 
  { nombre: "Pantalón", talla: 7, precio: 3010 },
  { nombre: "Zapatos", talla: 9, precio: 500 },
  { nombre: "Camisa buso", talla: 3, precio: 2005 }, 
  { nombre: "Pantalón Yean", talla: 12, precio: 3050 },
  { nombre: "Zapatos reebox", talla: 55, precio: 5000 },
];

function encontrarElProductoMasBarato(productos) {
  if (productos.length === 0) {
    return "No hay productos disponibles"
  }

  let productoBarato = productos[0];
  let productoTallaBaja = productos[0];

  for (let i = 1; i < productos.length; i++) {
    if (productos[i].precio < productoBarato.precio) {
      productoBarato = productos[i];
    }
    if (productos[i].talla < productoTallaBaja.talla) {
      productoTallaBaja = productos[i];
    }
  }
  return `El producto mas barato es ${productoBarato.nombre} con precio de ${productoBarato.precio} con talla # ${productoBarato.talla}`
}
console.log(encontrarElProductoMasBarato(productos));