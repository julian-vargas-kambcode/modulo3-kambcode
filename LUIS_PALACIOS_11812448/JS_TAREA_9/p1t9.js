function sumarArreglo(numeros, callback) {
    // Completa esta función para sumar todos los números del arreglo y llamar al callback con el resultado
    suma = numeros.reduce((acumul,value ) => {
        
        return acumul + value;
   }, 0);
   callback(suma);
   
  }

  const numeros = [1, 2, 3, 4, 5];
  sumarArreglo(numeros, function (resultado) {
    console.log(resultado); // Debería imprimir 15
  });