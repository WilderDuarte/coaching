// ########## TIPO DE VARIABLES
// const para constantes
const pi  = 3.1416;
const pul = 2.54;
// var para variables globales
var cant_days = 10;
var name      = "Wilder Duarte" ;
// let para varaibles de bloque o locales
let count = 5;
let i     = 0;

// ########## FORMAS DE IMPRESIÓN O SALIDA EN PANTALLA
// alert
// alert(name);
// console
console.log(cant_days);
console.log("10");
// body - pantalla
document.write(name);
document.getElementById("text_one").innerHTML = "<h1>Wilder Duarte</h1>"
document.getElementById("text_two").innerText = "<h1>Wilder Duarte</h1>"
// librerías por ejm sweetalert
Swal.fire({
    icon: 'success',
    title: 'Wilder Duarte',
    text: 'Docente de la Ufpso',
    footer: name,
    showConfirmButton: false,
    timer: 2000,
    background: '#000'
});

// ########## TIPO DE DATOS
// numéricos
let number_one = 10;
let number_two = 5.5;
// string
let text = "Soy un texto";
// booleanos
let boolean = true; // false
// array 
let array_num = [1,2,3,4,5,6];
let array_tex = ["Lunes","Martes","Miércoles","Jueves","Viernes","Sábado","Domingo"];
let arrya_mix = [1.5, "a", 10, "b"];
let array_mul = [
    { name:"Wilder", last_name:"Duarte",age:31 },
    { name:"Anyi", last_name:"Martínez" ,age:32 },
    { name:"Celeste", last_name:"Duarte" ,age:3 },
    { name:"Antonella", last_name:"Duarte" ,age:1 }
];

// ########## OPERADORES BÁSICOS
// suma +
var suma = number_one + number_two;
console.log("Suma = " + suma);
// resta - 
var resta = number_one - number_two;
console.log("Resta = " + resta);
// multiplicacion * 
var multi = number_one * number_two;
console.log("Multi = " + multi);
// division / 
var divi = number_one / number_two;
// divi = divi.toFixed(2);
console.log("División = " + divi.toFixed(2));
// modulo %
var modulo = number_one % number_two;
console.log("Módulo = " + modulo);

console.log(
    "Suma = " + suma + "\n" +
    "Resta = " + resta + "\n" +
    "Multi = " + multi + "\n" +
    "División = " + divi.toFixed(2) + "\n" +
    "Módulo = " + modulo
    )

var respuesta =     "Suma = " + suma + "<br>" + "Resta = " + resta + "<br>" + "Multi = " + multi + "<br>" + "División = " + divi.toFixed(2) + "<br>" + "Módulo = " + modulo;

Swal.fire({
    icon: 'success',
    title: 'Resultados',
    html: respuesta,
    background: '#fff'
});