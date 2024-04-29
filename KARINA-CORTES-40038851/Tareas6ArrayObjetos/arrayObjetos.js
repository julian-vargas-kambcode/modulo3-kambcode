let menor=0;
let nom="";

let productos = [
    { nombre: "Camisa", precio: 20},
    { nombre: "Pantalón", precio: 30},
    { nombre: "Zapatos", precio: 50},
  ];

  //productos.forEach(dato => 
    //console.log(productos.nombre)
    menor=productos[0].precio;
    nom=productos[0].nombre;
    for(let i=0; i < productos.length;i++){
                
        if(menor > productos[i].precio){
            menor=productos[i].precio;
            nom=productos[i].nombre;
            
        } else{
            menor=menor;
            
     }
    }
    
    console.log(`El Valor del Producto más Económico es: $ ${menor} y su nombre es: ${nom}`);
    