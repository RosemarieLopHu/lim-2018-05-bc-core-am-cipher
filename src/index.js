function clearBoxes() {
    document.querySelector('#decrypted').value = "";
    document.querySelector('#encrypted').value = "";
    document.getElementById("chains").value = "";
    document.getElementById("offset").value = 0;
function encrypt() {
    let decrypted = document.querySelector('#decrypted').value.toLocaleUpperCase() || "";
    let encrypted = document.querySelector('#encrypted');
    let offset = document.querySelector('#offset');
    let cipherArray = new Array();

    [...decrypt].forEach(char => {
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
