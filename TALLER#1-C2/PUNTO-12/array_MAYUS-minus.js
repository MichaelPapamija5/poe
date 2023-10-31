let array=[];

function arrayString(){
    document.getElementById("res").innerHTML="Array de Palabras: " +array.join(' ,');

    let arrayModificado = array.map(function(word) {
        return word.split('').map(function(letras) {
            if (letras === letras.toUpperCase()) {
                return letras.toLowerCase();
            } else {
                return letras.toUpperCase();
            }
        }).join('');
    });
    document.getElementById("resModificada").innerHTML= arrayModificado

}

function agregarPalabra(){
    let palabra=document.getElementById("agg_palabra").value;
    array.push(palabra);
    arrayString();
}