function contarPalabras() {
    let frase = document.getElementById("frase").value;
    
    // Eliminar espacios en blanco al principio y al final de la frase
    frase = frase.trim();
    
    // Dividir la frase en palabras utilizando espacios en blanco como separadores
    let palabras = frase.split(/\s+/);
    
    // Contar la cantidad de palabras
    let cantidadPalabras = palabras.length;

    document.getElementById("resultado").innerHTML = "Cantidad de palabras: " + cantidadPalabras;
}