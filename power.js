function power(base, exponent) {
    // Base case: exponent is 0, result is 1
    if (exponent === 0) {
        return 1;
    }
    // Base case: exponent is 1, result is the base itself
    else if (exponent === 1) {
        return base;
    }
    // For negative exponents, calculate reciprocal of the result
    else if (exponent < 0) {
        return 1 / power(base, -exponent);
    }
    // For positive exponents, recursively calculate power
    else {
        return base * power(base, exponent - 1);
    }
}

// Example usage:
const base = 3
const exponent = 4;
console.log(base + " raised to the power of " + exponent + " is:", power(base, exponent));
