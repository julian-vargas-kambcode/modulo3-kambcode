document.addEventListener("DOMContentLoaded", function() {
    let frutas1 = ["Manzana", "Plátano", "Naranja"];
    let frutas2 = ["Fresa", "Uva", "Piña"];
    let frutasConcatenadas = [];
  
    for (let i = 0; i < frutas2.length; i++) {
      frutas1.push(frutas2[i]);
    }
  
    let listaFrutas = document.getElementById("listaFrutas");
  
    frutas1.forEach(function(fruta) {
      let li = document.createElement("li");
      li.textContent = fruta;
      listaFrutas.appendChild(li);
    });
  });
  