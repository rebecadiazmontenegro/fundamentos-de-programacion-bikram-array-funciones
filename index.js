//Iteraciones :crossed_swords: Pair Programming :crossed_swords:
//Arrays

let arrayVacio = [];
let arrayNumeros = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
let arrayNumerosPares = [0, 2, 4, 6 , 8];
let arrayBidimensional = [
    [0, 1, 2,], 
    ["a", "b", "c"],
];

//Funciones

function suma(a, b) {
    return a + b;
}

function potenciacion(a, b) {
    return a ** b; 
}

function separarPalabras(str) {
    return str.split ("hola mundo");
}

function repetirString (str, num) {
    let stringSumado = "";
    for(let i = 0 ; i < num; i++) {
        stringSumado += str;
    }
    return stringSumado;
}

function esPrimo(num){
    for(let i = 2; i < num/2; i++) {
        if(num % i === 0) {
            return false;
        } else {
            return true;
        }
    }
}

//Mezclando arrays y funciones

function ordenarArray(arr) {
    return arr.sort (function (a,b) {
        return a-b;
    });
}

function obtenerPares(arr) {
    return arr.filter((number) => number % 2 === 0);
}

function pintarArray(arr) {
    let resultado = array[0].toString();
    for(let i = 1; i < array.length; i++) {
        resultado += ", " + array[i].toString();
    } 
    return "[" + resultado + "]";
}

function arrayMapi(arr,funcion) {
    let arrayFuncion = [];
    for(let i = 0; i < array.length; i++) {
        arrayFuncion[i] = funcion(array[i]);
    }
    return arrayFuncion;
}

function eliminarDuplicados(arr){
    let nuevoArray = [];
    for(let i = 0; i < array.length; i++) {
        if(!nuevoArray.includes(array[i])) {
        nuevoArray.push(array[i]);
        }
    }
}

//Iteraciones :european_castle: proyecto :european_castle:
//Arrays

let arrayNumerosNeg = [-1, -2, -3, -4, -5, -6, -7, -8, -9];
let holaMundo = ["hola", "mundo"];
let loGuardoTodo = ["hola", "que", 23, 42.33, "tal"];
let arratDeArrays = [
    [756, "nombre"],
    [225, "apellido"],
    [298, "direccion"],
];

//Funciones

function multiplicacion(a, b) {
    return a * b;
}

function division(a, b) {
    return a / b;
}

function esPar(num) {
    if(num % 2 == 0) {
        return true;
    } else {
        return false;
    }
}

function resta(a, b) {
    return a - b;
}

arrayFunciones = [suma, resta, multiplicacion];

//Mezclando arrays y funciones

function ordenarArray2(arr) {
    return arr.sort(function(a, b) {
        return b - a;
    }); 
}

function obtenerImpares(arr) {
    return arr.filter((number) => number % 2 !== 0);
}

function sumarArray(arr) {
   let sumaTotal = 0;
   for(let i = 0; i < arr.length; i++) {
    sumaTotal += arr[i];
   }
   return sumaTotal;
}

function multiplicarArray(arr) {
    let multiplicacionTotal = 1;
    for( let i = 1; i < arr.length; i++) {
        multiplicacionTotal += arr[i];
    }
    return multiplicacionTotal;
}
