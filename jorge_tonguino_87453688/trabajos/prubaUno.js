let estudiantes = [
  { nombre: "Juan", edad: 20 },
  { nombre: "María", edad: 22 },
  { nombre: "Pedro", edad: 19 },
];

// Incrementar la edad del primer estudiante en 5 años
const incrementoPrimerEstudiante = 5;
estudiantes[0].edad += incrementoPrimerEstudiante;

// Incrementar la edad de los otros estudiantes en 1 año
const incrementoOtrosEstudiantes = 1;
for (let i = 1; i < estudiantes.length; i++) {
  estudiantes[i].edad += incrementoOtrosEstudiantes;
}

console.log(estudiantes);

for (let i = 0; i < estudiantes.length; i++) {
  estudiantes[i].edad++; //el ++ Incrementa la edad de cada estudiante en 1 año
}

console.log(estudiantes);