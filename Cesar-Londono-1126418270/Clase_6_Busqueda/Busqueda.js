document.addEventListener("DOMContentLoaded", function() {
    let productos = [
      { nombre: "Camisa", precio: 20 },
      { nombre: "Pantalón", precio: 30 },
      { nombre: "Zapatos", precio: 50 },
    ];
  
    let productoMasBarato = productos[0];
  
    for (let i = 1; i < productos.length; i++) {
      if (productos[i].precio < productoMasBarato.precio) {
        productoMasBarato = productos[i];
      }
    }
  
    let nombreProducto = document.getElementById("nombreProducto");
    let precioProducto = document.getElementById("precioProducto");
  
    nombreProducto.textContent = "Nombre: " + productoMasBarato.nombre;
    precioProducto.textContent = "Precio: $" + productoMasBarato.precio;
  });
  