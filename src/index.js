// Guardo en variables todos los nodos de mi documento que necesito para hacer manipulación del DOM
const btnEncode = document.getElementById('btn-encode');
const btnDecode = document.getElementById('btn-decode');
const inputMessage = document.getElementById('message');
const inputNumber = document.getElementById('number');
const result = document.getElementById('result-paragraph');

// Evento click para el botón Encode
btnEncode.addEventListener('click', (event) => {
  // preventDefault() para detener una acción por defecto, en este caso la del botón dentro de un form
  event.preventDefault();
  /* 
  Se pasa por parámetro el string y offset que el usuario ingresó, además escribe el resultado del método encode en el nodo html indicado
  */
  result.innerHTML = cipher.encode(inputMessage.value, inputNumber.value);
});

// Evento click para el botón Decode
btnDecode.addEventListener('click', (event) => {
  // preventDefault() para detener una acción por defecto, en este caso la del botón dentro de un form
  event.preventDefault();
  /* 
  Se pasa por parámetro el string y offset que el usuario ingresó, además escribe el resultado del método decode en el nodo html indicado
  */
  result.innerHTML = cipher.decode(inputMessage.value, inputNumber.value);
});
