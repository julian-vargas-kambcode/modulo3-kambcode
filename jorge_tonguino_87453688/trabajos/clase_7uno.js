let primerObgeto = {
    nombre: "David",
    edad: 21,
    curso: 301
}
console.log(primerObgeto.nombre, primerObgeto["edad"]);

primerObgeto.curso = "javascript";
console.log(primerObgeto)
for (const key in primerObgeto){
    console.log(key , primerObgeto[key])
}