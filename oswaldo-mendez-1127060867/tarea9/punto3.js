
// Función para filtrar números pares y llamar a un callback con el resultado
function filtrarPares(numeros, callback) {
    // Tu codigo acá
    const newArreglo = numeros.filter((num) => num %2 ===0
    );
    callback(newArreglo);
  }
  
  // Callback para mostrar los números pares en la consola
  function mostrarPares(numerosPares) {
    // Tu codigo acá
    console.log(numerosPares); 
  }
  
  // Array de números de ejemplo
  const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  
  // Llamar a la función filtrarPares y pasar el callback mostrarPares
  filtrarPares(numeros, mostrarPares);
  



