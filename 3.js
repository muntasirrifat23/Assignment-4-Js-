function isLGSeven(num)
{
    const result= (num-7);
    if(typeof num!= 'number')
    {
        console.log('Enter a valid number');
    }
    else{
        if(result < 7)
        {
            return result;
        }
        else
        {
            return num*2;
        }
    }
}
const num= -15;
console.log(isLGSeven(num));