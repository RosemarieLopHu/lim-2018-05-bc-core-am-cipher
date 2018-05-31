let string1 = document.getElementById("textToCipherAndDecipher");
let offsetNumber = document.getElementById("number");
  //first obtener el input text y  button a través de dos variables diferentes

let button1 = document.getElementById("cipherButton");
let button2 = document.getElementById("decipherButton");

//Now obtener el id para la answer del mensaje cifrado y descifrado

let result1 = document.getElementById("cipherResult");
button1.addEventListener("click", cipher.encode); 
let result2 = document.getElementById("decipherResult")
button2.addEventListener("click", cipher.decode); 
