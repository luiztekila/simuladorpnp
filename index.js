 var pregunta  = 1;
 var bandera = 0;
  var ultima=50;
  var respuesta="";

    function contarLineas() {
        var textarea = document.getElementById('txtArea');
        var contenido = textarea.value;
        // Dividir el contenido del textarea en líneas utilizando el salto de línea como separador
        var lineas = contenido.split('\n');
        // Eliminar líneas vacías del conteo
        var lineasNoVacias = lineas.filter(function(linea) {
            return linea.trim() !== '';
            ultima=lineasNoVacias.length;
        });
        // Mostrar el número de líneas
        alert('El textarea tiene ' + lineasNoVacias.length + ' línea(s).');
    }
    // llamado a la uncion contar lineas
   


    // llamado a la uncion copiar lineas
    function siguiente() {
        pregunta= pregunta + 1;
        copiarLinea();
    }

    function atras() {
        pregunta= pregunta - 1;
        copiarLinea();
    }

    function copiarLinea() {
        var textarea = document.getElementById('txtArea');
        var lineaDeseada = pregunta*10; // Cambia esto al número de línea que deseas copiar
        var contenido = textarea.value;
        // Dividir el contenido del textarea en líneas utilizando el salto de línea como separador
        var lineas = contenido.split('\n');
        // Obtener la línea deseada por su índice
        var linea1 = lineas[lineaDeseada - 10] //índices comienzan en 0
        var linea2 = lineas[lineaDeseada - 9]
        var linea3 = lineas[lineaDeseada - 8]
        var linea4 = lineas[lineaDeseada - 7]
        var linea5 = lineas[lineaDeseada - 6]
        var linea6 = lineas[lineaDeseada - 5]
        var linea7 = lineas[lineaDeseada - 4]; 
        document.getElementById('parra1').textContent = linea1;
        document.getElementById('parra2').textContent = linea2;
        document.getElementById('parra3').textContent = linea3;
        document.getElementById('parra4').textContent = linea4;
        document.getElementById('parra5').textContent = linea5;
        document.getElementById('parra6').textContent = linea6;
        document.getElementById('parra7').textContent = linea7;
        if (linea2 == linea7) { respuesta="A"; }
        else if (linea3 == linea7) { respuesta="B";}
        else if (linea4 == linea7) {respuesta="C";}
        else if (linea5 == linea7) {respuesta="D";}
         else  respuesta="E";
         document.getElementById('respuesta').textContent = respuesta;

    }