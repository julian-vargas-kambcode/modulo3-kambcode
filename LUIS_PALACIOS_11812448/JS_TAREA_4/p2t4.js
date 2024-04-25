const entrada = require('readline'); // requiriendo módulo de readline

const ingreso = entrada.createInterface({  //creado interface de manipulación del salida (stdin ) y entrada (stdout)
    input: process.stdin,       //procedimiento de salida
    output: process.stdout      //procedimiento de entrada  
});

ingreso.question('Ingresa Nombre: ', (Nombre) => {             // entrada de datos a la variable base
    ingreso.question('Ingrese Horario: ', (Horario) => {     // entrada de datos a la variable altura
        console.log(Horario);
        if (Horario > 8 && Horario < 9) {
            console.log(Nombre, "la proxima entrada es a las 9am, lo siento su hora es", Horario); 
            ingreso.close();                                       
        }else if(Horario > 9 && Horario < 10){
            console.log(Nombre, "la proxima entrada es a las 10am, lo siento su hora es", Horario);  
            ingreso.close();                                       
        }else if(Horario > 10 && Horario < 14){
            console.log(Nombre, "la proxima entrada es a las 2pm, lo siento su hora es", Horario);   
            ingreso.close();                                       
        }else if (Horario > 14){
            console.log(Nombre, "la proxima entrada es mañana a las 8am, lo siento su hora es", Horario); 
            ingreso.close();  
        }else{
            console.log(Nombre, "Puede ingresar a la empresa, ha llegado a tiempo", Horario);   
            ingreso.close();
        }
    });
});
