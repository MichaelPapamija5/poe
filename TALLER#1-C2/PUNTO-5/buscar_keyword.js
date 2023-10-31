function buscar() {
    var cadena = document.getElementById("cadena").value;
    var keyword = document.getElementById("palabraClave").value;

    // Utilizamos indexOf para buscar la palabra clave en la cadena
    if (cadena.indexOf(keyword) !== -1) {
        document.getElementById("resultado").innerHTML = "La palabra clave: "+" '"+keyword+"' " +"se encontró en la cadena.";
    } else {
        alert("La palabra clave no esta en la cadena")
    }
}