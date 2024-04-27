
const productos = [
    { nombre: "Camiseta", precio: 20, stock: 10 },
    { nombre: "Pantalón", precio: 30, stock: 5 },
    { nombre: "Zapatos", precio: 50, stock: 0 },
    { nombre: "Bufanda", precio: 15, stock: 8 },
];

const productosEnStock = productos.filter(producto => producto.stock > 0);
console.log("Productos en stock:", productosEnStock);

const nombresProductos = productos.map(producto => producto.nombre);
console.log("Nombres de los productos:", nombresProductos);

const precioTotal = productosEnStock.reduce((total, producto) => total + producto.precio, 0);
console.log("Precio total de los productos disponibles:", precioTotal);


const estudiantes = [
    { nombre: "Camilo", edad: 33, promedio: 10 },
    { nombre: "Juan", edad: 30, promedio: 6 },
    { nombre: "Andres", edad: 29, promedio: 8.7 },
];

console.log("Nombre del segundo estudiante:", estudiantes[1].nombre);


estudiantes[0].edad = 25;
console.log("Información del primer estudiante después de la actualización:", estudiantes[0]);

const sumaEdades = estudiantes.reduce((total, estudiante) => total + estudiante.edad, 0);
console.log("Suma de las edades de los estudiantes:", sumaEdades);


const promedioEdad = sumaEdades / estudiantes.length;
console.log("Promedio de edad de los estudiantes:", promedioEdad);


const estudianteMaxPromedio = estudiantes.reduce((max, estudiante) => estudiante.promedio > max.promedio ? estudiante : max);
console.log("Estudiante con el promedio más alto:", estudianteMaxPromedio.nombre, "-", estudianteMaxPromedio.edad);


const estudiantesMayores = estudiantes.filter(estudiante => estudiante.edad > 20);
console.log("Estudiantes mayores de 20 años:", estudiantesMayores);

