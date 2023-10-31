function ver_Fruta() {
   
   // Array de frutas
   const frutas = ["manzana", "fresa", "naranja", "melon", "uva", "mango", "pera", "banana"];

   // Obtener el valor ingresado por el usuario
   const inputFruit = document.getElementById("inputFruta").value.toLowerCase(); // Convertir a minúsculas

   // Verificar si la fruta está en el array
   if (frutas.includes(inputFruit)) {
       alert("LA FRUTA ESTÁ EN EL ARRAY");
   } else {
       alert("LA FRUTA NO ESTÁ EN EL ARRAY");
   }
}
