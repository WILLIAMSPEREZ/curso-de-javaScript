
//var compañeros = ["Acopa", "Joaquin", "Antonio", "Ricardo", "Luisa"];

//document.write(compañeros[0]);


var aryPersonas =[
{

	nombre: "Jose",
	apellido: "Acopa",
	Profesion: "Sistema Computacionales",
	Edad: 25,
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
}
]

for (var i = 0; i < aryPersonas.length; i++) {
	document.write(aryPersonas[i].nombre);
	
}