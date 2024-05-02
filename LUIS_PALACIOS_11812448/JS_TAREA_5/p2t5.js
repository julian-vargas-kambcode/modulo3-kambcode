const primo = require('readline'); // requiriendo módulo de readline

const impar = primo.createInterface({  //creado interface de manipulación del salida (stdin ) y entrada (stdout)
    input: process.stdin,       //procedimiento de salida
    output: process.stdout      //procedimiento de entrada  
});

impar.question('Ingrese numero entero: ', (numero) => {             // entrada de datos a la variable precio
    let mensaje="";
    if (numero > 1) {
        for (let i = 2; i < numero/2; i++) {
           if (numero % i ==0) {
            mensaje = "el numero no es primo";
            impar.close();
           } else {
            mensaje = "el numero es primo";
            impar.close();
           }   
        }
        console.log(mensaje);
        impar.close();
    }else{
        console.log("el numero no es primo");  
        impar.close();
    } 
           
});