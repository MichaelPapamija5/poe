function verAnagrama(){

   let p1=document.getElementById("palabra").value
   let p2=document.getElementById("palabra2").value

    p1=p1.replace(/\s/g, '').toLowerCase();
    p2=p2.replace(/\s/g, '').toLowerCase();

  //ordenar las palabras
  const p1Order=p1.split('').sort().join('')
  const p2Order=p2.split('').sort().join('')
   console.log(p1);
   console.log(p2);

   // Verificar si las cadenas tienen la misma longitud
  if (p1.length !== p2.length) {
    alert("Las Cadenas no son de la misma longitud y no son Anagramas")
  }
  else if(p1Order === p2Order){
    document.getElementById("ver").innerHTML="Las Cadenas " +p1 +" y " +p2 +" son Anagramas"
  }else{
    document.getElementById("ver").innerHTML="Las Cadenas " +p1+ " y "+p2+" no son Anagramas"
  }

}