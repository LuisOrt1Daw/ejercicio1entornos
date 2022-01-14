var N1,N2,N3
console.log("Ejercicio1")

N1 = prompt("Ingrese numero 1: ");
N2 = prompt("Ingrese numero 2: ");
N3 = prompt("Ingrese numero 3: ");
if(N1>10 || N2>10 || N3>10){
console.log("Hay un numero mayor que 10");
}else{
console.log("No hay un numero mayor que 10");
}
resultado = parseFloat(N1)+parseFloat(N2)+parseFloat(N3);
console.log(resultado);