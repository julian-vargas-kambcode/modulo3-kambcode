
// Tarea 5.1 - Descuentos

let weight = Number(prompt('Por favor ingresar peso en kg'));

function calcularDescuento(){
    let discount = 0;
    if (weight > 0 && weight <= 2){
        discount = 0;
        document.write(`El descuento aplicado es: ${discount} %`);
        document.write('<br>');
    } else if (weight > 2 && weight <= 5){
        discount = 10;
        document.write(`El descuento aplicado es: ${discount} %`);
        document.write('<br>');
    } else if (weight > 5 && weight <= 10){
        discount = 15;
        document.write(`El descuento aplicado es: ${discount} %`);
        document.write('<br>');
    } else if (weight > 10){
        discount = 20;
        document.write(`El descuento aplicado es: ${discount} %`);
        document.write('<br>');
    } else {
        alert('El valor de peso ingresado es incorrecto');
    }
    return discount;
}

let price = Number(prompt('Por favor ingresar precio de las manzanas por kg'));
function caclularPrecio(){
    let finalPrice = 0;
    var descuento = calcularDescuento();
    finalPrice = price * (1 - (descuento / 100));
    document.write(`El valor total a pagar es: $${finalPrice}`);
    document.write('<br>');
}

caclularPrecio();

// Tarea 5.2 - Número primo

let number = Number(prompt('Ingrese el número a calcular'));

if (number > 1){
    for (let i = 2; i <= number / 2; i++){
        if (number % i === 0){
            document.write('El número ingresado no es primo');
            document.write('<br>');
            break;
        } else {
            document.write('El número ingresado es primo');
            document.write('<br>');
            break;
        }
    }
} else {
    alert('El número ingresado no es mayor a 1');
}


