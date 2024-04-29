

11//////////1  Imprime en la consola el nombre del segundo estudiante.

const estudiantes = [
    {
        nombre: "max",
        edad: 5,
        promedio: 85,
        genero: "Femenino",
        carrera: "Ingeniería Civil",
        ciudad: "Bogotá"
    },
    {
        nombre: "leonardo",
        edad: 20,
        promedio: 78,
        genero: "Masculino",
        carrera: "Medicina",
        ciudad: "Medellín"
    },
    {
        nombre: "sol",
        edad: 18,
        promedio: 90,
        genero: "Femenino",
        carrera: "Administración de Empresas",
        ciudad: "Cali"
    },
    ]
    console.log("El nombre del segundo estudiante es: " + estudiantes[1].nombre);



    /////////  Actualiza la edad del primer estudiante a 25 años. Imprime en la consola la información completa del primer estudiante después de la actualización.


estudiantes[0].edad = 25;
console.log("Información completa del primer estudiante después de la actualización:");
console.log(estudiantes[0]);


/////////////

