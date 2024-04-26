/*Punto 1: Acceso y Modificación Básica de Datos:

** Crea un array llamado estudiantes que contenga objetos representando a tres estudiantes.
    - Cada objeto debe tener las siguientes propiedades: nombre, edad, y promedio.
    - Imprime en la consola el nombre del segundo estudiante.
    - Actualiza la edad del primer estudiante a 25 años.
    Imprime en la consola la información completa del primer estudiante después de la 
    actualización.*/
console.log(`Punto 1: Acceso y Modificación Básica de Datos:
    `)

let estudiantes = [
  { nombre: "Juanes", edad: 5, promedio: 4.0 },
  { nombre: "Danna", edad: 11, promedio: 3.5 },
  { nombre: "Vivian", edad: 35, promedio: 3.0 },
];
let i = 1;
console.log(`EL NOMBRE DEL SEGUNDO ESTUDIANTE DEL ARRAYS ES ` + estudiantes[i].nombre)
console.log(estudiantes)
estudiantes[0].edad = 25;
console.log(estudiantes)
console.log(`nombre: ` + estudiantes[0].nombre + estudiantes[0].edad)
console.log(estudiantes[0])

/*- **Punto 2: Cálculo de Estadísticas Básicas:** Utilizando un bucle for, 
calcula la suma de las edades de todos los estudiantes en el array.
- Calcula el promedio de edad de los estudiantes.
- Imprime en la consola tanto la suma como el promedio de edad de los estudiantes.*/
console.log(`**********************************`)

console.log(`
    Punto 2: Cálculo de Estadísticas Básicas:
    `)

console.log(estudiantes)
let suma = 0;

for (const pro of estudiantes) {
  suma += pro.edad;
}
console.log(`SUMA DE EDADES DE LOS ESTUDIANTES: ` + suma)
console.log(`PROMEDIO DE LA EDAD DE LOS ESTUDIANTES ES :` + suma / (estudiantes.length))





console.log(`**********************************`)

/***Punto 3: Búsqueda y Filtrado de Datos (Opcional):** Utiliza un bucle for para encontrar
  al estudiante con el promedio más alto en el array.
- Imprime en la consola el nombre y la edad del estudiante con el promedio más alto.
- Filtra los estudiantes mayores de 20 años en un nuevo array llamado estudiantesMayores.
- Imprime en la consola la información completa de los estudiantes mayores de 20 años.
  
```javascript
*/


console.log(`
Punto 3: Búsqueda y Filtrado de Datos (Opcional):
    `)
const alumnos = [
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
    nombre: "Sofía",
    edad: 22,
    promedio: 95,
    genero: "Femenino",
    carrera: "Psicología",
    ciudad: "Pereira"
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
  }
];
let alto = 0;

for (const mayor of alumnos) {
  if (mayor.promedio > alto){
    alto = mayor.promedio;    
    }
    
}


for (const mayor of alumnos) {
  if(mayor.promedio == alto)
  console.log(`ALUMNO CON PROMEDIO MAS ALTO ES ` + mayor.nombre + ` CON ` + mayor.edad + ` AÑOS Y SU PROMEDIO ES ` + mayor.promedio )
}

let estudiantesMayores=[];
for (const mayor of alumnos) {
  if(mayor.edad >= 18){
    estudiantesMayores.push(mayor)
   
  }
  
}
console.log(`EL NUEVO ARREGLO CON LOS ESTUDIANTES MAYORES DE EDAD SON  `)
console.log(estudiantesMayores)
