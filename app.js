
function suma(){
	var valor =document.getElementById("1").innerHTML;
	var incremento =  Number(valor) + 1;
	document.getElementById("1").innerHTML=incremento;

}

function restar(){
	var valor = document.getElementById("1").innerHTML;
	var quitar = Number(valor) - 1;
	document.getElementById('1').innerHTML=quitar;
}

function multiplicar(){
	var valor = document.getElementById("1").innerHTML;
	var multiplicar = document.getElementById('multiplicar').value;
	var resultado = Number(valor) * Number(multiplicar);
	document.getElementById("1").innerHTML = resultado;
}

function dividir(){
   var valor = document.getElementById("1").innerHTML;
   var dividir = document.getElementById('dividir').value;
   var resultado = Number(valor) /  Number(dividir);
   document.getElementById("1").innerHTML = resultado;
}
 
	
