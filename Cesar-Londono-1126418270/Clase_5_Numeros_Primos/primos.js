function esPrimo(numero) {
    if (numero <= 1) {
        return false;
    }

    for (let i = 2; i <= Math.sqrt(numero); i++) {
        if (numero % i === 0) {
            return false;
        }
    }

    return true;
}

function verificarPrimalidad() {
    let numero = parseInt(document.getElementById('numeroInput').value);
    let resultadoDiv = document.getElementById('resultado');

    if (isNaN(numero)) {
        resultadoDiv.textContent = 'Ingrese un número válido.';
        resultadoDiv.style.color = 'red';
    } else {
        if (esPrimo(numero)) {
            resultadoDiv.textContent = `${numero} es un número primo.`;
            resultadoDiv.style.color = 'green';
        } else {
            resultadoDiv.textContent = `${numero} no es un número primo.`;
            resultadoDiv.style.color = 'red';
        }
    }
}
