function countNumberOfNinesInNumber(number) {
  let count = 0;
  let text = number.toString();

  for (let i = 0; i < text.length; i++) {
    const digit = text[i];
    if ("9" === digit) {
      count++;
    }
  }

  return count;
}

//We realised it works if the argument
// is a string, but not if it is a number
//We want it to accept a number
// We need to convert the input to a 
//string for our loop to work


//LOG
//1. We added in parseInt(number[i]) 
// and this meant that the function 
// no longer accepted a string, or a number
// 2. Turn the input into a string

