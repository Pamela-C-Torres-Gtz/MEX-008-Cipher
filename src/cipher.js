window.cipher = {
  //FUNCION DE CIFRADO
   encode: (offset,string) => 
  {
    let codeModificado = 0;
    let textModificado = '';  //declaramos nuestra variable vacia
    for (let i = 0; i < string.length; i ++)  // realizamos un ciclo
    {
    const ascii = string.charCodeAt (i);
     if (ascii >= 65 && ascii <=90 )
       {
         codeModificado = (ascii-65+offset) % 26 + 65;  
         //textModificado=String.fromCharCode(codeModificado);       
       } else if (ascii >= 97 && ascii <= 122)
         {
           codeModificado =(ascii - 97 + offset) % 26 + 97;  //para considerar caracters diferente el programa lo puede devolver igual o lo ignora   
         }else 
     {
      codeModificado = ascii;
     }
     textModificado += String.fromCharCode(codeModificado);  //cambia el numero del codigo ascii a letra
    } 
    //console.log(codeModificado);
  return textModificado;
  },

// FUNCION DE DESCIFRADO
decode: (offsetD,strCl) => 
{
  let codeModificado = 0;
  /*declaramos nuestra variable vacia*/
  let textModificado = '';
  // convertir a mayusculas
 // let strCl= string.toUpperCase();

  /* realizamos un ciclo*/
  for (let i = 0; i < strCl.length; i ++)
  {
   //colocamos formula //
  //hacer la validadción despues de que hace la conversion de la letra a codigo acci//
  const ascii = strCl.charCodeAt (i);
   if (ascii >= 65 && ascii <=90 )
     {
       codeModificado = (ascii-90-offsetD) % 26 + 90;
       //textModificado=String.fromCharCode(codeModificado);
     } else if (ascii >= 97 && ascii <= 122)
       {
         codeModificado =(ascii -122 - offsetD) % 26 +122;
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