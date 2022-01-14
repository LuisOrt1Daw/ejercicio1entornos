console.log("Ejercicio8");
var N,cantidad,saldo=20,operación,resultado;
do{
do{
N = prompt("Ingrese numero: ");
}while(N<1 && N>6)
cantidad = prompt("Ingrese cantidad a apostar: ");
random = Math.random() * (6 - 1) + 1;
if(random==N){
saldo = parseInt(saldo) + parseInt(cantidad);
}else{
saldo = parseInt(saldo) - parseInt(cantidad);
}
console.log("Su saldo es de "+ saldo +" €");
}while(saldo>0 && saldo<150);
if(saldo<=0){
console.log("Ya no tiene saldo");
}else if(saldo>=150){
console.log("Ha ganado")
}