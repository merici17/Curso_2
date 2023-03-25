/*
    Se comoce como operadores de comparacion a los simbolos que nos permiten
    realizar operaciones binarias(entre 2 elementos) de comparacion.
*/

// Igual que == : Devuelve true(verdadero) si los elementos son iguales 
// Y retorna false(falso) si no son iguales
// (No toma en cuenta el tipo de dato, solo el valor).


// True
console.log( 1 == 1);
console.log( "1" == 1);

let miVariable = "a";

console.log( 2 == 1);
console.log("2" == 3);
console.log("a" == miVariable);
console.log(miVariable == miVariable);




// No es igual que != : Devuelve true si los operandos NO son iguales, es decir
// si son difetentes.

console.log(1 != 2);
console.log("Diego" != "diego");
console.log(1 != "1");
console.log("a" != "A");



//Estrictamente igual que === : retorna true SI y solo SI el valor y el tipo de dato ES EL MISMO.

console.log( "1" === 1);
console.log( "1" === "1");



//Desigualdad estricta !== : Retorna true SI y solo SI el valor y/o el tipo de dato NO ES EL MISMO.

console.log(1 !== 1);
console.log("1" !== 1);




//Mayor que > : Devuelve true si el operando izquierdo es mayor que el operando derecho.
console.log(2023 > 2022);
console.log(2023 > 2025);
console.log("2023" > 2022);
console.log("2023" > "3022");



//Menor que < : Devuelve true si el operando izquierdo es menor que el operando derecho.
console.log(1000 < 900);
console.log(1000 < 2000);
console.log("500" < 450);
console.log("450" < "500");
console.log(600 < "700");



//Mayor o igual que >= : Devuelve true si el operando izquierdo es mayor o igual que el operando derecho.
console.log( 50 >= 60);
console.log( 50 >= 50);
console.log( "45" >= 30);
console.log( 45 >= "46");
console.log( 45 >= "45");
console.log("70" >= 70);


//Menor o igual que <= : Devuelve true si el operando izquierdo es menor o igual que el operando derecho.
console.log(2 <= 1);
console.log(1 <= 2);
console.log(1 <= 1);