console.log("Ejercicio6");
var n1,n2,operación,resultado;
operación = prompt("Ingrese operacion que quiera hacer: ");
n1 = prompt("Ingrese numero: ");
n2 = prompt("Ingrese numero: ");

if(operación=='+'){
	resultado = parseInt(n1) + parseInt(n2)
}else if(operación=='-'){
	resultado = parseInt(n1) - parseInt(n2)
}else if(operación=='*'){
	resultado = parseInt(n1) * parseInt(n2)
}else if(operación=='/'){
	resultado = parseInt(n1) / parseInt(n2)
}else{

}
console.log(resultado);