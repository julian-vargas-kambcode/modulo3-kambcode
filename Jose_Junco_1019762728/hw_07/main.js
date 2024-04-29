// crear un objeto que se llame estudiantes y que tenga las propiedades de nombre, edad y curso

let primerObjeto = {
    // key      valor
    nombre: "david",
    edad: 21,
    curso: 301
};

// console.log(primerObjeto.nombre , primerObjeto["edad"])

// nombre objeto   propiedad
    primerObjeto.curso = "javascript basico";

// console.log (primerObjeto);

for (const key in primerObjeto) {
    // console.log(key, primerObjeto[key]);
}

/////     PUNTO 1     /////

let estudiantes = [
    {
        nombre: "juan",
        edad: 16,
        promedio: 4.5
    }, 
    {
        nombre: "roberto",
        edad: 26,
        promedio: 3.5
    }, 
    {
        nombre: "caliope",
        edad: 21,
        promedio: 3.8
    }
];

// console.log(estudiantes[1]["nombre"]);
// console.log(estudiantes[1].nombre);

estudiantes[1]["nombre"] = "cristian";
// console.log(estudiantes[1]["nombre"]);

estudiantes[0]["edad"] = 25;
// console.log(estudiantes[0]);



/////     PUNTO 2     /////


let sumaEdades = 0;
for (i = 0; i < estudiantes.length; i++){
    sumaEdades+= estudiantes[i].edad;
}

let promedioEdad = sumaEdades / estudiantes.length;

// console.log(sumaEdades);
// console.log(promedioEdad);



/////     PUNTO 3     /////



const estudiantesEjercicio = [
    {
        nombre: "Ana",
        edad: 20,
        promedio: 85,
        genero: "Femenino",
        carrera: "Ingeniería Civil",
        ciudad: "Bogotá"
    },
    {
        nombre: "Juan",
        edad: 22,
        promedio: 78,
        genero: "Masculino",
        carrera: "Medicina",
        ciudad: "Medellín"
    },
    {
        nombre: "María",
        edad: 21,
        promedio: 90,
        genero: "Femenino",
        carrera: "Administración de Empresas",
        ciudad: "Cali"
    },
    {
        nombre: "Pedro",
        edad: 23,
        promedio: 82,
        genero: "Masculino",
        carrera: "Derecho",
        ciudad: "Barranquilla"
    },
    {
        nombre: "Laura",
        edad: 24,
        promedio: 88,
        genero: "Femenino",
        carrera: "Arquitectura",
        ciudad: "Cartagena"
    },
    {
        nombre: "Carlos",
        edad: 20,
        promedio: 75,
        genero: "Masculino",
        carrera: "Ingeniería de Sistemas",
        ciudad: "Santa Marta"
    },
    {
        nombre: "Sofía",
        edad: 22,
        promedio: 95,
        genero: "Femenino",
        carrera: "Psicología",
        ciudad: "Pereira"
    }
];

let mejorPromedio = 0;
const estudiantesMayores = [];

for (i = 0; i < estudiantesEjercicio.length; i++){
    if (estudiantesEjercicio[i]["promedio"] > mejorPromedio) {
        mejorPromedio = i;
    }
    if (estudiantesEjercicio[i]["edad"] > 20){
        estudiantesMayores.push(estudiantesEjercicio[i]);
    }
}

// console.log(estudiantesEjercicio[mejorPromedio].nombre);
// console.log(estudiantesEjercicio[mejorPromedio].edad);
// console.log(estudiantesMayores);