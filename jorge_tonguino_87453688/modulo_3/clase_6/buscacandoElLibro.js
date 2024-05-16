let libros = [
    { titulo: "El principito", autor: "Antoine de Saint-Exupéry" },
    { titulo: "Don Quijote de la Mancha", autor: "Miguel de Cervantes" },
    { titulo: "Cien años de soledad", autor: "Gabriel García Márquez" },
  ];
  
  console.log("Libros cuyo título contiene la palabra 'El':");
  
  for (let i = 0; i < libros.length; i++) {
    if (libros[i].titulo.includes("El")) { //llamo al que quiero aqui.
      console.log(libros[i]);
    }
  }