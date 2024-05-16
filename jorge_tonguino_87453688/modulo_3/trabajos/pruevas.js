let productos = [
    { nombre: "Camisa", talla: 5, precio: 2000 }, 
    { nombre: "Pantalón", talla: 7, precio: 3010 },
    { nombre: "Zapatos", talla: 9, precio: 500 },
    { nombre: "Camisa buso", talla: 3, precio: 200 }, 
    { nombre: "Pantalón Yean", talla: 12, precio: 3050 },
    { nombre: "Zapatos reebox", talla: 55, precio: 5000 },
  ];
  
  function encontrarElProductoMasBarato(productos) {
    if (productos.length === 0) {
      return "No hay productos disponibles";
    }
  
    let productoMasBarato = productos[0];
    let productoTallaBaja = productos[0];
  
    for (let i = 1; i < productos.length; i++) {
      if (productos[i].precio < productoMasBarato.precio) {
        productoMasBarato = productos[i];
      }
  
      if (productos[i].talla < productoTallaBaja.talla) {
        productoTallaBaja = productos[i];
      }
    }
    
    return `El producto más barato es ${productoMasBarato.nombre} con un precio de ${productoMasBarato.precio} COP. La talla más baja es ${productoTallaBaja.talla}.`;
  }
  
  console.log(encontrarElProductoMasBarato(productos));