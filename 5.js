function gemsToDiamond(firstFreind, secondFreind, thirdFreind){
    firstFreindGems = 21;
    secondFreindGems = 32;
    thirdFreindGems = 43;
    firstTotalFreindGems = (firstFreind * firstFreindGems);
    secondTotalFreindGems = (secondFreind * secondFreindGems);
    thirdTotalFreindGems = (thirdFreind * thirdFreindGems);
    totalGems = (firstTotalFreindGems + secondTotalFreindGems + thirdTotalFreindGems);
    if(typeof firstFreind!= 'number' ||typeof secondFreind!= 'number' ||typeof thirdFreind!= 'number')
    {
        console.log('Enter valid number');
    }
    else
    {
        if (totalGems >1000*2){
            totalGems -= 1000*2;
            return totalGems;
        }
        else{
            return totalGems;
        }
    }
}
const total= gemsToDiamond(20,200,50);
console.log(total);