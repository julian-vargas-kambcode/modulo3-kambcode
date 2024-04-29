/////     PUNTO 1     /////

const productos = [
    { nombre: "Camiseta", precio: 20, stock: 10 },
    { nombre: "Pantalón", precio: 30, stock: 5 },
    { nombre: "Zapatos", precio: 50, stock: 0 },
    { nombre: "Bufanda", precio: 15, stock: 8 },
];

const productosEnStock = productos.filter(elemento => (elemento.stock > 0));
// console.log(productosEnStock);

const nombreProductos = productos.map(elemento => (elemento["nombre"]));
// console.log(nombreProductos);




// const prueba1 = productos.reduce(acomulador, elemento => ( acomulador + elemento.precio * elemento. stock));
// console.log (prueba1);



/////     PUNTO 2     /////

const estudiantes = [
    { nombre: "Karla", edad: 23, promedio: 9.5 },
    { nombre: "Roberto", edad: 40, promedio: 4.5 },
    { nombre: "Andres", edad: 19, promedio: 7 },
];

let segundoEstudiante = estudiantes[1].nombre;
// console.log(segundoEstudiante);
estudiantes[1].edad = 25;
// console.log(estudiantes[1]);



/////     PUNTO 3     /////

let acumulador = 0;

for (const elemento of estudiantes) acumulador+= elemento.promedio;

const promedio = (acum, object) =>{
    console.log (acum / object.length);
}

// console.log(acumulador);
// promedio(acumulador, estudiantes);



/////     PUNTO 4     /////

const estudiantesNuevos = [
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

let mejorEstudiante;
let maxPromedio = 0;
const buscadorMaxPromedio = estudiantesNuevos.filter((persona) => {
    if (persona.promedio > maxPromedio){
        maxPromedio = persona.promedio
        mejorEstudiante = persona
    }
}) 

const estudiantesMayores = estudiantesNuevos.filter((persona) => persona.edad > 18);

// console.log(`el estudiante con el mejor promedio es ${mejorEstudiante["nombre"]} de ${mejorEstudiante.edad} años de edad`);
// console.log(`Con un promedio de ${maxPromedio}`);

// console.log(estudiantesMayores)

