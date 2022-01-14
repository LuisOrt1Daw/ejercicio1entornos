console.log("Ejercicio8");
var año,n2,operación,resultado;

año = prompt("Ingrese año: ");
if(año%10==0 && año%100==0){
	if(año%400==0){
  console.log("Es bisiesto");
  }else{
  console.log("No es bisiesto");
  }
}else if(año%4==0){
	console.log("es bisiesto")
}else{
	console.log("no es bisiesto")
}