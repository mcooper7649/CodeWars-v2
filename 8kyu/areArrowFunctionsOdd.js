// Time to test your basic knowledge in functions! Return the odds from a list:

// odds([1,2,3,4,5]) #=> [1,3,5]


function odds(values){
    // arrow it
    return values.filter( number => number % 2 == 1 );   // Hardest part for this challenge was remember filter arrow function es2015
  }

// https://www.codewars.com/kata/559f80b87fa8512e3e0000f5/train/javascript