console.log("---------------------punto1---------------------");

function punto1(){


        const productos = [
            { nombre: "Camiseta", precio: 20, stock: 10 },
            { nombre: "Pantalón", precio: 30, stock: 5 },
            { nombre: "Zapatos", precio: 50, stock: 0 },
            { nombre: "Bufanda", precio: 15, stock: 8 },
        ];

        const ProStock = productos.filter(elemento => (elemento.stock > 0));
        console.log(ProStock);

        const nomProductos = productos.map(elemento => (elemento["nombre"]));
        console.log(nomProductos);

        let totalPrecio=0;

        for (let i = 0; i < productos.length; i++) {
            totalPrecio += productos[i].precio;
        }

        console.log("El precio total es",totalPrecio);
       
}
punto1();
console.log("---------------------punto2---------------------");

function punto2(){

        const estudiantes = [
            { nombre: "Camilo", edad: 33, promedio: 10 },
            { nombre: "Juan", edad: 30, promedio: 6 },
            { nombre: "Andres", edad: 29, promedio: 8.7 },
    ];
        let segundoEstudiante = estudiantes[1].nombre;
        console.log(segundoEstudiante);
        estudiantes[1].edad = 25;
        console.log(estudiantes[1]);
 }

punto2();
console.log("---------------------punto3---------------------");

function punto3() {

    const estudiantes = [
        {
          nombre: "Ana",
          edad: 20,
          promedio: 85,
          genero: "Femenino",
          carrera: "Ingeniería Civil",
          ciudad: "Bogotá",
        },
        {
          nombre: "Juan",
          edad: 22,
          promedio: 78,
          genero: "Masculino",
          carrera: "Medicina",
          ciudad: "Medellín",
        },
        {
          nombre: "María",
          edad: 21,
          promedio: 90,
          genero: "Femenino",
          carrera: "Administración de Empresas",
          ciudad: "Cali",
        },
        {
          nombre: "Pedro",
          edad: 23,
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
          edad: 20,
          promedio: 75,
          genero: "Masculino",
          carrera: "Ingeniería de Sistemas",
          ciudad: "Santa Marta",
        },
        {
          nombre: "Sofía",
          edad: 22,
          promedio: 95,
          genero: "Femenino",
          carrera: "Psicología",
          ciudad: "Pereira",
        },
      ];

    let acumulador = 0;

    for (const elemento of estudiantes) acumulador+= elemento.promedio;

    const promedio = (acum, object) =>{
        console.log ("La suma de las edades de todos los estudiantes es", acum / object.length);
    }

    console.log("El promedio de edad de los estudiantes es", acumulador);
    promedio(acumulador, estudiantes);
    console.log("---------------------punto4---------------------");
    estudiantesNuevos = estudiantes;
    let mejorEstudiante;
    let maxPromedio = 0;
    const buscadorMaxPromedio = estudiantesNuevos.filter((persona) => {
        if (persona.promedio > maxPromedio){
            maxPromedio = persona.promedio
            mejorEstudiante = persona
        }
    }) 
    
    const estudiantesMayores = estudiantesNuevos.filter((persona) => persona.edad > 18);
    
    console.log(`el estudiante con el mejor promedio es ${mejorEstudiante["nombre"]} de ${mejorEstudiante.edad} años de edad`);
    console.log(`Con un promedio de ${maxPromedio}`);
    
    console.log(estudiantesMayores)

}

punto3();




