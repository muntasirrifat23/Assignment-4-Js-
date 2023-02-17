// Problem 1
function mindGame(num) {
    let result = ((num * 3 + 10) / 2 - 5);
    if(typeof num != 'number'){
        return 'Input a valid number';
    }
    else{
    return result;
    }   
}
const ans= mindGame(5);
//console.log(ans);
/* mindGame is function for saying game to the user. This function will take a user number as an input and will return a result number by user given number. */


// Problem 2
function evenOdd(name) {
    if(typeof name!= 'string')
    {
        return 'String';
    }
    else{
      if (name.length % 2 == 0) {
      return 'Even';
      }
      else{
        return 'Odd';
      }
    }
  }
  const result= evenOdd('chatgpt');
 // console.log(result);  
/* evenOdd is function for saying Even or Odd to the user. This function will take a user string as an input and will return a result Even or Odd from applying condition by user given string. */


// Problem 3
function isLGSeven(num)
{
    const result= (num-7);
    if(typeof num!= 'number')
    {
        return 'Enter a valid number' ;
    }
    else{
        if(result < 7){
            return result;
        }
        else{
            return num*2;
        }
    }
}
const num= -15;
//console.log(isLGSeven(num));
/* isLGSeven is function for saying is large then seven to the user. This function will take a user number as an input and will return a result number by user given number. */


// Problem 4
function findingBadData(arr)
{
    if(Array.isArray (arr) == false){
        return 'Enter an array';
    }
    else{
        let result=0;
        for(let i=0; i<arr.length; i++){
            if(arr[i]<0)
            {
                result++;
            }
        }
        return result;
    }
}
const arr= [-4, -9, 5, 33, -55];
//console.log(findingBadData(arr));
/* findingBadData is function for saying is array negative values are bad data to the user. This function will take a user array as an input and will return a result counting bad data number by user given array. */


// Problem 5
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
       return 'Enter valid number';
    }
    else
    {
        if (totalGems >1000*2){
            totalGems -= 2000;
            return totalGems;
        }
        else{
            return totalGems;
        }
    }
}
const total= gemsToDiamond(20,200,50);
//console.log(total);
/* gemsToDiamond is function for saying is convert games to diamond bt the users. This function will take users games as an input and will return diamond by user given total games. */
