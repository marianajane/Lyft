$(document).ready(cargarPagina);

function cargarPagina() {
	 $('#index').load('index.html');
        setTimeout(function() {
            $('#index').ready(function() {
                $('#splash').remove();
                window.location.href = "index.html";
            });
        }, 2000);
}

       