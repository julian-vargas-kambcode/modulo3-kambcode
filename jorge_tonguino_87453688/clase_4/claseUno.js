const areaTriangulo = require('readline');

const area = areaTriangulo.createInterface({
    input: process.stdin,
    output: process.stdout
});

area.question('Ingresa la base del triángulo: ', (base) => {
    area.question('Ingresa la altura del triángulo: ', (altura) => {
        const areaTotal = (base * altura) / 2;
        console.log("El área del triángulo es:", areaTotal);
        area.close(); // Cierra la interfaz de lectura de línea
    });
});


