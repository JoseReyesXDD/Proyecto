// Declaracion de variables
let nombre = "Juan"; // Esto declara una variablke
var apellido = "Perez"; // Esto tambien declara una variable
const PI = 3.1416; // Esto declara una constante
// La diferencia entre let y var tiene que ver con el scope
console.log(x)
let x = 10;
console.log(x);
// Tipos de datos
// String
let cadena = "hola mundo";
// Number
let numero = 10;
// Bolean
let boleano = true;
// Array
let array = ["Juan", "Pedro", "Maria"];
let arraybolean = [true, false, true];
let arraynum = [1, 2, 3, 4, 5];
let arraymix = ["Juan", 1, true];
let arrayobj = [{nombre: "Juan"}, {nombre: "Pedro"}];
// Object
let user = {
    nombre: "Juan",
    apellido: "Perez",
    lugarDeNacimiento: {
        pais: "Mexico",
        estado: "CDMX",
    },  
};
// Esto es JSON, Javascript Object Notation
console.log(user.nombre);
console.log(user.apellido);
console.log(user["nombre"]);
console.log(user["lugarDeNacimiento"]["pais"]);
console.log(user.lugarDeNacimiento.pais);
// let indefinido
let indefinido;
// Null
let nulo = null;
// Operadores
// Aritmeticos
let suma = 1+1;
let resta = 1-1;
let multiplicacion = 1*1;
let division = 1/1;
let modulo = 1%1;
// comparacion
let mayor = 1>1;
let menor = 1<1;
let mayorigual = 1>=1;
let menorigual = 1<=1;
let igual = 1 == 1; // == compara el valor
let identico = 1 === 1; // === compara tambien el tipo de dato
let xx = 1;
let y = "1";
let igualdad = x == y;
let identidad = x === y;
console.log(igualdad);
console.log(identidad);
let diferente = 1!=1;
let noidentico = 1!==1;
// Logicos
let and = true && false;
let or = true || false;
let not = !true;
// condicionales
// if 
if (true){

}
// switch
let dia = "Lunes";
switch (dia) {
    case "Lunes":
        
        break;
    case "Lunes":
        
        break;
    default:
        console.log("No es lunes ni martes")
        break;
}
// Funciones
function saludar(){
    console.log("Hola")
}

function suma(a, b){
    return a + b;
}

suma(1,2);
suma("Hola", "Mundo");


function sumafuncion(a, b){
    return a + b;
}
// las funciones flecha estaran en muchas cosas que hagamos
const sumafuncioncorta = (a, b) => a + b;
sumafuncion(1,2);
// Callback
function operacion(a,b, callback){
    return callback(a,b);
}
console.log(operacion(1, 2, sumafuncion));

// ciclos
// for
for (let i = 0; i < 10; i++) {
   console.log(i);
}
// while
let bandera = true;
let contador = 0;
while (bandera) {
    contador++;
    console.log("while " + contador);
    if( contador == 10)
    {
        bandera = false
    }
}
// do while
bandera = true;
contador = 0;
do {
    contador++;
    console.log("do while " + contador);
    if( contador == 10) {
        bandera = false
    }
    
} while (bandera);

// for each