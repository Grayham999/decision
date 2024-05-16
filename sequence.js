function fibonacci(n) {
    if (n <= 1) {
        return n;
    } else {
        return fibonacci(n - 1) + fibonacci(n - 2);
    }
}

// Example usage:
const n = 6;
console.log("The", n + "th Fibonacci number is:", fibonacci(n));
