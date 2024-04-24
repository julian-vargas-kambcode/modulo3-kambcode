document.addEventListener("DOMContentLoaded", function() {
    let estudiantes = [
      { nombre: "Juan", edad: 20 },
      { nombre: "María", edad: 22 },
      { nombre: "Pedro", edad: 19 },
    ];
  
    for (let i = 0; i < estudiantes.length; i++) {
      estudiantes[i].edad += 1;
    }
  
    let listaEstudiantes = document.getElementById("listaEstudiantes");
  
    estudiantes.forEach(function(estudiante) {
      let li = document.createElement("li");
      li.textContent = `${estudiante.nombre}: ${estudiante.edad} años`;
      listaEstudiantes.appendChild(li);
    });
  });
  