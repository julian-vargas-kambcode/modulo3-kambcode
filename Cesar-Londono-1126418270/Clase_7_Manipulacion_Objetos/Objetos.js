const estudiantes = [
    { nombre: "Ana", edad: 20, promedio: 85 },
    { nombre: "Juan", edad: 22, promedio: 78 },
    { nombre: "María", edad: 21, promedio: 90 }
];

const outputContainer = document.getElementById("outputContainer");

document.getElementById("option1").addEventListener("click", function() {
    outputContainer.innerHTML = "";

    const nombreSegundoEstudiante = document.createElement("p");
    nombreSegundoEstudiante.textContent = "Nombre del segundo estudiante: " + estudiantes[1].nombre;

    estudiantes[0].edad = 25;
    const infoPrimerEstudiante = document.createElement("p");
    infoPrimerEstudiante.textContent = "Información del primer estudiante actualizada: " +
        "Nombre: " + estudiantes[0].nombre + ", Edad: " + estudiantes[0].edad + ", Promedio: " + estudiantes[0].promedio;

    outputContainer.appendChild(nombreSegundoEstudiante);
    outputContainer.appendChild(infoPrimerEstudiante);
});

document.getElementById("option2").addEventListener("click", function() {
    outputContainer.innerHTML = "";
    let sumaEdades = 0;
    for (let estudiante of estudiantes) {
        sumaEdades += estudiante.edad;
    }
    const promedioEdad = sumaEdades / estudiantes.length;

    const sumaEdadesElement = document.createElement("p");
    sumaEdadesElement.textContent = "Suma de edades: " + sumaEdades;

    const promedioEdadElement = document.createElement("p");
    promedioEdadElement.textContent = "Promedio de edad: " + promedioEdad;

    outputContainer.appendChild(sumaEdadesElement);
    outputContainer.appendChild(promedioEdadElement);
});

document.getElementById("option3").addEventListener("click", function() {
    outputContainer.innerHTML = "";
    let estudianteMayorPromedio = estudiantes[0];
    for (let estudiante of estudiantes) {
        if (estudiante.promedio > estudianteMayorPromedio.promedio) {
            estudianteMayorPromedio = estudiante;
        }
    }

    const estudiantePromedioAlto = document.createElement("p");
    estudiantePromedioAlto.textContent = "Estudiante con el promedio más alto: " + estudianteMayorPromedio.nombre + ", " + estudianteMayorPromedio.edad + " años";

    const estudiantesMayores = estudiantes.filter(estudiante => estudiante.edad > 20);
    const listaEstudiantesMayores = document.createElement("ul");
    estudiantesMayores.forEach(estudiante => {
        let li = document.createElement("li");
        li.textContent = `${estudiante.nombre} - ${estudiante.edad} años - ${estudiante.promedio}`;
        listaEstudiantesMayores.appendChild(li);
    });

    outputContainer.appendChild(estudiantePromedioAlto);
    outputContainer.appendChild(listaEstudiantesMayores);
});
