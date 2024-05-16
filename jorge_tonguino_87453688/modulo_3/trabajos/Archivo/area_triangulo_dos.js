const readline = require('readline');

const areaTriangulo = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function calcularArea(base, altura) {
    return new Promise((resolve, reject) => {
        if (isNaN(base) || isNaN(altura)) {
            reject(new Error('Por favor, ingresa valores numéricos válidos.'));
        } else {
            const area = (base * altura) / 2;
            resolve(area);
        }
    });
}

async function main() {
    try {
        const base = await pregunta('Ingresa la base del triángulo: ');
        const altura = await pregunta('Ingresa la altura del triángulo: ');
        const areaTotal = await calcularArea(parseFloat(base), parseFloat(altura));
        console.log('El área del triángulo es:', areaTotal);
    } catch (error) {
        console.error(error.message);
    } finally {
        areaTriangulo.close();
    }
}

function pregunta(pregunta) {
    return new Promise((resolve) => {
        areaTriangulo.question(pregunta, (respuesta) => {
            resolve(respuesta);
        });
    });
}

main();
