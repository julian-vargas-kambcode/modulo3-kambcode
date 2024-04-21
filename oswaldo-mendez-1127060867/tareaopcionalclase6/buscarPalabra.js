let libros = [
    { titulo: "El principito", autor: "Antoine de Saint-Exupéry" },
    { titulo: "Don Quijote de la Mancha", autor: "Miguel de Cervantes" },
    { titulo: "Cien años de soledad", autor: "Gabriel García Márquez" },
];
let librosBuscados=[];
let cont=0;

for (let i=0; i<libros.length; i++){
    let palabra=libros[i].titulo.lastIndexOf('El');
    console.log(palabra);

    if(palabra!= -1){
        librosBuscados[cont]=libros[i];
        cont++;
    }

}
console.log(librosBuscados);