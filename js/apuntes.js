// 1. VARIABLES
// 1.1 var
var nombre; //variable creada
console.log(nombre);

nombre ="Gustavo";
console.log(nombre); 

var nombre; //variable creada
var apellido; //variable creada
var edad; //variable creada

apellido = "Lozano";
edad = 42;

console.log(nombre); 
console.log(apellido); 
console.log(edad); 

var nombre01, 
    apellido01, 
    edad01; 

nombre01="Baby";
apellido01="Yoda"; 
edad01=500;

console.log(nombre,apellido,edad);
console.log(nombre01,apellido01,edad01);

var nombreProfesor = "Arturo";
console.log(nombreProfesor);

// 1.2 let Otra forma de declarar variables

let nombreAlumno="Juan";
console.log(nombreAlumno);

//let nombreAlumno="Marcos";  //no se puede crear la misma variable dos veces
nombreAlumno="Marcos";  //sí se puede re asignar
console.log(nombreAlumno);

//1.3 const Otra forma de declarar constant 
const nombreAlumno01="Jesus";
//const nombreAlumno01; //es un error solo declararla sin asignar 
console.log(nombreAlumno01);

//nombreAlumno01="Chucho"; // como es una constante no se puede reasignar
console.log(nombreAlumno01);


// 2.DATOS
// 2.1 Numeros
let precio=32;
console.log(precio);

//2.2 Cadena
precio="32"; //se reasigna y se cambia el tipo de dato
console.log(precio); 

//2.3 Booleano
precio=true;
console.log(precio); 
precio=false;
console.log(precio); 

//3. OPERADORES
//3.1 suma
// Introducción a funciones
console.clear();
const   numero01=20,
        numero02=30,
        numero03="10",
        numero04=10.50,
        numero05=-10.50;

let resultado;
//suma
resultado = numero01 + numero02;
//resta
resultado = numero04 - numero05;
//resta2 
resultado = numero03 - numero04; //si funciona aunque numero03 es una cadena
//suma
resultado = numero02 + numero03;
//multiplicar
resultado = numero01 * numero02;
//división
resultado = numero01 / numero02;



console.log(resultado);

