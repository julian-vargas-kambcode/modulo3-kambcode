# Programa para calcular descuentos.
## Punto 1 Tarea 5.
```
const fruteria = require('readline'); // requiriendo módulo de readline

const tienda = fruteria.createInterface({  //creado interface de manipulación del salida (stdin ) y entrada (stdout)
    input: process.stdin,       //procedimiento de salida
    output: process.stdout      //procedimiento de entrada  
});

tienda.question('Ingresa la precio: ', (precio) => {             // entrada de datos a la variable precio
    tienda.question('Ingresa la peso: ', (peso) => {     // entrada de datos a la variable peso

        let descuento = 0;
        let totalp = 0;
        
        if (peso > 2 && peso <= 5) {
            descuento = (0.10);  
            totalp = precio*(1-descuento);
            console.log("total a pagar:",totalp);  
            tienda.close();                          
        }else if(peso > 5 && peso <= 10){
            descuento = (0.15);  
            totalp = precio*(1-descuento);
            console.log("total a pagar:", totalp); 
            tienda.close();              
        }else if (peso > 10){
            descuento = (0.20);  
            totalp = precio*(1-descuento);
            console.log("total a pagar:", totalp); 
            tienda.close();                        
        }else{
            totalp = precio*(1-descuento);
            console.log("total a pagar:", totalp); 
            tienda.close();
        }
    });
});
```

# Calcular si un numero es primo (OPCIONAL)
## Punto 2 tarea 5 
```
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
```