const buscarAreaTriangulo = require('readline');

const areaTotal = buscarAreaTriangulo.createInterface({
    input: process.stdin,
    output: process.stdout
});

areaTotal.question('Ingresa la base del triángulo: ', (base) => {
    areaTotal.question('Ingresa la altura del triángulo: ', (altura) => {
        const areaFinal = (base * altura) / 2;
        console.log("El área del triángulo es:", areaFinal);
        areaTotal.close();
    });
});