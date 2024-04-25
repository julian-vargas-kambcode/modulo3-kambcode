const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('¿Cómo te llamas? ', (nombre) => {
  rl.question(`Hola, ${nombre}! ¿Cuál es tu edad? `, (edad) => {
    rl.question(`¿Y en qué ciudad vives, ${nombre}? `, (ciudad) => {
        rl.question(`¿Y tienes esposa?, ${nombre}? `, (casado) => {
            console.log(`Entonces, ${nombre}, tienes ${edad} años y vives en ${ciudad} ¡Qué interesante!, ${casado} eres casado.` );
            rl.close();
        })
    });
  });
});