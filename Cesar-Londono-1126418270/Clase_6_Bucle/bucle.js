document.addEventListener("DOMContentLoaded", function() {
    let numeros = [1, 2, 3, 4, 5];
    let resultado = [];
  
    for (let i = 0; i < numeros.length; i++) {
      resultado.push(numeros[i] * 2);
    }
  
    let outputDiv = document.getElementById("output");
    outputDiv.textContent = "Resultado: " + resultado.join(", ");
  });
  