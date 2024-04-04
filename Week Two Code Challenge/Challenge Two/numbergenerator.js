function displayRange(num1, num2){
    //Evaluate the starting and ending numbers
    const start = Math.min(num1, num2);
    const end = Math.max(num1, num2);

    //Initaialize an array to store the range of numbers
    const rangeOfNumbers = [];

    // Loop through the numbers and add them to the array
    for (let i = start; i <= end; i++) {
        rangeOfNumbers.push(i);
    }

    // Display the range of numbers that are seperated from each other by a comma.
    console.log(rangeOfNumbers.join(', '));
}
