/*
    Se comoce como operadores logicos a los simbolos que nos permiten
    realizar operaciones logicas binarias (true - false).

    Ejemplo:
*/

// &: este simbolo se llama ampersand.

//  AND / Y (&&): devuelve true si AMBOS operandos son true;
//  Si uno de los comparandos es false devuelve false.

let nombre = "Isabel";
let nombre2 = "Waldemar";
let edadIsabel= 19;
let edadWaldemar= 18;


console.log( true && true );
console.log(false && true);
console.log( (1 + 1 == 2) && (4 - 2 == 2) );
console.log( (1 + 1 == 2) && (4 - 2 == 3) );
console.log( ("Isabel" == nombre) && (nombre2 == "Waldemar") );
console.log( ((nombre == "Isabel") && (nombre2 == "Waldemar")) && ((edadIsabel > 17) && (edadWaldemar >= 18 )));





// |: Este simbolo se llama barra vertical.
//  OR / O || : Devuelve true si ALGUNO de los operandos es true.
//  SI AMBOS SON FALSOS, devuelve false.


let nombre3 = "Nelson";
let nombre4 = "Cesar";
let contraseña = true;
let claveEspecial = false;


console.log( true || false );
console.log( false || false );
console.log( (nombre3=="Nelson") && ( contraseña == true || claveEspecial == true) );





//  NOT / Negacion ! : Invierte el valor booleano de su operando, es decir...
// Si es true retornara false, si es false retornara true.


contraseña;
console.log(!contraseña)


console.log( true && !true )

console.log( (nombre3=="Nelson") && ( contraseña == !true || claveEspecial == true) );



/* ----- ACTIVIDAD PARA REALIZAR EN CLASE ----- */

    // (Facil)
    let uno = !true || false;
    console.log(uno);

    let dos = !false && false;
    console.log(dos);

    let tres = true && !true;
    console.log(tres);


    // (Medio)
    let cuatro = (5 === 5) || (!true);
    console.log(cuatro);

    let cinco = (!0) || (5 < 0);
    console.log(cinco);

    let  seis = (3 > 4) && (!0); 
    console.log(seis);


    // (Avanzado)
    let siete = ( ((false || true) && (!false && true) )) || (true && false);
    console.log(siete);

    let ocho = (6 === 3+3) && (9/3 >= 3);
    console.log(ocho);

    let nueve = (!(!false) || ( ("1" == 1)) && (!false === true) ); 
    console.log(nueve);


    // Hardcore
    let diez = !(!true) === !( !( 5 >= 5 ) );
    console.log(diez)

    let once = !( true && (!true === !( !(8 === 4*2) )) );
    console.log(once);


    //Ultra-Hardcore
    let doce = !( true && (!true === !( !(16 === (4*2) + 8))) ) !== (false);
    console.log(doce);


    //Leyenda
    let trece = !(((!(!(10 / 5 == "2") === false) != false) === ((5 * 5) <= (100 / 4))) && (!((1 + 1) !== (10 / 5)) !== (true)));
    console.log(trece);