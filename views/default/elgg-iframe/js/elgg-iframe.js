//Creamos un nuevo selector :contiene que sea insensible a mayúsculas y minúsculas
;jQuery.expr[':'].contiene = function(a, i, m) {
  return jQuery(a).text().toUpperCase()
      .indexOf(m[3].toUpperCase()) >= 0;
};

;$(function() {
	// Si la etiqueta a, contiene [[IFRAME]], por cada uno de ellos, hacer un iframe que apunte a la url de href
	$("a:contiene('[[IFRAME]]')").each (function () {
		var 	href = $(this).attr('href'),
			texto = $(this).text(),
			ancho = '100%',	//ancho por defecto
			alto = '400',		//alto por defecto
			coincide = texto.match(/[0-9%]{2,4}[xX][0-9%]{2,4}/);
		//Extraemos el ancho y el alto si se ha especificado en el texto. Por ejemplo 200x300
		if (coincide != null) {
			var dimensiones = coincide[0].toUpperCase().split('X');
			ancho = dimensiones[0];
			alto = dimensiones[1];
		}
		// construimos en la variable html, el código por el que queremos sustituir el enlace que contiene [[IFRAME]]
		var html = '<iframe src="'+href+'" width="'+ancho+'" height="'+alto+'"></iframe>';
		// remplazamos el enlace por el html iframe.
		$(this).replaceWith(html);
	});
});

