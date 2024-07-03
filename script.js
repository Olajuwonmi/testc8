function fizzBuzz(n) {
    // Loop from 1 to the limit n
    for (let num = 1; num <= n; num++) {
        // Check if the number is a multiple of both 3 and 5
        if (num % 3 === 0 && num % 5 === 0) {
            console.log("FizzBuzz");
        }
        // Check if the number is a multiple of 3
        else if (num % 3 === 0) {
            console.log("Fizz");
        }
        // Check if the number is a multiple of 5
        else if (num % 5 === 0) {
            console.log("Buzz");
        }
        // If the number is not a multiple of 3 or 5, print the number itself
        else {
            console.log(num);
        }
    }
}