let estudiantes = [
  { nombre: "Juan", edad: 20 },
  { nombre: "María", edad: 22 },
  { nombre: "Pedro", edad: 19 },
];


for (let i = 0; i < estudiantes.length; i++) {
    estudiantes[i].edad ++;
    //estudiantes[i].edad += 3; // Incrementa la edad de cada estudiante en 2 años (+= 2)
    //estudiantes[0].edad += 5; 77 incrento 5 y me genera 36 o sea 16 mas y le digo que sea 5
}

console.log(estudiantes);