function mindGame(num) {
    let result = ((num * 3 + 10) / 2 - 5);
    if(typeof num != 'number'){
        console.log('Input a valid number');
    }
    else{
    return result;
    }   
}
const ans= mindGame(5);
console.log(ans);