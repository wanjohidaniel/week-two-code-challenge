caseChanger.js 
Define your string. 
The string is then subjected to a JavaScript function called swapCase that takes an inputString parameter. This function is intended to toggle the case of each character in the input string. 
Each letter of the input string is then split and returned as an array of characters with are then mapped over individually. 
The individual characters are then subjected to an if function where: If characters are in uppercase , they are returned in lowercase.Otherwise, they are returned in uppercase.
The characters are then re-joined to form the new string.

numbergenerator.js
The string in question is subjected to a JavaScript function called displayRange that takes an num1 and num2 parameter.
The numbers are then subjected to a functions :Math.min which finds the minimum value between num1 and num2 and assigns it to the variable start and Math.max which finds the maximum value between num1 and num2 and assigns it to the variable end.
An array is then initialized to store the range of numbers.
The start and end numbers are then subjected to afor loop that iterates over a range of numbers from start to end, inclusive, and pushes each number into the rangeOfNumbers array.This loop ensures that all numbers from start to end, inclusive, are added to the rangeOfNumbers array.
 The range of numbers are then displayed and seperated from each other by a comma.

 primeNumbersGenerator.js
 The string in question is subjected to a JavaScript function called isPrime that takes an num parameter.
 The function has an if function which checks if the number is less than or equal to 1.Numbers less than or equal to 1 are not prime.Otherwise, the number passes to the next set of function.
 The first function is a for function that is implementing a prime number check within the isPrime function.
 The last function is a filterPrimes which uses the filter method to create a new array containing only the prime numbers.