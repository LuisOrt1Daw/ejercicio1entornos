console.log("Ejercicio5");
var N,cont=0;
do{
N = prompt("Ingrese numero: ");
}while(N<1 && N>=10000)

for(var a=1;a<=N;++a){
	if(N%a==0){
  cont++;
  }
}
if(cont==2){
	console.log("Es primo")
}else{
	console.log("No es primo")
}