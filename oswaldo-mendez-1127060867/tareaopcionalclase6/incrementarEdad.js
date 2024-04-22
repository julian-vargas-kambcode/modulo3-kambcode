let estudiantes = [
    { nombre: "Juan", edad: 20 },
    { nombre: "María", edad: 22 },
    { nombre: "Pedro", edad: 19 },
];

let estudiantes2=[];

for (let i=0; i<estudiantes.length; i++){
    estudiantes2[i]={ nombre: estudiantes[i].nombre, edad: (estudiantes[i].edad + 1)};
}

console.log(estudiantes2);