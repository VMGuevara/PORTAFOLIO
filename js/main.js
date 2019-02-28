$(document).ready(function() {
	$('.menu_palanca').click(function() {
		$('.menu_palanca').toggleClass('active');
		$('nav').toggleClass('active');

		/* BOTONES DEL NAVBAR */
		$('#n_proyectos').toggle();
		$('#n_estudios').toggle();
		$('#n_sobremi').toggle();
		$('#n_contacto').toggle();
		$('#ocult_sidebar').toggle();
	});

	$(document).on('click', '#ocult_sidebar', function() {
		$('.sidebar_lat').toggleClass('displaySB');
		$('.c_contenido').toggleClass('marginleft');
	});

	/* BOTONES DEL NAVBAR */
	$('#n_proyectos').hide();
	$('#n_estudios').hide();
	$('#n_sobremi').hide();
	$('#n_contacto').hide();
	$('#n_inicio').show();
	$('#n_btnHamburguesa').show();
	
	$('#brn_scroll_proyectos').show();
	$('#brn_scroll_estudios').hide();
	$('#brn_scroll_sobremi').hide();
	$('#brn_scroll_contacto').hide();
	$('.inf_btn').show();
	
	inicio();
	document.getElementById('brn_scroll_proyectos').disabled = true;
});

/* FUNCIONES PARA LA PANTALLA DE INICIO */
function inicio() {
	$('#m_proyectos').removeClass('active');
	$('#m_estudios').removeClass('active');
	$('#m_sobremi').removeClass('active');
	$('#m_contacto').removeClass('active');

	var xmlhttp;

	if (window.XMLHttpRequest) {
		xmlhttp = new XMLHttpRequest();
	} else if(window.ActiveXObject) {
		xmlhttp = new ActiveXObject('Microsoft.XMLHTTP');
	} else {
		// NO HACER NADA
	}

	xmlhttp.onreadystatechange = contenido_inicio;

	function contenido_inicio() {
		if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
			document.getElementById('c_contenido').innerHTML = xmlhttp.responseText;
		} else {
			// NO HACER NADA
		}
	}

	xmlhttp.open('GET', 'pnt/inicio.html', true);
	xmlhttp.send();

	setTimeout(function() {
		document.getElementById('brn_scroll_proyectos').disabled = true;
	}, 0);

	$('#brn_scroll_proyectos').show();
	$('#brn_scroll_estudios').hide();
	$('#brn_scroll_sobremi').hide();
	$('#brn_scroll_contacto').hide()
}

/* FUNCIONES PARA LA PANTALLA DE PROYECTOS */
function proyectos() {
	$('#m_proyectos').addClass('active');
	$('#m_estudios').removeClass('active');
	$('#m_sobremi').removeClass('active');
	$('#m_contacto').removeClass('active');

	var xmlhttp;

	if (window.XMLHttpRequest) {
		xmlhttp = new XMLHttpRequest();
	} else if(window.ActiveXObject) {
		xmlhttp = new ActiveXObject('Microsoft.XMLHTTP');
	} else {
		// NO HACER NADA
	}

	xmlhttp.onreadystatechange = desplegarContenido;

	function desplegarContenido() {
		if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
			document.getElementById('c_contenido').innerHTML = xmlhttp.responseText;
		} else {
			// NO HACER NADA
		}
	}

	xmlhttp.open('GET', 'pnt/proyectos/proyectos.html', true);
	xmlhttp.send();

	setTimeout(function() {
		document.getElementById('brn_scroll_proyectos').disabled = false;
	}, 0);
	
	$('#brn_scroll_proyectos').show();
	$('#brn_scroll_estudios').hide();
	$('#brn_scroll_sobremi').hide();
	$('#brn_scroll_contacto').hide();
}

var numProyectos = 1;

function desplazar_proyectos() {
	$('#m_proyectos').addClass('active');
	$('#m_estudios').removeClass('active');
	$('#m_sobremi').removeClass('active');
	$('#m_contacto').removeClass('active');
	var xmlhttp;

	if (window.XMLHttpRequest) {
		xmlhttp = new XMLHttpRequest();
	} else if(window.ActiveXObject) {
		xmlhttp = new ActiveXObject('Microsoft.XMLHTTP');
	} else {
		// NO HACER NADA
	}

	numProyectos++;
	if (numProyectos > 2) {
		numProyectos = 1;
	} else {
		// NO HACER NADA
	}

	xmlhttp.onreadystatechange = d_Ctnd_proyectos;

	function d_Ctnd_proyectos() {
		if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
			document.getElementById('c_contenido_proyectos').innerHTML = xmlhttp.responseText;
		} else {
			// NO HACER NADA
		}
	}

	xmlhttp.open('GET', 'pnt/proyectos/proyecto'+numProyectos+'.html', true);
	xmlhttp.send();
	document.getElementById('puntosScroll'+numProyectos).focus();
}

