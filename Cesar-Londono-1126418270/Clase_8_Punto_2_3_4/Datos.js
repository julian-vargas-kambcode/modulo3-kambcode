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

console.log("Nombre del segundo estudiante:", estudiantes[1].nombre);

estudiantes[0].edad = 25;

console.log("Información del primer estudiante después de la actualización:", estudiantes[0]);

const sumaEdades = estudiantes.reduce((total, estudiante) => total + estudiante.edad, 0);
const promedioEdad = sumaEdades / estudiantes.length;
console.log("Suma de edades:", sumaEdades);
console.log("Promedio de edad:", promedioEdad);

const estudianteMayorPromedio = estudiantes.reduce((mayor, actual) =>
  mayor.promedio > actual.promedio ? mayor : actual
);
console.log(
  "Estudiante con el promedio más alto:",
  estudianteMayorPromedio.nombre,
  "- Edad:",
  estudianteMayorPromedio.edad
);

const estudiantesMayores20 = estudiantes.filter(estudiante => estudiante.edad > 20);
console.log("Estudiantes mayores de 20 años:", estudiantesMayores20);
