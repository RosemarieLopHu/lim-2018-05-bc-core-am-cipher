window.cipher = {
  // Declaro los parámetros de encode (STR porque string es una keyword)
  encode: (str, offset) => {
    let result = '';
    // Ciclo for que recorre el string
    for (let i = 0; i < str.length; i++) {
      let character = str[i];
      if (character.match(/[a-z]/i)) {
        let code = str.charCodeAt(i);
        if ((code >= 65) && (code <= 90)) {
          character = String.fromCharCode(((code - 65 + parseInt(offset)) % 26) + 65);
        }
        if ((code >= 97) && (code <= 122)) {
          character = String.fromCharCode(((code - 97 + parseInt(offset)) % 26) + 97);
        }
      }
      // Ahora se concatena el resultado en result
      result += character;
    }
    // El método encode retorna result luego de toda la iteración y concatenación lista.
    return result;
  },

  // Declaro los parámetros de encode (STR porque string es una keyword)
  decode: (str, offset) => {
    // Declaro un string vacío donde se concatenarán en cada iteración los caracteres descifrados
    let resultDecode = '';
    for (let i = 0; i < str.length; i++) {
      let character = str[i];
      if (character.match(/[a-z]/i)) {
        let code = str.charCodeAt(i);
        if ((code >= 65) && (code <= 90)) {
          character = String.fromCharCode(((code - 65 - parseInt(offset) + 52) % 26) + 65);
        }
        if ((code >= 97) && (code <= 122)) {
          character = String.fromCharCode(((code - 97 - parseInt(offset) + 52) % 26) + 97);
        }
      }
      // Finalmente concatena el resultado en resultDecode
      resultDecode += character;
    }
    // El método decode retorna resultDecode luego de toda la iteración y concatenación lista.
    return resultDecode;
  },

  createCipherWithOffset : (offset) => {
    return{
      encode: (string) => {
        return cipher.encode(string, offset)
      },
      decode: (string) => {
        return cipher.decode(string, offset)
      }
    }
  }
};
