function lenghPalabras() {
    let oracion = document.getElementById("oracion").value;
    let palabras = oracion.split(" ");
    let cont = "";
    for (let i = 0; i < palabras.length; i++) {
        cont += "La palabra '" + palabras[i] + "' tiene una longitud de " + palabras[i].length + "<br>";
    }
    document.getElementById("result").innerHTML = cont;
}