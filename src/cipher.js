window.cipher = {
  encode: function(offset,string){
  string = string1.value.toUpperCase();
  offset = parseInt(offsetNumber.value);
  
  let cipherArray = [];
  
  for(let i = 0; i<string.length; i++){
     let c_firstAsciiCode = string.charCodeAt(i);
     let c_secondAsciiCode;
     let c_newString;
    if(c_firstAsciiCode >= 65 && c_firstAsciiCode <= 90){
      c_secondAsciiCode = (c_firstAsciiCode - 65 + offset) % 26 + 65;
      c_newString = String.fromCharCode(c_secondAsciiCode);
      cipherArray.push(c_newString);
      } else if(c_firstAsciiCode = 32){
      c_secondAsciiCode = c_firstAsciiCode;
      c_newString = String.fromCharCode(c_secondAsciiCode);
      cipherArray.push(c_newString);
     }     
  }
  return result1.innerHTML = cipherArray.join('')
  },


  decode: function(offset,string){
  string = string1.value.toUpperCase();
  offset = parseInt(offsetNumber.value);

  let decipherArray = [];
  
  for(let i = 0; i<string.length; i++){
  
     let d_firstAsciiCode = string.charCodeAt(i);
     let d_secondAsciiCode;
     let d_newString;
     if(d_firstAsciiCode >= 65 && d_firstAsciiCode <= 90){
        d_secondAsciiCode = (d_firstAsciiCode+65 - offset) % 26 + 65;
        d_newString = String.fromCharCode(d_secondAsciiCode);
        decipherArray.push(d_newString);
     } else if(d_firstAsciiCode = 32){
        d_secondAsciiCode = d_firstAsciiCode;
        d_newString = String.fromCharCode(d_secondAsciiCode);
        decipherArray.push(d_newString);
     }
  }
      return result2.innerHTML = decipherArray.join('')
  }}