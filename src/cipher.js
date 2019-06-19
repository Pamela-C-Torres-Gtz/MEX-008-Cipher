window.cipher = {
   encode: (offset,string) => 
  {
    let codeModificado = 0;
    //declaramos nuestra variable vacia
    let textModificado = '';
    // convertir a mayusculas
    let strCl= string.toUpperCase();

    // realizamos un ciclo
    for (let i = 0; i < strCl.length; i ++)
    {
     //colocamos formula //
    //hacer la validadción despues de que hace la conversion de la letra a codigo acci//
    const ascii = strCl.charCodeAt (i);
     if (ascii >= 65 && ascii <=90 )
       {
         codeModificado = (ascii-65+offset) % 26 + 65;
         //textModificado=String.fromCharCode(codeModificado);
       } else if (ascii >= 97 && ascii <= 122)
         {
           codeModificado =(ascii - 97 + offset) % 26 +97;
           //para considerar caracters diferente el programa lo puede devolver igual o lo ignora
         }else 
     {
      codeModificado = ascii;
     }
     //cambia el numero del codigo ascii a letra
     textModificado += String.fromCharCode(codeModificado);
    } 
    //console.log(codeModificado);
    //console.log() 0
  return textModificado;
  },
// en lugar de 3 posiblemente sea offset.value para que 


// funcion de decifrado

  decode: (offset,string) => 
  {
    let codeModificado = 0;
    /*declaramos nuestra variable vacia*/
    let textModificado = '';
    // convertir a mayusculas
    let strCl= string.toUpperCase();

    /* realizamos un ciclo*/
    for (let i = 0; i < strCl.length; i ++)
    {
     //colocamos formula //
    //hacer la validadción despues de que hace la conversion de la letra a codigo acci//
    const ascii = strCl.charCodeAt (i);
     if (ascii >= 65 && ascii <=90 )
       {
         codeModificado = (ascii+65-offset) % 26 + 65;
         //textModificado=String.fromCharCode(codeModificado);
       } else if (ascii >= 97 && ascii <= 122)
         {
           codeModificado =(ascii - 97 + offset) % 26 +97;
           /*para considerar caracters diferente el programa lo puede devolver igual o lo ignora*/
         }else 
     {
      codeModificado = ascii;
     }
     //cambia el numero del codigo ascii a letra
     textModificado += String.fromCharCode(codeModificado);
    } 
    /*console.log(codeModificado);
    console.log()*/0
  return textModificado;
  },
}

