# Tarea 7 Manipulación Básica de Arrays y Objetos

## Punto 1: Acceso y Modificación Básica de Datos:

- Cada objeto debe tener las siguientes propiedades: nombre, edad, y promedio.
- Imprime en la consola el nombre del segundo estudiante.
- Actualiza la edad del primer estudiante a 25 años. Imprime en la consola la información completa del primer estudiante después de la actualización.

```
function punto1 () {
        const estudiantes = [
            {
                nombre: "yina",
                edad: 39,
                promedio: 80,
            },

            {
                nombre: "weymar",
                edad: 17,
                promedio: 90,
            },

            {
                nombre: "deimar",
                edad: 12,
                promedio: 40,
            },
        ]

        console.log("el segundo nombre es", estudiantes[1].nombre);
        console.log("edad actual", estudiantes[0]);
        estudiantes[0].edad = 25;
        console.log("nueva edad", estudiantes[0]);
}
punto1();
console.log("------------------punto1-------------------");
```
## Punto 2: Cálculo de Estadísticas Básicas:

- Calcula el promedio de edad de los estudiantes.
- Imprime en la consola tanto la suma como el promedio de edad de los estudiantes.
```
function punto2(){
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
    let sumaedades=0;
    let totalestudiantes=0;

    for (let i = 0; i < estudiantes.length; i++) {
        sumaedades += estudiantes[i].edad;
        totalestudiantes = estudiantes.length;
    }
    
    //console.log(estudiantes);
    console.log("la suma de las edades es",sumaedades);
    console.log("el promedio de las edades es",sumaedades/totalestudiantes);
}

punto2();
console.log("------------------punto2-------------------");
```
## Punto 3: Búsqueda y Filtrado de Datos (Opcional):

- Imprime en la consola el nombre y la edad del estudiante con el promedio más alto.
- Filtra los estudiantes mayores de 20 años en un nuevo array llamado estudiantesMayores.
- Imprime en la consola la información completa de los estudiantes mayores de 20 años.
```
function punto3 (){
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

    let maximo = estudiantes[0].promedio;
    let promedioMaxi = [];
    let estudiantesmayores = [];
  
    for (let i = 0; i < estudiantes.length; i++){
          if (estudiantes[i].promedio >= maximo) {
            promedioMaxi = estudiantes[i];
          }
        }

estudiantesmayores = estudiantes.filter(estudiante => estudiante.edad > 20); 
       

  console.log("el promedio mas alto es",promedioMaxi.promedio);
  console.log(promedioMaxi.nombre,promedioMaxi.edad,promedioMaxi.promedio);
  console.log("Estudiantes amyores de 20 años: ",estudiantesmayores);
}

punto3();
console.log("------------------punto3-------------------");
```
