function nobreDeLosCompaneros () {
    let estudiantes = [
        "Jorge",
        "María",
        "Pedro", 
        "Alejo",
        "Claudia"
        ];
        console.log(estudiantes[3]);
        console.log(estudiantes[estudiantes.length -1]);
        estudiantes.push("David") // al fin 
        console.log(estudiantes);
        estudiantes.unshift("Ramiro") // al comienzo
        console.log(estudiantes);
        console.log(estudiantes.length); // tamaño
}
nobreDeLosCompaneros();
