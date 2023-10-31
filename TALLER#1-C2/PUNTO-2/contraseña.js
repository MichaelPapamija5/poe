/*function verificar(){

    let contraseña=document.getElementById("contraseña").value

}
*/

function verificar() {
    let contraseña = document.getElementById("pasword").value;
    let mensaje = "";

    // Verificar si la contraseña tiene al menos 8 caracteres
    if (contraseña.length < 8) {
        mensaje += "La contraseña debe tener al menos 8 caracteres. ";
    }

    // Verificar si la contraseña contiene al menos una letra mayúscula
    if (!/[A-Z]/.test(contraseña)) {
        mensaje += "La contraseña debe contener al menos una letra mayúscula. ";
    }

    // Verificar si la contraseña contiene al menos un número
    if (!/\d/.test(contraseña)) {
        mensaje += "La contraseña debe contener al menos un número. ";
    }

    // Verificar si la contraseña contiene espacios en blanco
    if (/\s/.test(contraseña)) {
        mensaje += "La contraseña no debe contener espacios en blanco. ";
    }

    // Mostrar el mensaje de validación o un mensaje de éxito
    if (mensaje) {
        alert("La contraseña no cumple con los siguientes requisitos:\n" + mensaje);
    } else {
        alert("La contraseña cumple con todos los requisitos.");
    }
}
