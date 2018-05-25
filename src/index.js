function encode() {
    let decoded = document.querySelector('#decoded').value.toLocaleUpperCase() || "Hola";
    let encoded= document.querySelector('#encoded');
    let offset = document.querySelector('#offset');
    let cipherArray = new Array();
    [...decoded].forEach(char => {
        //console.log(char.charCodeAt())
        if (char.charCodeAt() === 32) {
            cipherArray.push(32);
        } else {
            charNumber = char.charCodeAt() - 65;
            //console.log(charNumber)
            cipherChar = (charNumber + parseInt(key.value)) % 26;
            //console.log(cipherChar)
            cipherArray.push(cipherChar + 65);
        }
    })
    document.getElementById("chains").value = String.fromCharCode(...cipherArray);
    //console.log(String.fromCharCode(...cipherArray))
}
function decode() {
    let decoded = document.querySelector('#decode');
    let encoded = document.querySelector('#encode').value.toLocaleUpperCase();
    let offset = document.querySelector('#offset');
    let cipherArray = new Array();
    [...encoded].forEach(char => {
        //console.log(char.charCodeAt())
        if (char.charCodeAt() === 32) {
            cipherArray.push(32);
        } else {
            charNumber = char.charCodeAt() - 65;
            //console.log(charNumber)
            cipherChar = (charNumber - parseInt(key.value));
            //console.log(cipherChar)
            if (cipherChar > 25 || cipherChar < 0) cipherChar = cipherChar + 26
            cipherChar = cipherChar % 26
            cipherArray.push(cipherChar + 65);
        }
    })
    document.getElementById("chains").value = String.fromCharCode(...cipherArray);
    //console.log(String.fromCharCode(...cipherArray))
}