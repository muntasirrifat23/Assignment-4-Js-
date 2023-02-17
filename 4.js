function findingBadData(arr)
{
    if(Array.isArray (arr) == false)
    {
        console.log('Enter an array');
    }
    else{
        let result=0;
        for(let i=0; i<arr.length; i++)
        {
            if(arr[i]<0)
            {
                result++;
            }
        }
        return result;
    }
}
const arr= [-4, -9, -5, 33, -55];
console.log(findingBadData(arr));