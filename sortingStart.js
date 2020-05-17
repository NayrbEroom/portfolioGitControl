bubbleSort = (inputArr) => {
  
  //set initial length of array passed into function
  var len = inputArr.length;



  //for loop that goes through the input array
  //while i is less than length go through add one to i each time
  for (let i = 0; i < len; i++) {
    //then we set a second array to do the same thing as above loop through the entire inputArr
    //but as we go through we will take the number that is at i and the one that is at j (j will be +1 to i) and compare them
    for (let j = i + 1; j < len; j++) {
      //if first number is greater than the second number swap'em, else do nothing
      if (inputArr[i] > inputArr[j]) {
        //save the second number if above is true so when we swap we dont forget about it
        let temp = inputArr[j];
        //swap the two numbers
        inputArr[j] = inputArr[i];
        //put back in the saved unforgotten number
        inputArr[i] = temp;
      }
    }
  }




  return inputArr
}

//console.log(bubbleSort([124,82,101,-26,6,12342]));
