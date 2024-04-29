let libros = [
    { titulo: "El principito", autor: "Antoine de Saint-Exupéry" },
    { titulo: "Don Quijote de la Mancha", autor: "Miguel de Cervantes" },
    { titulo: "Cien años de soledad", autor: "Gabriel García Márquez" },
  ];
  
  console.log("Libros cuyo título contiene la palabra El:");
  
  for (let index = 0; index < libros.length; index++) {
    if (libros[index].titulo.includes("El")) { 
      console.log(libros[index]);
    }
  }