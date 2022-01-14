console.log("Ejercicio2")
var sueldo,años;
sueldo = prompt("Ingrese el salario mensual: ");
años = prompt("Ingrese años de antigüedad: ");
if(años>=10 && sueldo<1600){
sueldo = sueldo * 2;
}else if(años<10 && sueldo<1600){
sueldo= sueldo * 1.5;
}
console.log(sueldo);