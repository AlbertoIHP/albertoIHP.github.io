
//JQUERY EJECUTARA LA FUNCION DOCUMENTOCARADO CUANDO ESTE LISTO
$(document).ready(documentoCargado)

function documentoCargado(){

	$('.carousel').carousel({
	interval: 3000,
	pause: false
	})
	//Seleccioanr elemento es atraves del id
	//CUANDO EN EL ELEMENTO OCURRA UN EVENTO DEL TIPO DESPUES DEL PUNTO SE EJECUTA LA FUNCION QUE SE ESPECIFICA DENTRO

	$("#formu-inicio").submit(inicioSesion);

}


function inicioSesion(eventoSubmit){

	//Con prevent default se desactiva la accion por defecto en este caso refrescar la pagina 
	eventoSubmit.preventDefault();
	
	location.href ="admin.html";

}

