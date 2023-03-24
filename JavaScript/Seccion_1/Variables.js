/******  VARIABLES  ******/

//var: Variable de alcance(scope) global / Se puede reasignar.
var nombre = "Diego";
nombre;
nombre = "Pedro";
nombre;


//let: Variable de alcance(scope) limitado / Se puede reasirnar
let edad = 30;
edad;
edad = edad + 20;
edad;
edad = edad + 50;
edad;


let nombreYapellido = "Diego Rodriguez";
nombreYapellido;
nombreYapellido = "Juanito Guerrero";
nombreYapellido;


//const: al igual que let es te alcance(scope) limitado, no se puede mutar, ni reasignar.
const apellido = "Rodriguez";
apellido;
apellido = "Avila";
apellido;