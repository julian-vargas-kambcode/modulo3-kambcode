function nombreDeLosEstudiantes (){
    const estudiantes = [
        {
            nombre: "Ana",
            edad: 19,
            promedio: 93,
        },
        {
            nombre: "Jose",
            edad: 20,
            promedio: 85,
        },
        {
            nombre: "Javier",
            edad: 35,
            promedio: 87,
        }
    ]
    console.log(estudiantes[1].nombre);
    estudiantes[0].edad = 25;
    console.log(estudiantes[0])
}
nombreDeLosEstudiantes();