/* FUNCIONES DE LA PANTALLA DE ESTUDIOS */
function estudios() {
	$('#m_proyectos').removeClass('active');
	$('#m_estudios').addClass('active');
	$('#m_sobremi').removeClass('active');
	$('#m_contacto').removeClass('active');
	
	var xmlhttp;

	if (window.XMLHttpRequest) {
		xmlhttp = new XMLHttpRequest();
	} else if(window.ActiveXObject) {
		xmlhttp = new ActiveXObject('Microsoft.XMLHTTP');
	} else {
		// NO HACER NADA
	}

	xmlhttp.onreadystatechange = desplegarContenido;

	function desplegarContenido() {
		if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
			document.getElementById('c_contenido').innerHTML = xmlhttp.responseText;
		} else {
			// NO HACER NADA
		}
	}

	xmlhttp.open('GET', 'pnt/estudios/estudios.html', true);
	xmlhttp.send();

	$('#brn_scroll_proyectos').hide();
	$('#brn_scroll_estudios').show();
	$('#brn_scroll_sobremi').hide();
	$('#brn_scroll_contacto').hide();
}

var numEstudios = 1;

function desplazar_estudios() {
	$('#m_proyectos').removeClass('active');
	$('#m_estudios').addClass('active');
	$('#m_sobremi').removeClass('active');
	$('#m_contacto').removeClass('active');
	var xmlhttp;

	if (window.XMLHttpRequest) {
		xmlhttp = new XMLHttpRequest();
	} else if(window.ActiveXObject) {
		xmlhttp = new ActiveXObject('Microsoft.XMLHTTP');
	} else {
		// NO HACER NADA
	}

	numEstudios++;
	if (numEstudios > 3) {
		numEstudios = 1;
	} else {
		// NO HACER NADA
	}

	xmlhttp.onreadystatechange = d_Ctnd_estudios;

	function d_Ctnd_estudios() {
		if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
			document.getElementById('c_contenido_estudios').innerHTML = xmlhttp.responseText;
		} else {
			// NO HACER NADA
		}
	}

	xmlhttp.open('GET', 'pnt/estudios/estudios'+numEstudios+'.html', true);
	xmlhttp.send();
	document.getElementById('puntosScroll'+numEstudios).focus();
}

/* FUNCIONES DE LA PANTALLA DE SOBRE MI PERSONA */
function sobremi() {
	$('#m_proyectos').removeClass('active');
	$('#m_estudios').removeClass('active');
	$('#m_sobremi').addClass('active');
	$('#m_contacto').removeClass('active');
	
	var xmlhttp;

	if (window.XMLHttpRequest) {
		xmlhttp = new XMLHttpRequest();
	} else if(window.ActiveXObject) {
		xmlhttp = new ActiveXObject('Microsoft.XMLHTTP');
	} else {
		// NO HACER NADA
	}

	xmlhttp.onreadystatechange = desplegarContenido;

	function desplegarContenido() {
		if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
			document.getElementById('c_contenido').innerHTML = xmlhttp.responseText;
		} else {
			// NO HACER NADA
		}
	}

	xmlhttp.open('GET', 'pnt/sobreMi/sobreMi.html', true);
	xmlhttp.send();

	$('#brn_scroll_proyectos').hide();
	$('#brn_scroll_estudios').hide();
	$('#brn_scroll_sobremi').show();
	$('#brn_scroll_contacto').hide();
}

var numSobreMi = 1;

function desplazar_sobremi() {
	$('#m_proyectos').removeClass('active');
	$('#m_estudios').removeClass('active');
	$('#m_sobremi').addClass('active');
	$('#m_contacto').removeClass('active');
	var xmlhttp;

	if (window.XMLHttpRequest) {
		xmlhttp = new XMLHttpRequest();
	} else if(window.ActiveXObject) {
		xmlhttp = new ActiveXObject('Microsoft.XMLHTTP');
	} else {
		// NO HACER NADA
	}

	numSobreMi++;
	if (numSobreMi > 6) {
		numSobreMi = 1;
	} else {
		// NO HACER NADA
	}

	xmlhttp.onreadystatechange = d_Ctnd_sobremi;

	function d_Ctnd_sobremi() {
		if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
			document.getElementById('c_contenido_sobremi').innerHTML = xmlhttp.responseText;
		} else {
			// NO HACER NADA
		}
	}

	xmlhttp.open('GET', 'pnt/sobreMi/sobreMi'+numSobreMi+'.html', true);
	xmlhttp.send();
	document.getElementById('puntosScroll'+numSobreMi).focus();
}

/* FUNCIONES DE LA PANTALLA DE CONTACTO */
function contacto() {
	$('#m_proyectos').removeClass('active');
	$('#m_estudios').removeClass('active');
	$('#m_sobremi').removeClass('active');
	$('#m_contacto').addClass('active');
	
	var xmlhttp;

	if (window.XMLHttpRequest) {
		xmlhttp = new XMLHttpRequest();
	} else if(window.ActiveXObject) {
		xmlhttp = new ActiveXObject('Microsoft.XMLHTTP');
	} else {
		// NO HACER NADA
	}

	xmlhttp.onreadystatechange = desplegarContenido;

	function desplegarContenido() {
		if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
			document.getElementById('c_contenido').innerHTML = xmlhttp.responseText;
		} else {
			// NO HACER NADA
		}
	}

	xmlhttp.open('GET', 'pnt/contacto/contacto.html', true);
	xmlhttp.send();

	document.getElementById('brn_scroll_contacto').disabled = true;
	
	$('#brn_scroll_proyectos').hide();
	$('#brn_scroll_estudios').hide();
	$('#brn_scroll_sobremi').hide();
	$('#brn_scroll_contacto').show();
}