const estudiantes = [
    { nombre: "Camilo", edad: 33, promedio: 10 },
    { nombre: "Juan", edad: 30, promedio: 6 },
    { nombre: "Andres", edad: 29, promedio: 8.7 },
];

estudiantes.forEach((value, index) =>{
  if(index==1){
    console.log(` nombre: ${value.nombre} edad: ${value.edad} promedio: ${value.promedio}`);
  }
});

estudiantes.forEach((value, index) =>{
    if(index==0){
      console.log(` nombre: ${value.nombre} edad: ${value.edad=25} promedio: ${value.promedio}`);
    }
  });
