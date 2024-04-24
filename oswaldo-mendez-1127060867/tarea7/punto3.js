// Busqueda y filtrado de datos
const estudiantes = [
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

promedioMayor();
function promedioMayor(){
    let valorMayor=(estudiantes[0].promedio);
    for (const mayor of estudiantes) {
        if(valorMayor<mayor.promedio){
            valorMayor=mayor.promedio;
        }
    }
    console.log(valorMayor);
}
filtrar();
function filtrar(){
    let estudiantesMayores=[];
    for (const mayor of estudiantes) {
        if(mayor.edad>20){
            estudiantesMayores.push(mayor);
        }
    }
    console.log(estudiantesMayores);
}