function duplicarElementos() {
    // Obtener el valor del input y dividirlo en un array
    let array = document.getElementById("array").value;
    let arrayDeNumeros = array.split(',').map(function(item) {
        return parseInt(item.trim(), 10);
    });

    // Utilizar la función map para duplicar cada elemento
    let arrayDuplicado = arrayDeNumeros.map(function(numero) {
        return numero * 2;
    });

    // Mostrar el array resultante en el elemento HTML
    document.getElementById("duplicado").innerHTML = arrayDuplicado;
}