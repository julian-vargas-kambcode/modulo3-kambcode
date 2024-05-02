const area = require('readline'); // requiriendo módulo de readline

const triangulo = area.createInterface({  //creado interface de manipulación del salida (stdin ) y entrada (stdout)
    input: process.stdin,       //procedimiento de salida
    output: process.stdout      //procedimiento de entrada  
});

triangulo.question('Ingresa la base: ', (base) => {             // entrada de datos a la variable base
    triangulo.question('Ingresa la altura: ', (altura) => {     // entrada de datos a la variable altura
        
        if (base > 0 && altura > 0) {
            let resultado = (base * altura) / 2;                    // asignación de calculo en la variable resultado base X altura
            console.log("El área del triángulo es:", resultado);    // salida de datos en la variable resultado
            triangulo.close();                                      // finalizando el ciclo de la función 
        }else if(base > altura){
            resultado = (base * altura) / 2;
            console.log("El área no es un triángulo porque la altura es:",altura," y su área", resultado);   // salida de datos en la variable resultado
            triangulo.close();                                      // finalizando el ciclo de la función 
        }else{
            resultado = (base * altura) / 2;
            console.log("El área no es un triángulo porque la base es:",base," y su área ", resultado);   // salida de datos en la variable resultado
            triangulo.close();                                      // finalizando el ciclo de la función 
        }
    });
});