//declaracion de constantes para el cifrado
const inputEncode=document.getElementById('txt-cipher');
const offset= document.getElementById('offset');
const inputResult=document.getElementById('input-decoder');
const btnCifrar= document.getElementById('btnCipher');

//Declaración de constantes para el Descifrado
const inputDecode=document.getElementById('txt-decode');
const offsetD= document.getElementById('offsetD');
const inputOrigin=document.getElementById('input-origin');
const btnDecifrar= document.getElementById('btnDecipher');

//declaración de variables para el boton de limpiado de pantalla
let btnLimpiar = document.getElementById('btnLimpiar');

/* recomendacion de silvana para obtener el valos de nuestra caja con un evento*/


/* evento del dom o ejecutar funcion cipher*/
btnCifrar.addEventListener('click', (e) => {
  e.preventDefault();
 // console.log(offset.value);
  inputResult.value=window.cipher.encode(parseInt(offset.value), inputEncode.value)
})


// evento del dom o ejecutar funcion Decipher
btnDecifrar.addEventListener('click', (e) => {
  e.preventDefault();
 // console.log(offset.value);
  inputOrigin.value =window.cipher.decode(parseInt(offsetD.value), inputDecode.value)

})

// evento dom para ejecutar limpiar
btnLimpiar.addEventListener("click", (limpiar) => {
  limpiar.preventDefault();

  document.getElementById('txt-cipher').value = "";
  document.getElementById('offset').value = "";
  document.getElementById('input-decoder').value = "";
  document.getElementById('txt-decode').value = "";
  document.getElementById('offsetD').value = "";
  document.getElementById('input-origin').value = "";
})