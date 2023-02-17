function evenOdd(name) {
  if(typeof name!= 'string')
  {
    console.log('Enter string');
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
console.log(result);  
