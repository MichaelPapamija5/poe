//CONTADOR DE PALABRAS

function contar_palabras() {
    let texto = document.getElementById("texto").value;
    // Eliminar caracteres no alfanuméricos y convertir a minúsculas
    let str = texto.replace(/[^\w\s]/gi, "").toLowerCase();
    console.log(str);

    // Dividir el texto en palabras y contarlas
    let palabras = str.split(/\s+/);
    let cont = palabras.length;
    console.log(cont);

    let res=document.getElementById("res1").innerHTML="El texto tiene "+cont +" palabras"
}
