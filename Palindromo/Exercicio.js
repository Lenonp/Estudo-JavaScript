// *** Palindromo Solução 01 ***

/* function verificaPalindromo(string) {
    if(!string) return; "String Inexistente"

    return string.split("").reverse().join("") === string;
}

console.log(verificaPalindromo("gato")) */

// *** Palindromo Solução 02 ***
//Como esta ocorrendo duas checagem ao mesmo tempo, podemos divir o loop por 2

function verificaPalindromo(string) {
    if(!string) return; "String Inexistente"

    for(let i = 0; i < string.length / 2; i++) {

        if(string[i] !== string[string.length - 1 - i]) {
            return false;
        }
    }

    return true;
}
console.log(verificaPalindromo("AbbA"))