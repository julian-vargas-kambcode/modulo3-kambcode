// calculo de estadisticas básicas

let estudiantes=[
    {
        nombre: "Sofia",
        edad: 30,
        promedio: 69
    },
    {
        nombre: "Kamilo",
        edad: 23,
        promedio: 78
    },
    {
        nombre: "Angel",
        edad: 32,
        promedio: 62
    }
];
promedio();

function promedio(){
    let suma=0;
    for (let i=0; i<estudiantes.length;i++){
        suma +=estudiantes[i].edad;
    }
    console.log('la suma total de las edades es :',suma, 'el promedio es:',(suma/estudiantes.length));
}