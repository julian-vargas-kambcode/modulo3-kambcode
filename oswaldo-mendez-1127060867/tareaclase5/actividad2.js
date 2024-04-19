const numPrimo= require('readline');
var p=0;
let primo= numPrimo.createInterface(
    process.stdin, process.stdout);

primo.question('Ingresa número a evaluar:', (numEvaluar)=>{
    if(numEvaluar<=1){
        console.log('el número no es primo');
        primo.close();
    }
    if(numEvaluar===2){
        console.log('el número es primo');
        primo.close();
    }
    for (let i=2; i<=(numEvaluar/2);i++){
        
        let x=numEvaluar%i;
        if(x === 0){  
           p++; 
           console.log('el numero no es primo');
           break;
        }
    }
    if(p===0){
        console.log('el numero', numEvaluar, 'es primo');
    }
    primo.close();
})