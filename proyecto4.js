
function calcular(){
 
	var fecha = new Date();
	var anioActual = fecha.getFullYear();
	var valorInput = document.getElementById("valorInput").value;

	if ( valorInput <= anioActual) {
		//console.log(fecha);
		var edad = parseInt (anioActual) - parseInt(valorInput);
		var tabla = {valorInput: "", edad: ""};
		//console.log(tabla);
  		


		var datos = "<tr><td>"+valorInput+"</td><td>"+edad+"</td></tr>"
		var temporal = document.getElementById("datos").innerHTML
		console.log(temporal );
		document.getElementById("datos").innerHTML=datos + temporal;

	    alert('Es valido el anio');
	}else{
       alert('No es menor que el anio actual');
   }		
}


function soloNumeros(e){

	var keynum = window.event ? window.event.keyCode : e.which;
	if ((keynum == 8) || (keynum == 46))
	return true;
	return /\d/.test(String.fromCharCode(keynum));
}





















