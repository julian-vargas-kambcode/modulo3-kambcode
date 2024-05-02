function promedioMasAlto(){
    const promedio = [
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
    ]
    let promedioAlto = 0;
    let elPromedioMasAlto = 0;

    for (let index = 0; index < promedio.length; index++) {
        if (promedio[index].promedio > promedioAlto){
            promedioAlto = promedio[index].promedio;
            elPromedioMasAlto = index;
        };
    }

    console.log("Nombre del estudiante con el promedio mas alto : ",promedio[elPromedioMasAlto].nombre);
    console.log("Su edad es  :", promedio[elPromedioMasAlto].edad, "años");

    let estudiantesMayores = promedio.filter(estudiante => estudiante.edad > 20);
    console.log("Estudiantes mayores de 20 años: ",estudiantesMayores);
}
promedioMasAlto();