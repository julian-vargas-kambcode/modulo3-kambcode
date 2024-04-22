let productos = [
    { nombre: "Camisa", precio: 20 },
    { nombre: "Pantalón", precio: 30 },
    { nombre: "Zapatos", precio: 10 },
  ];
  let menor=productos[0].precio;
  let indicador=0;
  let i=0;

for( i=0; i<productos.length; i++){
    
    if(productos[i].precio<menor){
        menor=productos[i].precio;
        indicador=i;
    }

}

console.log(productos[indicador].nombre, productos[indicador].precio);
