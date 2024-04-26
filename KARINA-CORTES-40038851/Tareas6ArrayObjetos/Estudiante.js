
let edadT=0;
let estudiantes = [
    { nombre: "Juan", edad: 20 },
    { nombre: "María", edad: 22 },
    { nombre: "Pedro", edad: 19 },
  ];

  for(dato of estudiantes){

     console.log(`${dato.nombre} ${dato.edad+1}`);
  }