function convertirTexto() {
    
    // Obtener el valor ingresado por el usuario
    var texto = document.getElementById("text").value;

    // Convertir a mayúsculas y minúsculas
    var mayusculas = texto.toUpperCase();
    var minusculas = texto.toLowerCase();

    // Mostrar los resultados
    // sale raro por las tilde en la "u"
    document.getElementById("res_MAYUS").textContent = "Mayúsculas: " + mayusculas;
    document.getElementById("res_minus").textContent = "Minúsculas: " + minusculas;
}
