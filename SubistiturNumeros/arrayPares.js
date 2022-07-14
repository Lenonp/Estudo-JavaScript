function subistiturPares(arr) {
    if(!arr) return -1;
    if(!arr.length) return -1;

    for(let i = 0; i < arr.length; i++){
        if(arr[i] === 0){
            console.log("Você ja é Zero!! ")
        }
        else if(arr[i] % 2 === 0) {
            console.log(`Subistituindo ${arr[i]} por 0...`);
            arr[i] = 0;
        }
    }
    return arr;
}

let array = [1, 3, 4, 6, 80, 33, 23, 90];
console.log(subistiturPares([array]));