function replaceVocales() {

    let inputText = document.getElementById("texto").value;
    let replace = inputText.replace(/[aeiouAEIOU]/g, '*');
    document.getElementById("resultado").innerHTML = "Resultado: " + replace;
}