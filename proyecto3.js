
var informacion =[ 
{
	nombre:"Williams",
	apellido:"Perez",
	Profesion:"Desarrollador de Software",
	edad: 21,

}
]



function agregar(){
	var date = {
		agregar:document.getElementById("agregar").value,
		edad:document.getElementById("edad").value,
		profesion:document.getElementById("profesion").value
     
     };
	informacion.push(date);
	
    var datos = "<tr><td>"+agregar+"</td><td>"+edad+"</td><td>"+profesion+"</td></tr>"
 	document.getElementById(informacion).;
	 

}