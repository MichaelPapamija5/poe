function invertirCadena() {
    // Obtener el valor del campo de entrada de texto
    var cadenaOriginal = document.getElementById("cadenaInput").value;
    
    // Invertir la cadena utilizando JavaScript
    var cadenaInvertida = cadenaOriginal.split('').reverse().join('');

    document.getElementById("res").innerHTML = "Cadena invertida: " + cadenaInvertida;
}