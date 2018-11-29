

var aryPersonas =[	
{

	nombre: "Jose",
	apellido: "Acopa",
	Profesion: "Sistema Computacionales",
	edad: 25,
},

{
	nombre: "Joaquin",
	apellido: "Contreras",
	Profesion: "Sistema Computacionales",
	edad: 28, 
},
{
	nombre:"Antonio",
	apellido:"Ortega",
	Profesion:"Sistema Computacionales",
	edad: 27,
},
{
	nombre:"Ricardo",
	apellido:"Perez",
	Profesion:"Sistema Comṕutacionales",
	edad: 22,
},
{
	nombre:"Luisa",
    apellido: "Garcia",
	Profesion: "Desarrollador de Software",
	edad: 21,
},
{
	nombre:"Williams",
	apellido:"Perez",
	Profesion:"Desarrollador de Software",
	edad: 21,
}
]
 

function rellenar_tabla() {

	var datos = ''
    for (var i = 0; i < aryPersonas.length; i++) {
	  	datos = datos + "<tr><td>"+ aryPersonas[i].nombre+aryPersonas[i].apellido+"</td><td>"+aryPersonas[i].edad+"</td><td>"+aryPersonas[i].Profesion+"</td></tr>"     
	 }
    document.getElementById("datos").innerHTML = datos;
}