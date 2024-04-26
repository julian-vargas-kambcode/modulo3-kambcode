
let libros = [
    { titulo: "El principito", autor: "Antoine de Saint-Exupéry"},
    { titulo: "Don Quijote de la Mancha", autor: "Miguel de Cervantes" },
    { titulo: "Cien años de soledad", autor: "Gabriel García Márquez" },
  ];

  const texto= libros.titulo;

  //const resultado=libros.indexOf(libro => libro.titulo === "Cien años de soledad")
  //console.log(resultado);
  
  if(libros.includes(texto)){
      console.log('ok');
  }else{
    console.log("no");
  }

  
  //console.log(`El texto "${texto}" ${libros.titulo(texto)}`);
  
  
  //const resultado=libros.findIndex(libro => libro.titulo==="Cien años de soledad")
  //console.log(resultado);
  
  
  //const resultado= (dato) =>{
    //return dato.autor === "Gabriel García Márquez"
  //}

  //console.log(libros.find(resultado));
// otra forma de escribirlo seria
  //const resultado=libros.find(elemento => elemento.autor==="Gabriel García Márquez")
  //console.log(resultado);

  //const resultado=libros.filter(libro => libro.titulo === "Don Quijote de la Mancha");
  //console.log(resultado);
  

  //const resultado = libros.find(elemento =>
    //elemento.autor === "Miguel de Cervantes"
  //);
  //console.log(resultado);

