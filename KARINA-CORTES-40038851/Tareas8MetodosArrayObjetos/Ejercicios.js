

const productos = [
        { nombre: "Camiseta", precio: 20, stock: 10 },
        { nombre: "Pantalón", precio: 30, stock: 5 },
        { nombre: "Zapatos", precio: 50, stock: 0 },
        { nombre: "Bufanda", precio: 150, stock: 8 },
     ];

 const nuevoArreglo = productos.filter(producto => {
    if (producto.stock > 0)
        return (producto);
});
console.log(nuevoArreglo);
 //const nuevoArreglo = productos.filter(producto => producto.stock > 0);
//console.log(nuevoArreglo);
console.log("ARRAY CON LOS NOMBRES DE LOS PRODUCTOS");

const nomProductos = productos.map(producto => producto.nombre)
console.log(nomProductos);

console.log("PRECIO TOTAL DE PRODUCTOS");

const precioTotal=productos.reduce((acum, valorActual) => acum + valorActual.precio,0)
console.log(`Precio Total de los Productos : ${precioTotal}`);

console.log("MODIFICACION BASICA DE OBJETOS");

const estudiantes = [
    { nombre: "Camilo", edad: 33, promedio: 10 },
    { nombre: "Juan", edad: 10, promedio: 6 },
    { nombre: "Andres", edad: 10, promedio: 8.7 },
];

estudiantes.forEach( (est,index) => {
    if (index===0){
        console.log(`La Edad del Primer estudiante ahora es ${est.edad=25}`);
        console.log(`Datos Completos primer estdudiante: ${est.nombre}, ${est.edad} anos, ${est.promedio}`)
    }
    if(index === 1){
            console.log(`El Nombre del segundo estudiante es ${est.nombre}`);
        }
        
})


//console.log(`El Nombre del Segundo Estudiante es ${estudiantes.nombre}`);
//console.log (`La Edad actualizada del primer estudiante es  ${estudiantes[0].edad=25} anos`);
//console.log(`Información completa Estudiante 1: ${estudiantes[0].nombre} ${estudiantes[0].edad} años con promedio ${estudiantes[0].promedio} `)

console.log("TOTAL DE EDADES")

let TotalEdades=0;
let promedioEdades=0;
estudiantes.forEach(estudiante => 
    TotalEdades += estudiante.edad);
    promedioEdades = TotalEdades/estudiantes.length
console.log(`Total ${TotalEdades}; Promedio Edades ${promedioEdades}`);

console.log("SIGUIENTE**********")
const estudiantes1 = [
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
      promedio: 100,
      genero: "Masculino",
      carrera: "Ingeniería de Sistemas",
      ciudad: "Santa Marta",
    },
    {
      nombre: "Sofía",
      edad: 29,
      promedio: 120,
      genero: "Femenino",
      carrera: "Psicología",
      ciudad: "Pereira",
    },
  ];
  
  let mayorP=0;
 estudiantes1.filter(alumno =>{
  
        if (alumno.promedio > mayorP){
            mayorP = alumno.promedio;
        } else
            mayorP=mayorP;
     
 } ); console.log(`El Mayor Promedio es ${mayorP}` );

 estudiantes1.forEach(E => {
  if(E.promedio === mayorP){
    console.log(`El Nombre del estudiantes con Promedio más alto es ${E.nombre}, su edad es ${E.edad} y su promedio es ${E.promedio}`);

  }
 })

console.log("SIGUIENTE: ESTUDIANTES MAYORES DE 20");

const mayores=estudiantes1.filter(valor => valor.edad>20);

 
console.log(mayores);





 

    
        
    