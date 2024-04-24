let totalEdades=0;
let promedio=0;
let mayor=0;
let temp=0;
let estudiantesMayores=[];

let estudiantes = [
    {
        nombre: "Laura",
        edad: 20,
        Promedio: 40, 
    },
    {   nombre: "Camila",
        edad: 15,
        Promedio: 30,
    },
    {
        nombre: "Estefania",
        edad: 10,
        Promedio: 25,
    },
];
console.log("El Segundo estudiante se llama" + " " + estudiantes[1].nombre);
console.log(`Nuevos Datos Estudiante 1: Nombre:  ${estudiantes[0].nombre} Edad: ${estudiantes[0].edad=25} Promedio: ${estudiantes[0].Promedio}`);

for (const iterator of estudiantes) {
     totalEdades += iterator.edad;     
}
console.log(`La Suma de las Edades de los Estudiantes es ${totalEdades}`);
promedio = totalEdades / estudiantes.length
console.log("El Promedio de las Edades es" + " " + promedio.toFixed(3));

console.log(" BÚSQUEDA Y FILTRADO DE DATOS")

    let estudiantesPunto3 = [
        {
            nombre: "Ana",
            edad: 20,
            promedio: 120,
            genero: "Femenino",
            carrera: "Ingeniería Civil",
            ciudad: "Bogotá",
        },
        {
            nombre: "Juan",
            edad: 20,
            promedio: 78,
            genero: "Masculino",
            carrera: "Medicina",
            ciudad: "Medellín",
        },
        {
            nombre: "María",
            edad: 20,
            promedio: 90,
            genero: "Femenino",
            carrera: "Administración de Empresas",
            ciudad: "Cali",
        },
        {
            nombre: "Pedro",
            edad: 20,
            promedio: 82,
            genero: "Masculino",
            carrera: "Derecho",
            ciudad: "Barranquilla",
        },
        {
            nombre: "Laura",
            edad: 24,
            promedio: 88,
            genero: "Femenino",
            carrera: "Arquitectura",
            ciudad: "Cartagena",
        },
        {
            nombre: "Carlos",
            edad: 24,
            promedio: 75,
            genero: "Masculino",
            carrera: "Ingeniería de Sistemas",
            ciudad: "Santa Marta",
        },
        {
            nombre: "Sofía",
            edad: 20,
            promedio: 95,
            genero: "Femenino",
            carrera: "Psicología",
            ciudad: "Pereira",
        },

     ];

     for (const iterator of estudiantesPunto3) {
        if(iterator.promedio > mayor){
            mayor=iterator.promedio;
        } 
    }
    console.log("la variable mayor quedo con" + mayor);

    for (const iterator of estudiantesPunto3) {

        if(iterator.promedio === mayor){
            console.log(`El estudiante con mayor promedio es ${iterator.nombre} , Tiene ${iterator.edad} Anos y su promedio fue ${iterator.promedio}`);  
        } 
        
    }
   

 console.log("SUGUIENTE");

  estudiantesPunto3.filter(dato =>{
    if (dato.edad > 20){
        estudiantesMayores.push(dato);
        }
        
      } )
      console.log(estudiantesMayores) ;