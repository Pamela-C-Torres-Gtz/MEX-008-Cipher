//correcccion de codigo completo mandamo llamar a todos mis inputs

const inputEncode=document.getElementById('txt-cipher');
const offset= document.getElementById('offset');
const btnCifrar= document.getElementById('botonCifrar');
const inputDecode=document.getElementById('input-decoder');
/* recomendacion de silvana para obtener el valos de nuestra caja con un evento*/

/* inputEncode.addEventListene('keyup', () => {}*/ 
/*se puede utilizar keyup, keydwon y keypress*/
/* evento del dom o ejecutar funcion cipher*/
btnCifrar.addEventListener('click', (e) => {
  e.preventDefault();
  console.log(offset.value);

  inputDecode.value =window.cipher.encode(parseInt(offset.value), inputEncode.value)

})
