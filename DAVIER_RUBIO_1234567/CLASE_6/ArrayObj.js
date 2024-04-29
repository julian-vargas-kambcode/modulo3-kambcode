let productos = [
    { nombre: "Camisa", precio: 20 }, 
    { nombre: "Pantalón", precio: 30 },
    { nombre: "Zapatos", precio: 50 },
  ];
  
  function encontrarElProductoMasBarato(productos) {
    if (productos.length === 0) {
      return "No hay stock";
    }
  
    let productoMasBarato = productos[0];
  
    for (let index = 1; index < productos.length; index++) {
      if (productos[index].precio < productoMasBarato.precio) {
        productoMasBarato = productos[index];
      }
    }
  
    return `El producto más barato es ${productoMasBarato.nombre} con un precio de ${productoMasBarato.precio} euros.`;
  }
  console.log(encontrarElProductoMasBarato(productos));