function nombreEstudiantes (){
    const estudiantes = [
        {
            nombre: "Mariana",
            edad: 19,
            promedio: 93,
        },
        {
            nombre: "Davier",
            edad: 20,
            promedio: 90,
        },
        {
            nombre: "Javier",
            edad: 35,
            promedio: 93,
        }
    ]
    console.log(estudiantes[1].nombre);
    estudiantes[0].edad = 25;
    console.log(estudiantes[0])
}
nombreEstudiantes();