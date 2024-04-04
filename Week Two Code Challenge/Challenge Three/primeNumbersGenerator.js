function isPrime(num) {
    if (num <= 1) {
        // // Numbers less than or equal to 1 are not prime
        return false;
    }
    //This is implementing a prime number check within the isPrime function
    for (let i = 2; i <= Math.sqrt(num); i++) {
        //This is a condition within a loop that checks if the given number num is divisible by the current loop counter i with no remainder.
        if (num % i === 0) {b
            // If num is divisible by i with no remainder, it's not prime
            return false;
        }
    }
     // If no divisor is found, num is prime
    return true;
}

//This function is using the filter method to create a new array containing only the prime numbers.
function filterPrimes(numbers) {
    return numbers.filter(num => isPrime(num));
}
