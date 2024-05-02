function promedioEdadEstudiantes (){
    const arregloEdades = [
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
    let sumaEdades = 0;
    for (let edades = 0; edades < arregloEdades.length; edades++) {
        sumaEdades += arregloEdades[edades].edad;
    }

    
    let promedioEdadEatudiantes = Math.floor(sumaEdades / arregloEdades.length);
    

   
    console.log("Total de la suma de las edades ",sumaEdades)
    console.log("Promedo de edad de los estudiantes", promedioEdadEatudiantes);
}
promedioEdadEstudiantes();