//correcccion de codigo completo mandamo llamar a todos mis inputs

const inputDecode=document.getElementById('txt-decode');
const offset= document.getElementById('offset');
const btnDecifrar= document.getElementById('botonDecifrar');
const inputOrigin=document.getElementById('input-origin');
/* recomendacion de silvana para obtener el valos de nuestra caja con un evento*/

/* inputEncode.addEventListene('keyup', () => {}*/ 
/*se puede utilizar keyup, keydwon y keypress*/
/* evento del dom o ejecutar funcion cipher*/
btnDecifrar.addEventListener('click', (e) => {
  e.preventDefault();
 // console.log(offset.value);

  inputOrigin.value =window.cipher.decode(parseInt(offset.value), inputDecode.value)

})