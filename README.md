elgg-iframe
===========

Plugin para elgg que convierte todos los enlaces en cuyo texto aparezca la marca [[IFRAME]] en un iframe.

Compatibilidad
--------------

Este plugin está diseñado para elgg 1.7, no está probado en versiones anteriores. No es compatible con elgg 1.8.

Instalación
-----------

1. Clonar el repositorio en el directorio mod de vuestra instalación de elgg.
2. Activar el plugin elgg-iframe en el panel de administración de vuestra red social.
3. Ejecutar upgrade.php

Uso
---

Este plugin actúa en cualquier página o widget donde se permita poner un enlace, 
esto incluye descripción de grupos, perfil, foros, etc. Sólo necesitas incluir la marca [[IFRAME]]
en el texto del enlace. Veamoslo con un ejemplo:

Queremos incrustar el mapa que se ve en la web http://convocatorias.democraciarealya.es/?id_plan=3

### Usando un editor como TinyMCE

![Uso Editor](https://raw.github.com/joker-x/elgg-iframe/master/doc/uso-editor.jpg)

Para ello sólo tenemos que escribir [[IFRAME]] donde queramos insertarlo, seleccionar esta marca, pulsar
el botón "crear enlace" y pegar la dirección que queramos incrustar. Así de fácil.

### Usando HTML

Cuando no disponemos de un editor podemos incrustarla utilizando HTML:

```html
<a href="http://convocatorias.democraciarealya.es?id_plan=3">[[IFRAME]]</a>
```

### SEO, Posicionamiento en buscadores

Es conveniente que le demos una pequeña descripción al enlace para favorecer el posicionamiento en buscadores
de aquello que enlacemos. Para ello en lugar de seleccionar sólo la marca, selecciona también la descripción:

![Uso Editor](https://raw.github.com/joker-x/elgg-iframe/master/doc/uso-editor-2.jpg)

o en html:

```html
<a href="http://convocatorias.democraciarealya.es?id_plan=3">[[IFRAME]] Mapa de convocatorias para el 15O: Unidos para un cambio global </a>
```

### Ajustando el tamaño

Por defecto, el iframe generado tiene el 100% de ancho del contenedor por 400px de alto, 
si queremos utilizar otras medidas, se lo podemos indicar así:

![Uso Editor](https://raw.github.com/joker-x/elgg-iframe/master/doc/uso-editor-3.jpg)

o en html:

```html
<a href="http://www.youtube.com/embed/M660rjNCH0A">[[iframe]] Gandalf Style 560x315</a>
```

**NOTA:** Las medidas pueden especificarse en porcentajes. Ejemplo: 50%x200

